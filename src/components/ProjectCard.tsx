import Image from "next/image";
import { motion } from "framer-motion";
import LiquidGlassCard from "./LiquidGlassCard";

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
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5 }}
    >
      <LiquidGlassCard className="overflow-hidden" padding="lg" glowIntensity="medium">
        <div className="aspect-video relative bg-gray-800/30 rounded-xl overflow-hidden mb-6">
          {image ? (
            <Image
              src={image}
              alt={title}
              fill
              className="object-cover"
            />
          ) : (
            <div className="absolute inset-0 flex items-center justify-center text-gray-400">
              <span>Project Image</span>
            </div>
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
        </div>
        <div>
          <h3 className="text-xl font-bold mb-3 text-white">{title}</h3>
          <div className="flex flex-wrap gap-2 mb-4">
            {tags.map((tag) => (
              <span 
                key={tag} 
                className="px-3 py-1 text-xs font-medium bg-white/20 text-white/90 rounded-full backdrop-blur-sm border border-white/20"
              >
                {tag}
              </span>
            ))}
          </div>
          <p className="text-white/80 mb-4 leading-relaxed">{description}</p>
          <button className="text-white/90 hover:text-white font-medium transition-colors duration-200 flex items-center gap-2">
            View Case Study
            <span className="transform transition-transform group-hover:translate-x-1">→</span>
          </button>
        </div>
      </LiquidGlassCard>
    </motion.div>
  );
}