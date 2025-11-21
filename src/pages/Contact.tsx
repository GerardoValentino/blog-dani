import { Facebook, Instagram, LinkedIn, WhatsApp } from "@mui/icons-material";
import { Box, Typography } from "@mui/material";

const openExternalLink = (url: string) => {
    window.open(url, "_blank", "noopener,noreferrer");
};

const socialMediaIcons = { 
    fontSize: "100px", 
    cursor: "pointer",
    transition: "transform ease-in-out .2s",
    "&:hover": {
        transform: "scale(1.09)"
    }
};

export const Contact = () => {
    return (
        <>
            <Box
                sx={{
                    display: "flex",
                    flexDirection: { xs: "column", sm: "column", md: "row" },
                    alignItems: "center",
                    justifyContent: "center",
                }}
            >
                <Box 
                    sx={{ 
                        flexGrow: 1, 
                        p: 0, 
                        width: { xs: "100%", md: "100%" },
                        position: "relative",
                        top: -200
                    }}
                >
                    <Box
                        component="img"
                        src={"/banner_02.jpg"}
                        alt="foto_01"
                        sx={{
                            width: "100%",
                            height: "auto",
                            objectFit: "cover",
                            display: "block",
                            mx: "auto",
                            opacity: 0.5,
                        }}
                    />
                    <Box sx={{ width: "100%", textAlign: "center", position: "absolute", bottom: -80 }}>
                        <Typography variant="h1" fontSize={120}>CONTACTO</Typography>
                    </Box>
                </Box>
            </Box>
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
        </>
    );
}