import React from "react";
import { Box, Typography, Grid, Paper, Avatar } from "@mui/material";
import { FaBuilding } from "react-icons/fa";

const experiences = [
  {
    role: "Web Developer",
    company: "Unity IT Soultion Co.Ltd",
    years: "2023 -2024 ",
    logo: "/company1.png", 
  },
  {
    role: "Web Developer",
    company: "MyDay Thu Kyawal co.Ltd",
    years: "2024 - Present",
    logo: "/company2.png",
  },
];

export default function WorkExperience() {
  return (
    <Box sx={{ py: 6 }}>
      <Typography variant="h5" align="center" sx={{textAlign: "center", mb: 4, fontWeight: 600,color: '#fafbfcff' }}>
        Work Experience
      </Typography>
      <Grid container spacing={2} justifyContent="center">
        {experiences.map((exp, index) => (
          <Grid item xs={12} md={6} key={index}>
            <Paper
              elevation={3}
              sx={{
                p: 3,
                borderRadius: 2,
                display: "flex",
                alignItems: "center",
                gap: 2,
                transition: "transform 0.3s, box-shadow 0.3s",
                "&:hover": {
                  transform: "translateY(-5px)",
                  boxShadow: "0px 8px 20px rgba(0,0,0,0.2)",
                },
              }}
            >
              {exp.logo ? (
                <Avatar src={exp.logo} alt={exp.company} sx={{ width: 56, height: 56 }} />
              ) : (
                <FaBuilding size={40} color="#1976d2" />
              )}
              <Box>
                <Typography variant="subtitle1" fontWeight={600}>
                  {exp.role}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {exp.company}
                </Typography>
                <Typography variant="caption" color="text.secondary">
                  {exp.years}
                </Typography>
              </Box>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
