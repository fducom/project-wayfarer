import React, { Component } from 'react';

class Carousel extends Component {
    render() {
        return (
        <div >
            <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
                <ol className="carousel-indicators">
                    <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                </ol>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img className="d-block w-100" src="http://media.royalcaribbean.com/content/shared_assets/images/ports/hero/SEA_01.jpg" alt="Seattle"/>
                    </div>
                    <div className="carousel-item">
                        <img className="d-block w-100" src="https://odis.homeaway.com/odis/destination/fd3aedb6-a6c8-4c86-a743-8c4f1264636f.hw1.jpg" alt="San Francisco"/>
                    </div>
                    <div className="carousel-item">
                        <img className="d-block w-100" src="https://odis.homeaway.com/odis/destination/fd3aedb6-a6c8-4c86-a743-8c4f1264636f.hw1.jpg" alt="Third slide"/>
                    </div>
                </div>
                <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="sr-only">Previous</span>
                </a>
                <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="sr-only">Next</span>
                </a>
            </div>
        </div>
        );
    }
}

export default Carousel;