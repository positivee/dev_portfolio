import React from "react";

function Footer() {
  return (
    <div className="container m-auto flex justify-between py-20 flex-col text-center md:flex-row">
      <div className="font-semibold text-black/80 mb-2">Created by me</div>
      <div className="">
        <a
          href="mailto:biero.kamil@gmail.com"
          target="_blank"
          className="text-blue-500 mr-5 font-semibold tracking-widest uppercase hover:text-black"
        >
          Email
        </a>
        <a
          href="https://github.com/positivee"
          target="_blank"
          className="text-blue-500 mr-5 font-semibold tracking-widest uppercase hover:text-black"
        >
          Github
        </a>

        <a
          href="#"
          target="_blank"
          className="text-blue-500 mr-5 font-semibold tracking-widest uppercase hover:text-black"
        >
          Linkedin
        </a>
      </div>
    </div>
  );
}

export default Footer;
