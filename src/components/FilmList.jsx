import { Component } from "react";
import { Spinner } from "react-bootstrap";

export default class FilmList extends Component {
  key = "baf3ccdf";
  state = {
    listFilm: [],
    isLoading: true,
  };

  componentDidMount() {
    this.getFilmFrom();
  }

  getFilmFrom = async () => {
    try {
      const response = await fetch(
        `https://www.omdbapi.com/?apikey=${this.key}&s=${this.props.filmTitle}`
      );
      const lista = await response.json();
      const arrayTemp = [];
      arrayTemp.push(lista.Search);
      console.log("ArrayTemp", arrayTemp);
      this.setState({
        listFilm: lista.Search,
        isLoading: false
      });
    } catch {console.log('Errore')}
  };

  render() {
    if (this.state.isLoading){
        return  <Spinner className=" m-2" animation="border" variant="info" />
    }
       return this.state.listFilm.map((film) => {
      return (
        <>
        
        <div className="col-xxl-2 col-xl-4 col-md-6 col-sm-6 col-12 position-relative">
           <img className="img-fluid zoomImg" src={film.Poster} alt="" />
        </div>
        </>
      );
    });
  }
}
