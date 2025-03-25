import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

type ProjectCardProps = {
  id: string;
  title: string;
  description: string;
  image: string;
  tags: string[];
};

export default function ProjectCard({ id, title, description, image, tags }: ProjectCardProps) {
  return (
    <motion.div 
      id={id} 
      className="card overflow-hidden"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5 }}
      whileHover={{ 
        y: -5, 
        boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" 
      }}
    >
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
    </motion.div>
  );
}