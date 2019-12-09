import React from 'react';
import { Landing } from '../components/Landing';
import { SearchXboxGT } from '../components/SearchXboxGT';
// TODO: remove once done with static data.
import profileData from '../test_data/xbox-profile.json';
import { ProfileDisplay } from '../components/ProfileDisplay';
const XboxAppPage: React.FC<{}> = () => {
  // TODO: turn into state variables
  let staticXboxProfileData = {};
  const handleSearchSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(profileData);
    staticXboxProfileData = profileData; // TODO: share this with the account display component
  };
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-sm-12 col-md-6 my-3">
            <Landing messageToDisplay="Find your friends Xbox Live profiles"></Landing>
          </div>
          <div className="col-sm-12 col-md-6 my-3">
            <SearchXboxGT
              messageToDisplay="Get Started"
              inputBoxPlaceholder="Search a gamertag"
              inputHelpText="Find public information about the specified gamer"
              onSubmit={handleSearchSubmit}
            ></SearchXboxGT>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-12">
            <ProfileDisplay profile={profileData} initialMessage="Please enter in a gamertag and search to display information." />
          </div>
        </div>
      </div>
    </div>
  );
};

export { XboxAppPage };
