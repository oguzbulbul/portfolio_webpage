import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { LuGraduationCap } from "react-icons/lu";

import projectname1 from "@/public/projectname1.png";
import projectname2 from "@/public/projectname2.png";
import projectname3 from "@/public/projectname3.png";
import projectname4 from "@/public/projectname4.png";


export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Student Researcher Assistant",
    location: "Kocaeli University Image Processing and AI Lab",
    description:
      "I worked as a student researcher assistant for 2 years. I worked on image processing and AI projects. I also worked on a project that was funded by TUBITAK and TeknoFest.",
    icon: React.createElement(LuGraduationCap),
    date: "2022-Present",
  },
  {
    title: "Intern",
    location: "RDC Partner Information Consultancy and Technology Services",
    description:
      "I worked as an intern for 2 months. I worked on a project that was developed with React and TypeScript. I also worked on a project that was developed with React Native and TypeScript.",
    icon: React.createElement(CgWorkAlt),
    date: "July 2023 - September 2023",
  },
] as const;

export const projectsData = [
  {
    title: "Maze Game",
    description:"I developed a Maze Game to improve my data structures and algorithm skills. Using the A* algorithm, I processed input data, mapped it, and calculated the shortest distance between two points.",
    tags: ["python", "pygame", "A*", "data stuctures", "UI"],
    imageUrl: projectname1,
  },
  {
    title: "RPG RPS Game",
    description:"I concentrated on object-oriented programming and C# form application development for an RPG Rock, Paper, Scissors game. I prioritized logging steps, associating objects, and manipulating them based on actions.",
    tags: ["C#", "Forms", "OOP","Game"],
    imageUrl: projectname2,
  },
  {
    title: "Space Runner Game",
    description:
      "The aim of this project is to develop a microcontroller-based gaming machine using various sensors.",
    tags: ["Ardunio", "C++", "sensors", "microcontroller"],
    imageUrl: projectname3,
  },
  {
    title: "Fitlife Online Fitness",
    description:
      "In this project, my goal was to create a website offering online fitness services by focusing on web programming, database management, and API development.",
    tags: ["Next.js", "React", "TypeScript", "Node.js", "PostgreSQL", "AWS"],
    imageUrl: projectname4,
  }

] as const;

export const skillsData = [
  "Python",
  "Machine Learning",
  "GANs",
  "Keras",
  "TensorFlow",
  "OpenCV",
  "C#",
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "Prisma",
  "Express",
  "PostgreSQL",
  "Postman",
  "AWS",

] as const;
