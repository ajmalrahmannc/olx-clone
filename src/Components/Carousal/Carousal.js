// // import React, { Component } from 'react';
// import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
// import { Carousel } from 'react-responsive-carousel';

// function Carousal() {
//     return (
//         <Carousel
//             autoPlay={true}
//             interval={4000}
//             controls={false}
//             indicators={true}>

//             <div>
//                 <img src="../../../Images/banner copy.png" />
//                 {/* <p className="legend">Legend 1</p> */}
//             </div>
//             <div>
//                 <img src="../../../Images/banner copy.png" />
//                 {/* <p className="legend">Legend 2</p> */}
//             </div>
//             <div>
//                 <img src="../../../Images/banner copy.png" />
//                 {/* <p className="legend">Legend 3</p> */}
//             </div>
//         </Carousel>
//     );
// };

// // ReactDOM.render(<DemoCarousel />, document.querySelector('.demo-carousel'));

// export default Carousal;

// // Don't forget to include the css in your page

// // Using webpack or parcel with a style loader
// // import styles from 'react-responsive-carousel/lib/styles/carousel.min.css';

// // Using html tag:
// // <link rel="stylesheet" href="<NODE_MODULES_FOLDER>/react-responsive-carousel/lib/styles/carousel.min.css"/>

import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Carousel from 'react-bootstrap/Carousel';

export default function App() {
    return (
        <div style={{ display: 'block', width: "100%", padding: 30 }}>
            <Carousel>
                <Carousel.Item interval={4000}>
                    <img
                        className="d-block w-100"
                        src="../../../Images/banner copy.png"
                        alt="Image One"
                    />
                    {/* <Carousel.Caption>
                        <h3>Label for first slide</h3>
                        <p>Sample Text for Image One</p>
                    </Carousel.Caption> */}
                </Carousel.Item>
                <Carousel.Item interval={4000}>
                    <img
                        className="d-block w-100"
                        src="../../../Images/olx2.jpg"
                        alt="Image Two"
                    />
                    {/* <Carousel.Caption>
                        <h3>Label for second slide</h3>
                        <p>Sample Text for Image Two</p>
                    </Carousel.Caption> */}
                </Carousel.Item>
                <Carousel.Item interval={4000}>
                    <img
                        className="d-block w-100"
                        src="../../../Images/olx3.jpg"
                        alt="Image Three"
                    />
                </Carousel.Item>
            </Carousel>
        </div>
    );
}
