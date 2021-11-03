var React = require('react');
var ReactDOM = require('react-dom');
var Carousel = require('react-responsive-carousel').Carousel;

class DemoCarousel extends React.Component{

    render() {
        return (
            <Carousel showArrows={true} >
                <div>
                    <img src="img/beo_logo.png" />
                    <p className="legend">Legend 1</p>
                </div>
                <div>
                    <img src="img/beo_logo.png" />
                    <p className="legend">Legend 2</p>
                </div>
                <div>
                    <img src="img/beo_logo.png" />
                    <p className="legend">Legend 3</p>
                </div>
             
            </Carousel>
        );
    }
}

export default DemoCarousel;