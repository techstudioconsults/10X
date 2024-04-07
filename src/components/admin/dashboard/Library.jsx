import React from "react";
import lib1 from "../../../assets/libimg.png";
import { Link } from "react-router-dom";

const lib = [
  { id: crypto.randomUUID(), title: "Digital Marketing", module: 6, img: lib1 },
  { id: crypto.randomUUID(), title: "Zero Sales Call", module: 9, img: lib1 },
  { id: crypto.randomUUID(), title: "SEO Optimization", module: 12, img: lib1 },
];

const Library = () => {
  return (
    <main>
      <div>
        <h1>Library</h1>
        <Link>See All</Link>
      </div>

      <section className=" space-y-3">
        {lib.map((l) => (
          <div
            key={l.id}
            className="flex items-center gap-5 text-sm text-darkBlue"
          >
            <img src={l.img} alt="" className="w-10 h-10 rounded-md"/>
            <div className=" flex-1">
              <h3 className=" underline">{l.title}</h3>
              <p className=" text-xs">{l.module} Modules</p>
            </div>
            
            <Link className="">View More</Link>
          </div>
        ))}
      </section>
    </main>
  );
};

export default Library;
