// // "use client";
// // import React, { useRef } from "react";
// // import Image from "next/image";
// // import { mockBlog } from "@/lib/utils/mockBlog";
// // // import { mockBlog } from "@/data/mockBlog";
// // import Banner from '@/components/WebsiteComponents/Blog/Banner';
// // import ShopifySection from "@/components/WebsiteComponents/Blog/ShopifySection";

// // export default function BlogDetails({ params }) {

// //     const blog = mockBlog.data;
// //     const shopifyCards = [
// //         {
// //             img: "/car1.png",
// //             slug: "my-shopify-post",
// //             category: "Shopify",
// //             title: "Is simply dummy text of the printing and typesetting industry",
// //             desc: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s...",
// //             author: "Peter Read",
// //             date: "08/12/2024",
// //         },
// //         {
// //             img: "/car2.png",
// //             slug: "my-shopify-post",
// //             category: "Shopify",
// //             title: "Is simply dummy text of the printing and typesetting industry",
// //             desc: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s...",
// //             author: "Peter Read",
// //             date: "08/12/2024",
// //         },
// //         {
// //             img: "/car1.png",
// //             slug: "my-shopify-post",
// //             category: "Shopify",
// //             title: "Is simply dummy text of the printing and typesetting industry",
// //             desc: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s...",
// //             author: "Peter Read",
// //             date: "08/12/2024",
// //         },
// //         {
// //             img: "/car2.png",
// //             slug: "my-shopify-post",
// //             category: "Shopify",
// //             title: "Is simply dummy text of the printing and typesetting industry",
// //             desc: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s...",
// //             author: "Peter Read",
// //             date: "08/12/2024",
// //         },
// //     ];
// //     // Create refs dynamically for all sections
// //     const sectionRefs = blog.sections.reduce((acc, sec) => {
// //         acc[sec.id] = useRef(null);
// //         return acc;
// //     }, {});

// //     const scrollTo = (ref) => {
// //         ref.current?.scrollIntoView({
// //             behavior: "smooth",
// //             block: "start",
// //         });
// //     };

// //     return (
// //         <div className="w-full">

// //             {/* 🔵 Banner */}

// //             <Banner />

// //             {/* 🔵 Main Container */}
// //             <div className="px-6 md:px-16 py-28 grid grid-cols-1 lg:grid-cols-3 gap-10">

// //                 {/* LEFT CONTENT — Dynamic Sections */}
// //                 <div className="lg:col-span-2 space-y-16">
// //                     {blog.sections.map((section) => (
// //                         <div key={section.id} ref={sectionRefs[section.id]}>
// //                             <h2 className="text-2xl font-bold mb-4">{section.heading}</h2>

// //                             {/* Paragraph */}
// //                             {section.type === "paragraph" && (
// //                                 <p className="text-gray-600 leading-relaxed">
// //                                     {section.content}
// //                                 </p>
// //                             )}

// //                             {/* List */}
// //                             {section.type === "list" && (
// //                                 <ul className="list-disc ml-6 text-gray-600 space-y-2">
// //                                     {section.items.map((item, i) => (
// //                                         <li key={i}>{item}</li>
// //                                     ))}
// //                                 </ul>
// //                             )}
// //                         </div>
// //                     ))}
// //                 </div>

// //                 {/* RIGHT SIDEBAR — Table of Contents */}
// //                 <div className="sticky top-20 h-[80vh] bg-white border-l border-[#B5B1B1] py-6">
// //                     <h3 className="text-3xl font-bold mb-4 border-b border-[#B5B1B1] p-3 px-8">Table of Contents</h3>

// //                     <ul className="space-y-3 h-[70vh] text-gray-700 overflow-y-auto text-sm p-3 px-8">
// //                         {blog.toc.map((item) => (
// //                             <li
// //                                 key={item.id}
// //                                 className="cursor-pointer hover:text-teal-600"
// //                                 onClick={() => scrollTo(sectionRefs[item.id])}
// //                             >
// //                                 {item.title}
// //                             </li>
// //                         ))}
// //                     </ul>
// //                 </div>
// //             </div>
// //             <ShopifySection
// //                 title="WooCommerce"
// //                 cards={shopifyCards}
// //             />
// //         </div>
// //     );
// // }
// // "use client";
// // import React, { useEffect, useRef, useState } from "react";
// // import Image from "next/image";
// // import Banner from "@/components/WebsiteComponents/Blog/Banner";
// // import ShopifySection from "@/components/WebsiteComponents/Blog/ShopifySection";
// // import { useBlogStore } from "@/lib/stores/blogsStore";
// // // import { useBlogStore } from "@/lib/stores/blogsStore";

