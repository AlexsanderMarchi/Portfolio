import { create } from "zustand";

const useTranslationStore = create((set) => ({
  autoTranslation: false,
  translationClicked: () =>
    set((state) => ({
      autoTranslation: !state.autoTranslation,
    })),
}));

export default useTranslationStore;
