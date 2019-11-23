import React from 'react';
import ReactDOM from 'react-dom';
import ButtonGrid from './index.js';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<ButtonGrid/>, div);
  ReactDOM.unmountComponentAtNode(div);
});