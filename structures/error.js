class APIError {

    constructor(e) {
        throw new Error("VoltraAPIError: " + e);
    }

}

module.exports = APIError;