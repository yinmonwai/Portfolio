import React, { useState } from "react";
import {
  Box,
  TextField,
  Button,
  Typography,
  IconButton,
  Link,
  Alert,
  Container,
  useTheme,
} from "@mui/material";
import {
  Phone as PhoneIcon,
  Email as EmailIcon,
  LocationOn as LocationOnIcon,
  Facebook as FacebookIcon,
  YouTube as YouTubeIcon,
  Instagram as InstagramIcon,
  Twitter as TwitterIcon,
  Google as GoogleIcon,
  LinkedIn as LinkedInIcon,
  GitHub as GitHubIcon,
} from "@mui/icons-material";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const theme = useTheme();

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    e.currentTarget.reset();
    setTimeout(() => setSubmitted(false), 5000);
  };

  const socialLinks = {
    facebook: "https://facebook.com/",
    youtube: "https://youtube.com/",
    instagram: "https://instagram.com/",
    twitter: "https://twitter.com/",
    google: "https://google.com/",
    linkedin: "https://linkedin.com/in/yinmonwai",
    github: "https://github.com/yinmonwai",
  };

  const iconStyle = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: 36,
    height: 36,
    borderRadius: "50px", // oval shape
    backgroundColor: theme.palette.primary.light,
    color: theme.palette.primary.contrastText,
    transition: "all 0.3s ease",
    "&:hover": {
      backgroundColor: theme.palette.primary.main,
      transform: "scale(1.1)",
    },
  };

  const linkStyle = {
    display: "flex",
    alignItems: "center",
    gap: 1,
    color: "inherit",
    textDecoration: "none",
    "&:hover": { color: theme.palette.primary.main },
  };

  return (
    <Container
      id="contact"
      maxWidth="lg"
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        py: { xs: 4, md: 8 },
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          width: "100%",
          borderRadius: 3,
          overflow: "hidden",
          boxShadow: 6,
          bgcolor: theme.palette.background.paper,
        }}
      >
        {/* Left Form Section */}
        <Box
          component="form"
          onSubmit={handleSubmit}
          sx={{
            flex: 1,
            p: { xs: 3, md: 5 },
            display: "flex",
            flexDirection: "column",
            gap: 2,
          }}
        >
          <Typography
            variant="h5"
            fontWeight="bold"
            mb={1}
            textAlign="center"
            color="text.primary"
          >
            Contact Me
          </Typography>

          {submitted && (
            <Alert severity="success" sx={{ width: "100%" }}>
              Thanks! Your message has been sent.
            </Alert>
          )}

          <TextField name="name" label="Full Name" required fullWidth />
          <TextField name="phone" label="Phone Number" type="tel" fullWidth />
          <TextField name="email" label="Email" type="email" required fullWidth />
          <TextField
            name="message"
            label="Message"
            multiline
            rows={4}
            required
            fullWidth
          />

          <Button
            type="submit"
            variant="contained"
            sx={{
              mt: 2,
              px: 4,
              alignSelf: { xs: "center", md: "flex-start" },
              backgroundColor: theme.palette.primary.light,
            }}
          >
            Send
          </Button>
        </Box>

        {/* Right Contact Info Section */}
        <Box
          sx={{
            flex: 1,
            p: { xs: 3, md: 5 },
            background: theme.palette.mode === "dark"
              ? "linear-gradient(145deg, rgba(40,40,45,0.95), rgba(25,25,30,0.95))"
              : "linear-gradient(145deg, rgba(240,240,245,0.95), rgba(220,220,230,0.95))",
            color: theme.palette.text.primary,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            gap: 3,
          }}
        >
          <Box display="flex" flexDirection="column" gap={2}>
      {/* Phone */}
      <Box display="flex" alignItems="center" gap={1} flexWrap="wrap">
        <Link href="tel:+959754472496" sx={linkStyle}>
        <Box sx={iconStyle}>
          <PhoneIcon fontSize="small" />
        </Box>
          <Typography variant="body2">+95 9754472496</Typography>
        </Link>
      </Box>

      {/* Email */}
      <Box display="flex" alignItems="center" gap={1} flexWrap="wrap">
        <Link href="mailto:yinmonwai078@gmail.com" sx={linkStyle}>
        <Box sx={iconStyle}>
          <EmailIcon fontSize="small" />
        </Box>
          <Typography variant="body2">yinmonwai078@gmail.com</Typography>
        </Link>
      </Box>

      {/* Location */}
      <Box display="flex" alignItems="center" gap={1} flexWrap="wrap">
        <Link
          href="https://www.google.com/maps?q=SanChaung+Township,+Yangon,+Myanmar"
          target="_blank"
          rel="noopener noreferrer"
          sx={linkStyle}
        >
        <Box sx={iconStyle}>
          <LocationOnIcon fontSize="small" />
        </Box>
          <Typography variant="body2">
            SanChaung Township, Yangon, Myanmar
          </Typography>
        </Link>
      </Box>
    </Box>

          {/* Social Icons */}
          <Box display="flex" gap={2} mt={2} flexWrap="wrap">
            {[
              { icon: <FacebookIcon />, href: socialLinks.facebook },
              { icon: <YouTubeIcon />, href: socialLinks.youtube },
              { icon: <InstagramIcon />, href: socialLinks.instagram },
              { icon: <TwitterIcon />, href: socialLinks.twitter },
              { icon: <GoogleIcon />, href: socialLinks.google },
              { icon: <LinkedInIcon />, href: socialLinks.linkedin },
              { icon: <GitHubIcon />, href: socialLinks.github },
            ].map((social, i) => (
              <IconButton
                key={i}
                component="a"
                href={social.href}
                target="_blank"
                rel="noopener"
                sx={{
                  color: theme.palette.text.secondary,
                  transition: "all 0.3s ease",
                  "&:hover": {
                    transform: "scale(1.2)",
                    color: theme.palette.primary.main,
                  },
                }}
              >
                {social.icon}
              </IconButton>
            ))}
          </Box>
        </Box>
      </Box>
    </Container>
  );
}


