import { Component } from "react";

export default class UnderNav extends Component {
  render() {
    return (
      <>
        <div className="navbar navbar-expand black ps-2" data-bs-theme="dark">
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <span className="nav-link active">
                  <h1>Tv Shows</h1>
                </span>
              </li>
              <li className="nav-item align-self-center">
                <div className="dropdown ms-2">
                  <a
                    className="btn rounded-0 btn-secondary black dropdown-toggle"
                    href="#"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Genres
                  </a>

                  <ul className="border-1 border-light dropdown-menu black rounded-0">
                    <li>
                      <a className="dropdown-item " href="#">
                        Male
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Female
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Fluid
                      </a>
                    </li>
                  </ul>
                </div>
              </li>
            </ul>
            <ul className="mb-2  navbar-nav pt-lg-2 pe-lg-4 pt-0 pe-2">
              <li className="nav-item">
                <a
                  className="btn rounded-0 btn-secondary black"
                  href="#"
                  role="button"
                  aria-expanded="false"
                >
                  <i className="bi bi-list-task"></i>
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="btn rounded-0 btn-secondary black"
                  href="#"
                  role="button"
                  aria-expanded="false"
                >
                  <i className="bi bi-border-all"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </>
    );
  }
}
