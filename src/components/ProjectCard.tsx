import Image from "next/image";
import Link from "next/link";

type ProjectCardProps = {
  id: string;
  title: string;
  description: string;
  image: string;
  tags: string[];
};

export default function ProjectCard({ id, title, description, image, tags }: ProjectCardProps) {
  return (
    <div id={id} className="card overflow-hidden">
      <div className="aspect-video relative bg-gray-800">
        {image ? (
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover"
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center text-gray-500">
            <span>Project Image</span>
          </div>
        )}
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold mb-3">{title}</h3>
        <div className="flex flex-wrap gap-2 mb-4">
          {tags.map((tag) => (
            <span 
              key={tag} 
              className="px-2 py-1 text-xs font-medium bg-blue-900/30 text-blue-300 rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>
        <p className="text-gray-300 mb-4">{description}</p>
        <button className="text-blue-400 hover:text-blue-300 font-medium">
          View Case Study →
        </button>
      </div>
    </div>
  );
}