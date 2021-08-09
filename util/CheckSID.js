module.exports = (sid, client) => {

    return new Promise((resolve, reject) => {

        let url = client.endpoints["users"]["get"].replace("[instance]", client.instance.api).replace("[id]", "me");
        client.fetch(url, {

            headers: {
                sid: sid
            }

        })
            .then(x => x.json())
            .then(x => {
                if (x.code === 401) {
                    resolve(false)
                } else {
                    resolve(new client.Structures.User(x.json));
                }

            });

    })

}