import React from 'react';
export interface SearchXboxGTProps {
  messageToDisplay?: string;
  inputBoxPlaceholder?: string;
  inputHelpText?: string;
  label?: string;
  submitButtonText?: string;
  onSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
}
export const SearchXboxGT: React.FC<SearchXboxGTProps> = ({
  messageToDisplay = 'Search',
  inputBoxPlaceholder = 'Enter Gamertag',
  label = 'Gamertag',
  inputHelpText = 'Gamertag',
  submitButtonText = 'Search',
  onSubmit
}) => {
  return (
    <div>
      <h1 className="display-4" data-testid="messageToDisplay" id="message-to-display">
        {messageToDisplay}
      </h1>
      <form onSubmit={onSubmit} data-testid="form">
        <div className="form-group">
          <label htmlFor="search">{label}</label>
          <input
            data-testid="gtsearchinput"
            id="search"
            type="text"
            className="form-control"
            placeholder={inputBoxPlaceholder}
            aria-label={inputBoxPlaceholder}
            aria-describedby="search-help"
            required
          />
          <small id="search-help" data-testid="inputHelpText" className="form-text text-muted">
            {inputHelpText}
          </small>
        </div>
        <button data-testid="gtsearchsubmit" id="submit-search" type="submit" className="btn btn-success mb-3">
          {submitButtonText}
        </button>
      </form>
    </div>
  );
};
