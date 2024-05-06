export const getGamesList = async () => {
    return fetch(`${process.env.REACT_APP_API_BASE_URL}/games`)
        .then((result) => result.json())
        .catch((error) => {
            console.log(error);
            return error;
        });
};
