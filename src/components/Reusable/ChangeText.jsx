import React from "react";
import { Link } from "react-router-dom";

export const ChangeText = ({ funnels, testing, scale, home, targeting }) => {
  return (
    <main>
      {funnels && (
        <section>
          <h1 className=" text-white text-2xl max-w-[300px] md:text-4xl md:max-w-md font-semibold">
            <span className="text-[#BABABA]">Building</span> Predictable
            Marketing Funnels
          </h1>

          <p className="text-[#AFAFAF] my-5 max-w-[300px] text-sm">
            We help coaches, experts, and digital course creators replace the
            unpredictability of static launches with evergreen assets that
            consistently convert cold prospects into premium clients and
            customers.
          </p>
          <Link className="text-blue bg-white py-3 px-5 rounded-xl font-semibold">
            Learn more
          </Link>
        </section>
      )}

      {testing && (
        <section>
          <h1 className=" text-white text-2xl max-w-[300px] md:text-4xl md:max-w-md font-semibold">
            <span className="text-[#BABABA]">Building</span> Predictable
            Marketing Testing
          </h1>

          <p className="text-[#AFAFAF] my-5 max-w-[300px] text-sm">
            We help coaches, experts, and digital course creators replace the
            unpredictability of static launches with evergreen assets that
            consistently convert cold prospects into premium clients and
            customers.
          </p>
          <Link className="text-blue bg-white py-3 px-5 rounded-xl font-semibold">
            Learn more
          </Link>
        </section>
      )}

      {scale && (
        <section>
          <h1 className=" text-white text-2xl max-w-[300px] md:text-4xl md:max-w-md font-semibold">
            <span className="text-[#BABABA]">Building</span> Predictable
            Marketing Scale
          </h1>

          <p className="text-[#AFAFAF] my-5 max-w-[300px] text-sm">
            We help coaches, experts, and digital course creators replace the
            unpredictability of static launches with evergreen assets that
            consistently convert cold prospects into premium clients and
            customers.
          </p>
          <Link className="text-blue bg-white py-3 px-5 rounded-xl font-semibold">
            Learn more
          </Link>
        </section>
      )}

      {home && (
        <section>
          <h1 className=" text-white text-2xl max-w-[300px] md:text-4xl md:max-w-md font-semibold">
            <span className="text-[#BABABA]">Building</span> Predictable
            Marketing Home
          </h1>

          <p className="text-[#AFAFAF] my-5 max-w-[300px] text-sm">
            We help coaches, experts, and digital course creators replace the
            unpredictability of static launches with evergreen assets that
            consistently convert cold prospects into premium clients and
            customers.
          </p>
          <Link className="text-blue bg-white py-3 px-5 rounded-xl font-semibold">
            Learn more
          </Link>
        </section>
      )}

      {targeting && (
        <section>
          <h1 className=" text-white text-2xl max-w-[300px] md:text-4xl md:max-w-md font-semibold">
            <span className="text-[#BABABA]">Building</span> Predictable
            Marketing Targeting
          </h1>

          <p className="text-[#AFAFAF] my-5 max-w-[300px] text-sm">
            We help coaches, experts, and digital course creators replace the
            unpredictability of static launches with evergreen assets that
            consistently convert cold prospects into premium clients and
            customers.
          </p>
          <Link className="text-blue bg-white py-3 px-5 rounded-xl font-semibold">
            Learn more
          </Link>
        </section>
      )}
    </main>
  );
};
