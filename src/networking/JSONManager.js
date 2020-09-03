export const JSONManager = {
    getQuestions: () => {
        return fetch(`/Data.json`, { 
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        }).then(response => response.json())
    }
}