// // export default function BlogDetails({ params }) {
// //   const { fetchBlogBySlug } = useBlogStore();
// //   const [blog, setBlog] = useState(null);
// //   const { slug } = React.use(params);

// //   useEffect(() => {
// //     const getBlog = async () => {
// //       const data = await fetchBlogBySlug(slug); // API call
// //       setBlog(data?.data); // actual blog data
// //     };
// //     getBlog();
// //   }, [slug]);

// //   if (!blog) return <p>Loading blog...</p>;

// //   // Table of contents extract (Find all <h3> and <h4> inside content)
// //   const parser = new DOMParser();
// //   const htmlDoc = parser.parseFromString(blog.content, "text/html");

// //   const toc = [...htmlDoc.querySelectorAll("h3, h4")].map((el, index) => ({
// //     id: `sec-${index}`,
// //     title: el.innerText,
// //   }));

// //   // Add IDs to HTML headings so scroll works
// //   toc.forEach((item, index) => {
// //     const element = htmlDoc.querySelectorAll("h3, h4")[index];
// //     if (element) element.setAttribute("id", item.id);
// //   });

// //   const updatedHtml = htmlDoc.documentElement.querySelector("body").innerHTML;

// //  // Generate refs for each TOC item safely
// // const sectionRefs = React.useMemo(() => {
// //   if (!toc || toc.length === 0) return {};
// //   const refs = {};
// //   toc.forEach(item => {
// //     refs[item.id] = React.createRef();
// //   });
// //   return refs;
// // }, [toc]);


// //   const scrollTo = (id) => {
// //     const el = document.getElementById(id);
// //     el?.scrollIntoView({ behavior: "smooth", block: "start" });
// //   };

// //   return (
// //     <div className="w-full">
// //       <Banner />

// //       <div className="px-6 md:px-16 py-20 grid grid-cols-1 lg:grid-cols-3 gap-10">
// //         {/* LEFT CONTENT — Render full HTML */}
// //         <div className="lg:col-span-2 space-y-8">
// //           <h1 className="text-3xl font-bold">{blog.title}</h1>

// //           {/* BLOG IMAGE */}
// //           {blog.image && (
// //             <Image
// //               src={process.env.NEXT_PUBLIC_IMAGE_URL + blog.image}
// //               width={1000}
// //               height={600}
// //               alt={blog.title}
// //               className="rounded-xl mb-6"
// //             />
// //           )}

// //           {/* FULL BLOG CONTENT */}
// //           <div
// //             className="prose max-w-none"
// //             dangerouslySetInnerHTML={{ __html: updatedHtml }}
// //           />
// //         </div>

// //         {/* RIGHT SIDE — Table of Contents */}
// //         <div className="sticky top-20 h-[80vh] bg-white border-l border-gray-300 py-6">
// //           <h3 className="text-3xl font-bold mb-4 border-b border-gray-300 p-3 px-8">
// //             Table of Contents
// //           </h3>

// //           <ul className="space-y-3 h-[70vh] text-gray-700 overflow-y-auto text-sm p-3 px-8">
// //             {toc.map((item) => (
// //               <li
// //                 key={item.id}
// //                 className="cursor-pointer hover:text-teal-600"
// //                 onClick={() => scrollTo(item.id)}
// //               >
// //                 {item.title}
// //               </li>
// //             ))}
// //           </ul>
// //         </div>
// //       </div>

// //       {/* OPTIONAL RELATED BLOGS */}
// //       {/* <ShopifySection title="More Blogs" cards={[]} /> */}
// //     </div>
// //   );
// // }
// "use client";
// import React, { useEffect, useState, useMemo } from "react";
// import Image from "next/image";
// import Banner from "@/components/WebsiteComponents/Blog/Banner";
// import ShopifySection from "@/components/WebsiteComponents/Blog/ShopifySection";
// import { useBlogStore } from "@/lib/stores/blogsStore";

// export default function BlogDetails({ params }) {
//   const { slug } = React.use(params); // MUST BE FIRST

//   // ✅ FIX #1 — unwrap params

//   const { fetchBlogBySlug } = useBlogStore();
//   const [blog, setBlog] = useState(null);

//   // ===================================
//   // 1) FETCH BLOG FIRST
//   // ===================================
//   useEffect(() => {
//     const getBlog = async () => {
//       const data = await fetchBlogBySlug(slug);
//       setBlog(data?.data);
//     };
//     getBlog();
//   }, [slug]);


