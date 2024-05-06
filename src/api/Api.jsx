export const getUsersList = async () => {
    return fetch(`${process.env.REACT_APP_API_BASE_URL}/users`)
        .then((result) => result.json())
        .catch((error) => {
            console.log(error);
            return error;
        });
};

export const getUser = async (userId) => {
    return fetch(`${process.env.REACT_APP_API_BASE_URL}/${userId}`)
        .then((result) => result.json())
        .catch((error) => {
            console.log(error);
            return error;
        });
};
