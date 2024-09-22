import { Container, Typography, Box } from "@mui/material";
import logo from "../../assets/Logo.svg";
import logo2 from "../../assets/whiteLogo.svg";
import React, { useState } from "react";

const Section1 = () => {
  const [ActiveBox, setActiveBox] = useState(5);
  const ServiceArray = [
    {
      id: 1,
      heading: "Service 01",
      text: "we are a passionate team of digital marketing enthusiasts dedicated to ",
    },
    {
      id: 2,
      heading: "Tools Dummy",
      text: "we are a passionate team of digital marketing enthusiasts dedicated to ",
    },
    {
      id: 3,
      heading: "Info Dummy",
      text: "we are a passionate team of digital marketing enthusiasts dedicated to ",
    },
    {
      id: 4,
      heading: "Dummy Text",
      text: "we are a passionate team of digital marketing enthusiasts dedicated to ",
    },
    {
      id: 5,
      heading: "Lorem Ipsum",
      text: "we are a passionate team of digital marketing enthusiasts dedicated to ",
    },
    {
      id: 6,
      heading: "Service 06",
      text: "we are a passionate team of digital marketing enthusiasts dedicated to ",
    },
  ];
  return (
    <Container sx={{ marginTop: "60px" }}>
      <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
        <Typography sx={{ fontWeight: 600, fontSize: "35px" }}>
          Services
        </Typography>

        <Typography
          sx={{ fontSize: "14px", color: "#878C91", fontWeight: 500 }}
        >
          we are a passionate team of digital marketing enthusiasts dedicated to
          helping businesses succeed in the digital world. With years of
          experience and a deep understanding of the ever-evolving online
          landscape, we stay at the forefront of industry trends and
          technologies.
        </Typography>
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: {
              xs: "1fr",
              sm: "1fr  1fr",
              md: "1fr 1fr 1fr",
            },
            rowGap: "20px",
            columnGap: { xs: "120px", md: "20px", lg: "120px" },
            marginTop: "20px",
          }}
        >
          {ServiceArray.map((item) => (
            <Box
              key={item.id}
              onMouseEnter={() => setActiveBox(item.id)}
              onMouseLeave={() => setActiveBox(5)}
              sx={{
                display: "flex",
                flexDirection: "column",
                backgroundColor: "lightgray",
                borderRadius: "10px",
                padding: "20px",
                width: { xs: "100%", sm: "100%", md: "min-content" },
                backgroundColor: ActiveBox == item.id ? "#000" : "lightgray",

                transition: "all .3s",
              }}
            >
              <Typography className="logo">
                <img
                  src={ActiveBox == item.id ? logo2 : logo}
                  style={{ color: "white" }}
                />
              </Typography>
              <Typography
                className="heading"
                sx={{
                  color: ActiveBox == item.id ? "white" : "black",
                  marginTop: "10px",
                  fontWeight: 600,
                  fontSize: "18px",
                }}
              >
                {item.heading}
              </Typography>
              <Typography
                className="text"
                sx={{
                  color: ActiveBox == item.id ? "white" : "#878C91",
                  fontSize: "12px",
                  width: { md: "35ch" },
                }}
              >
                {item.text}
              </Typography>
            </Box>
          ))}
        </Box>
      </Box>
    </Container>
  );
};

export default Section1;
