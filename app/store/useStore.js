// store/useStore.js
import {create} from 'zustand';

const useStore = create((set) => ({
  state: "all",
  setState: (newState) => set({ state: newState }),
}));

export default useStore;
