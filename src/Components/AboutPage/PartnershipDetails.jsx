import { Container, Box, Typography, Button } from "@mui/material";
import EastIcon from "@mui/icons-material/East";
import React from "react";
import logo from "../../assets/AboutLogo.svg";

const PartnershipDetails = () => {
  return (
    <Container sx={{ marginTop: "40px" }}>
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <Typography sx={{ fontWeight: "medium", fontSize: "35px" }}>
            Partnership Details
          </Typography>
          <Typography
            sx={{
              display: { xs: "none", sm: "flex" },
              alignItems: "center",
              width: "min-content",
              whiteSpace: "nowrap",
              border: "1px solid black",
              borderRadius: 10,
              padding: "5px 10px",
              marginTop: { sm: "10px" },
              rowGap: 0,
              columnGap: { xs: 0, sm: 2 },
            }}
          >
            <button
              onClick={() => navigate("#")}
              style={{
                border: "none",
                backgroundColor: "transparent",
                paddingRight: "9px",
              }}
            >
              Read our story
            </button>
            <EastIcon />
          </Typography>
        </Box>
        <Typography sx={{ fontSize: "12px", color: "#878C91" }}>
          From Ideation to MVP Development
        </Typography>

        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", sm: "row" },
            gap: { xs: 1, sm: 3 },
            marginTop: "50px",
            paddingLeft: { xs: "0px", md: "20px" },
          }}
        >
          <Typography>
            <img src={logo} style={{ width: "100px", height: "100px" }} />
          </Typography>
          <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
            <Typography sx={{ fontWeight: "bold", fontSize: "30px" }}>
              We have collaborated with id8edge to provide you with the best
            </Typography>
            <Typography
              sx={{
                fontSize: "12px",
                fontWeight: 500,
                color: "#878C91",
                width: { md: "75ch" },
                paddingBottom: { xs: "8px", sm: "20px" },
              }}
            >
              Optimize for search land it in region today shall be a cloudy day,
              thanks to blue sky thinking, we can now deploy our new ui to the
              cloud . Unlock meaningful moments of relaxation forcing function ,
              or weaponize the data
            </Typography>
          </Box>
          <Typography
            sx={{
              display: { xs: "flex", sm: "none" },
              alignItems: "center",
              width: "min-content",
              whiteSpace: "nowrap",
              border: "1px solid black",
              borderRadius: 10,
              padding: "5px 10px",
              position: "relative",
              left: "50%",
              transform: "translateX(-50%)",
              rowGap: 0,
              columnGap: { xs: 0, sm: 2 },
              marginBottom: "20px",
            }}
          >
            <button
              onClick={() => navigate("#")}
              style={{
                border: "none",
                backgroundColor: "transparent",
                paddingRight: "9px",
              }}
            >
              Read our story
            </button>
            <EastIcon />
          </Typography>
        </Box>
      </Box>
    </Container>
  );
};

export default PartnershipDetails;
