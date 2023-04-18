import React, { useEffect, useState } from "react";
import Info from "./components/Info/Info";
import SearchBar from "./components/SearchBar/SearchBar";

const Index = () => {
    const [rankInfo, setRankInfo] = useState({});
    const [totalCompleted, setTotalCompleted] = useState({});

    useEffect(() => {
        const fetchCodeWars = async () => {
            const response = await fetch(
                "https://www.codewars.com/api/v1/users/xNapha"
            );
            const codeWarsData = await response.json();
            console.log(codeWarsData);
            const challenges = codeWarsData.codeChallenges;
            const languages = codeWarsData.ranks;
            setRankInfo(languages);
            setTotalCompleted(challenges);
        };
        fetchCodeWars();
    }, []);

    const renderContent = (rankInfo) => {
        const languagesArr = Object.values(rankInfo.languages);
        return languagesArr.map((language) => {
            const { rank, name, color, score } = language;
            return (
                <Info>
                    <h1>{score}</h1>
                    <h2 style={{ color: `${color}` }}>{name}</h2>
                    <h4>Rank: {rank}</h4>
                </Info>
            );
        });
    };
    const overallRank = (rankInfo) => {
        const { rank, name, color, score } = rankInfo.overall;
        return (
            <Info>
                <h1>{score}</h1>
                <h2 style={{ color: `${color}` }}>{name}</h2>
                <h4>Rank: {rank}</h4>
            </Info>
        );
    };
    const challengeInfo = (codeChallenges) => {
        const { totalAuthored, totalCompleted } = codeChallenges;
        return (
            <Info>
                <p>Authored: {totalAuthored}</p>
                <p>Completed: {totalCompleted}</p>
            </Info>
        );
    };
    return (
        <div>
            {renderContent(rankInfo)}
            {overallRank(rankInfo)}
            {challengeInfo(totalCompleted)}
        </div>
    );
};

export default Index;
