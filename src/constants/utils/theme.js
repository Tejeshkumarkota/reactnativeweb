import React from 'react';
import { Image } from 'react-native';
import { createTheming } from '@callstack/react-theme-provider';


const colors = {
  primary: '#002C6A',
  primarySecond: '#096E9D',
  secondary: '#FFA50F',
  white: '#ffffff',
  black: '#000000',
  lightBlack: "#252525",
  darkGray: '#707070',
  darkGray1: '#939397',
  darkGray2: '#CCCACA',
  darkGray3: "#EAEFF5",
  lightGray: '#E4E4E4',
  lightGray1: '#F8F8F6',
  lightGray3: "#808080",
  transparent: 'transparent',
  red: 'red',
  greenText: '#3A803D',
  fontGray: '#ADB0B5',
  fontBlack: '#000000',
  yellow: "#f4c430",
  fontWhite: '#ffffff',
  linkBLue: '#4D7DF9',
  fontLightBlack: '#2F3031',
  primaryBlack: '#000',
  primaryDark: '#173F5F',
  primaryLightBlue: '#78B9ED',
  LightBlue1: '#3D7BBF',
  primaryLight: '#FFFAC2',
  secondaryDark1: '#8F929E',
  secondaryDark2: '#ADB0B5',
  secondaryLight1: '#EBEDEC',
  secondaryLight2: '#F7F5F6',
  secondaryGreen: '#E0F8F8',
  secondaryGreenDark: '#317E78',
  secondaryPink: '#FFE1DE',
  secondaryBrown: '#FDF1C2',
  secondaryRed: '#FF4651',
  secondaryRedLight: '#FFE1DE',
  secondaryBlue: '#5656E5',
  secondaryBlueLight: '#EFEFFB',
  secondaryBlueLight1: '#EBF0FE',

  ///////
  lightBlueBackground: 'rgba(0,44,106,0.06)',
  grayText: '#606060',
  grayText2: "#AEAEAE",
  grayText3: "#6E6E6E",
  grayText4: "#656565",
  grayBorder: '#CBD6E2',
  labelBackground: '#ebf9ff',
  grayBackground: '#F5F5F5',
  darkRed: '#B20000',
  redBackground: '#F9E8E8',
  lightblueBg: '#dce1e7',
  lightBlueBackgrounds: '#F4F6F9',

  //Status Colors
  warningTextColor: '#FA9917',
  warningBgColor: 'rgba(250,153,23,0.2)',
  errorBgColor: 'rgba(255,0,4,0.2)',
  errorTextColor: '#FF0004',
  successBgColor: 'rgba(42,201,64,0.2)',
  successTextColor: '#2AC940',
  greenDot: "#BADB47",
  lightGreen: '#A8FFC6',
  lightBrown: '#4C4C4C',
  lightRed: '#FF5C5C',
  lightBlue: "#4086F4",
  overLayBLack: "#00000057",

  //Status Color
  pendingStatus: '#F49B24',
  acceptedStatus: '#2AC940',
  expiredStatus: '#D22912',
  extendedStatus: '#7CB543',
  rejectedStatus: '#E57A44',
  cancelledStatus: '#EB5F5F',

  greenSucceessBackground: "#95E4AC",
  greenSucceessText: "#066536",

  redFailBackground: "#F5C4D0",
  redFailText: "#65013D",

  grayNeutralBackground: "#707070",
  grayNeutralText: "#707070",
};

export const theme = {
  colors,
  borderRadius: {
    xs: 2,
    x: 5,
    m: 10,
    l: 15,
    xl: 25,
  },
  spacing: {
    xs: 4,
    s: 8,
    sm: 10,
    m: 16,
    l: 24,
    xl: 40,
  },
  textVariants: {
    title: {
      fontSize: 29,
      fontFamily: "Poppins-Bold",
    },
    title2: {
      fontSize: 28,
      fontFamily: "Poppins-Bold",
    },
    title3: {
      fontSize: 22,
      fontFamily: "Poppins-Bold",
    },
    title4: {
      fontSize: 32,
      fontFamily: "Poppins-Bold",
    },
    header: {
      fontSize: 24,
      fontFamily: "Poppins-SemiBold",
      lineHeight: 26,
      color: "#20283a",
    },
    MoveinH1: {
      fontSize: 24,
      fontFamily: "Poppins-SemiBold",
      lineHeight: 26,
      color: "#20283a",
    },

    subHeader: {
      fontSize: 20,
      fontFamily: "Poppins-SemiBold",
      fontWeight: "400",
    },
    subHeading: {
      fontSize: 18,
      fontFamily: "Poppins-SemiBold",
    },
    header1: {
      fontSize: 16,
      fontFamily: "Poppins-SemiBold",
      fontWeight: "500",
      lineHeight: 19,
      color: "#000000",
    },
    tenantH1: {
      fontSize: 16,
      fontFamily: "Arial",
      fontWeight: "600",
      lineHeight: 19,
      color: "#000000",
    },
    tenantH2: {
      fontSize: 12,
      fontFamily: "Arial",
      fontWeight: "600",
      lineHeight: 19,
    },

    header2: {
      fontSize: 14,
      fontFamily: "Poppins-SemiBold",
    },
    header3: {
      fontSize: 12,
      fontFamily: "Poppins-SemiBold",
    },
    header13: {
      fontSize: 13,
      fontFamily: "Poppins-SemiBold",
    },
    headH4: {
      fontSize: 10,
      fontFamily: "Poppins-SemiBold",
    },
    header12: {
      fontSize: 12,
      fontFamily: "Poppins-Medium",
    },
    header11: {
      fontSize: 11,
      fontFamily: "Poppins-Medium",
    },
    tenants_header1: {
      fontSize: 22,
      fontFamily: "Poppins-Medium",
      color: "#ffffff"
    },
    header26: {
      fontSize: 26,
      fontFamily: "Poppins-Regular",
    },
    header35: {
      fontSize: 35,
      fontFamily: "Poppins-Regular",
    },
    body: {
      fontSize: 8,
      fontFamily: "Poppins-Regular",
    },
    body2: {
      fontSize: 9,
      fontFamily: "Poppins-Regular",
    },
    loginTilte: {
      fontSize: 30,
      fontFamily: "Poppins-Regular",
    },
  },
  cardShadow: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.3,
    shadowRadius: 6,
    elevation: 6,
  },
};

export const getAppFont = (type = 'Regular') => {
  return { fontFamily: `Poppins-${type}` };
};

export const hexToRGBA = (hex, opacity) => {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result
    ? `rgba(${parseInt(result[1], 16)},${parseInt(result[2], 16)},${parseInt(
      result[3],
      16,
    )},${opacity})`
    : null;
};

const { ThemeProvider, withTheme, useTheme } = createTheming(theme);
export { ThemeProvider, withTheme, useTheme };

// export const icons = {
//   headerNotifications: (
//     <Image source={require('../../assets/icons/bellIcon.png')} />
//   ),
//   headerAdd: <Image source={require('../../assets/icons/addIcon.png')} />,
//   headerFilter: <MoreFillIcon />,
// };