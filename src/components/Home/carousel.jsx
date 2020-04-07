import React, { Component } from 'react'

export default class Carousel extends Component {

    render() {
        return (
            <div className='carouselComponent' id='Carousel'>
                <div id="carouselExampleFade" className="carousel slide carousel-fade" data-ride="carousel">

                    <div className="carousel-inner">

                        <div className="carousel-item active">
                            <img src="./images/30chuaphaitet.jpg" className="d-block w-90 h-60" alt="30Chua_Phai_La_Tet" />
                        </div>

                        <div className="carousel-item">
                            <img src="./images/bimatcuagit.jpg" className="d-block w-90 h-60" alt="Bi_Mat_Cua_Git" />
                        </div>

                        <div className="carousel-item">
                            <img src="./images/endgame.jpg" className="d-block w-90 h-60" alt="Doi_Mat" />
                        </div>

                        <div className="carousel-item">
                            <img src="./images/macbiec.jpg" className="d-block w-90 h-60" alt="Doi_Mat" />
                        </div>

                    </div>
                    <a className="carousel-control-prev" href="#carouselExampleFade" role="button" data-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true" />
                        <span className="sr-only">Previous</span>
                    </a>
                    <a className="carousel-control-next" href="#carouselExampleFade" role="button" data-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true" />
                        <span className="sr-only">Next</span>
                    </a>
                </div>
            </div>
        )
    }
}
