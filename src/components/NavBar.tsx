import {
  AppBar,
  Box,
  Button,
  CssBaseline,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Toolbar,
  Typography,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useState } from "react";
import type { NavItems } from "../types";


interface Props {
    navItems: NavItems[];
    setSelectedTab: React.Dispatch<React.SetStateAction<NavItems[]>>;
    window?: () => Window;
}

const drawerWidth = 240;

export const NavBar = ({ navItems, window, setSelectedTab }: Props) => {
    const [mobileOpen, setMobileOpen] = useState(false);
  
    const handleDrawerToggle = () => {
      setMobileOpen((prevState) => !prevState);
    };
  
    const drawer = (
      <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
        <Typography variant="h6" sx={{ my: 2 }}>
          MUI
        </Typography>
        <Divider />
        <List>
          {navItems.map((item) => (
            <ListItem key={item.id} disablePadding>
              <ListItemButton sx={{ textAlign: 'center' }}>
                <ListItemText primary={item.name} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Box>
    );
  
    const container = window !== undefined ? () => window().document.body : undefined;
  
  return (
    <>
      <Box sx={{ display: "flex", mb: 15 }}>
        <CssBaseline />
        <AppBar component="nav" sx={{ padding: "18px 0 18px 0" }}>
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ mr: 2, display: { sm: "none" } }}
            >
              <MenuIcon />
            </IconButton>
            <Typography
              variant="h6"
              component="div"
              sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
            >
              {"[Logo]"}
            </Typography>
            <Box sx={{ display: { xs: "none", sm: "block", gap: 2 } }}>
              {navItems.map((item) => (
                <Button
                  key={item.id}
                  sx={{ 
                    color: item.isSelected ? "#000" : "#fff",
                    backgroundColor: item.isSelected ? "#fff" : "none"
                  }}
                  onClick={() => setSelectedTab(prev => {
                    const prevTabs = [...prev]
                    return prevTabs.map(tab => {
                      tab.isSelected = tab.id === item.id ? true : false;
                      return tab
                    })
                  })}
                >
                  <Typography variant="body1" fontWeight={700}>
                    {item.name}
                  </Typography>
                </Button>
              ))}
            </Box>
          </Toolbar>
        </AppBar>
        <nav>
          <Drawer
            container={container}
            variant="temporary"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
            sx={{
              display: { xs: "block", sm: "none" },
              "& .MuiDrawer-paper": {
                boxSizing: "border-box",
                width: drawerWidth,
              },
            }}
          >
            {drawer}
          </Drawer>
        </nav>
      </Box>
    </>
  );
};
