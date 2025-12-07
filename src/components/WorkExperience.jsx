import React from "react";
import { Box, Typography, Grid, Avatar, useTheme } from "@mui/material";
import { motion } from "framer-motion";
import { FaBuilding } from "react-icons/fa";

const experiences = [
  {
    role: "Web Developer",
    company: "Unity IT Solution Co. Ltd",
    years: "2023 - 2024",
    logo: "/company1.png",
  },
  {
    role: "Web Developer",
    company: "MyDay Thu Kyawal Co. Ltd",
    years: "2024 - 30-11-2025",
    logo: "/company2.png",
  },
];

export default function WorkExperience() {
  const theme = useTheme();
  const isDark = theme.palette.mode === "dark";

  return (
    <Box
      id="experience"
      sx={{
        py: 10,
        px: { xs: 3, sm: 8 },
        transition: "background-color 0.5s ease",
      }}
    >
      {/* Title */}
      <Typography
        variant="h4"
        align="center"
        sx={{
          fontWeight: 700,
          mb: 6,
          background: isDark
            ? "linear-gradient(90deg, #00e5ff, #3f51b5)"
            : "linear-gradient(90deg, #3f51b5, #00bcd4)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
        }}
      >
        Work Experience
      </Typography>

      {/* Work Experience Cards */}
      <Grid container spacing={6} justifyContent="center">
        {experiences.map((exp, index) => (
          <Grid item xs={12} md={6} key={index}>
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                delay: index * 0.1,
                ease: "easeOut",
              }}
              whileHover={{ scale: 1.03 }}
              viewport={{ once: true }}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "1.5rem",
                padding: "1.5rem",
                borderLeft: `4px solid ${
                  isDark ? "#00e5ff" : "#3f51b5"
                }`,
                borderRadius: "14px",
                background: isDark
                  ? "rgba(255, 255, 255, 0.08)"
                  : "rgba(255, 255, 255, 0.7)",
                boxShadow: isDark
                  ? "0 4px 15px rgba(0, 0, 0, 0.4)"
                  : "0 4px 15px rgba(0, 0, 0, 0.1)",
                backdropFilter: "blur(10px)",
                cursor: "default",
                transition: "all 0.3s ease",
              }}
            >
              {exp.logo ? (
                <Avatar
                  src={exp.logo}
                  alt={exp.company}
                  sx={{
                    width: 70,
                    height: 70,
                    border: `2px solid ${
                      isDark ? "#00e5ff" : "#3f51b5"
                    }`,
                    bgcolor: "transparent",
                  }}
                />
              ) : (
                <FaBuilding
                  size={50}
                  color={isDark ? "#00e5ff" : "#3f51b5"}
                />
              )}

              <Box sx={{ textAlign: "left" }}>
                <Typography
                  variant="h6"
                  sx={{
                    fontWeight: 600,
                    color: isDark ? "#fff" : "#222",
                  }}
                >
                  {exp.role}
                </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    color: isDark ? "#ccc" : "#444",
                    fontWeight: 500,
                  }}
                >
                  {exp.company}
                </Typography>
                <Typography
                  variant="caption"
                  sx={{
                    color: isDark ? "#999" : "#666",
                    fontStyle: "italic",
                  }}
                >
                  {exp.years}
                </Typography>
              </Box>
            </motion.div>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}



