import React from 'react';
import ReactDOM from 'react-dom';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { SearchXboxGT } from './SearchXboxGT';
describe('Navigation Bar Component', () => {
  it('should render without crashing', () => {
    const div = document.createElement('div');
    const onSubmit = jest.fn();
    ReactDOM.render(<SearchXboxGT onSubmit={onSubmit} />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('should render with the proper passed in properties and be functional', () => {
    const message = 'test get started';
    const inputBoxPlaceholder = 'test placeholder';
    const inputHelpText = 'test static';
    const submitButtonText = 'test search';
    const onSubmit = jest.fn();

    const { getByText, getByTestId } = render(
      <SearchXboxGT
        messageToDisplay={message}
        inputBoxPlaceholder={inputBoxPlaceholder}
        inputHelpText={inputHelpText}
        onSubmit={onSubmit}
        submitButtonText={submitButtonText}
      />
    );
    expect(getByText(message)).toBeInTheDocument();
    expect(getByTestId(/messageToDisplay/i).textContent).toBe(message);

    expect(getByText(inputHelpText)).toBeInTheDocument();
    expect(getByTestId(/inputHelpText/i).textContent).toBe(inputHelpText);

    expect(getByTestId(/gtsearchinput/i)).toBeTruthy();

    const submitButton = getByTestId(/gtsearchsubmit/i);
    expect(submitButton.textContent).toBe(submitButtonText);
    expect(submitButton).toBeTruthy();
    fireEvent.submit(getByTestId(/form/i));
    expect(onSubmit).toHaveBeenCalled();
  });
});
