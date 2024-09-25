import { Container, Box, Typography, Button } from "@mui/material";
import img from "../../assets/TickImg.svg";
import React from "react";
import { useNavigate } from "react-router-dom";

const SuccessMsg = ({ heading, btn1, btn2, text, link }) => {
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
        <img src={img} style={{ width: { xs: "100px", sm: "150px" } }} />
        <Typography
          sx={{
            fontSize: "25px",
            color: "#010205",
            marginTop: "20px",
            fontWeight: 600,
          }}
        >
          {heading}
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
          {text}
        </Typography>
        <Box
          sx={{
            display: "flex",
            gap: { xs: 1, sm: 2 },
            marginTop: "20px",
            alignItems: "center",
          }}
        >
          <Button
            onClick={() => navigate(`/${link}`)}
            sx={{
              background: "#000",
              textTransform: "capitalize",
              fontSize: "16px",
              fontWeight: "medium",
              borderRadius: "50px",
              color: "#fff",
              px: { xs: 2, sm: 3 },

              border: "1px solid black",
            }}
          >
            {btn1}
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
              px: { xs: 2, sm: 3 },
            }}
          >
            {btn2}
          </Button>
        </Box>
      </Box>
    </Container>
  );
};

export default SuccessMsg;
