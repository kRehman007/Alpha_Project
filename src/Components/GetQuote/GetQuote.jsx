import {
  Container,
  FormControl,
  InputLabel,
  Input,
  Box,
  Select,
  MenuItem,
  Typography,
  Button,
} from "@mui/material";
import CloudDownloadIcon from "@mui/icons-material/CloudDownload";
import { useNavigate } from "react-router-dom";
import React, { useRef, useState } from "react";
import EastIcon from "@mui/icons-material/East";
const ContactUs = () => {
  const navigate = useNavigate();
  const fileRef = useRef(null);
  const [country, setCountry] = useState("");
  const [fileURL, setFileURL] = useState(0);

  function handleFile(e) {
    const file = e.target.files[0];
    if (file) {
      const url = URL.createObjectURL(file);
      setFileURL(url);
    }
  }

  const handleCountryChange = (event) => {
    setCountry(event.target.value);
  };

  // Example list of countries
  const countries = [
    { code: "PAK", name: "Pakistan" },
    { code: "US", name: "United States" },
    { code: "CA", name: "Canada" },
    { code: "GB", name: "United Kingdom" },
    { code: "AU", name: "Australia" },
    { code: "IN", name: "India" },
    // Add more countries as needed
  ];
  return (
    <Container
      sx={{
        marginTop: "60px",
        marginBottom: "40px",
      }}
    >
      <Typography
        sx={{ fontWeight: "medium", fontSize: "35px", marginBottom: "30px" }}
      >
        Get a Quote
      </Typography>
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          columnGap: 14,
          rowGap: 10,
          background: "lightgray",
          borderRadius: "10px",
          padding: "30px 40px",
        }}
      >
        <FormControl
          sx={{ width: { xs: "100%", sm: "40%", md: "43%", lg: "44%" } }}
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
            id="name-input"
            aria-describedby="name-helper-text"
            sx={{
              width: "100%",
            }}
          />
        </FormControl>
        <FormControl
          sx={{ width: { xs: "100%", sm: "40%", md: "43%", lg: "44%" } }}
        >
          <InputLabel
            htmlFor="email-input"
            sx={{
              fontSize: "14px",
              color: "#878C91",
              marginLeft: "-12px",
            }}
          >
            Email Address
          </InputLabel>
          <Input
            id="email-input"
            aria-describedby="email-helper-text"
            sx={{
              width: "100%",
            }}
          />
        </FormControl>
        <FormControl
          sx={{ width: { xs: "100%", sm: "40%", md: "43%", lg: "44%" } }}
        >
          <InputLabel
            htmlFor="telephone-input"
            sx={{
              fontSize: "14px",
              color: "#878C91",
              marginLeft: "-12px",
            }}
          >
            Phone No
          </InputLabel>
          <Input
            id="telephone-input"
            aria-describedby="telephone-helper-text"
            sx={{
              width: "100%",
            }}
          />
        </FormControl>
        <FormControl
          sx={{ width: { xs: "100%", sm: "41%", md: "43%", lg: "44%" } }}
        >
          <InputLabel
            id="country-select-label"
            sx={{
              fontSize: "14px",
              color: "#878C91",
            }}
          >
            Country
          </InputLabel>
          <Select
            labelId="country-select-label"
            id="country-select"
            value={country}
            onChange={handleCountryChange}
            label="Country"
          >
            {countries.map((country) => (
              <MenuItem key={country.code} value={country.code}>
                {country.name}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <FormControl
          sx={{ width: { xs: "100%", sm: "40%", md: "43%", lg: "44%" } }}
        >
          <InputLabel
            htmlFor="project-input"
            sx={{
              fontSize: "14px",
              color: "#878C91",
              marginLeft: "-12px",
            }}
          >
            ProjectType
          </InputLabel>
          <Input
            id="project-input"
            aria-describedby="project-helper-text"
            sx={{
              width: "100%",
            }}
          />
        </FormControl>
        <FormControl
          sx={{ width: { xs: "100%", sm: "40%", md: "43%", lg: "44%" } }}
        >
          <InputLabel
            htmlFor="budget-input"
            sx={{
              fontSize: "14px",
              color: "#878C91",
              marginLeft: "-12px",
            }}
          >
            Estimated Budget
          </InputLabel>
          <Input
            id="budget-input"
            aria-describedby="budget-helper-text"
            sx={{
              width: "100%",
            }}
          />
        </FormControl>
        <Box
          sx={{
            width: "100%",
            height: "250px",
            border: "1px dotted black",
            borderRadius: "10px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <input
            type="file"
            ref={fileRef}
            style={{ display: "none" }}
            onChange={handleFile}
          />
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <CloudDownloadIcon
              onClick={() => fileRef.current.click()}
              sx={{ fontSize: "50px", cursor: "pointer" }}
            />

            <Typography sx={{ color: "#878C91", fontSize: "12px" }}>
              Drag/Download file
            </Typography>
          </Box>
        </Box>
      </Box>

      <Box
        onClick={() => navigate("/SuccessMsg")}
        sx={{
          display: "flex",
          gap: 2,
          alignItems: "center",
          backgroundColor: "#000",
          color: "#fff",
          widht: "min-content",
          float: "right",
          padding: "10px 20px",
          margin: "40px 0",
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
    </Container>
  );
};

export default ContactUs;
