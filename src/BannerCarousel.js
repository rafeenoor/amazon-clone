import React, {useState} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from "react-bootstrap/Carousel";


function BannerCarousel() {

        const [index, setIndex] = useState(0);

        const handleSelect = (selectedIndex, e) => {
            setIndex(selectedIndex);
        };

        return (
            <Carousel activeIndex={index} onSelect={handleSelect}>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Hero/Fuji_TallHero_Home_v2_en_US_1x._CB429090084_.jpg"
                        alt="First slide"
                    />
                    {/*<Carousel.Caption>*/}
                    {/*    <h3>First slide label</h3>*/}
                    {/*    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>*/}
                    {/*</Carousel.Caption>*/}
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Hero/Fuji_TallHero_Computers_1x._CB432469755_.jpg"
                        alt="Second slide"
                    />

                    {/*<Carousel.Caption>*/}
                    {/*    <h3>Second slide label</h3>*/}
                    {/*    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>*/}
                    {/*</Carousel.Caption>*/}
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://images-na.ssl-images-amazon.com/images/G/01/pxd/marketing/paycode/us-exports/GW_DesktopHero_1X_PayCode_Exports_1500x600_EN_Wallet._CB414695873_.jpg"
                        alt="Third slide"
                    />

                    {/*<Carousel.Caption>*/}
                    {/*    <h3>Third slide label</h3>*/}
                    {/*    <p>*/}
                    {/*        Praesent commodo cursus magna, vel scelerisque nisl consectetur.*/}
                    {/*    </p>*/}
                    {/*</Carousel.Caption>*/}
                </Carousel.Item>
            </Carousel>
        );



    // render(<ControlledCarousel />);


}
export default BannerCarousel;
