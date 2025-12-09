import { create } from "zustand";
import { projectsApi } from "../api/project";

export const useProjectStore = create((set, get) => ({
  projects: [],
  isLoading: false,
  error: null,
  selectedProjects: null,
  setselectedProjects: (project) => set({ selectedProjects: project }),

  getAllprojects: async () => {
    if (get().projects.length > 0) {
      return get().projects;
    }

    set({ isLoading: true, error: null });
    try {
      const { data } = await projectsApi.getAllProjects();
// console.log('api',data?.data)
      // ✅ projects are at data.data.data
      const allProjects = data?.data || [];

      const activeProjects = allProjects.filter(p => p.status == 1);

      set({ projects: activeProjects, isLoading: false });
      return activeProjects;
    } catch (error) {
      set({ error: error.message, isLoading: false });
      throw error;
    }
  },
}));
