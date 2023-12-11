"use client";

import React, { useEffect } from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");
  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
      I am Oğuzhan Bülbül, a 3rd-year Computer Engineering student at Kocaeli
      University. Throughout my university journey, I have been involved in
      various projects in the fields of artificial intelligence, machine learning, data
      processing, and web technologies. I continue to enhance my teamwork and
      collaboration skills by working in the software development team at
      TeknoFest. I place great importance on learning and self-improvement. This
      passion has become a constant routine in both my professional and social
      life.
        </p>
        <p className="mb-3">
        bla bla metin yazılacak
        </p>
    </motion.section>
  );
}

