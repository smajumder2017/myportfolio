"use client";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { ReactNode, useEffect, useState } from "react";

interface INavLink {
  href: string;
  className?: string;
  children?: ReactNode;
}
const NavLink: React.FC<INavLink> = (props) => {
  const scrolltoHash = (element_id: string | null) => {
    if (!element_id) {
      return;
    }
    const element = document.getElementById(element_id);
    if (!element) {
      return;
    }

    const headerOffset = 100;
    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth",
    });
  };

  const id = props.href.includes("#") ? props.href.split("#")[1] : null;
  return (
    <Link
      href={props.href}
      scroll={false}
      onClick={() => scrolltoHash(id)}
      className="text-[15px] font-bold tracking-widest leading-[1.1em] transition-colors hover:text-primary relative after:bg-white after:absolute after:h-px after:w-0 after:bottom-0 after:left-0 hover:after:w-full after:transition-all after:duration-300 cursor-pointer"
    >
      {props.children}
    </Link>
  );
};

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    window.onscroll = function () {
      let currentScrollPos = window.scrollY;
      if (currentScrollPos === 0) {
        setScrolled(false);
      } else {
        setScrolled(true);
      }
    };

    return () => {
      window.onscroll = null;
    };
  }, []);

  return (
    <nav
      id="navbar"
      className={cn(
        `flex px-8 py-6 ${
          scrolled ? "border-b" : ""
        } border-gray-800 bg-transparent sticky top-0 backdrop-filter backdrop-blur-lg z-[9999] transition-colors duration-300`
      )}
    >
      <div className="flex-1">Logo</div>
      <div className="sm:invisible md:visible space-x-4 lg:space-x-10 text-gray-400 uppercase">
        <NavLink href="#work">Work</NavLink>
        <NavLink href="#skills">Skills</NavLink>
        <NavLink href="#experiences">Experience</NavLink>
        <NavLink href="#blogs">Blogs</NavLink>
        <Link
          href="/examples/dashboard"
          className="text-[12px] font-light tracking-widest leading-[1.1em] transition-colors hover:text-primary relative after:bg-white after:absolute after:h-px after:w-0 after:bottom-0 after:left-0 hover:after:w-full after:transition-all after:duration-300 cursor-pointer"
        >
          Get in touch
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
