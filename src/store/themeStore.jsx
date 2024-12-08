import { create } from "zustand";

const useThemeStore = create((set) => ({
  autoTheme: false,
  themeClicked: () =>
    set((state) => ({
      autoTheme: !state.autoTheme,
    })),
}));

export default useThemeStore;
