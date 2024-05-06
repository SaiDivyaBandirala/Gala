import React, { useContext } from "react";
import { CompactTable } from "@table-library/react-table-library/compact";
import { useTheme } from "@table-library/react-table-library/theme";
import {
    DEFAULT_OPTIONS,
    getTheme,
} from "@table-library/react-table-library/material-ui";
import { DataContext } from "../../../contexts/DataContext";

const GameTable = () => {
    const { usersList, gamesList, selectedGame } = useContext(DataContext);
    if (!selectedGame) {
        return null;
    }
    if (!gamesList || !usersList) {
        return null;
    }
    if (gamesList.length < 1 || usersList.length < 1) {
        return null;
    }
    const currentGame = gamesList.find((game) => game.id === selectedGame);
    if (!currentGame) {
        return null;
    }
    const { players, rounds } = currentGame?.data;
    const roundNumbers = Object.keys(rounds);

    const playersMap = new Map();
    usersList.forEach((player) => {
        playersMap.set(player.id, player.username);
    });

    const data = roundNumbers.map((roundNumber) => {
        const rowData = {
            round: roundNumber,
        };

        players.forEach((player) => {
            const playerId = `player${player}`;
            rowData[playerId] = rounds[roundNumber].points[player] || 0;
        });

        return rowData;
    });

    const playerTotals = {
        round: "Total",
    };
    players.forEach((player) => {
        const playerId = `player${player}`;
        playerTotals[playerId] = roundNumbers.reduce(
            (total, roundNumber) =>
                total + (rounds[roundNumber].points[player] || 0),
            0
        );
    });
    data.push(playerTotals);

    const columns = [
        { label: "Round", renderCell: (item) => item.round },
        ...players.map((player) => ({
            label: playersMap.get(parseInt(player)),
            renderCell: (item) => item[`player${player}`],
        })),
    ];

    const materialTheme = getTheme(DEFAULT_OPTIONS);
    const theme = useTheme(materialTheme);
    return (
        <>
            <CompactTable
                columns={columns}
                data={{ nodes: data }}
                theme={theme}
            />
        </>
    );
};

export default GameTable;
