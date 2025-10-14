import React, { useState, useEffect } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Button,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Box,
  useMediaQuery,
  Paper,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";

export default function Navbar({ mode, toggleColorMode }) {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("intro");
  const isMobile = useMediaQuery("(max-width:900px)");

  const toggleDrawer = () => setDrawerOpen(!drawerOpen);

  const menuItems = [
    { id: "intro", label: "Intro" },
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "experience", label: "Projects" },
    { id: "work", label: "Work Experience" },
    { id: "certificates", label: "Education" },
    { id: "contact", label: "Contact" },
  ];

  // Smooth scroll to section
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setActiveSection(id);
    }
    if (isMobile) toggleDrawer();
  };

  // Active section tracking
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        root: null,
        threshold: 0.5,
      }
    );

    menuItems.forEach((item) => {
      const el = document.getElementById(item.id);
      if (el) observer.observe(el);
    });

    return () => {
      menuItems.forEach((item) => {
        const el = document.getElementById(item.id);
        if (el) observer.unobserve(el);
      });
    };
  }, []);

  return (
    <>
      {/* Floating Paper container for rounded navbar */}
      <Paper
        elevation={4}
        sx={{
          position: "fixed",
          top: 12,
          left: "50%",
          transform: "translateX(-50%)",
          width: { xs: "95%", md: "85%" },
          borderRadius: 20,
          overflow: "hidden",
          zIndex: 1300,
        }}
      >
        <AppBar
          position="static"
          sx={{
            background:
              mode === "light"
                ? "rgba(255,255,255,0.85)"
                : "rgba(25,25,25,0.9)",
            backdropFilter: "blur(12px)",
            boxShadow: "none",
            color: mode === "light" ? "#000" : "#fff",
            borderRadius: "20px",
            transition: "0.3s",
          }}
        >
          <Toolbar
            sx={{
              justifyContent: "space-between",
              flexWrap: "wrap",
              py: 0.5,
              px: { xs: 2, sm: 4 },
            }}
          >
            {/* Logo */}
            <Typography
              variant="h6"
              sx={{
                fontWeight: 700,
                letterSpacing: 1,
                cursor: "pointer",
                color: mode === "light" ? "#1976d2" : "#90caf9",
                fontStyle: "italic",
                flexShrink: 0,
              }}
              onClick={() => scrollToSection("intro")}
            >
              Portfolio
            </Typography>

            {/* Desktop Menu (Centered) */}
            {!isMobile && (
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  flexGrow: 1,
                  gap: 2,
                }}
              >
                {menuItems.map((item) => (
                  <Button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    sx={{
                      fontWeight: 500,
                      fontSize: "0.95rem",
                      color:
                        activeSection === item.id
                          ? mode === "light"
                            ? "#1976d2"
                            : "#90caf9"
                          : mode === "light"
                          ? "#333"
                          : "#fff",
                      backgroundColor:
                        activeSection === item.id
                          ? mode === "light"
                            ? "rgba(25,118,210,0.08)"
                            : "rgba(144,202,249,0.08)"
                          : "transparent",
                      borderRadius: "10px",
                      textTransform: "none",
                      px: 2,
                      py: 0.8,
                      transition: "all 0.3s",
                      "&:hover": {
                        backgroundColor:
                          mode === "light"
                            ? "rgba(25,118,210,0.15)"
                            : "rgba(144,202,249,0.15)",
                        transform: "translateY(-2px)",
                      },
                    }}
                  >
                    {item.label}
                  </Button>
                ))}
              </Box>
            )}

            {/* Theme Toggle (Desktop) */}
            {!isMobile && (
              <IconButton onClick={toggleColorMode} color="inherit">
                {mode === "light" ? <DarkModeIcon /> : <LightModeIcon />}
              </IconButton>
            )}

            {/* Mobile Menu */}
            {isMobile && (
              <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                <IconButton onClick={toggleColorMode} color="inherit">
                  {mode === "light" ? <DarkModeIcon /> : <LightModeIcon />}
                </IconButton>
                <IconButton onClick={toggleDrawer} color="inherit">
                  <MenuIcon />
                </IconButton>
              </Box>
            )}
          </Toolbar>
        </AppBar>
      </Paper>

      {/* Mobile Drawer */}
      <Drawer
        anchor="right"
        open={drawerOpen}
        onClose={toggleDrawer}
        PaperProps={{
          sx: {
            backgroundColor: mode === "light" ? "#fafafa" : "#121212",
            color: mode === "light" ? "#000" : "#fff",
          },
        }}
      >
        <Box sx={{ width: 250, pt: 2 }}>
          <List>
            {menuItems.map((item) => (
              <ListItem key={item.id} disablePadding>
                <ListItemButton
                  onClick={() => scrollToSection(item.id)}
                  sx={{
                    backgroundColor:
                      activeSection === item.id
                        ? mode === "light"
                          ? "rgba(25,118,210,0.08)"
                          : "rgba(144,202,249,0.1)"
                        : "transparent",
                  }}
                >
                  <ListItemText
                    primary={item.label}
                    primaryTypographyProps={{
                      fontWeight: activeSection === item.id ? 600 : 500,
                      textAlign: "center",
                      color:
                        activeSection === item.id
                          ? mode === "light"
                            ? "#1976d2"
                            : "#90caf9"
                          : "inherit",
                    }}
                  />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
    </>
  );
}
