import { extendTheme } from '@chakra-ui/react';
export const theme = extendTheme({
  styles: {
    global: {
      'html, body': {
        backgroundColor: '#eceae9',
      },
    },
  },
  colors: {
    nucba: {
      100: '#f7fafc',
      form: '#ffff',
      btn: '#4F7CAC',
      section: '#42c5f5',
      second: '#004fff',
      primary: '#ed1582',
      third: '#B84E9F',
      fourth: '#deb0eb',
      hover: '#050505',
      hoverElement: '#B84E9F',
      breadCrumbs: '#666666',
      grisUno: '#666666',
      grisDos: '#999999',
    },
  },
});
