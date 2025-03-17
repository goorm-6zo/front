import { create } from 'zustand';

interface User {
  id: string;
  name: string;
  email: string;
  phone: string;
  role: string;
}

interface AuthStore {
  userInfo: User | null;
  setUserInfo: (user: User) => void;
}

export const useAuthStore = create<AuthStore>((set) => ({
  userInfo: null,
  setUserInfo: (user) => set({ userInfo: user }),
}));
