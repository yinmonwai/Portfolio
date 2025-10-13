// import React, { useState, useEffect } from "react";
// import {
//   AppBar,
//   Toolbar,
//   Typography,
//   Button,
//   Box,
//   IconButton,
//   Drawer,
//   List,
//   ListItem,
//   ListItemButton,
//   ListItemText,
// } from "@mui/material";
// import MenuIcon from "@mui/icons-material/Menu";
// import cvFile from "../assets/cv.pdf";

// const sections = [
//   { id: "about", label: "About" },
//   { id: "skills", label: "Skills" },
//   { id: "experience", label: "Projects" },
//   { id: "work", label: "Work Experience" },
//   // { id: "projects", label: "Projects" },
//   { id: "certificates", label: "Education" },
//   { id: "contact", label: "Contact" },
// ];

// export default function Navbar() {
//   const [open, setOpen] = useState(false);
//   const [activeSection, setActiveSection] = useState("about");

//   // Smooth scroll on menu click
//   const handleScroll = (id) => {
//     const element = document.getElementById(id);
//     if (element) {
//       const yOffset = -80; // adjust for navbar height
//       const y =
//         element.getBoundingClientRect().top + window.pageYOffset + yOffset;
//       window.scrollTo({ top: y, behavior: "smooth" });
//     }
//     setActiveSection(id);
//     setOpen(false);
//   };

//   // Scroll spy effect
//   useEffect(() => {
//     const handleScrollSpy = () => {
//       const scrollPos = window.scrollY + 100;
//       let current = activeSection;

//       for (const section of sections) {
//         const el = document.getElementById(section.id);
//         if (el) {
//           if (
//             el.offsetTop <= scrollPos &&
//             el.offsetTop + el.offsetHeight > scrollPos
//           ) {
//             current = section.id;
//             break;
//           }
//         }
//       }
//       if (current !== activeSection) {
//         setActiveSection(current);
//       }
//     };

//     window.addEventListener("scroll", handleScrollSpy);
//     return () => window.removeEventListener("scroll", handleScrollSpy);
//   }, [activeSection]);

//   // Prevent unwanted auto scroll on refresh
//   useEffect(() => {
//     window.history.scrollRestoration = "manual";
//     window.scrollTo(0, 0);
//   }, []);

//   return (
//     <>
//       <AppBar position="fixed" sx={{ background: "linear-gradient(135deg,  #085078, #9a8478)" }}>
//         <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
//           <Typography variant="h6" sx={{ fontWeight: "bold", color: "#ffffff" }}>
//             My Portfolio
//           </Typography>

//           {/* Desktop Menu */}
//           <Box sx={{ display: { xs: "none", md: "flex" }, color: "white" }}>
//             {sections.map((section) => (
//               <Button
//                 key={section.id}
//                 onClick={() => handleScroll(section.id)}
//                 sx={{
//                   mx: 1,
//                   color: activeSection === section.id ? "#cef08a" : "white",
//                   borderBottom:
//                     activeSection === section.id
//                       ? "2px solid #cef08a"
//                       : "2px solid transparent",
//                   borderRadius: 0,
//                 }}
//               >
//                 {section.label}
//               </Button>
//             ))}

//             {/* Download CV */}
//             <Button
//               variant="contained"
//               href={cvFile}
//               download
//               sx={{ ml: 2,color: "white", backgroundColor:"#085078" }}
//             >
//               Download CV
//             </Button>
//           </Box>

//           {/* Mobile Menu Button */}
//           <IconButton
//             color="inherit"
//             sx={{ display: { xs: "block", md: "none" } }}
//             onClick={() => setOpen(true)}
//           >
//             <MenuIcon />
//           </IconButton>
//         </Toolbar>
//       </AppBar>

//       {/* Drawer for Mobile */}
//       <Drawer anchor="right" open={open} onClose={() => setOpen(false)}>
//         <Box sx={{ width: 250, mt: 2 }}>
//           <List>
//             {sections.map((section) => (
//               <ListItem key={section.id} disablePadding>
//                 <ListItemButton
//                   onClick={() => handleScroll(section.id)}
//                   selected={activeSection === section.id}
//                 >
//                   <ListItemText primary={section.label} />
//                 </ListItemButton>
//               </ListItem>
//             ))}
//             <ListItem disablePadding>
//               <ListItemButton component="a" href={cvFile} download>
//                 <ListItemText primary="Download CV" />
//               </ListItemButton>
//             </ListItem>
//           </List>
//         </Box>
//       </Drawer>
//     </>
//   );
// }


