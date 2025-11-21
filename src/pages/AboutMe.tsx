import { Box, Typography } from "@mui/material";

export const AboutMe = () => {
    return (
        <Box
            sx={{
                display: "flex",
                flexDirection: { xs: "column", sm: "column", md: "row" },
                alignItems: "center",
                justifyContent: "center",
            }}
        >
            {/*Foto */}
            <Box 
                sx={{ 
                    flexGrow: 1, 
                    p: 0, 
                    width: { xs: "100%", md: "100%" },
                }}
            >
                <Box
                    component="img"
                    src={"/foto01.jpeg"}
                    alt="foto_01"
                    sx={{
                        width: 800,
                        height: { xs: "auto", md: 1000 },
                        objectFit: "cover",
                        display: "block",
                        mx: "auto",
                        opacity: 0.5,
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
                        alignItems: "flex-start",
                        width: "50%",
                        gap: 2
                    }}
                >
                    <Typography variant="h1" fontWeight={700}>
                        Un poco de mi
                    </Typography>
                    <Typography variant={"h3"} fontWeight={500}>
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
                        alignItems: "flex-start",
                        width: "50%",
                        gap: 2
                    }}
                >
                    <Typography variant="h1" fontWeight={700}>
                        Habilidades
                    </Typography>
                    <Typography variant="h3" fontWeight={500}>
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
                    <Box sx={{ flexGrow: 1, p: 0 }}>
                        <Box
                            component="img"
                            src={"./iconos.png"}
                            alt="logo"
                            sx={{
                                width: 500,
                                height: 80,
                                objectFit: "contain",
                                borderRadius: 5,
                                display: "block",
                                mx: "auto",
                            }}
                        />
                    </Box>
                </Box>
            </Box>
        </Box>
    );
}