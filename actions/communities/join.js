module.exports = (id, client) => {
    return new Promise(async(resolve, reject) => {
        if (!client.token) return false;

        let Structure = "Community";
        let codeType = "communities";
        let type = "join";

        let realId = await client.communities.getIdByVanity(id);

        let url = client.endpoints[codeType][type].replace("[instance]", client.instance.api).replace("[id]", realId);

        client.fetch(url, {
            method: "POST",
            headers: {
                sid: client.token
            }
        })
            .then(x => x.json())
            .then(x => {
                if (x.code !== 200) {
                    new client.Structures.Error(x["msg"]);
                }

                resolve(x);
            })
    })
}