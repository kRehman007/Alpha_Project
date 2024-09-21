import { Typography, Box, Container } from "@mui/material";
import React, { useState } from "react";

const AlphaSolutions = () => {
  const [activeBox, setActiveBox] = useState(1); // Set initial state to 1 or whatever box you want active initially

  return (
    <Container sx={{ marginTop: "20px" }}>
      <Typography
        sx={{
          fontWeight: 600,
          color: "#010205",
          paddingLeft: "7px",
          fontSize: "25px",
        }}
      >
        Welcome to AlphaEdge Solutions,
        <br />
        integrating Id8edge's tools
      </Typography>

      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: 3,
          marginTop: "20px",
        }}
      >
        {[1, 2, 3].map((num) => (
          <Box
            key={num}
            onMouseEnter={() => setActiveBox(num)}
            sx={{
              backgroundColor: activeBox === num ? "black" : "lightgray",
              width: activeBox === num ? "30%" : "210px",
              borderRadius: 5,
              display: "flex",
              flexDirection: "column",
              alignItems: activeBox === num ? "start" : "center",
              gap: activeBox === num ? 1 : 8,
              height: "230px",
              padding: "20px",
              transition: ".3s all",
              flexGrow: activeBox === num ? 1 : 0,
              "& .inner-text": {
                transform: activeBox === num ? "none" : "rotate(90deg)",
                color: activeBox === num ? "#fff" : "#656363",
              },
              "& .inner-number": {
                color: activeBox === num ? "#fff" : "#000",
              },
              "& .inner-msg": {
                visibility: activeBox === num ? "visible" : "hidden",
                transition: "visibility 0.3s ease",
              },
            }}
          >
            <Typography
              className="inner-number"
              sx={{ fontWeight: 900, fontSize: "20px" }}
            >
              0{num}
            </Typography>
            <Typography
              className="inner-text"
              sx={{
                transform: activeBox === num ? "none" : "rotate(90deg)",
                fontWeight: 600,

                color: activeBox === num ? "#fff" : "#656363",
              }}
            >
              {num === 1
                ? "Innovative Ideas"
                : num === 2
                ? "Graphics & Motion"
                : "Development"}
            </Typography>
            <Typography
              className="inner-msg"
              sx={{
                color: "#fff",
                fontSize: "Regular",
                visibility: activeBox === num ? "visible" : "hidden",
                transition: "visibility 0.3s ease",
              }}
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Temporibus, delectus. Nulla ab, eaque quia voluptatem, magnam
              tempora, explicabo ipsam ut quibusdam commodi natus beatae minima
              perferendis. Qui modi necessitatibus ipsa!
            </Typography>
          </Box>
        ))}
      </Box>
    </Container>
  );
};

export default AlphaSolutions;
