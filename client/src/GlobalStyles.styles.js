import { createGlobalStyle } from 'styled-components';


export const GlobalStyle = createGlobalStyle`
    *{
        padding: 0;
        margin: 0;
        box-sizing: border-box;
        font-family: 'Merienda', cursive;
        font-family: 'Roboto Slab', serif;

        //Diable arrows near input type="number"....
        /* input::-webkit-outer-spin-button,
        input::-webkit-inner-spin-button {
            -webkit-appearance: none;
            margin: 0;
        }
        input[type=number] {
            -moz-appearance: textfield;
        } */

    }
    a,li{
        text-decoration: none;
        list-style: none;
    }

`

export const deviceSize = {
    mobileS: `(max-width: 320px)`,
    mobileM: `(max-width: 375px)`,
    mobileL: `(max-width: 425px)`,
    tablet: `(max-width: 768px)`,
    customS: `(max-width: 850px)`,
    laptop: `(max-width: 1024px)`,
    desktop: `(max-width: 1440px)`
  };