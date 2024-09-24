import { Container, Box, Typography, Button } from "@mui/material";
import img from "../../assets/TickImg.svg";
import React from "react";
import { useNavigate } from "react-router-dom";

const SuccessMsg = () => {
  const navigate = useNavigate();
  return (
    <Container>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          height: "100vh",
        }}
      >
        <img src={img} style={{ width: "150px" }} />
        <Typography
          sx={{
            fontSize: "25px",
            color: "#010205",
            marginTop: "20px",
            fontWeight: 600,
          }}
        >
          Request Sent
        </Typography>
        <Typography
          sx={{
            fontSize: "12px",
            color: "#878C91",
            fontWeight: "medium",
            width: "45ch",
            textAlign: "center",
          }}
        >
          Your request to get a quote has been sent successfully, You will get a
          response soon, Thanks,
        </Typography>
        <Box
          sx={{
            display: "flex",
            gap: 2,
            marginTop: "20px",
            alignItems: "center",
          }}
        >
          <Button
            onClick={() => navigate("/contact")}
            sx={{
              background: "#000",
              textTransform: "capitalize",
              fontSize: "16px",
              fontWeight: "medium",
              borderRadius: "50px",
              color: "#fff",
              px: 3,
            }}
          >
            Request Another
          </Button>
          <Button
            onClick={() => navigate("/")}
            sx={{
              border: "1px solid black",
              textTransform: "capitalize",
              fontSize: "16px",
              fontWeight: 600,
              borderRadius: "50px",
              color: "#000",
              px: 3,
            }}
          >
            Go to Home
          </Button>
        </Box>
      </Box>
    </Container>
  );
};

export default SuccessMsg;
