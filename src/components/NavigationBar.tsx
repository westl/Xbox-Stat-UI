import React, { Component, FunctionComponent } from 'react';

export interface NavigationBarProps {
  left?: Component | FunctionComponent | undefined;
  right?: Component | FunctionComponent | undefined;
  title: string | undefined;
}
const NavigationBar: React.FC<NavigationBarProps> = ({ title }) => {
  return (
    <div className="container-fluid bg-success">
      <div className="row">
        <div className="col-sm-6 offset-sm-3">
          <nav className="navbar navbar-expand-lg navbar-dark bg-success">
            <a className="navbar-brand" href="#">
              {title}
            </a>
          </nav>
        </div>
      </div>
    </div>
  );
};

export { NavigationBar };
