import React from "react";
import { Box, Container, Typography, Grid, Button } from "@mui/material";
import { motion } from "framer-motion";
import cvFile from "../assets/yinmonwai-cv.pdf";
export default function IntroSection({ mode = "light" }) {
  return (
    <Box
      id="hero"
      sx={{
        position: "relative",
        minHeight: "100vh",
        borderRadius: 15,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
        px: { xs: 2, sm: 4, md: 8 },
        py: { xs: 8, md: 0 },
        textAlign: { xs: "center", md: "left" },
      }}
    >
      {/* === Animated Gradient Orbs === */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.5 }}
        transition={{ duration: 2 }}
        style={{
          position: "absolute",
          top: "-20%",
          left: "-10%",
          width: "400px",
          height: "400px",
          borderRadius: "50%",
          filter: "blur(120px)",
          zIndex: 0,
        }}
      />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.4 }}
        transition={{ delay: 1, duration: 2 }}
        style={{
          position: "absolute",
          bottom: "-20%",
          right: "-10%",
          width: "400px",
          height: "400px",
          borderRadius: "50%",
          filter: "blur(120px)",
          zIndex: 0,
        }}
      />

      <Container maxWidth="lg" sx={{ position: "relative", zIndex: 2 }}>
        <Grid
          container
          spacing={6}
          alignItems="center"
          justifyContent="center"
          direction={{ xs: "column-reverse", md: "row" }}
        >
          {/* ===== Left Text ===== */}
          <Grid item xs={12} md={7}>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9 }}
            >
              <Typography
                variant="h3"
                sx={{
                  fontWeight: 700,
                  mb: 1,
                  fontSize: { xs: "1.9rem", sm: "2.4rem", md: "3.2rem" },
                  lineHeight: 1.15,
                  color: "text.primary",
                }}
              >
                <motion.span
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 1.0 }}
                  style={{ display: "inline-block" }}
                >
                  Hello! I’m
                </motion.span>{" "}
                <motion.span
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.5, duration: 0.9 }}
                  style={{
                    color: mode === "light" ? "#1976d2" : "#90caf9",
                    display: "inline-block",
                  }}
                >
                  Yin Mon Wai
                </motion.span>
              </Typography>

              <Typography
                variant="h5"
                sx={{
                  mt: 1,
                  color: "text.secondary",
                  fontSize: { xs: "1.05rem", sm: "1.25rem", md: "1.6rem" },
                }}
              >
                Web Developer
              </Typography>

              <Typography
                variant="body1"
                sx={{
                  mt: 3,
                  maxWidth: 660,
                  color: "text.secondary",
                  fontSize: { xs: "0.95rem", sm: "1rem" },
                  mx: { xs: "auto", md: 0 },
                }}
              >
                I design and build modern, scalable web applications using React,
                Laravel, and other cutting-edge technologies to deliver clean and
                efficient user experiences.
              </Typography>

              <Button
                variant="contained"
                href={cvFile}
                download
                sx={{
                  mt: 4,
                  backgroundColor: mode === "light" ? "#1976d2" : "#90caf9",
                  color: "#000",
                  px: { xs: 3, sm: 4 },
                  py: 1.1,
                  fontWeight: "bold",
                  fontSize: { xs: "0.9rem", sm: "1rem" },
                  borderRadius: "25px",
                  "&:hover": { backgroundColor: "#7ed957" },
                }}
              >
                Get Resume
              </Button>
            </motion.div>
          </Grid>
          
        </Grid>
      </Container>
    </Box>
  );
}
