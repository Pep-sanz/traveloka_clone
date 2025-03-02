import { create } from 'zustand';

interface IAuthStore {
  dialogAuth: boolean;
  setDialogAuth: (dialogAuth: boolean) => void;
}

export const useAuthStore = create<IAuthStore>()((set) => ({
  dialogAuth: false,
  setDialogAuth: (dialogAuth) => set({ dialogAuth }),
}));
