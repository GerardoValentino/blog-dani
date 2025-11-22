import { Footer, NavBar } from "../components";
import { Box } from "@mui/material";
import { AboutMe, Contact, Portfolio } from "../pages";
import { useMemo } from "react";
import { useNavigationStore } from "../store/tab.store";

export const MainLayout = () => {
    const { tabs } = useNavigationStore();
    const selectedTab = useMemo(() => tabs.find(tab => tab.isSelected) , [tabs]);

    return (
        <Box
            sx={{
                minHeight: "100vh",
                display: "flex",
                flexDirection: "column"
            }}
        >
            <NavBar />
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