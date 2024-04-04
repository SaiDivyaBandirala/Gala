import React, { useContext, useMemo } from "react";
import {
    MaterialReactTable,
    useMaterialReactTable,
} from "material-react-table";
import { DataContext } from "../../../contexts/DataContext";

const GameTable = () => {
    const { usersList, gamesList } = useContext(DataContext);

    // Ensure gamesList and usersList are not null or undefined
    if (!gamesList || !usersList) {
        console.error("ERROR: gamesList or usersList is null or undefined");
        return null;
    }

    // Extract players and rounds data from the first game in the list
    const { players, rounds } = gamesList[0]?.data;
    const roundNumbers = Object.keys(rounds);

    // Map player IDs to usernames
    const playersMap = useMemo(() => {
        const map = new Map();
        usersList.forEach((player) => {
            map.set(player.id, player.username);
        });
        return map;
    }, [usersList]);

    // Prepare data for the table
    const data = useMemo(() => {
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

        // Calculate totals for each player
        const playerTotals = players.reduce((acc, player) => {
            acc[`player${player}`] = roundNumbers.reduce(
                (total, roundNumber) => {
                    return total + (rounds[roundNumber].points[player] || 0);
                },
                0
            );
            return acc;
        }, {});

        // Append a new row with player totals
        rowData.push({
            round: "Total",
            ...playerTotals,
        });

        return rowData;
    }, [players, rounds, roundNumbers]);

    // Define columns
    const columns = useMemo(() => {
        const playerColumns = players.map((player) => ({
            accessorKey: `player${player}`,
            header: playersMap.get(parseInt(player)),
        }));

        return [
            { accessorKey: "round", header: "Round", pinned: "left" },
            ...playerColumns,
        ];
    }, [players, playersMap]);

    // Initialize Material React Table
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
