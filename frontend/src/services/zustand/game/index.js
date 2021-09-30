import create from 'zustand';

import { mockGames } from './mockData';

const initialState = {
  isLoading: false,
  games: [],
};

export const useGameStore = create((set, get) => ({
  ...initialState,
  fetchGames: async () => {
    set({ isLoading: true });
    set({ isLoading: false, games: mockGames });
  },
}));
