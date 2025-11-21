import { Box, Modal, Typography } from "@mui/material";
import { useState } from "react";

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    //width: 1400,
    //bgcolor: 'background.paper',
    //border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

const projects = {
    proyecto01: "p01.jpg",
    proyecto02: "p02.jpg",
    proyecto03: "p03.jpg",
    proyecto04: "p04.jpg",
    proyecto05: "p05.jpg",
    proyecto06: "p06.jpg",
    proyecto07: "p07.jpg",
    proyecto08: "p08.jpg",
}


export const Portfolio = () => {
    const [selectedProject, setSelectedProject] = useState<string | null>(null);
    const [open, setOpen] = useState(false);   

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
                        src={"/banner.png"}
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
                        <Typography variant="h1" fontSize={120}>PORTAFOLIO 2025</Typography>
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
                {[
                    "/proyecto01.png",
                    "/proyecto02.png",
                    "/proyecto03.png",
                    "/proyecto04.png",
                ].map((src) => (
                    <Box key={src}>
                        <Box
                            component="img"
                            src={src}
                            alt="logo"
                            sx={{
                                width: 400,
                                height: 400,
                                objectFit: "contain",
                                borderRadius: 5,
                                display: "block",
                                mx: 1,
                                cursor: "pointer",
                                transition: "transform ease-in-out .2s",
                                "&:hover": {
                                    transform: "scale(1.05)"
                                }
                            }}
                            onClick={() => {
                                setSelectedProject(src.split('.')[0].slice(1))
                                setOpen(true)
                            }}
                        />
                    </Box>
                ))}
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
                {[
                    "/proyecto05.png",
                    "/proyecto06.png",
                    "/proyecto07.png",
                    "/proyecto08.png",
                ].map((src) => (
                    <Box key={src}>
                        <Box
                            component="img"
                            src={src}
                            alt="logo"
                            sx={{
                                width: 400,
                                height: 400,
                                objectFit: "contain",
                                borderRadius: 5,
                                display: "block",
                                mx: 1,
                                cursor: "pointer",
                                transition: "transform ease-in-out .2s",
                                "&:hover": {
                                    transform: "scale(1.05)"
                                }
                            }}
                            onClick={() => {
                                setSelectedProject(src.split('.')[0].slice(1))
                                setOpen(true)
                            }}
                        />
                    </Box>
                ))}
            </Box>
            <Modal
                open={open}
                onClose={() => setOpen(false)}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Box
                        component="img"
                        src={`/${projects[selectedProject as keyof typeof projects]}`}
                        alt="logo"
                        sx={{
                            width: 1400,
                            height: "auto",
                            objectFit: "contain",
                            borderRadius: 5,
                            display: "block",
                            mx: 1,
                        }}
                    />
                </Box>
            </Modal>
        </>
    );
}