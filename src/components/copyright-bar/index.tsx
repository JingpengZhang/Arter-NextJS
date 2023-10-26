import React from "react";

const CopyrightBar: React.FC = () => {
  return (
    <section className="mt-10 lg:mx-6 flex-shrink-0 bg-white h-8 text-xs shadow-lg text-[#5c5c6f] px-3 flex items-center justify-center">
      <span>
        © 2023 - {new Date().getFullYear()} Develop By JP Zhang, Design By
        Bslthemes.
      </span>
    </section>
  );
};

export default CopyrightBar;
