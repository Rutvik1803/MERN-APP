import React from "react";
import FlexBetween from "../FlexBetween";
import { Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useTheme } from "@emotion/react";

const NavbarComponent = () => {
  const navigate = useNavigate();
  const theme = useTheme();
  const alt = theme.pallete.background.alt;
  return (
    <>
      <FlexBetween padding="1rem 6%" backgroundColor={alt}>
        <FlexBetween gap="1.75rem">
          <Typography
            fontWeight="bold"
            fontSize="clamp(1rem,2rem,2.25rem)"
            color="primary"
            onClick={() => navigate("/home")}
          >
            Facebook
          </Typography>
        </FlexBetween>
      </FlexBetween>
    </>
  );
};

export default NavbarComponent;
