import { Component } from "react";
import FilmList from "./FilmList";

export default class FilmTitle extends Component {

    film = ['Harry Potter','Star Wars','The Lord Of Rings']
  render() {
    return (
      <>
        {this.film.map (myFilm => {
            return (
                <>
                <h2 className="mb-4 ms-3">Tutti i film di: {myFilm}</h2>
                <div className="container-fluid w-100 flex-nowrap overflow-scroll mx-2 mb-4">
                  <div className="row g-2 overflow-scroll flex-nowrap">
                        <FilmList filmTitle = {myFilm} />
                  </div>
                </div>
                </>
            )
        })}

      </>
    );
  }
}
