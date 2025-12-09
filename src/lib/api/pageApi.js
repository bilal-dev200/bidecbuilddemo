import axiosClient from "./axiosClient";

export const pageApi = {
  // 👇 slug will be passed when calling this function
  getPageData: (slug) => {
    return axiosClient.get(`/website/${slug}/show`);
  },
};
