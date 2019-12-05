import React from 'react';
export interface SearchXboxGTProps {
  message?: string | undefined;
  inputBoxPlaceholder?: string | undefined;
  inputHelpText?: string | undefined;
  label?: string | undefined;
  onSubmit: (data: any) => void;
}
export const SearchXboxGT: React.FC<SearchXboxGTProps> = ({
  message = 'Search',
  inputBoxPlaceholder = 'Enter Gamertag',
  label = 'Gamertag',
  inputHelpText = 'Gamertag',
  onSubmit
}) => {
  const handleSubmit = (event: React.FormEvent) => {
    if (!event) return;
    event.preventDefault();
    // TODO: create a state value for input, pass it through as well.
    onSubmit(true);
  };
  return (
    <div className="row">
      <div className="col-sm-12 col-md-6">
        <h1
          className="display-4"
          data-testid="messageToDisplay"
          id="message-to-display"
        >
          {message}
        </h1>
        <form onSubmit={handleSubmit} data-testid="form">
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
            <small
              id="search-help"
              data-testid="inputHelpText"
              className="form-text text-muted"
            >
              {inputHelpText}
            </small>
          </div>
          <button
            data-testid="gtsearchsubmit"
            id="submit-search"
            type="submit"
            className="btn btn-success mb-3"
            
          >
            Search
          </button>
        </form>
      </div>
    </div>
  );
};
