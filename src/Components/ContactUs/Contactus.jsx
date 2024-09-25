import React from "react";
import {
  Container,
  Box,
  Typography,
  FormControl,
  InputLabel,
  Input,
  Button,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import EastIcon from "@mui/icons-material/East";
const Contactus = () => {
  const navigate = useNavigate();
  return (
    <Container sx={{ marginTop: "60px" }}>
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          gap: { xs: 4, sm: 8, md: 15 },
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 1,
            width: { xs: "100%", md: "40%" },
            order: { xs: 2, md: 1 },
          }}
        >
          <Typography
            sx={{
              fontWeight: "medium",
              fontSize: "35px",
            }}
          >
            Contact Us
          </Typography>
          <Typography
            sx={{ fontSize: "16px", fontWeight: "medium", color: "#878C91" }}
          >
            We're Here to Help – Reach Out to Our Team for Any Inquiries or
            Support Needs
          </Typography>
          <Box
            sx={{
              marginTop: "20px",
              display: "flex",
              flexDirection: { xs: "column", sm: "row", md: "column" },
              flexWrap: { sm: "wrap", md: "nowrap" },
              alignItems: "flex-start",
              gap: { xs: 3, sm: 7, md: 3 },
            }}
          >
            <FormControl sx={{ width: { xs: "100%", sm: "45%", md: "100%" } }}>
              <InputLabel
                htmlFor="email-input"
                sx={{
                  fontSize: "14px",
                  color: "#878C91",
                  marginLeft: "-12px",
                }}
              >
                Email
              </InputLabel>
              <Input id="email-input" aria-describedby="email-helper-text" />
            </FormControl>

            <FormControl sx={{ width: { xs: "100%", sm: "45%", md: "100%" } }}>
              <InputLabel
                htmlFor="name-input"
                sx={{
                  fontSize: "14px",
                  color: "#878C91",
                  marginLeft: "-12px",
                }}
              >
                Name
              </InputLabel>
              <Input id="name-input" aria-describedby="name-helper-text" />
            </FormControl>

            <FormControl sx={{ width: { xs: "100%", sm: "45%", md: "100%" } }}>
              <InputLabel
                htmlFor="phone-input"
                sx={{
                  fontSize: "14px",
                  color: "#878C91",
                  marginLeft: "-12px",
                }}
              >
                Phone
              </InputLabel>
              <Input id="phone-input" aria-describedby="phone-helper-text" />
            </FormControl>

            <FormControl sx={{ width: { xs: "100%", sm: "45%", md: "100%" } }}>
              <InputLabel
                htmlFor="msg-input"
                sx={{
                  fontSize: "14px",
                  color: "#878C91",
                  marginLeft: "-12px",
                }}
              >
                Message
              </InputLabel>
              <Input id="msg-input" aria-describedby="msg-helper-text" />
            </FormControl>
            <Box
              onClick={() => navigate("/querySuccess")}
              sx={{
                display: "flex",
                gap: 2,
                alignItems: "center",
                backgroundColor: "#000",
                color: "#fff",
                maxWidth: "min-content",
                padding: "10px 20px",
                borderRadius: "50px",
                cursor: "pointer",
              }}
            >
              <button
                style={{
                  backgroundColor: "transparent",
                  border: "none",
                  color: "#fff",
                  cursor: "pointer",
                }}
              >
                Send
              </button>
              <EastIcon sx={{ color: "#fff" }} />
            </Box>
          </Box>
        </Box>
        <Box
          sx={{
            flexGrow: 1,
            borderRadius: "10px",
            height: { xs: "300px", sm: "350px", md: "auto" },
            marginTop: { md: "20px" },
            order: { xs: 1, md: 2 },
          }}
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3378.95272396428!2d72.67854097472376!3d32.124579017044034!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3921766c3b825095%3A0x8881f2f6014a5725!2sMari%2C%20Sargodha%2C%20Punjab%2C%20Pakistan!5e0!3m2!1sen!2s!4v1727275697187!5m2!1sen!2s"
            width="100%"
            height="100%"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </Box>
      </Box>
    </Container>
  );
};

export default Contactus;
