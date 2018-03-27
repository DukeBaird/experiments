import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import Content from './components/Content.jsx';

ReactDOM.render(
<BrowserRouter>
  <div>
    <Content />
  </div>
</BrowserRouter>,
  document.getElementById('root')
);