// import React, { useState, useEffect } from "react";
// import {
//   AppBar,
//   Toolbar,
//   Typography,
//   Button,
//   Box,
//   IconButton,
//   Drawer,
//   List,
//   ListItem,
//   ListItemButton,
//   ListItemText,
// } from "@mui/material";
// import MenuIcon from "@mui/icons-material/Menu";
// import cvFile from "../assets/cv.pdf";

// const sections = [
//   { id: "about", label: "About" },
//   { id: "skills", label: "Skills" },
//   { id: "experience", label: "Projects" },
//   { id: "work", label: "Work Experience" },
//   { id: "certificates", label: "Education" },
//   { id: "contact", label: "Contact" },
// ];

// export default function Navbar() {
//   const [open, setOpen] = useState(false);
//   const [activeSection, setActiveSection] = useState("about");

//   const handleScroll = (id) => {
//     const el = document.getElementById(id);
//     if (el) {
//       const yOffset = -80;
//       const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
//       window.scrollTo({ top: y, behavior: "smooth" });
//     }
//     setActiveSection(id);
//     setOpen(false);
//   };

//   useEffect(() => {
//     const onScroll = () => {
//       const scrollPos = window.scrollY + 100;
//       let current = activeSection;
//       for (const section of sections) {
//         const el = document.getElementById(section.id);
//         if (el && el.offsetTop <= scrollPos && el.offsetTop + el.offsetHeight > scrollPos) {
//           current = section.id;
//           break;
//         }
//       }
//       if (current !== activeSection) setActiveSection(current);
//     };
//     window.addEventListener("scroll", onScroll);
//     return () => window.removeEventListener("scroll", onScroll);
//   }, [activeSection]);

//   useEffect(() => {
//     window.history.scrollRestoration = "manual";
//     window.scrollTo(0, 0);
//   }, []);

//   return (
//     <>
//       <AppBar
//         position="fixed"
//         sx={{
//           background: "rgba(10,10,10,0.9)",
//           backdropFilter: "blur(10px)",
//           borderBottom: "1px solid rgba(255,255,255,0.1)",
//         }}
//       >
//         <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
//           <Typography variant="h6" sx={{ fontWeight: "bold", color: "#9EE493" }}>
          
//           </Typography>

//           <Box sx={{ display: { xs: "none", md: "flex" }, color: "white" }}>
//             {sections.map((section) => (
//               <Button
//                 key={section.id}
//                 onClick={() => handleScroll(section.id)}
//                 sx={{
//                   mx: 1,
//                   color: activeSection === section.id ? "#9EE493" : "white",
//                   borderBottom:
//                     activeSection === section.id
//                       ? "2px solid #9EE493"
//                       : "2px solid transparent",
//                   borderRadius: 0,
//                 }}
//               >
//                 {section.label}
//               </Button>
//             ))}

//             {/* <Button
//               variant="contained"
//               href={cvFile}
//               download
//               sx={{
//                 ml: 2,
//                 color: "black",
//                 backgroundColor: "#9EE493",
//                 fontWeight: "bold",
//                 "&:hover": { backgroundColor: "#7ed957" },
//               }}
//             >
//               Download CV
//             </Button> */}
//           </Box>

//           <IconButton
//             color="inherit"
//             sx={{ display: { xs: "block", md: "none" } }}
//             onClick={() => setOpen(true)}
//           >
//             <MenuIcon />
//           </IconButton>
//         </Toolbar>
//       </AppBar>

//       <Drawer anchor="right" open={open} onClose={() => setOpen(false)}>
//         <Box sx={{ width: 250, mt: 2 }}>
//           <List>
//             {sections.map((section) => (
//               <ListItem key={section.id} disablePadding>
//                 <ListItemButton
//                   onClick={() => handleScroll(section.id)}
//                   selected={activeSection === section.id}
//                 >
//                   <ListItemText primary={section.label} />
//                 </ListItemButton>
//               </ListItem>
//             ))}
//             <ListItem disablePadding>
//               <ListItemButton component="a" href={cvFile} download>
//                 <ListItemText primary="Download CV" />
//               </ListItemButton>
//             </ListItem>
//           </List>
//         </Box>
//       </Drawer>
//     </>
//   );
// }


