import React from "react";
import EastIcon from "@mui/icons-material/East";
import { Container, Box, Typography, Button } from "@mui/material";

const ConnectWithUs = () => {
  return (
    <Container sx={{ marginTop: "60px", paddingBottom: "20px" }}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 1,
          backgroundColor: "black",
          padding: "40px",
          color: "#fff",
          borderRadius: 5,
        }}
      >
        <Typography sx={{ fontSize: "35px" }}>
          Ready to work with us ?
        </Typography>
        <Typography
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "start",
          }}
        >
          <Typography sx={{ fontSize: "14px" }}>
            Get started today and join over hundreds of satisfied clients. Enter
            your email to join our community and
            <br /> stay updated with the latest trends and insights.
          </Typography>
          <Button
            onClick={() => navigate("#")}
            sx={{
              display: "flex",
              alignItems: "center",
              marginTop: "-25px",
              gap: 5,
              color: "#000",
              fontSize: "14px",
              padding: "10px 15px",
              backgroundColor: "#fff",
              borderRadius: 10,
              textTransform: "capitalize",
            }}
          >
            <Typography>See All</Typography>
            <EastIcon />
          </Button>
        </Typography>
      </Box>
    </Container>
  );
};

export default ConnectWithUs;
