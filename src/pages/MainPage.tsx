import { Box, Button, Typography, Divider } from "@mui/material";
import { useNavigationStore } from "../store/tab.store";
import { useMemo } from "react";
import type { NavItems } from "../types";
import { Facebook, Instagram, LinkedIn, WhatsApp } from "@mui/icons-material";


const socialMediaIcons = { 
    fontSize: "70px", 
    cursor: "pointer",
    transition: "transform ease-in-out .2s",
    "&:hover": {
        transform: "scale(1.09)"
    }
};

const openExternalLink = (url: string) => {
    window.open(url, "_blank", "noopener,noreferrer");
};

export const MainPage = () => {
    const { tabs, setSelectedTab } = useNavigationStore();
    const selectedTab: NavItems | undefined = useMemo(() => tabs.find(tab => tab.isSelected) , [tabs]);

    console.log("selectedTab ==> " , selectedTab)

    return (
        <>
            <Box
                sx={{
                    backgroundImage: "url('/foto_principal.jpg')",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                    minHeight: "100vh",
                    width: "100%",
                    display: "flex",
                    justifyContent: "space-between",
                    px: 20
                }}
            >
                <Box 
                    sx={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "center",
                        gap: 30
                    }}
                >
                    <Box
                        component="img"
                        src={"/imagotipo_positivo.png"}
                        alt="foto_01"
                        sx={{
                            width: 600,
                            height: "auto",
                            objectFit: "cover",
                            display: "block",
                            mx: "auto"
                        }}
                    />
                    <Box
                        sx={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            width: "100%",
                            mb: 2
                        }}
                    >
                        <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", gap: 4 }}>  
                            <Instagram
                                sx={socialMediaIcons}
                                onClick={() => openExternalLink("https://www.instagram.com/daniela_studio.mx?igsh=M282bThuOWxiam0y&utm_source=qr")}
                            />
                            <Facebook 
                                sx={socialMediaIcons} 
                                onClick={() => openExternalLink("https://www.facebook.com/share/1DRiTxMSnH/?mibextid=wwXIfr")}
                            />
                            <WhatsApp 
                                sx={socialMediaIcons} 
                                onClick={() => openExternalLink("https://wa.me/523151257304")}
                            />
                            <LinkedIn 
                                sx={socialMediaIcons} 
                                onClick={() => openExternalLink("https://www.linkedin.com/in/daniela-ortiz-666bb4371?utm_source=share_via&utm_content=profile&utm_medium=member_ios")}
                            />
                        </Box>
                    </Box>
                    <Box
                        sx={{
                            textAlign: "center"
                        }}
                    >
                        <Typography
                            variant="body1"
                            sx={{ maxWidth: 600, mx: "auto", mb: 3, fontSize: "20px" }}
                        >
                            Amo el diseño y su poder para transmitir emociones.
                            Como diseñadora gráfica, busco crear piezas que reflejen autenticidad, estilo y personalidad.
                            Cada color, forma y detalle cuenta una historia única.
                        </Typography>
                    </Box>
                </Box>
                <Box
                    sx={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "flex-end",
                        justifyContent: "center",
                        width: "100%",
                        gap: 20
                    }}
                >
                    <Box 
                        sx={{ 
                            width: "30%",
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "flex-end",
                        }}
                    >
                        <Button onClick={() => setSelectedTab(0)}>
                            <Typography variant="h2" color="#FFF">Portafolio</Typography>
                        </Button>
                        <Divider sx={{ width: "100%", borderColor: "#FFF", borderWidth: 2 }} />
                    </Box>
                    
                    <Box
                        sx={{ 
                            width: "30%",
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "flex-end",
                        }}
                    >
                        <Button onClick={() => setSelectedTab(1)}>
                            <Typography variant="h2" color="#FFF">Sobre mí</Typography>
                        </Button>
                        <Divider sx={{ width: "100%", borderColor: "#FFF", borderWidth: 2 }} />
                    </Box>
                    
                    <Box
                        sx={{ 
                            width: "30%",
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "flex-end",
                        }}
                    >
                        <Button onClick={() => setSelectedTab(2)}>
                            <Typography variant="h2" color="#FFF">Contacto</Typography>
                        </Button>
                        <Divider sx={{ width: "100%", borderColor: "#FFF", borderWidth: 2 }} />
                    </Box> 
                </Box>

            </Box>
        </>
    );
}