import React from "react";
import { useEffect, useState } from "react";
import Plot from "react-plotly.js";

const CodeWars = ({ username }) => {
  const [userData, setUserData] = useState(null);
  const [rankInfo, setRankInfo] = useState(null);
  const [plotDataX, setPlotDataX] = useState(null);
  const [plotDataY, setPlotDataY] = useState(null);

  const getData = async () => {
    const user = username;
    const response = await fetch(
      `https://www.codewars.com/api/v1/users/${user}`
    );

    const data = await response.json();
    setUserData(data);
    console.log(data);
    setRankInfo(data.ranks);

    const xArr = [];
    const yArr = [];
    Object.entries(data.ranks.languages).forEach((key) => {
      xArr.push(key[0]);
      yArr.push(key[1].score);
    });
    console.log(xArr, yArr);
    const xArr2 = Object.values(xArr);
    const yArr2 = Object.values(yArr);

    setPlotDataX(xArr2);
    setPlotDataY(yArr2);
  };

  useEffect(() => {
    getData();
    console.log("render");
  }, []);

  console.log(plotDataX, "x data");
  console.log(plotDataY, "y data");

  return userData ? (
    <div>
      <h3>{userData.username}</h3>
      <p>Clan: {userData.clan}</p>
      <p>Honor: {userData.honor}</p>
      <p>Rank: {rankInfo.overall.name}</p>
      <p>Leaderboard Pos: {userData.leaderboardPosition}</p>
      <Plot
        data={[
          {
            x: plotDataX,
            y: plotDataY,
            type: "bar",
            mode: "lines+markers",
            marker: { color: "red" },
          },
          { type: "bar", x: [{ plotDataX }], y: [{ plotDataY }] },
        ]}
        layout={{ width: 320, height: 240, title: "CodeWars Languages" }}
      />
    </div>
  ) : (
    <p>Rendering content</p>
  );
};

export default CodeWars;
