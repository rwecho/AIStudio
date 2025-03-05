import Image from "next/image";

const SiteCard = (props: {
  cover: string;
  title: string;
  description: string;
  tags: string[];
  label?: string;
}) => {
  return (
    <div className="bg-[#1e293b] rounded-2xl overflow-hidden transition-transform hover:-translate-y-2 hover:shadow-2xl relative">
      {props.label && (
        <div className="absolute top-4 right-4 bg-gradient-to-r from-[#7c3aed] to-[#ec4899] text-white text-xs font-semibold py-1 px-3 rounded z-10">
          {props.label}
        </div>
      )}

      <div className="h-64 relative overflow-hidden">
        <Image
          src={props.cover}
          alt={props.title}
          layout="fill"
          objectFit="cover"
          className="transition-transform hover:scale-105"
        />
      </div>
      <div className="p-6">
        <div className="flex items-center gap-3 mb-3">
          <div className="w-8 h-8 flex items-center justify-center bg-gradient-to-r from-[#7c3aed] to-[#ec4899] rounded-lg text-white font-bold">
            {props.title[0].toLocaleUpperCase()}
          </div>
          <div className="text-xl font-semibold">{props.title}</div>
        </div>
        <p className="text-[#94a3b8] mb-5">{props.description}</p>
        <div className="flex flex-wrap gap-2">
          {props.tags.map((tag) => (
            <span
              key={tag}
              className="bg-white/5 text-xs px-3 py-1 rounded text-[#94a3b8]"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export const SiteCardSkeleton = () => {
  return (
    <div className="bg-[#1e293b] rounded-2xl overflow-hidden transition-transform hover:-translate-y-2 hover:shadow-2xl relative animate-pulse">
      <div className="h-64 bg-[#2d3a4b]"></div>
      <div className="p-6">
        <div className="flex items-center gap-3 mb-3">
          <div className="w-8 h-8 flex items-center justify-center bg-[#2d3a4b] rounded-lg text-white font-bold"></div>
          <div className="text-xl font-semibold w-72 bg-[#2d3a4b] h-6"></div>
        </div>
        <div className="w-3/4 bg-[#2d3a4b] h-4 mb-5"></div>
        <div className="flex flex-wrap gap-2">
          <span className="bg-[#2d3a4b] text-xs px-3 py-1 rounded text-[#2d3a4b]"></span>
        </div>
      </div>
    </div>
  );
};

export default SiteCard;
