import React from "react";
import GameTable from "./subs/GameTable";
import Navbar from "../Dashboard/subs/navbar";
import BaseContainer from "../../components/containers/base-contatiner";
import Nav from "./subs/Nav";

const SevensGame = () => {
    return (
        <>
            <Navbar></Navbar>
            <BaseContainer>
                <Nav />
                <GameTable></GameTable>
            </BaseContainer>
        </>
    );
};
export default SevensGame;
