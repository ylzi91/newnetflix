import { Component } from "react";
import netflixLogo from '../assets/media/netflix_logo.png'
import kidsIcon from '../assets/media/kids_icon.png'
import Search from "./Search";

export default class MyNav extends Component {
    state = {
        compare: false,
        titleSearch: ''
    }

    render(){
        return (
            <nav className="navbar navbar-expand-lg black" data-bs-theme="dark">
            <div className="container-fluid">
                <a className="navbar-brand" href="#"><img className="logoImg" src={netflixLogo} alt="" /></a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                    aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link" aria-current="page" href="#">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link " href="#">Tv Shows</a>
                        </li>
                
                        <li className="nav-item">
                            <a className="nav-link" href="#" aria-disabled="true">Movies</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#" aria-disabled="true">Recently Added</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#" aria-disabled="true">My Account</a>
                        </li>
                    </ul>
                  
                    <ul className="mb-0 navbar-nav">
                            {this.state.compare && (<input value = {this.state.titleSearch} type="search" onChange={(e) => {
                                this.setState({
                                    ...this.state,
                                    titleSearch : e.target.value
                                })
                                    
                                
                            }
                            } />)}
                            {this.state.titleSearch.length > 4 && (<Search value = {this.state.titleSearch} mySearch = {this.state.titleSearch}/>)}
                        <li className="nav-item">
                            <a className="nav-link active fw-bold" onClick={() => {
                                this.setState({
                                    compare: !this.state.compare ? true : false
                                })

                            }} aria-disabled="true"><i
                                    className="bi bi-search"></i></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link active fw-bold" href="#" aria-disabled="true">Kids</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link active" href="#" aria-disabled="true"><i className="bi bi-bell-fill"></i></a>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle py-1" href="#" role="button" data-bs-toggle="dropdown"
                                aria-expanded="false">
                                <img className="kidsImg align-self-center" src={kidsIcon} alt="" />
                            </a>
                        </li>

                    </ul>
                </div>
            </div>
        </nav>
        )
    }
}