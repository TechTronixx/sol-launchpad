import React from "react";
import { Separator } from "@/components/ui/separator";

type Props = {};

const page = (props: Props) => {
  return (
    <div className="py-6 about-us lg:py-16">
      <div className="px-[3em] lg:px-[5em] flex flex-col">
        <h2 className="mb-8 text-3xl font-extrabold text-teal-400 font-monsterr lg:text-4xl">
          About Us
        </h2>
        <p className="mb-8 text-base leading-6 text-justify text-slate-300 font-rubik lg:text-lg">
          At XYZ we are dedicated to building innovative tools that empower
          communities and enhance their engagement and retention. Our mission is
          to create bespoke solutions that foster strong connections between
          community members, rewarding their loyalty and participation through
          various activities and rewards.
        </p>
        <p className="text-base leading-6 text-justify text-slate-300 font-Rubik lg:text-lg">
          We understand that community engagement is a cornerstone of success in
          todays digital landscape. Thats why we are committed to providing
          cutting-edge technology that enables communities to thrive. Through
          our carefully crafted tools, we enable organizations to establish
          meaningful interactions, fun experiences, and drive member
          participation in ways that are meaningful and impactful.
        </p>
        <Separator className="mt-2 " />
      </div>
    </div>
  );
};

export default page;
