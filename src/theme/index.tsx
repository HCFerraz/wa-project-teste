import { createTheme } from "@material-ui/core";
const defaultAppTheme = createTheme({
  palette: { 
    primary: { 
      main: "#rgb(0, 71, 186)" 
    }, 
    secondary: { 
      main: "rgb(93,138,211)" 
    } 
  },
  typography: {
    fontFamily:
      "'Roboto','sans-serif'",
  }
});

export { defaultAppTheme };
