import React from 'react';
import { NavigationBar } from '../components/NavigationBar';

const XboxAppPage: React.FC<{}> = () => {
  return (
    <div>
      <NavigationBar title="Xbox Live Stats"/>
      
      <div className="container"></div>
    </div>
  );
};

export { XboxAppPage };
