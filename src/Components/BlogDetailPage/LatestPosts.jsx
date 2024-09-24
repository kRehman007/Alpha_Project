import { Container, Box, Typography } from "@mui/material";
import React from "react";
import Light from "../IdeasPage/Light";

const LatestPosts = () => {
  return (
    <Container sx={{ marginTop: "40px" }}>
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", sm: "row" },
          gap: 8,
        }}
      >
        <Box sx={{ maxWidth: { xs: "100%", sm: "38%", md: "28%" } }}>
          <Typography
            sx={{ fontSize: "35px", fontWeight: { xs: "medium", md: "bold" } }}
          >
            Latest posts
          </Typography>
          <Box
            sx={{
              display: "flex",
              marginTop: "20px",
              flexDirection: "column",
              gap: 1,
            }}
          >
            <Typography
              sx={{ fontSize: "15px", fontWeight: "medium", color: "#010205" }}
            >
              January 12, 2023
            </Typography>
            <Typography
              sx={{
                fontSize: "17px",
                fontWeight: 600,
                color: "#010205",
              }}
            >
              Transform Your Home: The Power of...
            </Typography>
            <Typography sx={{ color: "#3878C91", fontSize: "12px" }}>
              Bottleneck mice my capacity is full, nor incentivization we need
              to start advertising on social media, or helicopter
            </Typography>
            <hr />
          </Box>
          <Box
            sx={{
              display: "flex",
              marginTop: "20px",
              flexDirection: "column",
              gap: 1,
            }}
          >
            <Typography
              sx={{ fontSize: "15px", fontWeight: "medium", color: "#010205" }}
            >
              January 12, 2023
            </Typography>
            <Typography
              sx={{
                fontSize: "17px",
                fontWeight: 600,
                color: "#010205",
              }}
            >
              Transform Your Home: The Power of...
            </Typography>
            <Typography sx={{ color: "#3878C91", fontSize: "12px" }}>
              Bottleneck mice my capacity is full, nor incentivization we need
              to start advertising on social media, or helicopter
            </Typography>
            <hr />
          </Box>
          <Box
            sx={{
              display: "flex",
              marginTop: "20px",
              flexDirection: "column",
              gap: 1,
            }}
          >
            <Typography
              sx={{ fontSize: "15px", fontWeight: "medium", color: "#010205" }}
            >
              January 12, 2023
            </Typography>
            <Typography
              sx={{
                fontSize: "17px",
                fontWeight: 600,
                color: "#010205",
              }}
            >
              Transform Your Home: The Power of...
            </Typography>
            <Typography sx={{ color: "#3878C91", fontSize: "12px" }}>
              Bottleneck mice my capacity is full, nor incentivization we need
              to start advertising on social media, or helicopter
            </Typography>
            <hr />
          </Box>
          <Box
            sx={{
              display: "flex",
              marginTop: "20px",
              flexDirection: "column",
              gap: 1,
            }}
          >
            <Typography
              sx={{ fontSize: "15px", fontWeight: "medium", color: "#010205" }}
            >
              January 12, 2023
            </Typography>
            <Typography
              sx={{
                fontSize: "17px",
                fontWeight: 600,
                color: "#010205",
              }}
            >
              Transform Your Home: The Power of...
            </Typography>
            <Typography sx={{ color: "#3878C91", fontSize: "12px" }}>
              Bottleneck mice my capacity is full, nor incentivization we need
              to start advertising on social media, or helicopter
            </Typography>
            <hr />
          </Box>
          <Box
            sx={{
              display: "flex",
              marginTop: "20px",
              flexDirection: "column",
              gap: 1,
            }}
          >
            <Typography
              sx={{ fontSize: "15px", fontWeight: "medium", color: "#010205" }}
            >
              January 12, 2023
            </Typography>
            <Typography
              sx={{
                fontSize: "17px",
                fontWeight: 600,
                color: "#010205",
              }}
            >
              Transform Your Home: The Power of...
            </Typography>
            <Typography sx={{ color: "#3878C91", fontSize: "12px" }}>
              Bottleneck mice my capacity is full, nor incentivization we need
              to start advertising on social media, or helicopter
            </Typography>
            <hr />
          </Box>
        </Box>
        <Box
          sx={{
            flexGrow: 1,
            width: { xs: "100%" },
            fontSize: "32px",
            fontWeight: 600,
          }}
        >
          <Light />
        </Box>
      </Box>
    </Container>
  );
};

export default LatestPosts;
