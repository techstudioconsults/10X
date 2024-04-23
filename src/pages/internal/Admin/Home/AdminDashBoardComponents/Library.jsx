import React from "react";
import lib1 from "../../../../../assets/libimg.png";
import { Link } from "react-router-dom";

const lib = [
  { id: crypto.randomUUID(), title: "Digital Marketing", module: 6, img: lib1 },
  { id: crypto.randomUUID(), title: "Zero Sales Call", module: 9, img: lib1 },
  { id: crypto.randomUUID(), title: "SEO Optimization", module: 12, img: lib1 },
];

const Library = () => {
  return (
    <main className=" shadow shadow-[#032BF2] p-3 rounded-md lg:h-[250px]">
      <div className="flex items-center justify-between">
        <h1>Library</h1>
        <Link className="text-xs text-[#3952AC]">See All</Link>
      </div>

      <section className=" space-y-6 mt-2">
        {lib.map((l) => (
          <div
            key={l.id}
            className="flex items-center gap-5 text-sm text-darkBlue shadow p-1 rounded"
          >
            <img src={l.img} alt="" className="w-10 h-10 rounded-md" />
            <div className=" flex-1">
              <h3 className=" underline font-[650]">{l.title}</h3>
              <p className=" text-xs">{l.module} Modules</p>
            </div>

            <Link className="text-xs">View More</Link>
          </div>
        ))}
      </section>
    </main>
  );
};

export default Library;
