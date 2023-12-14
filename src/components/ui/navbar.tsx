"use client";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { ReactNode, useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { Button } from "./button";
import { Menu } from "lucide-react";

interface INavLink {
  href: string;
  className?: string;
  children?: ReactNode;
  active?: boolean;
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
  const activeClass = props.active ? "after:w-full text-primary" : "";
  console.log(id, props.active);
  return (
    <Link
      href={props.href}
      scroll={false}
      onClick={() => scrolltoHash(id)}
      className={cn(
        "text-xs md:text-[15px] font-bold tracking-widest leading-[1.1em] transition-colors hover:text-primary relative after:bg-white after:absolute after:h-px after:w-0 after:bottom-0 after:left-0 hover:after:w-full after:transition-all after:duration-300 cursor-pointer",
        activeClass
      )}
    >
      {props.children}
    </Link>
  );
};

const Navbar = () => {
  const params = useParams();
  const [scrolled, setScrolled] = useState(false);
  const [id, setId] = useState("");

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

  useEffect(() => {
    setId(window.location.href.split("#")[1]);
  }, [params]);

  return (
    <>
      <nav
        id="navbar"
        className={cn(
          `flex px-4 py-4 md:px-8 md:py-6 ${
            scrolled ? "border-b" : ""
          } border-gray-800 bg-transparent sticky top-0 backdrop-filter backdrop-blur-lg z-[9999] transition-colors duration-300`
        )}
      >
        {/* <Button className="block md:hidden" size={"sm"} variant={"ghost"}>
        <Menu size={"20px"} />
      </Button> */}
        <div className="flex flex-1 items-center justify-center md:justify-start">
          <div>Logo</div>
          {/* <div className="ml-[-30px] md:ml-0"></div> */}
        </div>
        {/* Desktop Navbar */}
        <div className="hidden md:block md:space-x-4 lg:space-x-10 text-gray-400 uppercase">
          <NavLink href="#work" active={id === "work"}>
            Work
          </NavLink>
          <NavLink href="#skills" active={id === "skills"}>
            Skills
          </NavLink>
          <NavLink href="#experiences" active={id === "experiences"}>
            Experience
          </NavLink>
          <NavLink href="#blogs" active={id === "blogs"}>
            Blogs
          </NavLink>
          <Link
            href="/examples/dashboard"
            className="text-[12px] font-light tracking-widest leading-[1.1em] transition-colors hover:text-primary relative after:bg-white after:absolute after:h-px after:w-0 after:bottom-0 after:left-0 hover:after:w-full after:transition-all after:duration-300 cursor-pointer"
          >
            Get in touch
          </Link>
        </div>
      </nav>
      <div className="flex md:hidden px-4 py-6 border-t gap-2 justify-evenly border-gray-800 bg-transparent fixed bottom-0 left-0 right-0 backdrop-filter backdrop-blur-lg z-[9999] uppercase">
        <NavLink href="#work" active={id === "work"}>
          Work
        </NavLink>
        <NavLink href="#skills" active={id === "skills"}>
          Skills
        </NavLink>
        <NavLink href="#experiences" active={id === "experiences"}>
          Experience
        </NavLink>
        <NavLink href="#blogs" active={id === "blogs"}>
          Blogs
        </NavLink>
      </div>
    </>
  );
};

export default Navbar;
