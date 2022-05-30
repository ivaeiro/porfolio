import React from "react";
import Link from "next/link"
import GitHubIcon from "../Icons/GithubIcon"
import InstagramIcon from "../InstagramIcon"
import TwitterIcon from "../Icons/TwitterIcon"
import FooterLink from "./FooterLink"

const navLinks = [{
  name: "Inicio",
  link: "/"
},
{
  name: "About",
  link: "/about"
}]
function footer() {
  return (
    <div>
      <footer className="relative bottom-0 w-full py-20 flex flex-col items-center bg-cyan-900 overflow-hidden md:py-40 ">
        <div className="relative z-[1] container m-auto px-6 md:px-12">
          <div className="m-auto md:w-10/12 lg:w-8/12 xl:w-6/12">
            <div className="flex flex-wrap items-center justify-between md:flex-nowrap">
              <div className="w-full space-x-12 flex justify-center text-gray-300 sm:w-7/12 md:justify-start">
                <ul className="list-disc list-inside space-y-8">
                  {navLinks.map((link, index) => (
                    <li key={index}>
                      <Link href={link.link} passHref>
                        <a className="hover:text-sky-400 transition">
                          {link.name}
                        </a>
                      </Link>
                    </li>
                  ))}
                </ul>

                <ul role="list" className="space-y-8">
                  <li>
                    <FooterLink href="https://github.com/ivaeiro/" icon={<GitHubIcon/>}>
                      Github
                    </FooterLink>
                  </li>
                  <li>
                    <FooterLink href="#" icon={<TwitterIcon/>}>Twitter</FooterLink>
                  </li>
                  <li>
                    <FooterLink href="https://www.instagram.com/ivanpeiro/" icon={<InstagramIcon/>}>
                      Instagram
                    </FooterLink>
                  </li>
                </ul>
              </div>
              <div className="w-10/12 m-auto  mt-16 space-y-6 text-center sm:text-left sm:w-5/12 sm:mt-auto">
                <span className="block text-gray-300">
                  We change the way UI components librairies are used
                </span>

                <span className="block text-gray-300">
                  Tailus Blocks &copy; 2022
                </span>
                <span className="block text-gray-300">
                  Need help?{" "}
                  <a href="#" className="font-semibold text-white">
                    {" "}
                    Contact Us
                  </a>
                </span>
              </div>
            </div>
          </div>
        </div>
        <div
          aria-hidden="true"
          className="absolute h-full inset-0 flex items-center"
        >
          <div
            aria-hidden="true"
            className="bg-layers bg-scale w-56 h-56 m-auto blur-xl bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 rounded-full md:w-[30rem] md:h-[30rem] md:blur-3xl"
          ></div>
        </div>
        <div
          aria-hidden="true"
          className="absolute inset-0 w-full h-full bg-[#020314] opacity-80"
        ></div>
      </footer>
    </div>
  );
}

export default footer;
