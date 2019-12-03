import React from 'react';
import ReactDOM from 'react-dom';
import { XboxAppPage } from './XboxAppPage';
describe('Xbox App Page', () => {
  it('should render without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<XboxAppPage />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
