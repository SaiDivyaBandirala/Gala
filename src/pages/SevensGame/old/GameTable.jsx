import React, { useContext, useEffect, useState, useMemo } from "react";
import {
    MaterialReactTable,
    useMaterialReactTable,
} from "material-react-table";
import { DataContext } from "../../../contexts/DataContext";

function getColumns(players, playersMap) {
    const playerColumns = players.map((player) => ({
        accessorKey: `player${player}`,
        header: playersMap.get(parseInt(player)),
        size: 20,
    }));

    return [
        { accessorKey: "round", header: "Round", pinned: "left", size: 20 },
        ...playerColumns,
    ];
}

function getData(roundNumbers, rounds, players) {
    const rowData = [];
    roundNumbers.forEach((roundNumber) => {
        const roundData = {
            round: roundNumber,
            ...players.reduce((acc, player) => {
                acc[`player${player}`] =
                    rounds[roundNumber].points[player] || 0;
                return acc;
            }, {}),
        };

        rowData.push(roundData);
    });

    const playerTotals = players.reduce((acc, player) => {
        acc[`player${player}`] = roundNumbers.reduce((total, roundNumber) => {
            return total + (rounds[roundNumber].points[player] || 0);
        }, 0);
        return acc;
    }, {});

    rowData.push({
        round: "Total",
        ...playerTotals,
    });

    return rowData;
}

const GameTable = () => {
    const { usersList, gamesList } = useContext(DataContext);
    const [data, setData] = useState([]);
    const [columns, setColumns] = useState([]);

    useEffect(() => {
        if (gamesList.length < 1 || usersList.length < 1) {
            console.error("ERROR: gamesList or usersList is null or undefined");
            return;
        }

        const { players, rounds } = gamesList[0]?.data;
        const roundNumbers = Object.keys(rounds);

        const playersMap = new Map();
        usersList.forEach((player) => {
            playersMap.set(player.id, player.username);
        });

        setData(getData(roundNumbers, rounds, players));

        setColumns(getColumns(players, playersMap));
    }, [gamesList, usersList]);

    const table = useMaterialReactTable({
        columns,
        data,
        initialState: {
            columnPinning: {
                left: ["round"],
            },
        },
    });

    return <MaterialReactTable table={table} />;
};

export default GameTable;
