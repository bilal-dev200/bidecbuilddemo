import axiosClient from './axiosClient';

export const watchlistApi = {
  addToWatchlist: (productSlug) =>
    axiosClient.post(`/user/watchlist/${productSlug}/store`),
  getWatchlist: () =>
    axiosClient.get('/user/watchlist'),
  removeFromWatchlist: (productSlug) =>
    axiosClient.delete(`/user/watchlist/${productSlug}/destroy`),
}; 

export const sabMenu = {
  getsabmenu: () =>
    axiosClient.get('website/pages/with-menu'),
}; 
 
export const footerApi = {
  subcriber: (data) =>
    axiosClient.post(`website/subscribe`, data),
};
export const footerlinks = {
  footer: () =>
    axiosClient.get(`website/footers/1/show`),
};

export const form = {
  contact: (data) =>
    axiosClient.post(`website/contact-us`, data),
};