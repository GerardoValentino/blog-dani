import { Footer, NavBar } from "../components";
import { Box } from "@mui/material";
import { AboutMe, Contact, Portfolio } from "../pages";
import type { NavItems } from "../types";
import { useMemo, useState } from "react";

const navItems: NavItems[] = [
    { id: 0, name: "Portafolio", isSelected: false },
    { id: 1, name: "Sobre mi", isSelected: true },
    { id: 2, name: "Contacto", isSelected: false }
];

export const MainLayout = () => {
    const [tabs, setSelectedTab] = useState<NavItems[]>(navItems);

    const selectedTab = useMemo(() => tabs.find(tab => tab.isSelected) , [tabs]);

    return (
        <Box
            sx={{
                minHeight: "100vh",
                display: "flex",
                flexDirection: "column"
            }}
        >
            <NavBar 
                navItems={tabs}
                setSelectedTab={setSelectedTab}
            />
            {/* CONTENIDO PRINCIPAL */}
            <Box sx={{ flexGrow: 1, p: 0 }}>
                {selectedTab && selectedTab.id === 0 && (
                    <Portfolio />
                )}
                {selectedTab && selectedTab.id === 1 && (
                    <AboutMe />
                )}
                {selectedTab && selectedTab.id === 2 && (
                    <Contact />
                )}
            </Box>
            {/* FOOTER */}
            <Footer />
        </Box>
    );
}