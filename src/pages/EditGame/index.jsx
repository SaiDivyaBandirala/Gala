import React, { useContext, useEffect, useState } from "react";
import Navbar from "../Dashboard/subs/navbar";
import BaseContainer from "../../components/containers/base-contatiner";
import { DataContext } from "../../contexts/DataContext";
import Carousel from "../../components/containers/carousel";
import CSlider from "../../components/sliders/circular-slider";
import Nav from "./subs/Nav";
import { Container } from "@mui/material";

const EditGame = () => {
    const { usersList, gamesList, selectedGame, updateGamesList } =
        useContext(DataContext);
    if (selectedGame == undefined || selectedGame == null) return <></>;

    const originalGame = gamesList.find((game) => game.id === selectedGame);
    const [tempGameData, setTempGameData] = useState(
        JSON.parse(JSON.stringify(originalGame))
    );

    const playersArr = tempGameData.data?.players?.map(
        (_) => usersList.find((u) => u.id == _).username
    );
    const roundsArr = Array.from(
        { length: Object.keys(tempGameData.data?.rounds).length },
        (_, index) => index + 1
    ).map((_) => "Round " + _);

    const [selectedPlayer, setSelectedPlayer] = useState(0);
    const [selectedRound, setSelectedRound] = useState(0);
    const [score, setScore] = useState(0);

    const fetchScore = () => {
        if (selectedPlayer >= 0 && selectedRound >= 0) {
            const playerId = usersList.find(
                (u) => u.username === playersArr[selectedPlayer]
            ).id;
            const roundData = tempGameData.data.rounds[selectedRound + 1];
            const playerScore = roundData.points[playerId] || 0;
            setScore(playerScore);
        }
    };

    useEffect(() => {
        fetchScore();
    }, [selectedRound, selectedPlayer]);

    useEffect(() => {
        if (selectedPlayer >= 0 && selectedRound >= 0) {
            const playerId = usersList.find(
                (u) => u.username === playersArr[selectedPlayer]
            ).id;
            setTempGameData((prevData) => {
                const newData = { ...prevData };
                newData.data.rounds[selectedRound + 1].points[playerId] = score;
                return newData;
            });
        }
    }, [score]);

    const handleSave = () => {
        const updatedGamesList = gamesList.map((game) =>
            game.id === tempGameData.id ? tempGameData : game
        );
        updateGamesList(updatedGamesList);
    };

    const handleDiscard = () => {
        setTempGameData(JSON.parse(JSON.stringify(originalGame)));
    };

    return (
        <>
            <Navbar />
            <BaseContainer>
                <Nav onSave={handleSave} onDiscard={handleDiscard} />
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
                    <CSlider value={score} setValue={setScore} />
                </Container>
            </BaseContainer>
        </>
    );
};

export default EditGame;
