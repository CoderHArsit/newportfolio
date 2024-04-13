"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";
import Cardom from "./Cardom";

const TAB_DATA = [
    {
      title: "Skills",
      id: "skills",
      content: (
        <ul className=" pl-2 ">
          <button className="skil_btn">Nextjs</button>
        
          <button className="skil_btn">TypeScript</button>
          <button className="skil_btn">Tailwind</button>
          <button className="skil_btn">JavaScript</button>
          <button className="skil_btn">Reactjs</button>
          <button className="skil_btn">Threejs</button>
         <button 
         className="skil_btn">Git</button>
         <button className="skil_btn">Nodejs</button>
         <button className="skil_btn">MongoDB</button> 
         <button className="skil_btn">Firebase</button> 
         <button className="skil_btn">MaterialUI</button> 
         <button className="skil_btn">Shadcn</button> <button className="skil_btn">DSA</button> 
        </ul>
      ),
    },
    {
      title: "Education",
      id: "education",
      content: (
           <div className=" flex mx-auto justify-center">
            <div className=" bt3div text-left my-auto mx-4">
            <div className="justify-center ed_div bt3_div">
              {/* btech */}
              <h1 className="text-xl font-sans font-extrabold">Bachelor's of Technology</h1>
              <h5 className="text-sm font-extralight">Galgotias College of Engineering and Technology.(2021-2025)</h5>
              <ul className="text-sm font-extrabold ">
                <li>Pursuing B.tech in Computer science with specialization in data science.</li>
                <li>Aggregate-7.6</li>

              </ul>
            </div>
            </div>
            <div className="text-left  my-auto mx-4">
            <div className="  ed_div bt3div justify-center ">
              {/* btech */}
              <h1 className="text-xl font-sans font-extrabold">XIIth Board Examination</h1>
              <h5 className="text-sm font-extralight">St.Xavier's College(2020-2021)</h5>
              <ul className="text-sm font-extrabold ">
                <li>Passed 12th examination from ISC school with Science stream.</li>
                <li>Aggregate-89%</li>

              </ul>
            </div>
            <div className=" ed_div bt3div">
              {/* btech */}
              <h1 className="text-xl font-sans font-extrabold">Xth Board Examination</h1>
              <h5 className="text-sm font-extralight">St.Xavier's College(2018-2019)</h5>
              <ul className="text-sm font-extrabold ">
                <li>Passed 10th examination from ISCE school with Science stream.</li>
                <li>Aggregate-93%</li>

              </ul>
            </div>
            </div>


           </div>
      ),
    },
    {
      title: "Certifications",
      id: "certifications",
      content: (
        <ul className="flex">
          <li className=" mx-auto">
            <Cardom
            
            />
          </li>
          
        </ul>
      ),
    },
  ];
  
const Skills = () => {
    const [tab, setTab] = useState("skills");
    const [isPending, startTransition] = useTransition();
  
    const handleTabChange = (id) => {
      startTransition(() => {
        setTab(id);
      });
    };
  return (
    <section className="text-white  " id="About">
        <div className=" gap-3 sm:gap-8 items-center py-4  px-4 xl:gap-16 sm:py-3 xl:px-16 text-center" >
         <div className="flex flex-row justify-center mt-8">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              {" "}
              Skills{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              {" "}
              Education{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("certifications")}
              active={tab === "certifications"}
            >
              {" "}
              Certifications{" "}
            </TabButton>
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
          </div>
    </section>
  )
}

export default Skills
