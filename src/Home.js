import React from "react";
import Product from "./Product"
import "./Home.css";
import BannerCarousel from "./BannerCarousel";
function Home() {
    return(
        <div className="home">
            <BannerCarousel className="home_image"/>
            {/*<img className="home_image" src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg " alt=""/>*/}
            <Product
                id="12321341"
                title="The lean Startup: How Innovation Creates"
                price={11.96}
                rating={5}
                image="https://images-na.ssl-images-amazon.com/images/I/61drpi3cYUL._SX522_.jpg"
            />



        </div>

    );

}

export default Home;