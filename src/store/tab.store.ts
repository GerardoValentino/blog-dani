import { create } from "zustand" 
import { devtools } from "zustand/middleware"
import type { NavItems } from "../types"

type NavigationStore = {
    tabs: NavItems[];
    setSelectedTab: (id: number) => void;
}

export const useNavigationStore = create<NavigationStore>()(devtools((set, get) => ({
    tabs: [
        { id: 0, name: "Portafolio", isSelected: false },
        { id: 1, name: "Sobre mi", isSelected: false },
        { id: 2, name: "Contacto", isSelected: false }
    ],

    setSelectedTab: (id) => {
        const { tabs } = get();
        const prevTabs = [...tabs];
        const updatedTabs = prevTabs.map(tab => {
            tab.isSelected = tab.id === id ? true : false;
            return tab;
        });

        set({ tabs: updatedTabs });
    }
})))