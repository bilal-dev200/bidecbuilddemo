//   // import { Geist, Geist_Mono } from "next/font/google";
//   // import "./globals.css";
//   // import Toaster from "@/components/WebsiteComponents/Toaster";
//   // import Navbar from "@/components/WebsiteComponents/Navbar";
//   // import GetInTouch from "@/components/WebsiteComponents/GetInTouch";
//   // import Footer from "@/components/WebsiteComponents/Footer";
//   // import 'swiper/css';
//   // import 'swiper/css/pagination';
//   // import 'swiper/css/navigation';
//   // import HeroSection from "@/components/WebsiteComponents/HeroSection";
//   // import FloatingButtons from "@/components/FloatingButtons";
//   // import ConditionalGetInTouch from "./ConditionalGetInTouch";

//   // const geistSans = Geist({
//   //   variable: "--font-geist-sans",
//   //   subsets: ["latin"],
//   // });

//   // const geistMono = Geist_Mono({
//   //   variable: "--font-geist-mono",
//   //   subsets: ["latin"],
//   // });

//   // export const metadata = {
//   //   title: "Bidecsol",
//   //   description:
//   //     "Bidecsol is a leading software company providing professional services for website development, web applications, and Shopify stores. We help businesses build powerful digital solutions tailored to their needs.",
//   //   // robots: "noindex, nofollow, noarchive, nosnippet, noimageindex, nocache",
//   //   robots: "index, follow",
//   // };


//   // export default function RootLayout({ children }) {
//   //   return (
//   //     <html lang="en">
//   //       <body
//   //         className={`antialiased min-h-screen`}
          
//   //       >
//   //         {/* <Toaster /> */}
//   //         <Navbar />
//   //         {/* <HeroSection/> */}
//   //         {children}
//   //         <ConditionalGetInTouch />
//   //         <Footer />
//   //         {/* <FloatingButtons /> */}
//   //       </body>
//   //     </html>
//   //   );
//   // }
// import { Geist, Geist_Mono } from "next/font/google";
// import "./globals.css";
// import Toaster from "@/components/WebsiteComponents/Toaster";
// import Navbar from "@/components/WebsiteComponents/Navbar";
// import GetInTouch from "@/components/WebsiteComponents/GetInTouch";
// import Footer from "@/components/WebsiteComponents/Footer";
// import "swiper/css";
// import "swiper/css/pagination";
// import "swiper/css/navigation";
// import HeroSection from "@/components/WebsiteComponents/HeroSection";
// import FloatingButtons from "@/components/FloatingButtons";
// import ConditionalGetInTouch from "./ConditionalGetInTouch";
// import Script from "next/script"; // ✅ Import this

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

// export const metadata = {
//   title: "Bidecsol",
//   description:
//     "Bidecsol is a leading software company providing professional services for website development, web applications, and Shopify stores. We help businesses build powerful digital solutions tailored to their needs.",
//   robots: "index, follow",
// };

// export default function RootLayout({ children }) {
//   return (
//     <html lang="en">
//       <head>
//         {/* ✅ Google Tag Manager (Head Section) */}
//         <Script id="google-tag-manager" strategy="afterInteractive">
//           {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
//           new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
//           j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
//           'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
//           })(window,document,'script','dataLayer','GTM-K338D6PX');`}
//         </Script>

//         {/* ✅ Google Site Verification */}
//         <meta
//           name="google-site-verification"
//           content="YlAHbC1lJXZ4w-BC4Hu-qeQfr49CZZfQdMVtp136XeU"
//         />
//       </head>

//       <body className="antialiased min-h-screen">
//         {/* ✅ Google Tag Manager (Body Section) */}
//         <noscript>
//           <iframe
//             src="https://www.googletagmanager.com/ns.html?id=GTM-K338D6PX"
//             height="0"
//             width="0"
//             style={{ display: "none", visibility: "hidden" }}
//           ></iframe>
//         </noscript>

//         {/* <Toaster /> */}
//         <Navbar />
//         {/* <HeroSection /> */}
//         {children}
//         <ConditionalGetInTouch />
//         <Footer />
//         {/* <FloatingButtons /> */}
//       </body>
//     </html>
//   );
// }
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
// import Toaster from "@/components/WebsiteComponents/Toaster";
import Script from "next/script";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import LayoutWrapper from "./LayoutWrapper"; // ✅ new wrapper
import Toaster from "@/components/WebsiteComponents/Toaster";
// import Toaster from "@/components/WebsiteComponents/Toaster";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Bidecsol",
  description:
    "Bidecsol is a leading software company providing professional services for website development, web applications, and Shopify stores. We help businesses build powerful digital solutions tailored to their needs.",
  robots: "index, follow",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <Script id="google-tag-manager" strategy="afterInteractive">
          {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-K338D6PX');`}
        </Script>

        <meta
          name="google-site-verification"
          content="YlAHbC1lJXZ4w-BC4Hu-qeQfr49CZZfQdMVtp136XeU"
        />
      </head>
      <body className="antialiased min-h-screen">
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-K338D6PX"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>
        <Toaster/>
        {/* ✅ Wrap all content in the new Client Wrapper */}
        <LayoutWrapper>{children}</LayoutWrapper>
      </body>
    </html>
  );
}
