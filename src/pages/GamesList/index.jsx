import React, { useContext } from "react";
import {
    ButtonBase,
    Paper,
    Typography,
    Avatar,
    Stack,
    Box,
} from "@mui/material";
import { DataContext } from "../../contexts/DataContext";

const formatDate = (dateString) => {
    console.log("received DataContext", dateString);
    return dateString;
};

const GamesListPage = () => {
    const { gamesList, updateSelectedGame, selectedGame } =
        useContext(DataContext);

    const handleGameClick = (gameId) => {
        console.log(selectedGame);
        updateSelectedGame(gameId);
        console.log(selectedGame);
    };

    return (
        <div>
            {gamesList.map((game) => (
                <ButtonBase
                    key={game.id}
                    onClick={() => handleGameClick(game.id)}
                    style={{
                        display: "block",
                        marginTop: "10px",
                        width: "100%",
                    }}
                >
                    <Paper
                        elevation={0}
                        style={{
                            padding: "20px",
                            marginBottom: "10px",
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "center",
                        }}
                    >
                        <Stack
                            direction="column"
                            alignItems="flex-start"
                            spacing={1}
                        >
                            <Typography variant="h4">
                                {game.data.typeOf} Game
                            </Typography>
                            <Typography variant="caption">
                                Played at: {game.data.rounds["1"].playedAt}
                            </Typography>
                        </Stack>
                        <Stack
                            direction="row"
                            spacing={1}
                            alignItems="center"
                            justifyContent="flex-end"
                        >
                            {game.data.players.length <= 3 ? (
                                game.data.players.map((playerId) => (
                                    <Avatar key={playerId}>{playerId}</Avatar>
                                ))
                            ) : (
                                <>
                                    {game.data.players
                                        .slice(0, 2)
                                        .map((playerId) => (
                                            <Avatar key={playerId}>
                                                {playerId}
                                            </Avatar>
                                        ))}
                                    <Avatar>
                                        +{game.data.players.length - 2}
                                    </Avatar>
                                </>
                            )}
                        </Stack>
                    </Paper>
                </ButtonBase>
            ))}
        </div>
    );
};
export default GamesListPage;
