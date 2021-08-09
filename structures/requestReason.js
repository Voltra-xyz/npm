class requestReason {

    constructor(requestObj, client) {

        Object.keys(requestObj).forEach((x) => {
            this[x] = requestObj[x];
        })

        this.id = this.community;

        this.user = client.meCache
    }

}

module.exports = requestReason;