//   // ===================================
//   // 2) IF DATA NOT LOADED
//   // ===================================
//   if (!blog) return <p>Loading blog...</p>;


//   // ===================================
//   // 3) PARSE HTML + GENERATE TOC (NO HOOKS)
//   // ===================================
//   const parser = new DOMParser();
//   const htmlDoc = parser.parseFromString(blog.content, "text/html");

//   const headingElements = htmlDoc.querySelectorAll("h3, h4");

//   // Extract TOC items
//   const toc = Array.from(headingElements).map((el, index) => ({
//     id: `sec-${index}`,
//     title: el.innerText,
//   }));

//   // Add IDs to HTML
//   headingElements.forEach((el, index) => {
//     el.setAttribute("id", `sec-${index}`);
//   });

//   const updatedHtml = htmlDoc.body.innerHTML;


//   // ===================================
//   // 4) FIXED — useMemo is always called
//   // ===================================
//   const sectionRefs = useMemo(() => {
//     const refs = {};
//     toc.forEach((item) => {
//       refs[item.id] = React.createRef();
//     });
//     return refs;
//   }, [toc]);


//   // ===================================
//   // 5) Scroll handler
//   // ===================================
//   const scrollTo = (id) => {
//     const el = document.getElementById(id);
//     el?.scrollIntoView({ behavior: "smooth", block: "start" });
//   };


//   // ===================================
//   // 6) RENDER VIEW
//   // ===================================
//   return (
//     <div className="w-full">
//       <Banner />

//       <div className="px-6 md:px-16 py-20 grid grid-cols-1 lg:grid-cols-3 gap-10">

//         {/* LEFT SIDE — BLOG CONTENT */}
//         <div className="lg:col-span-2 space-y-8">
//           <h1 className="text-3xl font-bold">{blog.title}</h1>

//           {blog.image && (
//             <Image
//               src={process.env.NEXT_PUBLIC_IMAGE_URL + blog.image}
//               width={1000}
//               height={600}
//               alt={blog.title}
//               className="rounded-xl mb-6"
//             />
//           )}

//           <div
//             className="prose max-w-none"
//             dangerouslySetInnerHTML={{ __html: updatedHtml }}
//           />
//         </div>


//         {/* RIGHT SIDE — TOC */}
//         <div className="sticky top-20 h-[80vh] bg-white border-l border-gray-300 py-6">
//           <h3 className="text-3xl font-bold mb-4 border-b border-gray-300 p-3 px-8">
//             Table of Contents
//           </h3>

//           <ul className="space-y-3 h-[70vh] text-gray-700 overflow-y-auto text-sm p-3 px-8">
//             {toc.map((item) => (
//               <li
//                 key={item.id}
//                 className="cursor-pointer hover:text-teal-600"
//                 onClick={() => scrollTo(item.id)}
//               >
//                 {item.title}
//               </li>
//             ))}
//           </ul>
//         </div>
//       </div>

//       {/* <ShopifySection title="More Blogs" cards={[]} /> */}
//     </div>
//   );
// }
// "use client";
// import React, { useEffect, useState, useMemo } from "react";
// import Image from "next/image";
// import Banner from "@/components/WebsiteComponents/Blog/Banner";
// import ShopifySection from "@/components/WebsiteComponents/Blog/ShopifySection";
// import { useBlogStore } from "@/lib/stores/blogsStore";
// import { Image_URL } from "@/config/constants";

// export default function BlogDetails({ params }) {
//   // ---- MUST be first hooks/unwrapping
//   const { slug } = React.use(params);

//   // store + state
//   const { blogs, fetchBlogBySlug, loading } = useBlogStore();
//   const [blog, setBlog] = useState(null);

// const relatedWordpressBlogs = useMemo(() => {
//   if (!blog || !blogs || blogs.length === 0) return [];

//   return blogs
//     .filter(b => 
//       b.category?.name === blog.category?.name && 
//       b.slug !== blog.slug && 
//       b.source === "wordpress"   // <-- only WordPress
//     )
//     .map(b => ({
//       img: b.image,
//       slug: b.slug,
//       category: b.category?.name || "Uncategorized",
//       title: b.title,
//       desc: b.short_description,
//       author: b.author?.name || "Unknown",
//       authorAvatar: b.author?.avatar || null,
//       date: new Date(b.created_at).toLocaleDateString(),
//     }))
//     .slice(0, 4);
// }, [blog, blogs]);

  
//   // ---- Fetch blog (side-effect). Hook order stable.
//   useEffect(() => {
//     let mounted = true;
//     const getBlog = async () => {
//       try {
//         const data = await fetchBlogBySlug(slug);
//         if (mounted) setBlog(data?.data ?? null);
//       } catch (e) {
//         if (mounted) setBlog(null);
//       }
//     };
//     getBlog();
//     return () => { mounted = false; };
//   }, [slug, fetchBlogBySlug]);

