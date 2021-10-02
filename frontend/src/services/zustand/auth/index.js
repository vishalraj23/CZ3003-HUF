import create from 'zustand';

const initialState = {
  userInfo: null,
  signedIn: false,
  isLoading: false,
};

export const useAuthStore = create((set, get) => ({
  ...initialState,
  login: async () => {
    set({ signedIn: true });
  },
}));
