import { Box, Typography, Container, Button } from "@mui/material";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        background: "linear-gradient(45deg, #f3f4f6 30%, #ffffff 90%)",
      }}
    >
      <Container>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            gap: 4,
          }}
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Typography
              variant="h1"
              sx={{
                fontSize: { xs: "2.5rem", md: "4rem" },
                fontWeight: "bold",
                color: "#1a1a1a",
                mb: 2,
              }}
            >
              Hi, I'm Alina
            </Typography>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <Typography
              variant="h2"
              sx={{
                fontSize: { xs: "1.5rem", md: "2rem" },
                color: "#4a4a4a",
                mb: 4,
              }}
            >
              A passionate developer crafting beautiful digital experiences
            </Typography>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Button
              variant="contained"
              size="large"
              sx={{
                backgroundColor: "#1a1a1a",
                color: "white",
                "&:hover": {
                  backgroundColor: "#333",
                },
                px: 4,
                py: 1.5,
                borderRadius: 2,
              }}
            >
              View My Work
            </Button>
          </motion.div>
        </Box>
      </Container>
    </Box>
  );
};

export default Hero;
