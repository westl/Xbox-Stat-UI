import React from 'react';
import ReactDOM from 'react-dom';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { NavigationBar } from './NavigationBar';
describe('Navigation Bar Component', () => {
  it('should render without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<NavigationBar  title="test"/>, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('should render with the proper title and be clickable',()=>{
      const title = 'test123'
      const {getByText} = render(<NavigationBar title="test123"/>)
      expect(getByText(title)).toBeInTheDocument();
  })
});
