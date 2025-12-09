// // src/store/blogStore.js
// import { create } from 'zustand';
// import { blogsApi } from '../api/blog';

// export const useBlogStore = create((set) => ({
//   blogs: [],       // all blogs
//   loading: false,
//   error: null,

//  fetchBlogs: async () => {
//   set({ loading: true, error: null });
//   try {
//     const res = await blogsApi.getAll();  // using your API helper
//     console.log("API response in store:", res);          // 👈 full response
//     console.log("API response data:", res.data);         // 👈 actual response data
//     console.log("API response data.data:", res.data.data); // 👈 the blogs array
//     set({ blogs: res || [], loading: false });
//   } catch (err) {
//     console.error("API error in store:", err);
//     set({ error: err.message, loading: false });
//   }
// },

//   fetchBlogBySlug: async (slug) => {
//     set({ loading: true, error: null });
//     try {
//       const res = await blogsApi.getBySlug(slug); // implement getBySlug in your API
//       set({ loading: false });
//       return res.data.data;
//     } catch (err) {
//       set({ error: err.message, loading: false });
//     }
//   },
// }));
// src/store/blogStore.js
import { create } from 'zustand';
import { blogsApi } from '../api/blog';
// import { blogsApi } from '../api/blog';

export const useBlogStore = create((set) => ({
  blogs: [],       // all blogs
  loading: false,
  error: null,

  fetchBlogs: async () => {
    set({ loading: true, error: null });
    try {
      const res = await blogsApi.getAllBlogs();  // using your API helper
      // console.log("API response in store:", res);          // full response
      // console.log("API response data:", res.data);         // actual response
      console.log("API blogs array:", res.data.data);      // blogs array
      set({ blogs: res.data.data || [], loading: false }); // ✅ correct
    } catch (err) {
      console.error("API error in store:", err);
      set({ error: err.message, loading: false });
    }
  },

  fetchBlogBySlug: async (slug) => {
    set({ loading: true, error: null });
    try {
      const res = await blogsApi.getBySlug(slug);
      set({ loading: false });
      return res.data;
    } catch (err) {
      set({ error: err.message, loading: false });
    }
  },
}));
