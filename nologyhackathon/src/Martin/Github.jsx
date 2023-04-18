import React from "react";
import { fetchGithubRepos, fetchGithubContributions } from "./Githubcall.js";
import { useState, useEffect } from "react";

const Github = ({ username }) => {
  const [userReposData, setUserReposData] = useState(null);
  const [userContributionsData, setUserContributionsData] = useState(null);

  return (
    <>
      <div>
        <h3>Github</h3>
        <button onClick={fetchGithubContributions}>Contributions</button>
        <button onClick={fetchGithubRepos}>Repos</button>
      </div>
    </>
  );
};

export default Github;
