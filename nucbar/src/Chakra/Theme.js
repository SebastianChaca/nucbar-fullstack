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
  textStyles: {
    pagetitle: {
      fontSize: '28px',
      fontWeight: '700',
      lineHeight: '42px',
    },
    title: {
      fontSize: '22px',
      fontWeight: '700',
      lineHeight: '33px',
    },
    subtitle: {
      fontSize: '18px',
      fontWeight: '600',
      lineHeight: '27px',
    },
    regular: {
      fontSize: '14px',
      fontWeight: '400',
      lineHeight: '21px',
    },
    semiBold: {
      fontSize: '14px',
      fontWeight: '600',
      lineHeight: '21px',
    },
    captionRegular: {
      fontSize: '12px',
      fontWeight: '400',
      lineHeight: '18px',
    },
    captionSemiBold: {
      fontSize: '12px',
      fontWeight: '600',
      lineHeight: '18px',
    },
  },
});
