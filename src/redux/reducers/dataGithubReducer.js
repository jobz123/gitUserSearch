const INITIAL_STATE = {
    data: []
}

function dataGithubReducer(state = INITIAL_STATE, action) {
    switch (action.type) {
        case "LOADING": {
            return {
                ...state,
                data: action.payload
            }
        }
        default:
            return state;
    }
}

export default dataGithubReducer;

export const getGitHubData = (username) => dispatch => {
    fetch(`https://api.github.com/users/${username}`)
        .then(response => response.json())
        .then(data => {
            dispatch({
                type: 'LOADING',
                payload: data
            })
        })
        .catch(error => console.log(error))
}