import React from 'react';
import ReactDOM from 'react-dom';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { SearchXboxGT } from './SearchXboxGT';

describe('Navigation Bar Component', () => {
  it('should render without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<SearchXboxGT />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('should render with the proper title and be clickable', () => {
    const message = 'test123';
    const { getByText } = render(<SearchXboxGT message="test123" />);
    expect(getByText(message)).toBeInTheDocument();
  });
});
