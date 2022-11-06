import React from "react";
// @material-ui/core components
import {makeStyles } from "@material-ui/core/styles";

// core components
import HeaderPage from "views/HeaderPage.js";
import Footer from "components/Footer/Footer.js";
import GridContainer from "components/Grid/GridContainer.js";

import styles from "assets/jss/material-kit-react/views/cancioneiroPage.js";
import background from "assets/img/Simbolo_Branco_Fundo_Preto.png";
import data from "assets/json/musicas.json"

import "./Cancioneiro.css";
import MusicaCard from "./MusicaCard.js"

const useStyles = makeStyles(styles);

function getMusicas() {
  var musicas = data.musicas.map(function (i, index) {
    return (
      <MusicaCard key={index} musica={i} />
    )
  })
  return musicas;
}

export default function CancioneiroPage() {

  const classes = useStyles();

  const musicas = getMusicas()

  return (
    <div>
      <HeaderPage change_height={50} />
      <div
        className={classes.pageHeader}
        style={{
          backgroundImage: "url(" + background + ")",
          backgroundSize: "cover",
          backgroundPosition: "top center"
        }}
      >

        <div className={classes.container}>
          <h2>Cancioneiro</h2>
          <GridContainer justify="center">
            {musicas}
          </GridContainer>
        </div>
        <Footer whiteFont />
      </div>
    </div>
  );
}
