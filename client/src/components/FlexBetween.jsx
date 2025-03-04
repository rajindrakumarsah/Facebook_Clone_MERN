//It's a fundamental building block when working with Material UI—you can think of it as a <div> with extra built-in features, like access to your app's theme and the sx prop
import { Box } from "@mui/material";

// Utility for creating styled components. All Material UI components are styled with the styled() utility
import { styled } from "@mui/system";

//components, it is custom compo , it can be used in anyfile 
const FlexBetween = styled(Box)({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
});

export default FlexBetween;