// import React, { useState, useEffect } from "react";
// import {
//   AppBar,
//   Toolbar,
//   Typography,
//   Button,
//   Box,
//   IconButton,
//   Drawer,
//   List,
//   ListItem,
//   ListItemButton,
//   ListItemText,
// } from "@mui/material";
// import MenuIcon from "@mui/icons-material/Menu";
// import cvFile from "../assets/cv.pdf";

// const sections = [
//   { id: "about", label: "About" },
//   { id: "skills", label: "Skills" },
//   { id: "experience", label: "Projects" },
//   { id: "work", label: "Work Experience" },
//   { id: "certificates", label: "Education" },
//   { id: "contact", label: "Contact" },
// ];

// export default function Navbar() {
//   const [open, setOpen] = useState(false);
//   const [activeSection, setActiveSection] = useState("about");

//   const handleScroll = (id) => {
//     const el = document.getElementById(id);
//     if (el) {
//       const yOffset = -80;
//       const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
//       window.scrollTo({ top: y, behavior: "smooth" });
//     }
//     setActiveSection(id);
//     setOpen(false);
//   };

//   useEffect(() => {
//     const onScroll = () => {
//       const scrollPos = window.scrollY + 100;
//       let current = activeSection;
//       for (const section of sections) {
//         const el = document.getElementById(section.id);
//         if (el && el.offsetTop <= scrollPos && el.offsetTop + el.offsetHeight > scrollPos) {
//           current = section.id;
//           break;
//         }
//       }
//       if (current !== activeSection) setActiveSection(current);
//     };
//     window.addEventListener("scroll", onScroll);
//     return () => window.removeEventListener("scroll", onScroll);
//   }, [activeSection]);

//   useEffect(() => {
//     window.history.scrollRestoration = "manual";
//     window.scrollTo(0, 0);
//   }, []);

//   return (
//     <>
//       <AppBar
//         position="fixed"
//         sx={{
//           background: "rgba(10,10,10,0.9)",
//           backdropFilter: "blur(10px)",
//           borderBottom: "1px solid rgba(255,255,255,0.1)",
//         }}
//       >
//         <Toolbar sx={{ display: "flex", justifyContent: "center" }}>
//           {/* Centered Menu */}
//           <Box sx={{ display: { xs: "none", md: "flex" }, gap: 3 }}>
//             {sections.map((section) => (
//               <Button
//                 key={section.id}
//                 onClick={() => handleScroll(section.id)}
//                 sx={{
//                   color: activeSection === section.id ? "#9EE493" : "white",
//                   borderBottom:
//                     activeSection === section.id
//                       ? "2px solid #9EE493"
//                       : "2px solid transparent",
//                   borderRadius: 0,
//                   fontWeight: "bold",
//                   fontSize:20,
//                   textTransform: "none",
//                 }}
//               >
//                 {section.label}
//               </Button>
//             ))}
//           </Box>

//           {/* Mobile Menu */}
//           <IconButton
//             color="inherit"
//             sx={{ display: { xs: "block", md: "none" }, position: "absolute", right: 10 }}
//             onClick={() => setOpen(true)}
//           >
//             <MenuIcon />
//           </IconButton>
//         </Toolbar>
//       </AppBar>

//       <Drawer anchor="right" open={open} onClose={() => setOpen(false)}>
//         <Box sx={{ width: 250, mt: 2 }}>
//           <List>
//             {sections.map((section) => (
//               <ListItem key={section.id} disablePadding>
//                 <ListItemButton
//                   onClick={() => handleScroll(section.id)}
//                   selected={activeSection === section.id}
//                 >
//                   <ListItemText primary={section.label} />
//                 </ListItemButton>
//               </ListItem>
//             ))}
//             <ListItem disablePadding>
//               <ListItemButton component="a" href={cvFile} download>
//                 <ListItemText primary="Download CV" />
//               </ListItemButton>
//             </ListItem>
//           </List>
//         </Box>
//       </Drawer>
//     </>
//   );
// }


