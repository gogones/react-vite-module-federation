import { createTheme } from '@mui/material/styles';
import { red, grey } from '@mui/material/colors';

// Create a theme instance.
const theme = createTheme({
  palette: {
    primary: {
      main: '#FFD500',
    },
    error: {
      main: red.A400,
    },
    background: {
      default: '#f4f6f8',
    },
    alternative: {
      main: grey['200'],
      dark: grey['400'],
    },
    'status-empty': {
      main: 'transparent',
    },
    'status-completed': {
      main: '#4da1ff',
    },
    'status-no-action': {
      main: '#d42640',
    },
    'status-assigned': {
      main: '#be8f0b',
    },
    'status-handover': {
      main: '#ffc00e',
    },
    'status-validated': {
      main: '#ffc00e',
    },
    'status-created': {
      main: '#f97b8d',
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        contained: ({theme}) => ({
          boxShadow: theme.shadows[1],
        }),
        text: ({theme}) =>
            theme.unstable_sx({
              color: 'common.black',
            }),
      },
    },
    MuiTextField: {
      defaultProps: {
        variant: 'standard',
      },
    },
    MuiTableCell: {
      styleOverrides: {
        root: ({theme}) =>
            theme.unstable_sx({
              typography: 'Lato-Bold',
              borderBottom: `4 solid`,
              borderBottomColor: 'background.default',
              fontSize: 9,
              height: 32,
              overflow: 'hidden',
              py: 0,
              textOverflow: 'ellipsis',
              pl: 0.5,
            }),
      },
    },
    MuiTableBody: {
      styleOverrides: {
        root: ({theme}) =>
            theme.unstable_sx({
              bgcolor: 'common.white',
            }),
      },
    },
    MuiTableRow: {
      styleOverrides: {
        root: ({theme}) =>
            theme.unstable_sx({
              [`&.${tableRowClasses.hover}:hover`]: {
                bgcolor: 'grey.200',
              },
            }),
      },
    },
    MuiFormControl: {
      defaultProps: {
        variant: 'standard',
      },
    },
    MuiFormControlLabel: {
      defaultProps: {
        componentsProps: {
          typography: {
            color: '#3c3b3b',
            fontSize: 12,
          },
        },
      },
    },
    MuiFormLabel: {
      styleOverrides: {
        root: ({theme}) =>
            theme.unstable_sx({
              color: '#1d1d1d80',
              fontSize: 10,
              textTransform: 'uppercase',
              transform: 'scale(0.75)',
              transformOrigin: 'top left',
            }),
      },
    },
    MuiInputLabel: {
      defaultProps: {
        shrink: true,
      },
    },
    MuiInput: {
      styleOverrides: {
        root: ({theme}) =>
            theme.unstable_sx({
              color: '#3c3b3b',
              fontSize: 12,
            }),
      },
    },
    MuiFormHelperText: {
      styleOverrides: {
        root: ({theme}) =>
            theme.unstable_sx({
              fontSize: 12,
            }),
      },
    },
    MuiAutocomplete: {
      styleOverrides: {
        paper: ({theme}) =>
            theme.unstable_sx({
              fontSize: 12,
              color: '#3c3b3b',
            }),
      },
    },
    MuiCard: {
      styleOverrides: {
        root: ({theme}) => ({
          boxShadow: theme.shadows[4],
        }),
      },
    },
  },
});

export default theme;
