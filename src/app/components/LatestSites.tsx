"use client";
import { useEffect, useState } from "react";
import SiteCard, { SiteCardSkeleton } from "./SiteCard";
import { delay } from "@/utils/Promise";
import { getLatestSites } from "@/services/sites";

const LatestSites = () => {
  const [sites, setSites] = useState<Site[]>([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const load = async () => {
      try {
        setLoading(true);
        await delay(3000);
        const sites = await getLatestSites();
        setSites(sites);
      } catch (e) {
        console.error(e);
      } finally {
        setLoading(false);
      }
    };
    load();
  }, []);

  return (
    <section className="py-16">
      <h2 className="text-3xl font-bold mb-8 inline-block relative z-10 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-[60%] after:h-1 after:bg-gradient-to-r after:from-[#7c3aed] after:to-[#ec4899] after:rounded">
        最新上线
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {loading &&
          Array.from({ length: 6 }).map((_, index) => (
            <SiteCardSkeleton key={index}></SiteCardSkeleton>
          ))}

        {!loading &&
          sites.map((site) => (
            <SiteCard
              key={site.id}
              cover={site.cover}
              title={site.title}
              description={site.description}
              tags={site.tags}
              label={site.label}
            ></SiteCard>
          ))}
      </div>
    </section>
  );
};

export default LatestSites;
