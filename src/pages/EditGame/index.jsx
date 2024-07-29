import React, { useContext, useEffect, useState } from "react";
import Navbar from "../Dashboard/subs/navbar";
import BaseContainer from "../../components/containers/base-contatiner";
import { DataContext } from "../../contexts/DataContext";
import Carousel from "../../components/containers/carousel";
import CSlider from "../../components/sliders/circular-slider";
import Nav from "./subs/Nav";
import { Container } from "@mui/material";

const EditGame = () => {
    const { usersList, gamesList, selectedGame } = useContext(DataContext);
    if (selectedGame == undefined || selectedGame == null) return <></>;

    const currentGame = gamesList.find((game) => game.id === selectedGame);
    const playersArr = currentGame.data?.players?.map(
        (_) => usersList.filter((u) => u.id == _)[0].username
    );
    const roundsArr = Array.from(
        { length: Object.keys(currentGame.data?.rounds).length },
        (_, index) => index + 1
    ).map((_) => "Round " + _);

    const [selectedPlayer, setSelectedPlayer] = useState(0);
    const [selectedRound, setSelectedRound] = useState(0);
    const [score, setScore] = useState(0);
    const fetchScore = () => {
        if (selectedPlayer >= 0 && selectedRound >= 0) {
            const playerId = usersList.filter(
                (_) => _.username === playersArr[selectedPlayer]
            )[0].id;
            const roundData = currentGame.data.rounds[selectedRound + 1];
            const playerScore = roundData.points[playerId] || 0;
            setScore(playerScore);
        }
    };

    useEffect(() => {
        fetchScore();
    }, []);

    useEffect(() => {
        fetchScore();
    }, [selectedRound, selectedPlayer]);

    return (
        <>
            <Navbar></Navbar>
            <BaseContainer>
                <Nav />
                <Container
                    style={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "center",
                        height: "auto",
                        textAlign: "center",
                    }}
                >
                    <Carousel
                        items={roundsArr}
                        setSelectedItem={setSelectedRound}
                    />
                    <Carousel
                        items={playersArr}
                        setSelectedItem={setSelectedPlayer}
                    />
                    <CSlider value={score}></CSlider>
                </Container>
            </BaseContainer>
        </>
    );
};

export default EditGame;
