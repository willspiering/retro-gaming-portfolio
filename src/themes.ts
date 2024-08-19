// src/themes.ts

export interface Theme {
  name: string;
  colors: {
    bgColor: string;
    textColor: string;
    borderColor: string;
    headerBg: string;
    cardBg: string;
    highlightColor: string;
    secondaryColor: string;
    accentColor: string;
    mutedColor: string;
    linkColor: string;
    linkHoverColor: string;
  };
}

export const themes: Theme[] = [
  {
    name: 'retroComputer',
    colors: {
      bgColor: '#002b36',
      textColor: '#839496',
      borderColor: '#586e75',
      headerBg: '#073642',
      cardBg: '#001e26',
      highlightColor: '#b58900',
      secondaryColor: '#2aa198',
      accentColor: '#cb4b16',
      mutedColor: '#657b83',
      linkColor: '#268bd2',
      linkHoverColor: '#6c71c4',
    },
  },
  {
    name: 'zelda',
    colors: {
      bgColor: '#1a2b1e',
      textColor: '#e0f8cf',
      borderColor: '#b0d990',
      headerBg: '#244c28',
      cardBg: '#2f4f2f',
      highlightColor: '#f7d51d',
      secondaryColor: '#71aa34',
      accentColor: '#ff6b6b',
      mutedColor: '#a0c090',
      linkColor: '#40e0d0',
      linkHoverColor: '#00ced1',
    },
  },
  // Add more themes here...
];

export function getThemeByName(name: string): Theme {
  return themes.find((theme) => theme.name === name) || themes[0];
}
