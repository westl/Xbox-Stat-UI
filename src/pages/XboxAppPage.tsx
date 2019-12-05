import React from 'react';
import { NavigationBar } from '../components/NavigationBar';
import { Landing } from '../components/Landing';
import { SearchXboxGT } from '../components/SearchXboxGT';

const XboxAppPage: React.FC<{}> = () => {
  return (
    <div>
      <NavigationBar title="Xbox Live Stats"/>
      <div className="container">
        {/* <Landing message="Quick access to your xbox data"></Landing> */}
        {/* <SearchXboxGT message="Get Started"></SearchXboxGT> */}
      </div>
    </div>
  );
};

export { XboxAppPage };
