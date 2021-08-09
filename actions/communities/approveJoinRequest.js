module.exports = (cid, uid, approve, client) => {
    return new Promise(async(resolve, reject) => {
        if (!client.token) return false;

        let Structure = "guildUser";
        let codeType = "communities";
        let type = "approveJoinRequest";

        let url = client.endpoints[codeType][type].replace("[instance]", client.instance.api).replace("[id]", cid);

        let community = await client.communities.get(cid);

        let state = "decline";
        if (approve) state = "approve";

        client.fetch(url, {
            method: "post",
            headers: {
                sid: client.token,
                state: state,
                user: uid
            }
        })
            .then(x => x.json())
            .then(x => {
                if (x.code !== 200) {
                    new client.Structures.Error(x["msg"]);
                }

                let user = null;

                if (x.json.profile) user = new client.Structures[Structure](x.json.profile, community, client);

                resolve({
                    queue: x.json.queue,
                    profile: user
                });

            })
    })
}