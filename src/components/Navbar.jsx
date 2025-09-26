import React, { useState, useEffect } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import cvFile from "../assets/cv.pdf";

const sections = [
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "experience", label: "Projects" },
  { id: "work", label: "Work Experience" },
  // { id: "projects", label: "Projects" },
  { id: "certificates", label: "Education" },
  { id: "contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("about");

  // Smooth scroll on menu click
  const handleScroll = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -80; // adjust for navbar height
      const y =
        element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
    setActiveSection(id);
    setOpen(false);
  };

  // Scroll spy effect
  useEffect(() => {
    const handleScrollSpy = () => {
      const scrollPos = window.scrollY + 100;
      let current = activeSection;

      for (const section of sections) {
        const el = document.getElementById(section.id);
        if (el) {
          if (
            el.offsetTop <= scrollPos &&
            el.offsetTop + el.offsetHeight > scrollPos
          ) {
            current = section.id;
            break;
          }
        }
      }
      if (current !== activeSection) {
        setActiveSection(current);
      }
    };

    window.addEventListener("scroll", handleScrollSpy);
    return () => window.removeEventListener("scroll", handleScrollSpy);
  }, [activeSection]);

  // Prevent unwanted auto scroll on refresh
  useEffect(() => {
    window.history.scrollRestoration = "manual";
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <AppBar position="fixed" sx={{ background: "linear-gradient(135deg, #1e130c, #9a8478)" }}>
        <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
          <Typography variant="h6" sx={{ fontWeight: "bold", color: "#ffffff" }}>
            My Portfolio
          </Typography>

          {/* Desktop Menu */}
          <Box sx={{ display: { xs: "none", md: "flex" }, color: "white" }}>
            {sections.map((section) => (
              <Button
                key={section.id}
                onClick={() => handleScroll(section.id)}
                sx={{
                  mx: 1,
                  color: activeSection === section.id ? "#cef08a" : "white",
                  borderBottom:
                    activeSection === section.id
                      ? "2px solid #cef08a"
                      : "2px solid transparent",
                  borderRadius: 0,
                }}
              >
                {section.label}
              </Button>
            ))}

            {/* Download CV */}
            <Button
              variant="contained"
            
              href={cvFile}
              download
              sx={{ ml: 2,color: "white", backgroundColor:"#242222ff" }}
            >
              Download CV
            </Button>
          </Box>

          {/* Mobile Menu Button */}
          <IconButton
            color="inherit"
            sx={{ display: { xs: "block", md: "none" } }}
            onClick={() => setOpen(true)}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>

      {/* Drawer for Mobile */}
      <Drawer anchor="right" open={open} onClose={() => setOpen(false)}>
        <Box sx={{ width: 250, mt: 2 }}>
          <List>
            {sections.map((section) => (
              <ListItem key={section.id} disablePadding>
                <ListItemButton
                  onClick={() => handleScroll(section.id)}
                  selected={activeSection === section.id}
                >
                  <ListItemText primary={section.label} />
                </ListItemButton>
              </ListItem>
            ))}
            <ListItem disablePadding>
              <ListItemButton component="a" href={cvFile} download>
                <ListItemText primary="Download CV" />
              </ListItemButton>
            </ListItem>
          </List>
        </Box>
      </Drawer>
    </>
  );
}
