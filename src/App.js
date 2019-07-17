import React, { Fragment } from 'react';
import Header from './homepage/header';
import { GlobalStyle } from './style';
import {GlobalIconfont} from '../src/static/fontIcon/iconfont';
const App = () => {
  return (
    <Fragment>
      <GlobalStyle />
      <GlobalIconfont/>
      <Header />
    </Fragment>
  );
}

export default App;
