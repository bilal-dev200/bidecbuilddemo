// "use client";

// import { usePathname } from "next/navigation";
// import Navbar from "@/components/WebsiteComponents/Navbar";
// import Footer from "@/components/WebsiteComponents/Footer";
// import ConditionalGetInTouch from "./ConditionalGetInTouch";

// export default function LayoutWrapper({ children }) {
//   const pathname = usePathname();
//   const hideLayout = pathname === "/404" || pathname.includes("not-found");

//   return (
//     <>
//       {!hideLayout && <Navbar />}
//       {children}
//       {!hideLayout && <ConditionalGetInTouch />}
//       {!hideLayout && <Footer />}
//     </>
//   );
// }
// "use client";

// import { usePathname } from "next/navigation";
// import Navbar from "@/components/WebsiteComponents/Navbar";
// import Footer from "@/components/WebsiteComponents/Footer";
// import ConditionalGetInTouch from "./ConditionalGetInTouch";

// export default function LayoutWrapper({ children }) {
//   const pathname = usePathname();

//   const hideLayout =
//     pathname === "/404" ||
//     pathname.includes("not-found") ||
//     pathname === "/_not-found" ||
//     pathname === "/error" ||
//     pathname === "" ||
//     pathname === undefined;

//   return (
//     <>
//       {!hideLayout && <Navbar />}
//       {children}
//       {!hideLayout && <ConditionalGetInTouch />}
//       {!hideLayout && <Footer />}
//     </>
//   );
// }
"use client";

import { usePathname } from "next/navigation";
import Navbar from "@/components/WebsiteComponents/Navbar";
import Footer from "@/components/WebsiteComponents/Footer";
import ConditionalGetInTouch from "./ConditionalGetInTouch";

export default function LayoutWrapper({ children }) {
  const pathname = usePathname();

  // ✅ Better hide condition
  const hideLayout =
    pathname?.includes("404") ||
    pathname?.includes("not-found") ||
    pathname?.includes("error");

  return (
    <>
      {!hideLayout && <Navbar />}
      {children}
      {/* {!hideLayout && <ConditionalGetInTouch />} */}
      {!hideLayout && <Footer />}
    </>
  );
}
