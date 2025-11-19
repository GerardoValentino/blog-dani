import { Box, Typography } from "@mui/material";

export const AboutMe = () => {
    return (
        <Box
            sx={{
                display: "flex",
                flexDirection: { xs: "column", sm: "column", md: "row" },
                alignItems: "center",
                justifyContent: "center"
            }}
        >
            {/*Foto */}
            <Box sx={{ flexGrow: 1, p: 4, width: { xs: "100%", md: "50%" } }}>
                <Box
                    component="img"
                    src={"/foto01.jpeg"}
                    alt="foto_01"
                    sx={{
                        width: "100%",
                        height: { xs: "auto", md: "50vh" },
                        objectFit: "cover",
                        display: "block",
                        mx: "auto",
                    }}
                />
            </Box>
            {/*Descripcion */}
            <Box
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    gap: 6,
                    padding: "30px"
                }}
            >
                <Box
                    sx={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        gap: 2
                    }}
                >
                    <Typography variant="h1" fontWeight={700} textAlign={"center"}>
                        Un poco de mi
                    </Typography>
                    <Typography variant={"h3"} fontWeight={500} textAlign={"center"}>
                        Soy diseñadora gráfica con un enfoque en la creacion visual y la comunicacion estetica.
                        Me apasiona transformar ideas en diseños que conecten, transmitan y destaquen por su identidad.
                        Disfruto experimentar con el color, la composición y las formas para construir proyectos con propósito.
                        Cada diseño para mi es una oportunidad de contar una historia visual única.
                    </Typography>
                </Box>
                
                <Box
                    sx={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        gap: 2
                    }}
                >
                    <Typography variant="h1" fontWeight={700} textAlign={"center"}>
                        Habilidades
                    </Typography>
                    <Typography variant="h3" fontWeight={500} textAlign={"center"}>
                        Tengo experiencia en branding, diseño editorial, edición de video y animación.
                        Domino herramientas como Illustrator, Photoshop, Premiere Pro, After Effects, InDesign, Lightroom, Figma y ZBrush.
                        Soy creativa, detallista y me guista trabajar en proyectos que mezclen estética y funcionalidad.
                    </Typography>
                </Box>

                {/*Logotipos */}
                <Box
                    sx={{
                        display: "flex",
                        flexDirection: { xs: "column", sm: "column", md: "row" },
                        alignItems: "center",
                        justifyContent: "center",
                        gap: 2,
                    }}
                >
                    {[
                        "/adobe_illustrator_logo.png",
                        "/adobe_premiere_logo.png",
                        "/after_effects_logo.png",
                        "/figma_logo.png",
                        "/indesign_logo.png",
                        "/lightroom_logo.png",
                        "/photoshop_logo.jpg",
                        "/zbrush_logo.png",
                    ].map((src) => (
                        <Box key={src} sx={{ flexGrow: 1, p: 4 }}>
                            <Box
                                component="img"
                                src={src}
                                alt="logo"
                                sx={{
                                    width: 100,
                                    height: 100,
                                    objectFit: "contain",
                                    borderRadius: 5,
                                    display: "block",
                                    mx: "auto",
                                }}
                            />
                        </Box>
                    ))}
                </Box>
            </Box>
        </Box>
    );
}