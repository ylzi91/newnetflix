import { Component } from "react";

export default class MyFooter extends Component {
    render(){
        return (
            <>
                 <footer className="text-light opacity-50">
        <div className="container-fluid w-75">
          <div className="row">
            <div className="col-12 fs-2 mb-3">
              <i className="bi bi-facebook me-2"></i>
              <i className="bi bi-instagram me-2"></i>
              <i className="bi bi-twitter-x me-2"></i>
              <i className="bi bi-youtube"></i>
            </div>
            <div className="row midChar">
              <div className="col-3">
                <p>Audio and Subtitles</p>
                <p>Media Center</p>
                <p>Audio and Subtitles</p>
                <p>Audio and Subtitles</p>
              </div>
              <div className="col-3">
                <p>Audio and Subtitles</p>
                <p>Audio and Subtitles</p>
                <p>Audio and Subtitles</p>
              </div>
              <div className="col-3">
                <p>Audio and Subtitles</p>
                <p>Audio and Subtitles</p>
                <p>Audio and Subtitles</p>
              </div>
              <div className="col-3">
                <p>Audio and Subtitles</p>
                <p>Audio and Subtitles</p>
                <p>Audio and Subtitles</p>
              </div>
            </div>
            <div className="row">
              <div className="col-12">
                <a
                  className="midChar btn rounded-0 btn-secondary black"
                  href="#"
                  role="button"
                  aria-expanded="false"
                >
                  Service Code
                </a>
              </div>
            </div>
            <div className="row my-3">
              <div className="col-12">
                <p className="babyChar">© 1997-2019 Netflix, Inc.</p>
              </div>
            </div>
          </div>
        </div>
      </footer>
            </>
        )
    }
}