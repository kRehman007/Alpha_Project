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
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import EastIcon from "@mui/icons-material/East";

const Contactus = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    navigate("/querySuccess");
  };

  return (
    <Container sx={{ marginTop: "60px" }}>
      <form onSubmit={handleSubmit(onSubmit)}>
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
              <FormControl
                sx={{ width: { xs: "100%", sm: "45%", md: "100%" } }}
              >
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
                <Input
                  type="email"
                  id="email-input"
                  {...register("email", { required: "Email is required" })}
                  aria-describedby="email-helper-text"
                />
                {errors.email && (
                  <span
                    style={{
                      textAlign: "center",
                      fontSize: "12px",
                      color: "red",
                      marginTop: "7px",
                    }}
                  >
                    {errors.email.message}
                  </span>
                )}
              </FormControl>

              <FormControl
                sx={{ width: { xs: "100%", sm: "45%", md: "100%" } }}
              >
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
                <Input
                  type="text"
                  id="name-input"
                  aria-describedby="name-helper-text"
                  {...register("name", { required: "Name is required" })}
                />
                {errors.name && (
                  <span
                    style={{
                      textAlign: "center",
                      fontSize: "12px",
                      color: "red",
                      marginTop: "7px",
                    }}
                  >
                    {errors.name.message}
                  </span>
                )}
              </FormControl>

              <FormControl
                sx={{ width: { xs: "100%", sm: "45%", md: "100%" } }}
              >
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
                <Input
                  {...register("phone", {
                    required: "Phone number is required",
                  })}
                  type="tel"
                  id="phone-input"
                  aria-describedby="phone-helper-text"
                />
                {errors.phone && (
                  <span
                    style={{
                      textAlign: "center",
                      fontSize: "12px",
                      color: "red",
                      marginTop: "7px",
                    }}
                  >
                    {errors.phone.message}
                  </span>
                )}
              </FormControl>

              <FormControl
                sx={{ width: { xs: "100%", sm: "45%", md: "100%" } }}
              >
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
                <Input
                  {...register("message", {
                    required: "Enter a short Message here...!",
                  })}
                  type="text"
                  id="msg-input"
                  aria-describedby="msg-helper-text"
                />
                {errors.message && (
                  <span
                    style={{
                      textAlign: "center",
                      fontSize: "12px",
                      color: "red",
                      marginTop: "7px",
                    }}
                  >
                    {errors.message.message}
                  </span>
                )}
              </FormControl>
              <button
                type="submit"
                style={{
                  backgroundColor: "#000",
                  border: "none",
                  color: "#fff",
                  cursor: "pointer",
                  display: "flex",

                  alignItems: "center",
                  padding: "5px 15px",
                  borderRadius: "50px",
                }}
              >
                Send
                <EastIcon sx={{ color: "#fff", marginLeft: "15px" }} />
              </button>
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
      </form>
    </Container>
  );
};

export default Contactus;
