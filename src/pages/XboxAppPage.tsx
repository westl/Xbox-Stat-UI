import React from 'react';
import { NavigationBar } from '../components/NavigationBar';
import { Landing } from '../components/Landing';
import { SearchXboxGT } from '../components/SearchXboxGT';

const XboxAppPage: React.FC<{}> = () => {
  const handleSearchSubmit = () => {};
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-sm-12 col-md-6">
            <Landing messageToDisplay="Find your friends Xbox Live profiles"></Landing>
          </div>
          <div className="col-sm-12 col-md-6">
            <SearchXboxGT
              messageToDisplay="Get Started"
              inputBoxPlaceholder="Search a gamertag"
              inputHelpText="Find public information about the specified gamer"
              onSubmit={handleSearchSubmit}
            ></SearchXboxGT>
          </div>
        </div>
      </div>
    </div>
  );
};

export { XboxAppPage };
