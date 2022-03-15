

const handleAPIError = (error, setStatus) => {
    if (error.response.status === 404) {
        setStatus(prev => ({ ...prev, error: true, errorMessage: "404 Not Found", loading: false }))
        console.log(error.response.status);
    } else if (error.request) {
        // The request was made but no response was received
        setStatus(prev => ({ ...prev, error: true, errorMessage: "ERR_INTERNET_DISCONNECTED", }))
        console.log(error.request);
    } else {
        // Something happened in setting up the request that triggered an Error
        setStatus(prev => ({ ...prev, error: true, errorMessage: "Something went wrong", }))
        console.log('Error', error.message);
    }
}

export default handleAPIError;