"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "Next Portfolio Website",
    description: "Portfolio Website",
    image: "/images/mee.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 2,
    title: "Implemented Ideas",
    description: "A platform to showcase your unique Implemented Ideas",
    image: "/images/newlogo.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/CoderHArsit/yourthoghts",
    previewUrl: "https://yourthoghts.vercel.app/",
  },
  {
    id: 3,
    title: "E-commerce Application",
    description: "A simple Ecommerce platform for clothes and accessories",
    image: "/images/projects/3.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/CoderHArsit/e-comm",
    previewUrl: "https://e-comm-steel-seven.vercel.app/",
  },
  {
    id: 4,
    title: "3-d model customizer",
    description: "A platform where you can customize a three d model and order it.",
    image: "/images/about-image.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/CoderHArsit/threejs",
    previewUrl: "https://threejs-sepia.vercel.app/",
  },
  {
    id: 5,
    title: "NotesApp",
    description: "A Note keeping app made with help of firebase",
    image: "/images/2.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/CoderHArsit/NotesApp",
    previewUrl: "https://notes-app-ruddy-six.vercel.app/",
  },
  {
    id: 6,
    title: "News Dungeon",
    description: "A news platform made with the help of NewsAPI",
    image: "/images/1.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/CoderHArsit/NewsDungeon",
    previewUrl: "https://github.com/CoderHArsit/NewsDungeon",
  },
  {
    id: 7,
    title: "Saas Project",
    description: "A nextjs full stack project coming soon",
    image: "/images/projects/6.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/CoderHArsit/SaasProject",
    previewUrl: "",
  },{
  id: 8,
  title: "Aura (coming soon)",
  description: "A image building mobile application",
  image: "/images/projects/5.png",
  tag: ["All", "Mobile"],
  gitUrl: "",
  previewUrl: "",
}
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Projects
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Web"
          isSelected={tag === "Web"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Mobile"
          isSelected={tag === "Mobile"}
        />
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;