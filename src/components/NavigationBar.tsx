import React, {
  Component,
  FunctionComponent,
  FunctionComponentElement
} from 'react';

export interface NavigationBarProps {
  left?: Component | FunctionComponent | undefined;
  right?: Component | FunctionComponent | undefined;
  title: string | undefined;
}
const NavigationBar: React.FC<NavigationBarProps> = ({ title }) => {
  return (
    <div className="container-fluid bg-success" >
      <div className="row">
        <div className="col-sm-6 offset-sm-3">
          <nav className="navbar navbar-expand-lg navbar-dark bg-success">
            <a className="navbar-brand" href="#">
              {title}
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarTogglerDemo02"
              aria-controls="navbarTogglerDemo02"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
              <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                <li className="nav-item active">
                  <a className="nav-link" href="#">
                    Home <span className="sr-only">(current)</span>
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Link
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link disabled" href="#">
                    Disabled
                  </a>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
};

export { NavigationBar };
