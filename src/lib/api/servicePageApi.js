import axiosClient from "./axiosClient";

export const servicePageApi = {
  // 👇 slug will be passed when calling this function
  getPageData: (slug) => {
    return axiosClient.get(`/website/services/${slug}/detail`);
  },
};
