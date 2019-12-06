import React from 'react';
import ReactDOM from 'react-dom';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { Landing } from './Landing';

describe('Navigation Bar Component', () => {
  it('should render without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Landing />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('should render with the proper title and be clickable', () => {
    const message = 'test123';
    const { getByText } = render(<Landing messageToDisplay="test123" />);
    expect(getByText(message)).toBeInTheDocument();
  });
});
