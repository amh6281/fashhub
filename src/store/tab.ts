import { create } from 'zustand';

interface TabState {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

const initialState: Pick<TabState, 'activeTab'> = {
  activeTab: 'rec',
};

export const useCurrentTab = create<TabState>((set) => ({
  ...initialState,
  setActiveTab: (tab: string) => set({ activeTab: tab }),
}));
