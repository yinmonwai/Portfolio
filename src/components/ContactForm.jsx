// import React, { useState } from "react";
// import {
//   Box,
//   TextField,
//   Button,
//   Typography,
//   IconButton,
//   Link,
//   Alert,
//   Container,
// } from "@mui/material";
// import PhoneIcon from "@mui/icons-material/Phone";
// import EmailIcon from "@mui/icons-material/Email";
// import LocationOnIcon from "@mui/icons-material/LocationOn";
// import FacebookIcon from "@mui/icons-material/Facebook";
// import YouTubeIcon from "@mui/icons-material/YouTube";
// import InstagramIcon from "@mui/icons-material/Instagram";
// import TwitterIcon from "@mui/icons-material/Twitter";
// import GoogleIcon from "@mui/icons-material/Google";
// import LinkedInIcon from "@mui/icons-material/LinkedIn";
// import GitHubIcon from "@mui/icons-material/GitHub";

// export default function ContactForm() {
//   const [submitted, setSubmitted] = useState(false);

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     setSubmitted(true);
//     e.currentTarget.reset();
//     setTimeout(() => setSubmitted(false), 5000);
//   };

  
//   const socialLinks = {
//     facebook: "https://facebook.com/",
//     youtube: "https://youtube.com/",
//     instagram: "https://instagram.com/",
//     twitter: "https://twitter.com/",
//     google: "https://google.com/",
//     linkedin: "https://linkedin.com/in/yinmonwai",
//     github: "https://github.com/yinmonwai",
//   };

//   return (
//     <Container
//       maxWidth="lg"
//       sx={{
//         display: "flex",
//         justifyContent: "center",
//         alignItems: "center",
//         py: { xs: 4, md: 8 },
//       }}
//     >
//       <Box
//         sx={{
//           display: "flex",
//           flexDirection: { xs: "column", md: "row" },
//           width: "100%",
//           bgcolor: "white",
//           borderRadius: 3,
//           overflow: "hidden",
//           boxShadow: 6,
//         }}
//       >
//         {/* Left Form Section */}
//         <Box
//           component="form"
//           onSubmit={handleSubmit}
//           sx={{
//             flex: 1,
//             p: { xs: 3, md: 5 },
//             display: "flex",
//             flexDirection: "column",
//             gap: 2,
//             width: "100%",
//           }}
//         >
//           <Typography variant="h5" fontWeight="bold" mb={1} textAlign="center">
//             Contact Us
//           </Typography>

//           {submitted && (
//             <Alert severity="success" sx={{ width: "100%" }}>
//                Thanks! Your message has been sent.
//             </Alert>
//           )}

//           <TextField name="name" label="Full Name" required fullWidth />
//           <TextField name="phone" label="Phone Number" type="tel" fullWidth />
//           <TextField name="email" label="Email" type="email" required fullWidth />
//           <TextField
//             name="message"
//             label="Message"
//             multiline
//             rows={4}
//             required
//             fullWidth
//           />

//           <Button
//             type="submit"
//             variant="contained"
//             sx={{
//               mt: 2,
//               px: 4,
//               color:"#ffffff",
//               // bgcolor: "#085078",
//                bgcolor: "#9EE493",
//               ":hover": { bgcolor: "#4a00e0" },
//               alignSelf: { xs: "center", md: "flex-start" },
//             }}
//           >
//             Send
//           </Button>
//         </Box>

//         {/* Right Contact Info Section */}
//         <Box
//           sx={{
//             flex: 1,
//             p: { xs: 3, md: 5 },
//             background: "linear-gradient(145deg, rgba(53, 53, 61, 0.9), rgba(59, 59, 71, 0.9))",
//             color: "white",
//             display: "flex",
//             flexDirection: "column",
//             justifyContent: "center",
//             gap: 3,
//           }}
//         >
//           {/* Phone */}
//           <Box display="flex" alignItems="center" gap={1} flexWrap="wrap">
//             <Link
//               href="tel:+959754472496"
//               underline="none"
//               color="inherit"
//               display="flex"
//               alignItems="center"
//               gap={1}
//               sx={{ "&:hover": { color: "primary.main" } }}
//             >
//               <PhoneIcon sx={{ fontSize: { xs: 20, sm: 24 } }} />
//               <Typography sx={{ fontSize: { xs: 14, sm: 16 } }}>
//                 +95 9754472496
//               </Typography>
//             </Link>
//           </Box>

