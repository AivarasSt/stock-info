import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#303030',
    },
    text: {
      primary: "#303030"
    },
    background: {
      default: "#F5F5F5"
    },
  },
  typography: {
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
  },
});

const darktheme = createTheme(theme, {
  components: {
    MuiTypography: {
      defaultProps: {
        color: theme.palette.text.primary,
      },
    },
  },
});

export default darktheme;
