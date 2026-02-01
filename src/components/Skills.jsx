import React from "react";
import { Box, Typography, useTheme } from "@mui/material";
import {
  FaReact,
  FaNodeJs,
  FaLaravel,
  FaBootstrap,
  FaHtml5,
  FaCss3Alt,
  FaVuejs,
  FaGitAlt,
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
  SiPhp,
} from "react-icons/si";
import { motion } from "framer-motion";

const skills = [
  { name: "HTML5", icon: <FaHtml5 color="#e34f26" /> },
  { name: "CSS3", icon: <FaCss3Alt color="#1572b6" /> },
  { name: "Bootstrap", icon: <FaBootstrap color="#7952b3" /> },
  { name: "TailwindCSS", icon: <SiTailwindcss color="#38b2ac" /> },
  { name: "JavaScript", icon: <SiJavascript color="#f0db4f" /> },
  { name: "TypeScript", icon: <SiTypescript color="#3178c6" /> },
  { name: "Vue", icon: <FaVuejs color="#4fc08d" /> },
  { name: "React", icon: <FaReact color="#61dafb" /> },
  { name: "Next.js", icon: <SiNextdotjs color="#000000" /> },
  { name: "MUI", icon: <SiMui color="#007fff" /> },
  { name: "Ant Design", icon: <SiAntdesign color="#0170fe" /> },
  { name: "shadcn/ui", icon: <SiShadcnui color="#c0c0c0" /> },
  { name: "PHP", icon: <SiPhp color="#777bb3" /> },
  { name: "Laravel", icon: <FaLaravel color="#ff2d20" /> },
  { name: "Livewire", icon: <SiLivewire color="#0f6ad6" /> },
  { name: "MySQL", icon: <SiMysql color="#4479a1" /> },
  { name: "Node.js", icon: <FaNodeJs color="#3c873a" /> },
  { name: "PostgreSQL", icon: <SiPostgresql color="#336791" /> },
  { name: "MongoDB", icon: <SiMongodb color="#4db33d" /> },
  { name: "Git", icon: <FaGitAlt color="#f1502f" /> },
];

export default function Skills() {
  const theme = useTheme();
  const isDarkMode = theme.palette.mode === "dark";

  // Duplicate list for infinite scroll illusion
  const doubledSkills = [...skills, ...skills];

  const renderMarqueeRow = (reverse = false) => (
    <motion.div
      style={{
        display: "flex",
        gap: "2.5rem",
        marginBottom: "2rem",
        whiteSpace: "nowrap",
      }}
      animate={{
        x: reverse ? ["-50%", "0%"] : ["0%", "-50%"],
      }}
      transition={{
        duration: 25,
        ease: "linear",
        repeat: Infinity,
      }}
    >
      {doubledSkills.map((skill, index) => (
        <Box
          key={`${skill.name}-${index}`}
          sx={{
            flexShrink: 0,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            cursor: "pointer",
            transition: "transform 0.3s ease, filter 0.3s ease",
            "&:hover": {
              transform: "scale(1.2)",
              filter: isDarkMode
                ? "drop-shadow(0 0 8px rgba(255,255,255,0.5))"
                : "drop-shadow(0 0 8px rgba(0,0,0,0.3))",
            },
          }}
        >
          <Box
            sx={{
              fontSize: { xs: "2.5rem", sm: "3.5rem", md: "3rem" },
            }}
          >
            {skill.icon}
          </Box>
          <Typography
            variant="body2"
            sx={{
              mt: 1,
              fontWeight: 600,
              fontSize: { xs: "0.75rem", sm: "0.9rem" },
              color: isDarkMode ? "#e0e0e0" : "#333",
            }}
          >
            {skill.name}
          </Typography>
        </Box>
      ))}
    </motion.div>
  );

  return (
    <Box
      id="skills"
      sx={{
        py: { xs: 6, md: 10 },
        px: { xs: 2, sm: 6 },
        textAlign: "center",
        borderRadius: 6,
        overflow: "hidden",
        // background: isDarkMode
        //   ? "linear-gradient(135deg, #0f172a 0%, #1e293b 100%)"
        //   : "linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%)",
        transition: "background 0.3s ease-in-out",
      }}
    >
      <Typography
        variant="h4"
        sx={{
          fontWeight: 700,
          mb: 2,
          fontSize: { xs: "1.8rem", md: "2.4rem" },
          color: isDarkMode ? "#90caf9" : "#1976d2",
        }}
      >
        Technologies I Work With
      </Typography>

      <Typography
        variant="body1"
        sx={{
          mb: 6,
          color: isDarkMode ? "#cbd5e1" : "#475569",
          maxWidth: "700px",
          mx: "auto",
          lineHeight: 1.8,
        }}
      >
        I’m proficient in these modern technologies and frameworks and always
        eager to learn new ones to expand my skill set.
      </Typography>

      {/* Animated Icon Rows */}
      <Box sx={{ width: "100%", overflow: "hidden" }}>
        {renderMarqueeRow(false)}
        {renderMarqueeRow(true)}
      </Box>
    </Box>
  );
}
