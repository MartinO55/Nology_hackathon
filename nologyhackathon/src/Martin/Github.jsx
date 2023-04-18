import React from "react";
import { fetchGithubRepos, fetchGithubContributions } from "./Githubcall.js";
import { useState, useEffect } from "react";

const Github = ({ username }) => {
  const [userReposData, setUserReposData] = useState(null);
  const [userContributionsData, setUserContributionsData] = useState(null);

  return (
    <>
      <button onClick={fetchGithubRepos}>repos</button>
    </>
  );
};

export default Github;
