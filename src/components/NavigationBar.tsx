import React, { Component, FunctionComponent } from 'react';

export interface NavigationBarProps {
  left?: Component | FunctionComponent;
  right?: Component | FunctionComponent;
  title?: string;
}
const NavigationBar: React.FC<NavigationBarProps> = ({ title }) => {
  return (
    <div className="container-fluid bg-success">
      <div className="container">
        <div className="row">
          <div className="col-sm-12">
            <nav className="navbar navbar-expand-lg navbar-dark bg-success">
              <a className="navbar-brand" href="#">
                {title}
              </a>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
};

export { NavigationBar };
