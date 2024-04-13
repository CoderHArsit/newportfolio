"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";
import Link from "next/link";

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
        <li>St.Xavier's College</li>
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

const Experience = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section  className="text-white my-24" id="experience">
      <div className=" gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16 text-center    ">
        
        <div className="mt-4 md:mt-0 text-cente flex flex-col h-full mx-9
        ">
          <h2 className="text-4xl font-extrabold text-white mb-4">Experience</h2>
          <div className="text-left bg-black border-2 border-purple-400 rounded-3xl p-5">
            <h1 className="text-xl font-serif font-extrabold">Reactjs Intern</h1>
            <h4 className="text-sm font-extralight">Sarvmatre International Private Ltd.(Jan-Mar 2023)</h4>
            <p className="text-sm font-bold">Worked as an reactjs intern and lead a team to develop a ecomm website from scratch.</p>
            <Link className="text-sm font-extrabold p-1 bg-purple-400 rounded-full text-black mt-10" href="https://www.linkedin.com/in/harshit-saxena-35b70b211/details/experience/1635521936160/single-media-viewer/?profileId=ACoAADWtMDcBErsQTBghuSuDm_et5SzIgvRrAOk">Certificate</Link>
          </div>
       
        </div>
      </div>
    </section>
  );
};

export default Experience;