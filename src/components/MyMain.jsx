import { Component } from "react";
import FilmTitle from "./FilmTitle";


export default class MyMain extends Component {
    render(){
        return (
            <main className="text-light w-100 black">
                <FilmTitle />
            </main>
        )
    }

}