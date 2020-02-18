import { createGlobalStyle } from 'styled-components';

import 'react-toastify/dist/ReactToastify.css';
import background from '../assets/images/background.svg';

export default createGlobalStyle`

@import url('https://fonts.googleapis.com/css?family=Noto+Sans&display=swap');

  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  #root {
    min-height: 1020px;
    margin: 0 auto;
    padding: 0 20px 50px
  }

  body {
    background: #191920 url(${background}) no-repeat center top;
    -webkit-font-smoothing: antialiased !important;
  }

  body, input, button {
    color: #222;
    font-size: 14px;
    font-family: 'Noto Sans', sans-serif;
  }

  button {
    cursor: pointer;
  }
`;
