"use client";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { HiMenu, HiX, HiChevronDown, HiChevronUp } from "react-icons/hi";
import { usePathname } from "next/navigation";
import useMenuStore from "@/lib/stores/sabmenu";
import { MdArrowOutward } from "react-icons/md";
import { Image_URL } from "@/config/constants";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [showServices, setShowServices] = useState(false);
  const [showMobileServices, setShowMobileServices] = useState(false);
  const pathname = usePathname();
  const [activeMenu, setActiveMenu] = useState(null);

  const { menus, fetchMenus } = useMenuStore();

  useEffect(() => {
    fetchMenus();
  }, [fetchMenus]);
  useEffect(() => {
    const handleScroll = () => setShowServices(false);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  // console.log(menus, "Fetched Menus");

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Services", href: "#" },
    { name: "About", href: "#" },
    { name: "Case Studies", href: "#" },
    { name: "Contact us", href: "#" },
      { name: "Blog", href: "/blog" },
  ];

  console.log("servicesasqw", menus);

  return (
    <header className="absolute top-4 left-0 w-full z-50 bg-transparent">
      <div className="w-full mx-auto px-4 flex flex-col md:flex-col lg:flex-row items-center justify-between md:px-12 py-3 md:py-4">
        {/* Logo */}
        <Link
          href="/"
          className="flex justify-start md:justify-center lg:justify-start w-full lg:w-auto"
        >
          <img
            src="/logo.png"
            alt="Bidec Logo"
            // width={90}
            // height={90}
            className="object-contain w-40"
          />
        </Link>

        {/* Tablet + Desktop Navbar */}
        <nav className="hidden md:flex items-center px1 justify-center py-2 flex-wrap bg-gray-100/20   rounded-full lg:mt-0 lg:mx-auto">
          <div className="flex flex-wrap justify-center gap-4">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;

              const handleClick = (e) => {
                if (["About", "Case Studies"].includes(link.name)) {
                  e.preventDefault();
                  const targetId = link.name.toLowerCase().replace(" ", "-");
                  const targetElement = document.getElementById(targetId);
                  if (targetElement) targetElement.scrollIntoView({ behavior: "smooth" });
                }

                if (link.name === "Contact us") {
                  e.preventDefault();
                  const targetElement = document.getElementById("get-in-touch");
                  if (targetElement) targetElement.scrollIntoView({ behavior: "smooth" });
                }
              };

              // const buildFullSlug = (page) => {
              //   const path = [];

              //   // Walk through parent menus if exist
              //   let current = page.menu;
              //   while (current) {
              //     if (current.slug) path.unshift(current.slug);
              //     current = current.parent;
              //   }

              //   if (page.slug) path.push(page.slug);

              //   return `${path.join("/")}`;
              // };
              const buildFullSlug = (page) => {
                const menuSlug = page.menu?.slug || "";
                const pageSlug = page.slug || "";

                // Avoid double slashes & duplicated paths
                return `/${menuSlug}/${pageSlug}`.replace(/\/+/g, "/");
              };

              return (
                <div
                  key={link.name}
                  className="relative"
                  onMouseEnter={() => link.name === "Services" && setShowServices(true)}
                  onMouseLeave={() => link.name === "Services" && setShowServices(false)}
                >
                  <Link
                    href={link.href}
                    onClick={handleClick}
                    className={`px-4 py-2 text-base rounded-full transition ${isActive
                      ? "bg-white font-bold text-[#1A7D85]"
                      : "text-white hover:bg-white py-3 hover:font-bold hover:text-[#1A7D85]"
                      }`}
                  >
                    {link.name}
                  </Link>

                  {link.name === "Services" && showServices && (
                    <div className="pt-4">
                      <div
                        className="fixed left-1/2 top-[4.87rem] py2 -translate-x-1/2 w-full max-w-[1200px] bg-white text-black rounded-2xl shadow-2xl z-50 p-4 grid grid-cols-4 gap-6"
                        onMouseEnter={() => setShowServices(true)}
                        onMouseLeave={() => {
                          setShowServices(false);
                          setActiveMenu(null);
                        }}
                      >
                        {/* LEFT SIDE — MENU LIST */}
                        <div className="col-span-1 space-y-3 border-r border-gray-200 pr-4">
                          {menus
                            // 🎯 Get ONLY top-level menus (parent_id == null)
                            .map((p) => p.menu)
                            .filter((m) => m && m.parent_id === null)
                            // Remove duplicates
                            .filter(
                              (menu, index, self) =>
                                index === self.findIndex((x) => x.id === menu.id)
                            )
                            .map((menu) => {
                              const menuName = menu.name;

                              // Build full slug (parent → child)
                              const buildMenuSlug = (menuObj) => {
                                let arr = [];
                                let current = menuObj;

                                while (current) {
                                  if (current.slug) arr.unshift(current.slug);
                                  current = current.parent;
                                }

                                return `${arr.join("/")}`;
                              };

                              const menuSlug = buildMenuSlug(menu);

                              return (
                                <Link
                                  key={menu.id}
                                  href={menuSlug}
                                  onMouseEnter={() => setActiveMenu(menuName)}
                                  className={`flex items-center gap-3 cursor-pointer p-2 rounded-lg transition border ${activeMenu === menuName
                                    ? "bg-blue-600 text-white border-blue-600"
                                    : "bg-white text-black border-transparent hover:bg-blue-50 hover:border-blue-400"
                                    }`}
                                >
                                  <span
                                    className={`w-9 h-9 p-1 flex items-center justify-center rounded-md text-lg ${activeMenu === menuName
                                      ? "bg-white text-blue-600"
                                      : "bg-blue-100 text-blue-600"
                                      }`}
                                  >
                                    {/* <i className="fa-solid fa-layer-group"></i> */}
                                    <img src={`${Image_URL}${menu.icon}`} alt="" />
                                  </span>
                                  <span className="text-sm font-semibold">{menuName}</span>
                                </Link>
                              );
                            })}
                        </div>
                        {/* RIGHT SIDE — PAGE LINKS */}
                        <div className="col-span-2 pl-8">
                          {activeMenu ? (
                            <div className="grid grid-cols-3 gap-10">
                              {(() => {
                                const activeMenuObj = menus.find(
                                  (m) => m.menu?.name === activeMenu
                                )?.menu;
                                if (!activeMenuObj) return null;

                                const renderChildren = (menuObj) => {
                                  return menuObj?.children_recursive?.map((child) => {

                                    const childPages = menus.filter(
                                      (page) => page.menu?.id === child.id
                                    );

                                    return (
                                      <div key={child.id} className="space-y-5">

                                        {/* 🔵 Make CHILD MENU HEADING clickable */}
                                        <Link
                                          href={`${child.slug}`}
                                          className="font-bold text-base text-gray-900 hover:text-blue-600 block"
                                        >
                                          {child.name}
                                        </Link>

                                        {/* Child pages */}
                                        {childPages.length > 0 && (
                                          <ul className="space-y-3">
                                            {childPages.map((page) => {
                                              const fullPath = buildFullSlug(page);
                                              return (
                                                <Link
                                                  key={page.id}
                                                  // href={page.slug}
                                                  href={fullPath}
                                                  className="flex items-start justify-between text-sm group"
                                                >
                                                  <span className="text-gray-700 group-hover:text-blue-600 max-w-[210px]">
                                                    {page.title}
                                                  </span>
                                                  <span className="ml-2 text-gray-400 group-hover:text-blue-600">
                                                    <MdArrowOutward />
                                                  </span>
                                                </Link>
                                              );
                                            })}
                                          </ul>
                                        )}

                                        {/* Recursive children */}
                                        {child.children_recursive && renderChildren(child)}

                                      </div>
                                    );
                                  });
                                };


                                return (
                                  <>
                                    {/* Render children_recursive */}
                                    {(() => {
                                      const directPages = menus.filter(
                                        (page) =>
                                          page.menu?.id === activeMenuObj.id &&
                                          page.status === 1
                                      );

                                      if (directPages.length === 0) return null;

                                      return (
                                        <div className="space-y-5">
                                          {/* Show parent title ONCE */}
                                          <Link
                                            href={`${activeMenuObj.slug}`}
                                            className="font-bold text-base text-gray-900 hover:text-blue-600 block"
                                          >
                                            {activeMenuObj.name}
                                          </Link>

                                          {/* List all pages under this parent */}
                                          <ul className="space-y-3">
                                            {directPages.map((page) => {
                                              const fullPath = buildFullSlug(page);

                                              return (
                                                <Link
                                                  key={page.id}
                                                  href={fullPath}
                                                  className="flex items-start justify-between text-sm group"
                                                >
                                                  <span className="text-gray-700 group-hover:text-blue-600 max-w-[210px]">
                                                    {page.title}
                                                  </span>
                                                  <span className="ml-2 text-gray-400 group-hover:text-blue-600">
                                                    <MdArrowOutward />
                                                  </span>
                                                </Link>
                                              );
                                            })}
                                          </ul>
                                        </div>
                                      );
                                    })()}
                                    {renderChildren(activeMenuObj)}


                                  </>
                                );
                              })()}
                            </div>
                          ) : (
                            <p className="text-gray-400">
                              Hover or click on a service to view sub-services
                            </p>
                          )}
                        </div>
                        {/* Image SIDE  */}
                        <div className="col-span-1 flex items-center justify-center">
                          {activeMenu && (
                            <img
                              src={`${Image_URL}${menus.find((m) => m.menu?.name === activeMenu)?.menu?.image}`}
                              alt={activeMenu}
                              className="w-full h-auto rounded-lg object-cover"
                            />
                          )}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}


          </div>
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setOpen(!open)}
          className="lg:hidden md:hidden mt-2 text-white text-3xl absolute right-6 "
        >
          {open ? <HiX /> : <HiMenu />}
        </button>
      </div>

      {/* ✅ Mobile Sidebar */}
      {/* ✅ Mobile Sidebar */}
    {/* ✅ MOBILE FULL SIDEBAR */}
{/*  */}
<div
  className={`fixed top-0 right-0 h-full w-full sm:w-[420px] 
    bg-[rgba(15,73,90,0.55)] backdrop-blur-xl   /* 🔵 TRANSPARENT BLUE GLASS */
    text-black z-[2000] transform 
    ${open ? "translate-x-0" : "translate-x-full"}
    transition-transform duration-500 ease-in-out 
    shadow-[0px_0px_40px_rgba(0,0,0,0.25)] overflow-y-auto`}
>

  {/* CLOSE BUTTON */}
  <button
    onClick={() => setOpen(false)}
    className="text-3xl absolute top-5 right-6 text-white drop-shadow-lg"
  >
    <HiX />
  </button>

  {/* LOGO */}
  <div className="flex justify-center mt-10 mb-6">
    <Image
      src="/logo.png"
      width={100}
      height={100}
      alt="logo"
      className="drop-shadow-2xl"
    />
  </div>

  <div className="flex flex-col space-y-2 px-5 pb-10">

    {navLinks.map((link) => {
      const isActive = pathname === link.href;

      // -------------------------------
      //         SERVICES SECTION
      // -------------------------------
      if (link.name === "Services") {
        const parentMenus = menus
          .map((m) => m.menu)
          .filter((m) => m && m.parent_id === null)
          .filter((m, i, arr) => i === arr.findIndex((x) => x.id === m.id));

        return (
          <div key="services" className="mb-3">

            {/* MAIN BUTTON */}
            <div
              className={`flex justify-between items-center text-xl font-bold py-4 
                cursor-pointer bg-white/80 backdrop-blur-md rounded-xl px-4 shadow 
                border border-white/40 hover:bg-white transition
                ${showMobileServices ? "text-[#0E7C83]" : "text-gray-900"}`}
              onClick={() => setShowMobileServices(!showMobileServices)}
            >
              <span>Services</span>
              {showMobileServices ? (
                <HiChevronUp className="text-2xl" />
              ) : (
                <HiChevronDown className="text-2xl" />
              )}
            </div>

            {/* DROPDOWN */}
            {showMobileServices && (
              <div className="pt-3 space-y-4">

                {parentMenus.map((menu) => (
                  <div
                    key={menu.id}
                    className="bg-white/90 backdrop-blur-xl p-4 rounded-2xl shadow-lg border border-white"
                  >
                    {/* Parent Row */}
                    <div
                      className="flex justify-between items-center cursor-pointer"
                      onClick={() =>
                        setActiveMenu(activeMenu === menu.name ? null : menu.name)
                      }
                    >
                      <div className="flex items-center gap-4">

                        {menu.image && (
                          <Image
                            src={`${Image_URL}${menu.image}`}
                            alt={menu.name}
                            width={38}
                            height={38}
                            className="rounded-xl shadow-md"
                          />
                        )}

                        <span className="font-semibold text-lg text-gray-900">
                          {menu.name}
                        </span>
                      </div>

                      {activeMenu === menu.name ? (
                        <HiChevronUp className="text-2xl text-gray-700" />
                      ) : (
                        <HiChevronDown className="text-2xl text-gray-700" />
                      )}
                    </div>

                    {/* Child Menus */}
                    {activeMenu === menu.name && (
                      <div className="mt-4 ml-2 space-y-6">

                        {menu.children_recursive?.map((child) => (
                          <div key={child.id}>
                            <Link
                              href={`/${child.slug}`}
                              onClick={() => setOpen(false)}
                              className="flex items-center gap-3 font-medium 
                                text-gray-800 hover:text-[#0E7C83] text-base"
                            >
                              {child.image && (
                                <Image
                                  src={`${Image_URL}${child.image}`}
                                  alt={child.name}
                                  width={28}
                                  height={28}
                                  className="rounded-lg shadow-sm"
                                />
                              )}
                              {child.name}
                            </Link>

                            {/* Pages under child */}
                            <div className="ml-6 mt-2 border-l-2 border-gray-200 pl-4 space-y-2">
                              {menus
                                .filter((p) => p.menu?.id === child.id)
                                .map((page) => {
                                  const fullPath = `/${page.menu?.slug}/${page.slug}`;

                                  return (
                                    <Link
                                      key={page.id}
                                      href={fullPath}
                                      onClick={() => setOpen(false)}
                                      className="flex justify-between items-center text-sm 
                                        text-gray-700 hover:text-[#0E7C83]"
                                    >
                                      {page.title}
                                      <MdArrowOutward className="text-gray-500" />
                                    </Link>
                                  );
                                })}
                            </div>
                          </div>
                        ))}

                        {/* Pages directly under parent */}
                        {menus
                          .filter((p) => p.menu?.id === menu.id)
                          .map((page) => (
                            <Link
                              key={page.id}
                              href={`/${menu.slug}/${page.slug}`}
                              onClick={() => setOpen(false)}
                              className="flex justify-between items-center text-sm text-gray-700 
                                hover:text-[#0E7C83]"
                            >
                              {page.title}
                              <MdArrowOutward className="text-gray-500" />
                            </Link>
                          ))}
                      </div>
                    )}
                  </div>
                ))}

              </div>
            )}
          </div>
        );
      }

      // -------------------------------
      //         OTHER LINKS
      // -------------------------------
      return (
        <Link
          key={link.name}
          href={link.href}
          onClick={() => setOpen(false)}
          className={`block text-lg py-3 border-b border-white/20 text-white font-medium 
            ${isActive ? "text-[#00E6FF] font-semibold" : "text-white/90"}`}
        >
          {link.name}
        </Link>
      );
    })}
  </div>
</div>



    </header>
  );
};

export default Navbar;

