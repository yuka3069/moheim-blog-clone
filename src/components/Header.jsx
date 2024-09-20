import { useEffect, useRef, useState } from "react";
import { Link, NavLink } from "react-router-dom";

function Header() {
  const headerRef = useRef(null);
  const navRef1 = useRef(null);
  const navRef2 = useRef(null);
  const navRef3 = useRef(null);
  function handleMouseover(e) {
    navRef1.current.style.opacity = 0.5;
    console.log(e.target.closest("a"));
    if (e.target.closest("a")) e.target.closest("a").style.opacity = 1;
  }
  function handleMouseout(e) {
    navRef1.current.style.opacity = 1;
  }

  useEffect(() => {
    headerRef.current.addEventListener("mouseover", handleMouseover);
    return () =>
      headerRef.current.removeEventListener("mouseover", handleMouseover);
  }, []);
  useEffect(() => {
    headerRef.current.addEventListener("mouseout", handleMouseout);
    return () =>
      headerRef.current.removeEventListener("mouseout", handleMouseout);
  }, []);

  return (
    <header
      className="fixed left-0 top-0 flex h-[95px] w-screen list-none items-center bg-brand-50 text-[1.7rem] leading-[1] tracking-[0.075em] lg:text-[17px]"
      ref={headerRef}
    >
      <div className="flex h-full w-screen items-center justify-between gap-5 px-[2.986vw]">
        <Link to="/">Logo</Link>
        <div className="absolute top-1/2 hidden -translate-y-1/2 sm:left-0 sm:right-0 sm:flex sm:justify-center lg:right-[calc(2.986vw+31.6rem)]">
          <nav className="hidden sm:flex sm:items-center sm:justify-between sm:gap-16">
            <NavLink
              to="/"
              className="text-brand-600 transition-opacity duration-100 ease-out"
              ref={navRef1}
            >
              Home
            </NavLink>
            <NavLink
              to="/blog"
              className="text-brand-600 transition-opacity duration-100 ease-out"
              ref={navRef2}
            >
              Blog
            </NavLink>
            <NavLink
              to="/about"
              className="text-brand-600 transition-opacity duration-100 ease-out"
              ref={navRef3}
            >
              About
            </NavLink>
          </nav>
        </div>
        <div className="">more</div>
      </div>
    </header>
  );
}

export default Header;
