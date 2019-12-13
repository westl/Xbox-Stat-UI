import React from 'react';
import ReactDOM from 'react-dom';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { ProfileDisplay } from './ProfileDisplay';
import sampleProfileData from '../test_data/xbox-profile.json';
describe('ProfileDisplay component', () => {
  it('should render without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<ProfileDisplay />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('should not show initial message, should render xbox profile data if profile is given', () => {
    const initialMessage = 'Enter a profile to see its data';
    const { getByTestId } = render(<ProfileDisplay initialMessage={initialMessage} profile={sampleProfileData} />);
    
    expect(getByTestId(/initialMessage/i).textContent).toBe('')
  });
});
