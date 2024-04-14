"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-2">
        <li>Nextjs</li>
      
        <li>TypeScript</li>
        <li>Tailwind</li>
        <li>JavaScript</li>
        <li>React</li>
       <li>Git</li>
       <li>Nodejs</li>
       <li>MongoDB</li> 
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li>Galgotias College Of Engineering and technology.</li>
        <li>St.Xavier&apos;s College</li>
      </ul>
    ),
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <ul className="list-disc pl-2">
        <li>Udemy React</li>
        <li>SWOC</li>
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white" id="about">
      <div className=" gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16 text-center    ">
        
        <div className="mt-4 md:mt-0 text-cente flex flex-col h-full mx-9
        ">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base lg:text-lg">
            I am a full stack web developer with a passion for creating
            interactive and responsive web applications. I have experience
            working with JavaScript, React, Next, Threejs, Redux, Node.js, Express, MongoDB, HTML, CSS, and Git. I am a quick learner and I am always
            looking to expand my knowledge and skill set. I am a team player and
            I am excited to work with others to create amazing applications.
          </p>
       
        </div>
      </div>
    </section>
  );
};

export default AboutSection;