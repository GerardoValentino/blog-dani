import {
    Box,
    Container,
    Typography,
    IconButton,
    Stack,
    Link,
  } from "@mui/material";
  import FacebookIcon from "@mui/icons-material/Facebook";
  import TwitterIcon from "@mui/icons-material/Twitter";
  import GoogleIcon from "@mui/icons-material/Google";
  import YouTubeIcon from "@mui/icons-material/YouTube";
  import LinkedInIcon from "@mui/icons-material/LinkedIn";


export const Footer = () => {
    return (
        <Box component="footer" sx={{ bgcolor: "grey.900", color: "grey.100" }}>
          {/* parte de arriba */}
          <Box sx={{ py: 6 }}>
            <Container maxWidth="md" sx={{ textAlign: "center" }}>
              <Typography variant="h4" gutterBottom>
                {"[Logo]"}
              </Typography>
    
              <Typography
                variant="body1"
                sx={{ maxWidth: 600, mx: "auto", mb: 3 }}
              >
                {"[Descripcion o informacion de contacto]"}
              </Typography>
    
              <Stack direction="row" spacing={2} justifyContent="center">
                <IconButton color="inherit">
                  <FacebookIcon />
                </IconButton>
                <IconButton color="inherit">
                  <TwitterIcon />
                </IconButton>
                <IconButton color="inherit">
                  <GoogleIcon />
                </IconButton>
                <IconButton color="inherit">
                  <YouTubeIcon />
                </IconButton>
                <IconButton color="inherit">
                  <LinkedInIcon />
                </IconButton>
              </Stack>
            </Container>
          </Box>
    
          {/* barra inferior */}
          <Box sx={{ borderTop: 1, borderColor: "grey.800", py: 2 }}>
            <Container
              maxWidth="md"
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                fontSize: 14,
              }}
            >
              <Typography variant="body2">
                Copyright ©{new Date().getFullYear()}{" "}
                <Link href="#" color="inherit" underline="hover">
                  Daniela Studio
                </Link>
              </Typography>
    
              <Stack direction={{ xs: "column", sm: "column", md:"row" }} spacing={2}>
                <Link href="#" color="inherit" underline="hover">
                  Portafolio
                </Link>
                <Link href="#" color="inherit" underline="hover">
                  Sobre mí
                </Link>
                <Link href="#" color="inherit" underline="hover">
                  Contacto
                </Link>
              </Stack>
            </Container>
          </Box>
        </Box>
    );
}