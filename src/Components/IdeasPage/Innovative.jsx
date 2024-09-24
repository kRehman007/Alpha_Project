import { Box, Container, Typography } from "@mui/material";
import img from "../../assets/InnovativeImg1.svg";
import React from "react";

const Innovative = () => {
  return (
    <Container sx={{ marginTop: "60px", marginBottom: "40px" }}>
      <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
        <Typography sx={{ fontSize: "35px", fontWeight: "medium" }}>
          Innovative Ideas
        </Typography>
        <Typography
          sx={{ fontSize: "15px", fontWeight: "medium", color: "#878C91" }}
        >
          We are a passionate team of digital marketing enthusiasts dedicated to
          helping businesses succeed in the digital world. With years of
          experience and a deep understanding of the ever-evolving online
          landscape, we stay at the forefront of industry trends and
          technologies.
        </Typography>
        <Box sx={{ height: { xs: "360px", sm: "auto" } }}>
          <img
            src={img}
            style={{
              marginTop: "10px",
              objectPosition: "center",
              width: "100%",
              height: "100%",
              objectFit: "cover",
              borderRadius: "10px",
            }}
          />
        </Box>
      </Box>
    </Container>
  );
};

export default Innovative;
