export const fetchGithubRepos = async (username = "xNapha") => {

  const headers = {
    Authorization: "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",
  };

  const body = {
    query: `query {

        user(login: "${username}") {
            repositories(first: 50, isFork: false, orderBy: { field: UPDATED_AT, direction: DESC }) {
                nodes {
                    name,
                    url,
                    pushedAt,
                    updatedAt,
                    languages (first: 10) {
                        nodes {
                            color
                            name
                        }
                    }
                }
            }
        }
    }`,
    };
    try {
        const response = await fetch("https://api.github.com/graphql", {
            headers: headers,
            method: "POST",
            body: JSON.stringify(body),
        });
        console.log(response);
        const data = await response.json();
        console.log(data);
        return data;
    } catch (error) {
        console.log(error.message);
        throw new Error(error.message);
    }
};

export const fetchGithubContributions = async (
    username,
    fromDateString,
    toDateString
) => {
    const headers = {
        Authorization: "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",
    };
    const body = {
        query: `query {
              user(login: "${username}") {
                name
                contributionsCollection(from: "${fromDateString}T12:00:00Z", to: "${toDateString}T12:00:00Z") {
                  contributionCalendar {
                    totalContributions
                  }
                }
              }
            }`,
    };

    try {
        const response = await fetch("https://api.github.com/graphql", body, {
            headers: headers,
        });

        const data = await response.json();

        console.log(data);
        return data;
    } catch (error) {
        console.log(error.message);
        throw new Error(error.message);
    }
};
