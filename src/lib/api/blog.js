  import axiosClient from "./axiosClient";

  export const blogsApi = {
    getAllBlogs: () =>
          axiosClient.get('/website/blogs'),
      // getBySlug: (slug) => api.get(`/website/blogs/${slug}/show`),
 getBySlug: (slug) =>
    axiosClient.post("/website/blogs/show", {
      slug: slug,   // body me slug
    }),
  };