import React, { useEffect, useState } from "react";
import {
  AppBar,
  Toolbar,
  Button,
  Box,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Tooltip,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import cvFile from "../assets/cv.pdf";

const sections = [
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "experience", label: "Projects" },
  { id: "work", label: "Work Experience" },
  { id: "certificates", label: "Education" },
  { id: "contact", label: "Contact" },
];

export default function Navbar({ mode = "dark", toggleColorMode }) {
  const [open, setOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("about");
  const [elevate, setElevate] = useState(false);

  const handleScroll = (id) => {
    const el = document.getElementById(id);
    if (el) {
      const yOffset = -80; // navbar height offset
      const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
    setActiveSection(id);
    setOpen(false);
  };

  useEffect(() => {
    const onScroll = () => {
      const scrollPos = window.scrollY + 100;
      let current = activeSection;
      for (const section of sections) {
        const el = document.getElementById(section.id);
        if (el && el.offsetTop <= scrollPos && el.offsetTop + el.offsetHeight > scrollPos) {
          current = section.id;
          break;
        }
      }
      if (current !== activeSection) setActiveSection(current);

      setElevate(window.scrollY > 20);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [activeSection]);

  useEffect(() => {
    // prevent default scroll restoration weirdness on route changes
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <AppBar
        position="fixed"
        elevation={elevate ? 6 : 0}
        sx={{
          background: "rgba(10,10,10,0.6)",
          backdropFilter: "blur(8px)",
          borderBottom: "1px solid rgba(255,255,255,0.06)",
        }}
      >
        <Toolbar sx={{ display: "flex", justifyContent: "center", position: "relative" }}>
          {/* Desktop Centered Menu */}
          <Box sx={{ display: { xs: "none", md: "flex" }, gap: 3 }}>
            {sections.map((section) => (
              <Button
                key={section.id}
                onClick={() => handleScroll(section.id)}
                sx={{
                  color: activeSection === section.id ? "#9EE493" : "white",
                  borderBottom:
                    activeSection === section.id ? "2px solid #9EE493" : "2px solid transparent",
                  borderRadius: 0,
                  fontWeight: "700",
                  textTransform: "none",
                  fontSize: { md: "0.95rem", lg: "1rem" },
                }}
              >
                {section.label}
              </Button>
            ))}
          </Box>

          {/* Right-side buttons (always visible on larger screens) */}
          <Box
            sx={{
              position: "absolute",
              right: 12,
              display: "flex",
              gap: 1,
              alignItems: "center",
            }}
          >
            {/* Theme toggle */}
            <Tooltip title={mode === "light" ? "Switch to dark" : "Switch to light"}>
              <IconButton color="inherit" onClick={toggleColorMode} aria-label="toggle theme">
                {mode === "light" ? <DarkModeIcon /> : <LightModeIcon />}
              </IconButton>
            </Tooltip>

            {/* Download CV (desktop) */}
            {/* <Box sx={{ display: { xs: "none", md: "block" } }}>
              <Button
                variant="contained"
                href={cvFile}
                download
                sx={{
                  backgroundColor: "#9EE493",
                  color: "#000",
                  fontWeight: "700",
                  textTransform: "none",
                  borderRadius: "20px",
                  "&:hover": { backgroundColor: "#7ed957" },
                }}
              >
                Download CV
              </Button>
            </Box> */}

            {/* Mobile menu icon */}
            <IconButton
              color="inherit"
              sx={{ display: { xs: "block", md: "none" } }}
              onClick={() => setOpen(true)}
              aria-label="open menu"
            >
              <MenuIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>

      {/* Mobile Drawer */}
      <Drawer anchor="right" open={open} onClose={() => setOpen(false)}>
        <Box sx={{ width: 280, mt: 2 }}>
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

            <ListItem disablePadding>
              <ListItemButton onClick={toggleColorMode}>
                <ListItemText
                  primary={mode === "light" ? "Switch to dark" : "Switch to light"}
                />
              </ListItemButton>
            </ListItem>
          </List>
        </Box>
      </Drawer>
    </>
  );
}
