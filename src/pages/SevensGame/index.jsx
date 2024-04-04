import React, { useContext } from "react";
import { Typography } from "@mui/material";
import { DataContext } from "../../contexts/DataContext";
import GameTable from "./subs/GameTable";

const SevensGame = () => {
    const { usersList, gamesList } = useContext(DataContext);
    const displayUsers = (playersList) =>
        usersList
            ?.filter((user) => playersList.includes(user.id.toString()))
            .map((user) => (
                <Typography key={user.id}>{user.username}</Typography>
            ));

    const displayGame = () =>
        gamesList?.map((game) => (
            <div key={game.id}>
                <Typography>Game Type - {game.name}</Typography>
                {displayUsers(game.data.players)}
            </div>
        ));
    return (
        <>
            <Typography variant="caption">Sevens Game Layout</Typography>

            {displayGame()}
            {gamesList.length > 0 && <GameTable></GameTable>}
        </>
    );
};
export default SevensGame;