//           {/* Email */}
//           <Box display="flex" alignItems="center" gap={1} flexWrap="wrap">
//             <Link
//               href="mailto:yinmonwai078@gmail.com"
//               underline="none"
//               color="inherit"
//               display="flex"
//               alignItems="center"
//               gap={1}
//               sx={{ "&:hover": { color: "primary.main" } }}
//             >
//               <EmailIcon sx={{ fontSize: { xs: 20, sm: 24 } }} />
//               <Typography sx={{ fontSize: { xs: 14, sm: 16 } }}>
//                 yinmonwai078@gmail.com
//               </Typography>
//             </Link>
//           </Box>

//           {/* Location */}
//           <Box display="flex" alignItems="center" gap={1} flexWrap="wrap">
//             <Link
//               href="https://www.google.com/maps?q=SanChaung+Township,+Yangon,+Myanmar"
//               target="_blank"
//               rel="noopener noreferrer"
//               underline="none"
//               color="inherit"
//               display="flex"
//               alignItems="center"
//               gap={1}
//               sx={{ "&:hover": { color: "primary.main" } }}
//             >
//               <LocationOnIcon sx={{ fontSize: { xs: 20, sm: 24 } }} />
//               <Typography sx={{ fontSize: { xs: 14, sm: 16 } }}>
//                 SanChaung Township, Yangon, Myanmar
//               </Typography>
//             </Link>
//           </Box>

//           {/* Social Icons */}
//           <Box display="flex" gap={2} mt={2} flexWrap="wrap">
//             {[
//               { icon: <FacebookIcon fontSize="large" />, href: socialLinks.facebook, color: "#1877F2" },
//               { icon: <YouTubeIcon fontSize="large" />, href: socialLinks.youtube, color: "#FF0000" },
//               { icon: <InstagramIcon fontSize="large" />, href: socialLinks.instagram, color: "#E4405F" },
//               { icon: <TwitterIcon fontSize="large" />, href: socialLinks.twitter, color: "#1DA1F2" },
//               { icon: <GoogleIcon fontSize="large" />, href: socialLinks.google, color: "#DB4437" },
//               { icon: <LinkedInIcon fontSize="large" />, href: socialLinks.linkedin, color: "#0A66C2" },
//               { icon: <GitHubIcon fontSize="large" />, href: socialLinks.github, color: "#424040ff" },
//             ].map((social, i) => (
//               <IconButton
//                 key={i}
//                 component="a"
//                 href={social.href}
//                 target="_blank"
//                 rel="noopener"
//                 sx={{
//                   color: social.color,
//                   transition: "all 0.3s ease",
//                   "&:hover": { transform: "scale(1.2)", color: "white" },
//                 }}
//               >
//                 {social.icon}
//               </IconButton>
//             ))}
//           </Box>
//         </Box>
//       </Box>
//     </Container>
//   );
// }


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
          {/* Phone */}
          <Box display="flex" alignItems="center" gap={1} flexWrap="wrap">
            <Link
              href="tel:+959754472496"
              underline="none"
              color="inherit"
              display="flex"
              alignItems="center"
              gap={1}
              sx={{ "&:hover": { color: theme.palette.primary.main } }}
            >
              <PhoneIcon />
              <Typography variant="body2">+95 9754472496</Typography>
            </Link>
          </Box>

          {/* Email */}
          <Box display="flex" alignItems="center" gap={1} flexWrap="wrap">
            <Link
              href="mailto:yinmonwai078@gmail.com"
              underline="none"
              color="inherit"
              display="flex"
              alignItems="center"
              gap={1}
              sx={{ "&:hover": { color: theme.palette.primary.main } }}
            >
              <EmailIcon />
              <Typography variant="body2">yinmonwai078@gmail.com</Typography>
            </Link>
          </Box>

          {/* Location */}
          <Box display="flex" alignItems="center" gap={1} flexWrap="wrap">
            <Link
              href="https://www.google.com/maps?q=SanChaung+Township,+Yangon,+Myanmar"
              target="_blank"
              rel="noopener noreferrer"
              underline="none"
              color="inherit"
              display="flex"
              alignItems="center"
              gap={1}
              sx={{ "&:hover": { color: theme.palette.primary.main } }}
            >
              <LocationOnIcon />
              <Typography variant="body2">
                SanChaung Township, Yangon, Myanmar
              </Typography>
            </Link>
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


