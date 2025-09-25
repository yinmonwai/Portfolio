import React from "react";
import { Box, Typography, Grid, Paper } from "@mui/material";
import { FaUniversity } from "react-icons/fa";

const education = [
  {
    degree: "B.Sc. in Computer Science",
    school: "Second Year,University of Computer Studies(Monywa)",
  },
  {
    degree: "The Digital Adda Certificate(Govit of India)",
    school: "Program in HTML,Css and JavaScript for Web Developers",
  },
  {
    degree: "Fairway Technology",
    school: "Professional Web Developer Certification",
  },
  {
    degree: "PageMyanmar",
    school: "Web App Design Course",
  },
  {
    degree: "Info Wave IT Training Center",
    school: "Oracle Database SQL Certified Associate,Power BI,Python for Data Analysis",
  },

];

export default function Education() {
  return (
    <Box sx={{ py: 6 }}>
      <Typography variant="h5" align="center" sx={{ mb: 4, fontWeight: 600 }}>
        Education
      </Typography>
      <Grid container spacing={3} justifyContent="center">
        {education.map((edu, index) => (
          <Grid item xs={12} md={6} key={index}>
            <Paper
              elevation={3}
              sx={{
                p: 3,
                borderRadius: 2,
                display: "flex",
                alignItems: "center",
                gap: 2,
              }}
            >
              <FaUniversity size={30} color="#1976d2" />
              <Box>
                <Typography variant="subtitle1" fontWeight={600}>
                  {edu.degree}
                </Typography>
                <Typography variant="body2">{edu.school}</Typography>
                <Typography variant="caption" color="text.secondary">
                  {edu.year}
                </Typography>
              </Box>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
