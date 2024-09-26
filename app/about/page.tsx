/* eslint-disable react/no-unescaped-entities */
"use client";

import React from "react";
import { Separator } from "@/components/ui/separator";
import { motion } from "framer-motion";

type Props = {};

const page = (props: Props) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="py-6 about-us lg:py-16"
    >
      <div className="px-[3em] lg:px-[5em] flex flex-col">
        <h2 className="mb-8 text-3xl font-extrabold text-teal-400 font-monsterr lg:text-4xl">
          About Us
        </h2>
        <p className="mb-8 text-base leading-6 text-justify text-slate-300 font-rubik lg:text-lg">
          At XYZ, we are passionate about revolutionizing community engagement
          through cutting-edge technology. Founded in [year], our team of
          dedicated experts combines years of experience in software
          development, community management, and user experience design to
          create powerful tools that transform how communities interact and
          grow.
        </p>
        <p className="mb-8 text-base leading-6 text-justify text-slate-300 font-rubik lg:text-lg">
          Our mission is to empower communities by providing innovative
          solutions that foster meaningful connections, drive engagement, and
          reward participation. We believe that strong, active communities are
          the backbone of successful organizations, brands, and movements in
          today's digital world.
        </p>
        <p className="mb-8 text-base leading-6 text-justify text-slate-300 font-Rubik lg:text-lg">
          Our flagship product, [Product Name], is a comprehensive platform
          designed to address the unique challenges faced by community managers
          and members alike. It offers a suite of features including:
        </p>
        <ul className="mb-8 text-base leading-6 list-disc list-inside text-slate-300 font-Rubik lg:text-lg">
          <li>Customizable reward systems to incentivize participation</li>
          <li>Advanced analytics to track community health and growth</li>
          <li>Intuitive content management tools for seamless communication</li>
          <li>Gamification elements to boost engagement and retention</li>
          <li>Integration capabilities with popular platforms and services</li>
        </ul>
        <p className="mb-8 text-base leading-6 text-justify text-slate-300 font-Rubik lg:text-lg">
          What sets us apart is our commitment to tailoring our solutions to
          each community's unique needs. We work closely with our clients to
          understand their goals, challenges, and vision, ensuring that our
          tools align perfectly with their community strategy.
        </p>
        <p className="text-base leading-6 text-justify text-slate-300 font-Rubik lg:text-lg">
          As we continue to grow and evolve, our focus remains on innovation,
          user experience, and delivering measurable results for our clients.
          Join us in our mission to create thriving, engaged communities that
          drive success and make a lasting impact.
        </p>
        <Separator className="mt-8" />
      </div>
    </motion.div>
  );
};

export default page;
