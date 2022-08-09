import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#303030',
    },
    text: {
      primary: "#303030"
    },
  },
  typography: {
    fontFamily: [
      'Josefin Sans',
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
