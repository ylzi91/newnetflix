import { Component } from "react";
import avatar from '../assets/media/avatar.png'

export default class Account extends Component {
    render(){
        return (
            <main class="mb-3 accountMain black text-light w-100">
            <div class="container-sm container-xl-fluid w-100 mx-auto">
                <h1 class="border-1 border-bottom border-light border-opacity-25 pb-3">Edit Profile</h1>
                <div class="row mt-3 border-1 border-bottom border-light border-opacity-25 pb-3">
                    <div class="col-4 position-relative">
                        <img class="img-fluid " src= {avatar} alt="" />
                        <i class="bi bi-pencil myShadow position-absolute start-0 ms-3 mt-1 bg-black rounded-circle px-2 py-1 border-1"></i>
                    </div>
                    
                    <div class="col-8">
                        <p class="bg-secondary text-light p-1 fw-medium">Strive Student</p>
                        <p class="mt-3">Language:</p>
                        <div class="dropdown border-bottom border-light border-opacity-25 pb-3">
                            <a class="btn rounded-0 btn-secondary black dropdown-toggle" href="#" role="button"
                                data-bs-toggle="dropdown" aria-expanded="false">
                                English
                            </a>
    
                            <ul class="nav-item border-1 border-light bg-black dropdown-menu rounded-0">
                                <li><a class="dropdown-item" href="#">Aramaico</a></li>
                                <li><a class="dropdown-item" href="#">Ferrarese</a></li>
                                <li><a class="dropdown-item" href="#">Veneto</a></li>
                            </ul>
                        </div>
                        <p class="mt-3">Maturity Settings:</p>
                        <p class="bg-secondary text-light p-1 fw-bold w-75 text-center">ALL MATURITY RATINGS</p>
                        <p class="babyChar">Show titles of all maturity ratings for this profile.</p>
                        <div class="border-1 border-bottom border-light border-opacity-25 pb-3">
                            <a class="btn rounded-0 btn-secondary black px-4 opacity-50 midChar" href="#" role="button"
                                aria-expanded="false">
                                EDIT
                            </a>
                        </div>
                        <p class="mt-3">Autoplay controls</p>
                        <div class="form-check">
                            <input class="form-check-input black" type="checkbox" value="" id="flexCheckIndeterminate" />
                            <label class="form-check-label babyChar" for="flexCheckIndeterminate">
                                Autoplay next episode in a series on all devices.
                            </label>
                          </div>
                          <div class="form-check">
                            <input class="form-check-input black checkbox-personalizzata" type="checkbox" value="" id="flexCheckIndeterminate" />
                            <label class="form-check-label babyChar" for="flexCheckIndeterminate">
                                Autoplay previews while browsing on all devices.
                            </label>
                          </div>
                    </div>
                </div>
            </div>
        </main>
        )
    }
}