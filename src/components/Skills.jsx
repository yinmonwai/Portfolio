import React from "react";
import { Box, Typography, Grid, Paper } from "@mui/material";
import {
  FaReact,
  FaNodeJs,
  FaDocker,
  FaLaravel,
  FaBootstrap,
  FaHtml5,
  FaCss3Alt,
  FaVuejs,
} from "react-icons/fa";
import {
  SiMongodb,
  SiPostgresql,
  SiMui,
  SiJavascript,
  SiTypescript, 
  SiMysql,
  SiLivewire,
  SiTailwindcss,
  SiNextdotjs,  
  SiAntdesign,  
  SiShadcnui,
} from "react-icons/si";

// Skills list with icons
const skills = [
  { name: "HTML5", icon: <FaHtml5 color="#e34f26" /> },
  { name: "CSS3", icon: <FaCss3Alt color="#1572b6" /> },
  { name: "Bootstrap", icon: <FaBootstrap color="#7952b3" /> },
  { name: "TailwindCSS", icon: <SiTailwindcss color="#38b2ac" /> },
  { name: "JavaScript", icon: <SiJavascript color="#f0db4f" /> },
  { name: "Vue", icon: <FaVuejs color="#4fc08d" /> },
  { name: "React", icon: <FaReact color="#61dafb" /> },
  { name: "MUI", icon: <SiMui color="#007fff" /> },
  { name: "Ant Design", icon: <SiAntdesign color="#0170fe" /> },
  { name: "shadcn/ui", icon: <SiShadcnui color="#000000" /> },
  { name: "Laravel", icon: <FaLaravel color="#ff2d20" /> },
  { name: "Livewire", icon: <SiLivewire color="#0f6ad6" /> },
  { name: "MySQL", icon: <SiMysql color="#4479a1" /> },
  { name: "TypeScript", icon: <SiTypescript color="#3178c6" /> }, 
  { name: "Next JS", icon: <SiNextdotjs color="#61dafb" /> },
  { name: "Node.js", icon: <FaNodeJs color="#3c873a" /> },
  { name: "Express", icon: <FaNodeJs color="#000" /> },
  { name: "PostgreSQL", icon: <SiPostgresql color="#336791" /> },
  { name: "MongoDB", icon: <SiMongodb color="#4db33d" /> },
];

export default function Skills() {
  return (
    <Grid item xs={12} md={7}>
      <Typography variant="h6" sx={{ textAlign: "center", mt: 2, mb: 2, fontWeight: 600,color: '#fafbfcff' }}>
        My Work With
      </Typography>

      {/* Skills Grid with Wave Animation */}
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          gap: 2,
          justifyContent: "center",
        }}
      >
        {skills.map((skill, index) => (
          <Paper
            key={skill.name}
            elevation={3}
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 1.5,
              px: 2,
              py: 1,
              borderRadius: 2,
              minWidth: "120px",
              fontSize: { xs: "1.8rem", sm: "2rem", md: "2.3rem" },
              "& svg": {
                fontSize: "inherit",
              },
              animation: "wave 2s ease-in-out infinite",
              animationDelay: `${index * 0.15}s`, // Stagger effect
              "@keyframes wave": {
                "0%, 100%": { transform: "translateX(0)" },
                "80%": { transform: "translateX(-12px)" },
              },
            }}
          >
            {skill.icon}
            <Typography
              variant="body2"
              sx={{
                fontWeight: 500,
                fontSize: { xs: "0.8rem", sm: "0.9rem", md: "1rem" },
              }}
            >
              {skill.name}
            </Typography>
          </Paper>
        ))}
      </Box>
    </Grid>
  );
}