//   // ---- All hooks below MUST be declared on every render (even when blog is null)
//   // 1) TOC: compute headings safely using useMemo; return [] if no blog yet
// //   const toc = useMemo(() => {
// //     if (!blog?.content) return [];
// //     const parser = new DOMParser();
// //     const htmlDoc = parser.parseFromString(blog.content, "text/html");
// //     const headings = [...htmlDoc.querySelectorAll("h3, h4")];
// //     // assign stable IDs
// //     return headings.map((el, i) => {
// //       return { id: `sec-${i}`, title: el.innerText ?? "" };
// //     });
// //   }, [blog]);
// const toc = useMemo(() => {
//   if (!blog?.content) return [];
  
//   const content = blog.content
//     .replace(/&lt;/g, "<")
//     .replace(/&gt;/g, ">"); // unescape if needed

//   const parser = new DOMParser();
//   const htmlDoc = parser.parseFromString(content, "text/html");
// const headings = [...htmlDoc.querySelectorAll("h1, h2, h3, h4")];


//   console.log("Headings found for TOC:", headings);

//   return headings.map((el, i) => ({ id: `sec-${i}`, title: el.innerText ?? "" }));
// }, [blog]);

//   // 2) updatedHtml: html with ids injected (safe when no blog)
//   const updatedHtml = useMemo(() => {
//     if (!blog?.content) return "";
//     const parser = new DOMParser();
//     const htmlDoc = parser.parseFromString(blog.content, "text/html");
//    const headings = htmlDoc.querySelectorAll("h1, h2, h3, h4");
// headings.forEach((el, i) => el.setAttribute("id", `sec-${i}`));
//     return htmlDoc.body.innerHTML;
//   }, [blog]);

//   // 3) refs for each TOC entry — created every render in same order (useMemo ensures same hook order)
//   const sectionRefs = useMemo(() => {
//     const refs = {};
//     toc.forEach(item => {
//       refs[item.id] = React.createRef();
//     });
//     return refs;
//   }, [toc]);

//   // scroll helper (not a hook)
//   const scrollTo = (id) => {
//     const el = document.getElementById(id);
//     el?.scrollIntoView({ behavior: "smooth", block: "start" });
//   };

//   // ---- Safe early return after hooks are declared
//   if (loading || !blog) return <p className="p-8 text-lg">Loading blog...</p>;

//   // ---- Now render full page (hooks were already called above)
//   return (
//     <div className="w-full">
//       <Banner />

//       <div className="px-6 md:px-16 py-20 grid grid-cols-1 lg:grid-cols-3 gap-10">
//         {/* LEFT CONTENT */}
//         <div className="lg:col-span-2 space-y-8">
//           <h1 className="text-3xl font-bold">{blog.title}</h1>

         

//           <div
//             className="prose max-w-none"
//             dangerouslySetInnerHTML={{ __html: updatedHtml }}
//           />
//         </div>

//         {/* RIGHT SIDEBAR TOC */}
//         <div className="sticky top-20 h-[80vh] bg-white border-l border-gray-300 py-6">
//           <h3 className="text-3xl font-bold mb-4 border-b border-gray-300 p-3 px-8">
//             Table of Contents
//           </h3>

//           <ul className="space-y-3 h-[70vh] text-gray-700 overflow-y-auto text-sm p-3 px-8">
//             {toc.map((item) => (
//               <li
//                 key={item.id}
//                 className="cursor-pointer hover:text-teal-600"
//                 onClick={() => scrollTo(item.id)}
//               >
//                 {item.title}
//               </li>
//             ))}
//           </ul>
//         </div>
//       </div>

//       {/* <ShopifySection title="More Blogs" cards={[]} /> */}
//       {relatedWordpressBlogs.length > 0 && (
//   <ShopifySection
//     title={`More in "${blog.category?.name}"`}
//     cards={relatedWordpressBlogs}
//   />
// )}

