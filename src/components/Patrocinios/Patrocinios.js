import React from "react";
import Paper from '@material-ui/core/Paper';
import Slider from "react-slick";
import "assets/css/patrocinios.css"
import patrocinios from "assets/json/patrocinios.json"
import Typography from '@material-ui/core/Typography';
import { withStyles } from "@material-ui/core/styles";
import { Divider } from '@material-ui/core';
import { BrowserView, MobileView } from 'react-device-detect';

const WhiteTextTypography = withStyles({
    root: {
      color: "#FFFFFF"
    }
  })(Typography);

const carousel_settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    focusOnSelect: true,
    outerHeight: "auto"
};

const carousel_settings_mobile = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    focusOnSelect: true
};

function getImages() {
    var result = patrocinios.items.map(function (i, index) {
        var foto = require("assets/img/patrocinios/" + i.foto);
        return (
            <div id="element" key={i.nome}>
                <a href={i.link} target="_blank">
                    <div className="patrocinio_container">
                        <img src={foto} alt={index} className="patrocinio_image" />
                    </div>
                </a>
                <div id="name">
                    <WhiteTextTypography variant="h5" align="center">
                        {i.nome}
                    </WhiteTextTypography>
                </div>
                <br></br>
                <div id="content">
                    <WhiteTextTypography variant="body2" align="center">
                        {i.desconto}
                    </WhiteTextTypography>
                </div>
            </div>
        )
    })
    return result;
}


const fotos = getImages();


export default function Patrocinios(props) {
    const { children, className, ...rest } = props;
    return (
        <>
            <BrowserView>
                
                    <h2>Parceiros e Benefícios</h2>
                    <div id="container">
                        <Slider {...carousel_settings} >
                            {fotos}
                        </Slider>
                    </div>
            </BrowserView>
            <MobileView>
                    <h2>Parceiros e Benefícios</h2>
                    <div id="container">
                        <Slider {...carousel_settings_mobile} >
                            {fotos}
                        </Slider>
                    </div>
            </MobileView>
        </>
    );
}