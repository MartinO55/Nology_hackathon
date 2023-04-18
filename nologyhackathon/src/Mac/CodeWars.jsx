import React from "react";
import { useEffect, useState } from "react";

const CodeWars = ({ username }) => {
    const [userData, setUserData] = useState(null);
    const [rankInfo, setRankInfo] = useState(null);

    const getData = async () => {
        const user = username;
        const response = await fetch(
            `https://www.codewars.com/api/v1/users/${user}`
        );

        const data = await response.json();
        setUserData(data);
        console.log(data);
        setRankInfo(data.ranks.overall);
    };

    useEffect(() => {
        getData();
        // setRankInfo(userData.ranks.overall);
        console.log(userData);
    }, []);

    return userData ? (
        <div>
            <h3>{userData.username}</h3>
            <p>Clan: {userData.clan}</p>
            <p>Honor: {userData.honor}</p>
            <p>Rank: {rankInfo.name}</p>
            <p>Leaderboard Pos: {userData.leaderboardPosition}</p>
        </div>
    ) : (
        <p>"uhoh"</p>
    );
};

export default CodeWars;
