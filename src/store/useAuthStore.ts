import { create } from 'zustand';

interface User {
  id: string;
  name: string;
  email: string;
  phone: string;
  role: string;
  hasFace: boolean;
}

interface AuthStore {
  userInfo: User | null;
  setUserInfo: (user: User | null) => void;
}

export const useAuthStore = create<AuthStore>((set) => ({
  userInfo: null,
  setUserInfo: (user: User | null) => set({ userInfo: user }),
}));
