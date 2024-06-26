export const getUsersList = async (usersEndpoint) => {
    try {
        const response = await fetch(
            `${process.env.REACT_APP_API_BASE_URL}/${usersEndpoint.data.users}`
        );

        if (!response.ok) {
            throw new Error("Failed to fetch metadata");
        }

        return await response.json();
    } catch (error) {
        console.error("Error fetching metadata:", error);
        throw error;
    }
};
