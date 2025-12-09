import { create } from 'zustand';
import { sabMenu } from '../api/watchlist';

const useMenuStore = create((set) => ({
  menus: [],
  loading: false,
  error: null,

  fetchMenus: async () => {
    set({ loading: true, error: null });
    try {
      const response = await sabMenu.getsabmenu();
      set({ menus: response.data.data, loading: false });
    } catch (err) {
      set({ error: err.message, loading: false });
    }
  },
}));

export default useMenuStore;
