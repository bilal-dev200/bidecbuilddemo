import axiosClient from './axiosClient';

export const servicesApi = {
  getAllServices: (serviceSlug) =>
    serviceSlug
      ? axiosClient.post(`/website/case-studies`, { serviceSlug })
      : axiosClient.post('/website/case-studies'),

  getAllTestimonials: () =>
    axiosClient.get("/website/testimonials"),



};



