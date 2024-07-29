import React, { useContext, useEffect, useState } from "react";
import Navbar from "../Dashboard/subs/navbar";
import BaseContainer from "../../components/containers/base-contatiner";
import { DataContext } from "../../contexts/DataContext";
import Carousel from "../../components/containers/carousel";
import CSlider from "../../components/sliders/circular-slider";
import Nav from "./subs/Nav";

const EditGame = () => {
    const { usersList, gamesList, selectedGame } = useContext(DataContext);
    const currentGame = gamesList.find((game) => game.id === selectedGame);
    const playersArr = currentGame.data.players.map(
        (_) => usersList.filter((u) => u.id == _)[0].username
    );
    console.log(gamesList, selectedGame);
    const roundsArr = Array.from(
        { length: Object.keys(currentGame.data.rounds).length },
        (_, index) => index + 1
    ).map((_) => "Round " + _);

    const [selectedPlayer, setSelectedPlayer] = useState(null);
    const [selectedRound, setSelectedRound] = useState(null);
    const [score, setScore] = useState(0);
    const fetchScore = () => {
        setScore((s) => s + 10);
    };
    useEffect(() => {
        fetchScore(selectedPlayer, selectedRound);
    }, [selectedPlayer, selectedRound]);
    if (selectedGame == undefined || selectedGame == null) return <></>;
    return (
        <>
            <Navbar></Navbar>
            <BaseContainer>
                <Nav />
                <Carousel
                    items={playersArr}
                    setSelectedItem={setSelectedPlayer}
                />
                <Carousel
                    items={roundsArr}
                    setSelectedItem={setSelectedRound}
                />
                <CSlider value={score}></CSlider>
            </BaseContainer>
        </>
    );
};

export default EditGame;
