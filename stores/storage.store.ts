import { create } from 'zustand';
import { devtools, persist } from 'zustand/middleware';

interface IStorage {
  userName: string;
  emailOrPhone: string;
  auth: boolean;
  handleLogout: () => void;
  setAuth: (auth: boolean) => void;
  handleLogin: (props: PropsLoginTypes) => void;
}

type PropsLoginTypes = {
  emailOrPhone: string;
  userName: string;
};

export const useStorageStore = create<IStorage>()(
  devtools(
    persist(
      (set) => ({
        emailOrPhone: '',
        userName: '',
        auth: false,
        setAuth: (auth) => set({ auth }),
        handleLogin: ({ emailOrPhone, userName }) =>
          set({ emailOrPhone, userName, auth: true }),
        handleLogout: () =>
          set({ emailOrPhone: '', userName: '', auth: false }),
      }),
      { name: 'traveloka-clone-storage' },
    ),
  ),
);
