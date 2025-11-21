import {
    Box,
    Container,
    Typography,
    IconButton,
    Stack,
    Link,
  } from "@mui/material";
  import FacebookIcon from "@mui/icons-material/Facebook";
  import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { Instagram, WhatsApp } from "@mui/icons-material";


export const Footer = () => {
    return (
        <Box component="footer" sx={{ bgcolor: "grey.900", color: "grey.100" }}>
          {/* parte de arriba */}
          <Box sx={{ py: 6 }}>
            <Container maxWidth="md" sx={{ textAlign: "center" }}>
              <Box sx={{ width: "100%", display: "flex", justifyContent: "center", mb: 2 }}>
                <Box
                  component="img"
                  src={"/logo.png"}
                  alt="foto_01"
                  sx={{
                    width: { xs: 150, sm: 150, md: 150 },
                    borderRadius: 5,
                    display: "block"
                  }}
                />
              </Box>
    
              <Typography
                variant="body1"
                sx={{ maxWidth: 600, mx: "auto", mb: 3 }}
              >
                Amo el diseño y su poder para transmitir emociones.
                Como diseñadora gráfica, busco crear piezas que reflejen autenticidad, estilo y personalidad.
                Cada color, forma y detalle cuenta una historia única.
              </Typography>
    
              <Stack direction="row" spacing={2} justifyContent="center">
                <IconButton 
                  color="inherit"
                  aria-label="Instagram"
                  href="https://www.instagram.com/daniela_studio.mx?igsh=M282bThuOWxiam0y&utm_source=qr"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Instagram />
                </IconButton>
                <IconButton 
                  color="inherit"
                  aria-label="Facebook"
                  href="https://www.facebook.com/share/1DRiTxMSnH/?mibextid=wwXIfr"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FacebookIcon />
                </IconButton>
                <IconButton 
                  color="inherit"
                  aria-label="WhatsApp"
                  href="https://wa.me/523151257304"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <WhatsApp />
                </IconButton>
                <IconButton 
                  color="inherit"
                  aria-label="LinkedIn"
                  href="https://www.linkedin.com/in/daniela-ortiz-666bb4371?utm_source=share_via&utm_content=profile&utm_medium=member_ios"
                  target="_blank"
                  rel="noopener noreferrer"
                >
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