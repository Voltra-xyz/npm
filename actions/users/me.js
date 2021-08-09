module.exports = (client) => {
    return new Promise((resolve, reject) => {
        if (!client.token) return false;

        let Structure = "User";
        let codeType = "users";
        let type = "get";

        let url = client.endpoints[codeType][type].replace("[instance]", client.instance.api).replace("[id]", "me");

        client.fetch(url, {
            headers: {
                sid: client.token
            }
        })
            .then(x => x.json())
            .then(x => {
                if (x.code !== 200) {
                    new client.Structures.Error(x["msg"]);
                }

                client.meCache = new client.Structures[Structure](x.json, client);

                resolve(new client.Structures[Structure](x.json, client));
            })
    })
}