//     </div>
//   );
// }
"use client";
import React, { useEffect, useState, useMemo } from "react";
import Image from "next/image";
import Banner from "@/components/WebsiteComponents/Blog/Banner";
import ShopifySection from "@/components/WebsiteComponents/Blog/ShopifySection";
import { useBlogStore } from "@/lib/stores/blogsStore";
import OptimizeSection from "@/components/WebsiteComponents/Blog/OptimizeSection";

export default function BlogDetails({ params }) {
  // ---- MUST be first hooks/unwrapping
  const { slug } = React.use(params);

  // store + state
  const { blogs, fetchBlogBySlug, fetchBlogs, loading } = useBlogStore();
  const [blog, setBlog] = useState(null);

  // ---- Fetch all blogs for related posts
  useEffect(() => {
    if (!blogs || blogs.length === 0) {
      fetchBlogs();
    }
  }, [blogs, fetchBlogs]);

  // ---- Fetch current blog by slug
  useEffect(() => {
    let mounted = true;
    const getBlog = async () => {
      try {
        const data = await fetchBlogBySlug(slug);
        if (mounted) setBlog(data?.data ?? null);
      } catch (e) {
        if (mounted) setBlog(null);
      }
    };
    getBlog();
    return () => { mounted = false; };
  }, [slug, fetchBlogBySlug]);

  // ---- Related blogs
  const relatedBlogs = useMemo(() => {
    if (!blog || !blogs || blogs.length === 0) return [];

    return blogs
      .filter(b =>
        b.category?.name === blog.category?.name &&
        b.slug !== blog.slug &&
        b.source === blog.source // dynamic: same source as current blog
      )
      .map(b => ({
        img: b.image,
        slug: b.slug,
        category: b.category?.name || "Uncategorized",
        title: b.title,
        desc: b.short_description,
        author: b.author?.name || "Unknown",
        authorbio: b.author?.bio || "Unknown",
        authorAvatar: b.author?.avatar || null,
        date: new Date(b.created_at).toLocaleDateString(),
      }))
      .slice(0, 4);
  }, [blog, blogs]);

  // ---- Table of contents (TOC)
  const toc = useMemo(() => {
    if (!blog?.content) return [];

    const content = blog.content
      .replace(/&lt;/g, "<")
      .replace(/&gt;/g, ">"); // unescape if needed

    const parser = new DOMParser();
    const htmlDoc = parser.parseFromString(content, "text/html");
    const headings = [...htmlDoc.querySelectorAll("h1, h2, h3, h4")];

    return headings.map((el, i) => ({ id: `sec-${i}`, title: el.innerText ?? "" }));
  }, [blog]);

  // ---- Updated HTML with IDs for headings
  const updatedHtml = useMemo(() => {
    if (!blog?.content) return "";
    const parser = new DOMParser();
    const htmlDoc = parser.parseFromString(blog.content, "text/html");
    const headings = htmlDoc.querySelectorAll("h1, h2, h3, h4");
    headings.forEach((el, i) => el.setAttribute("id", `sec-${i}`));
    return htmlDoc.body.innerHTML;
  }, [blog]);

  // ---- Scroll helper
  const scrollTo = (id) => {
    const el = document.getElementById(id);
    el?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  // ---- Safe early return
  if (loading || !blog) return <p className="p-8 text-lg">Loading blog...</p>;

  // ---- Render full page
  return (
    <div className="w-full">
      <Banner />

      <div className="px-6 md:px-16 py-20 grid grid-cols-1 lg:grid-cols-3 gap-10">
        {/* LEFT CONTENT */}
        <div className="lg:col-span-2 space-y-8">
          <h1 className="text-3xl font-bold">{blog.title}</h1>

          <div
            className="prose max-w-none"
            dangerouslySetInnerHTML={{ __html: updatedHtml }}
          />
          {/* <OptimizeSection/> */}
        </div>

        {/* RIGHT SIDEBAR TOC */}
        <div className="sticky top-20 h-[80vh] bg-white border-l border-gray-300 py-6">
          <h3 className="text-3xl font-bold mb-4 border-b border-gray-300 p-3 px-8">
            Table of Contents
          </h3>

          <ul className="space-y-3 h-[70vh] text-gray-700 overflow-y-auto text-sm p-3 px-8">
            {toc.map((item) => (
              <li
                key={item.id}
                className="cursor-pointer hover:text-teal-600"
                onClick={() => scrollTo(item.id)}
              >
                {item.title}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Related Blogs Section */}
      {relatedBlogs.length > 0 && (
        <ShopifySection
          title={`More in "${blog.category?.name}"`}
          cards={relatedBlogs}
        />
      )}
    </div>
  );
}
