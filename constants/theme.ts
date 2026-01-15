/**
 * Below are the colors that are used in the app. The colors are defined in the light and dark mode.
 * There are many other ways to style your app. For example, [Nativewind](https://www.nativewind.dev/), [Tamagui](https://tamagui.dev/), [unistyles](https://reactnativeunistyles.vercel.app), etc.
 */

import { ThemeT } from "@/hooks/useTheme";

export const getColors = (theme: ThemeT) => {
  switch (theme) {
    case 'dark' : {
     return Colors.dark
    }
    case 'light' : {
      return Colors.light
    }
  }
}

export interface ColorsType {
  text: string;
  background: string;
  icon: string;
  cardBackground: string;
  iconBackground: string;
  descriptionText: string;
  darkDescriptionText: string;
  addButtonColor: string;
  modalbackground: string;
  modalBackgroundContent: string;
  inputBackground?: string;
  inputBorder?: string;
  buttonBackground?: string;
  cardContentBackground?: string;
}

export const Colors = {
  light: {
    text: '#11181C',
    background: '#fff',
    icon: '#687076',
    cardBackground: '#eaecf0',
    iconBackground: '#d7dee4',
    descriptionText: '#454F54',
    darkDescriptionText: '#687076',
    addButtonColor: '#af4c4c',
    modalbackground: 'rgba(0,0,0,0.3)',
    modalBackgroundContent: '#fff',
    inputBackground: '#F5F7FA',
    inputBorder: '#ddd',
    buttonBackground: '#007bff',
    cardContentBackground: '#dbdfe6',
  },
  dark: {
    text: '#ECEDEE',
    background: '#151718',
    icon: '#9BA1A6',
    cardBackground: '#212425',
    iconBackground: '#2C2F31',
    descriptionText: '#B1B8BC',
    darkDescriptionText: '#687076',
    addButtonColor: '#af4c4c',
    modalbackground: 'rgba(0,0,0,0.7)',
    modalBackgroundContent: '#222426',
    inputBackground: '#212425',
    inputBorder: '#3e4244',
    buttonBackground: '#007bff',
    cardContentBackground: '#282c2d',
    
  },
};


