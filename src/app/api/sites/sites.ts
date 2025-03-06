import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const awesomeAIApi = {
  getSites: async () => {
    const awesomeAIJson = await import("@/data/awesome-ai.json");
    debugger;
    console.log(11111111111, awesomeAIJson);
    return awesomeAIJson;
  },
};

const sitesDbApi = {
  getSites: async () => {
    return await prisma.sites.findMany();
  },
  addSite: async (site: Site) => {
    return await prisma.sites.create({
      data: {
        url: site.url,
        title: site.title ?? "",
        description: site.description ?? "",
        tags: site.tags,
        cover: site.cover ?? "",
        createdAt: new Date(),
      },
    });
  },
  updateSite: async (site: Site) => {
    return await prisma.sites.update({
      where: { id: site.id },
      data: {
        url: site.url,
        title: site.title ?? "",
        description: site.description ?? "",
        tags: site.tags,
        cover: site.cover ?? "",
      },
    });
  },
};

const getSites = async (catalog?: string | null, filter?: string | null) => {
  const sites = await sitesDbApi.getSites();
  const awesomeApi = await awesomeAIApi.getSites();

  let allSites = [...sites, ...awesomeApi];

  if (catalog) {
    allSites = allSites.filter((site) => site.label === catalog);
  }

  if (filter) {
    allSites = allSites.filter(
      (site) => site.title.includes(filter) || site.description.includes(filter)
    );
  }

  return allSites;
};

const addSite = async (site: Site) => {
  return await sitesDbApi.addSite(site);
};

export { getSites, addSite };
