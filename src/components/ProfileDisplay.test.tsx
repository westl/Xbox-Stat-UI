import React from 'react';
import ReactDOM from 'react-dom';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { ProfileDisplay } from './ProfileDisplay';

describe('ProfileDisplay component', () => {
  it('should display properly', () => {
    render(<ProfileDisplay />);
  });
});
