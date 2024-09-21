import { Container, Box, Typography } from "@mui/material";
import img1 from "../../assets/AboutImg1.svg";
import img2 from "../../assets/AboutImg2.svg";
import React from "react";

const AboutUsProject = () => {
  return (
    <Container sx={{ marginTop: "60px" }}>
      <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
        <Typography sx={{ fontWeight: 600, fontSize: "35px" }}>
          About Us
        </Typography>

        <Typography
          sx={{ fontSize: "14px", color: "#878C91", fontWeight: 500 }}
        >
          we are a passionate team of digital marketing enthusiasts dedicated to
          helping businesses succeed in the digital world. With years of
          experience and a deep understanding of the ever-evolving online
          landscape, we stay at the forefront of industry trends and
          technologies
        </Typography>

        <Typography
          sx={{
            display: "flex",
            flexDirection: { xs: "column", sm: "row" },
            gap: 2,
            marginTop: "20px",
          }}
        >
          <Typography
            sx={{
              width: { xs: "100%", md: "45%", lg: "35%" },
              height: "350px",
            }}
          >
            <img
              src={img1}
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                borderRadius: "10px",
              }}
            />
          </Typography>
          <Typography sx={{ flexGrow: 1, height: "350px" }}>
            <img
              src={img2}
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                borderRadius: "10px",
              }}
            />
          </Typography>
        </Typography>
      </Box>
    </Container>
  );
};

export default AboutUsProject;
