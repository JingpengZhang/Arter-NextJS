import React from "react";
import BlogCard from "./components/BlogCard";

const Page: React.FC = () => {
  return (
    <section>
      <p className="text-lg font-bold text-center lg:text-left transition-all duration-700">
        Blog
      </p>

      <ul className=" grid grid-cols-1 md:grid-cols-2 gap-8 mt-6">
        <li>
          <BlogCard />
        </li>
        <li>
          <BlogCard />
        </li>
      </ul>
    </section>
  );
};

export default Page;
