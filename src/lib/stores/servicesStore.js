// import { create } from "zustand";
// import { servicesApi } from "../api/services";

// export const useServicesStore = create((set) => ({
//   services: [],
//   isLoading: false,
//   error: null,
//   selectedServices: null,
//   setSelectedServices: (services) => set({ selectedServices: services }),
//   getAllServices: async (serviceSlug) => {
//     set({ isLoading: true, error: null, services: [] });
//     try {
//       const { data: services } = await servicesApi.getAllServices(serviceSlug);
//       set({ services, isLoading: false });
//       return services;
//     } catch (error) {
//       set({ error: error.message, isLoading: false });
//       throw error;
//     }
//   },
// }));
import { create } from "zustand";
import { servicesApi } from "../api/services";

export const useServicesStore = create((set) => ({
  services: [],
  isLoading: false,
  error: null,
  selectedServices: null,
  setSelectedServices: (services) => set({ selectedServices: services }),
  getAllServices: async (serviceSlug) => {
    set({ isLoading: true, error: null, services: [] });
    try {
      const response = await servicesApi.getAllServices(serviceSlug);
      // ✅ Update to use response.data instead of entire response
      const services = response.data.data || [];
      set({ services, isLoading: false });
      return services;
    } catch (error) {
      set({ error: error.message, isLoading: false });
      throw error;
    }
  },
}));
