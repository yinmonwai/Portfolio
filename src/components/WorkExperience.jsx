import React from "react";
import {
  Box,
  Typography,
  Grid,
  Avatar,
  Chip,
  Stack,
  useTheme,
} from "@mui/material";
import { motion } from "framer-motion";
import { FaBuilding } from "react-icons/fa";

const experiences = [
  {
    role: "Web Developer",
    company: "Unity IT Solution Provider Co. Ltd",
    years: "2023 - 2024",
    logo: "/company1.png",
    description: [
      "Worked on government and enterprise-level systems.",
      "Government Projects: HRMS, Detained Goods Management System, Dennis Solutions Platform.",
      "Maintenance Projects: Geolocation System, Agricultural ChatBot, MIC Supervision, MIC Online Visa, Restaurant Management System.",
    ],
    technologies: [
      "Laravel",
      "Vue.js",
      "Livewire",
      "Tailwind CSS",
      "MySQL",
    ],
  },
  {
    role: "Web Developer",
    company: "MyDay Thu Kyawal Co. Ltd",
    years: "2024 - 2025",
    logo: "/company2.png",
    description: [
      "Developed the WeDay Social Commerce Platform.",
      "Built social feeds, reactions, comments, product-sharing features and Integrated RESTful APIs for social interactions and e-commerce workflows.",
    ],
    technologies: ["React", "Material UI", "JavaScript", "REST API"],
  },
   {
    role: "Web Developer",
    company: "Myanmar Software Integrated Solution Co. Ltd",
    years: "2025 - Present",
    logo: "/company3.png",
    description: [
      "Working on various web and mobile development projects.",
      "Toyota Aye & Sons,AungZabu Admin,Awabar Mobile App",
    ],
    technologies: ["NextJS", "Tailwindcss", "TypeScript","ReactNative","Prisma","NestJs", "PostgreSQL"],
  },
];

export default function WorkExperience() {
  const theme = useTheme();
  const isDark = theme.palette.mode === "dark";

  return (
    <Box
      id="experience"
      sx={{
        py: { xs: 6, md: 10 },
        px: { xs: 2, sm: 4, md: 8 },
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

      {/* Experience Grid */}
      <Grid
        container
        spacing={4}
        alignItems="stretch"   //  equal height
      >
        {experiences.map((exp, index) => (
          <Grid
            item
            xs={12}             // mobile → stacked
            md={6}              // desktop → side by side
            key={index}
            sx={{ display: "flex" }} //  force equal height
          >
            <motion.div
              style={{ width: "100%", display: "flex" }}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
            >
              <Box
                sx={{
                  flex: 1,
                  p: { xs: 2.5, sm: 3 },
                  display: "flex",
                  flexDirection: "column",
                  gap: 2,
                  borderLeft: `4px solid ${
                    isDark ? "#00e5ff" : "#3f51b5"
                  }`,
                  borderRadius: 2,
                  background: isDark
                    ? "rgba(255,255,255,0.08)"
                    : "rgba(255,255,255,0.95)",
                  boxShadow: isDark
                    ? "0 6px 20px rgba(0,0,0,0.4)"
                    : "0 6px 20px rgba(0,0,0,0.12)",
                  backdropFilter: "blur(10px)",
                }}
              >
                {/* Header */}
                <Stack direction="row" spacing={2} alignItems="center">
                  {exp.logo ? (
                    <Avatar
                      src={exp.logo}
                      alt={exp.company}
                      sx={{
                        width: 60,
                        height: 60,
                        border: `2px solid ${
                          isDark ? "#00e5ff" : "#3f51b5"
                        }`,
                      }}
                    />
                  ) : (
                    <FaBuilding
                      size={45}
                      color={isDark ? "#00e5ff" : "#3f51b5"}
                    />
                  )}

                  <Box>
                    <Typography variant="h6" fontWeight={600}>
                      {exp.role}
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{ color: isDark ? "#ccc" : "#555" }}
                    >
                      {exp.company}
                    </Typography>
                    <Typography
                      variant="caption"
                      sx={{
                        color: isDark ? "#aaa" : "#777",
                        fontStyle: "italic",
                      }}
                    >
                      {exp.years}
                    </Typography>
                  </Box>
                </Stack>

                {/* Description */}
                <Box>
                  {exp.description.map((item, i) => (
                    <Typography
                      key={i}
                      variant="body2"
                      sx={{
                        color: isDark ? "#ddd" : "#444",
                        mb: 0.5,
                        lineHeight: 1.6,
                      }}
                    >
                      • {item}
                    </Typography>
                  ))}
                </Box>

                {/* Technologies (always at bottom) */}
                <Stack
                  direction="row"
                  spacing={1}
                  flexWrap="wrap"
                  mt="auto"
                >
                  {exp.technologies.map((tech, i) => (
                    <Chip
                      key={i}
                      label={tech}
                      size="small"
                      sx={{
                        mb: 1,
                        bgcolor: isDark
                          ? "rgba(0,229,255,0.15)"
                          : "rgba(63,81,181,0.1)",
                        color: isDark ? "#00e5ff" : "#3f51b5",
                        fontWeight: 500,
                      }}
                    />
                  ))}
                </Stack>
              </Box>
            </motion.div>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}




