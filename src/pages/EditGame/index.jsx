import React, { useContext } from "react";
import Navbar from "../Dashboard/subs/navbar";
import BaseContainer from "../../components/containers/base-contatiner";
import { DataContext } from "../../contexts/DataContext";
import Carousel from "../../components/containers/carousel";
import CSlider from "../../components/sliders/circular-slider";
import Nav from "./subs/Nav";

const EditGame = () => {
    const { gamesList, selectedGame } = useContext(DataContext);
    const currentGame = gamesList.find((game) => game.id === selectedGame);
    const playersArr = currentGame.data.players;
    const roundsArr = Array.from(
        { length: Object.keys(currentGame.data.rounds).length },
        (_, index) => index + 1
    ).map((_) => "Round " + _);
    return (
        <>
            <Navbar></Navbar>
            <BaseContainer>
                <Nav />
                <Carousel items={playersArr} />
                <Carousel items={roundsArr} />
                <CSlider></CSlider>
            </BaseContainer>
        </>
    );
};

export default EditGame;
