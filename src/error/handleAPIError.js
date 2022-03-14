

const handleAPIError = (error, setStatus) => {
    if (error.response) {
        // The request was made and the server responded with a status code
        // that falls out of the range of 2xx
        setStatus(prev => ({ ...prev, error: true, errorType: error.response.status, loading: false }))
        console.log(error.response.status);
    } else if (error.request) {
        // The request was made but no response was received
        setStatus(prev => ({ ...prev, error: true, errorType: "ERR_INTERNET_DISCONNECTED", }))
        console.log(error.request);
    } else {
        // Something happened in setting up the request that triggered an Error
        setStatus(prev => ({ ...prev, error: true, errorType: "other", }))
        console.log('Error', error.message);
    }
}

export default handleAPIError;