import React, { useEffect } from "react";
import {
    fetchGithubContributions,
    fetchGithubRepos,
} from "../../../Martin/Githubcall.js";

const GitHubInfo = ({ username = "xNapha" }) => {
    useEffect(() => {
        const wrapper = async () => {
            const response = await fetchGithubRepos(username);
            console.log(response);
        };
        wrapper();
    }, []);
    return <div>GitHubInfo</div>;
};

export default GitHubInfo;
