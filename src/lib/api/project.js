import axiosClient from "./axiosClient";

export const projectsApi = {
  getAllProjects: () =>
        axiosClient.get('/website/projects'),
};
