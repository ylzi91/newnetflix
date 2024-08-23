import { Component } from "react";
import { ListGroup } from "react-bootstrap";

export default class Search extends Component {

    key = "baf3ccdf";
    state = {
      listFilm: [],
      isLoading: true,
      titleS: this.props.mySearch
    };
  
    componentDidMount() {
        this.getFilmFrom()
      
    }
  
    getFilmFrom = async () => {
      try {
        const response = await fetch(
          `https://www.omdbapi.com/?apikey=${this.key}&s=${this.state.titleS}`
        );
        
        const lista = await response.json();
        const arrayTemp = [];
        arrayTemp.push(lista.Search);
        console.log("ArrayTemp", arrayTemp);
        this.setState({
          titleS: this.props.mySearch,  
          listFilm: lista.Search,
          isLoading: false
        });
      } catch {console.log('Errore')}
    };

  render() {
    console.log(this.state.titleS)
    console.log(this.props.mySearch)
    if (this.props.mySearch != this.state.titleS){
        this.getFilmFrom()
    }
    console.log('Lista film',this.state.listFilm)
    

        return (
            
        <ListGroup style={{maxHeight: '200px'}} className=" h-25 w-50 position-absolute mt-5 start-50 z-1">
        
        {!this.state.listFilm ? '' : this.state.listFilm.map (film => {
            return (
                <ListGroup.Item> <img style={{width: '50px'}} src = {film.Poster} />{film.Title}</ListGroup.Item>
              
            )
        })}
        </ListGroup>
     )
  }
}
