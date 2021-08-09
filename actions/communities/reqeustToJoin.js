module.exports = (id, reason, client) => {
    return new Promise((resolve, reject) => {
        if (!client.token) return false;

        let Structure = "requestReason";
        let codeType = "communities";
        let type = "requestToJoin";

        let url = client.endpoints[codeType][type].replace("[instance]", client.instance.api).replace("[id]", id);

        let data = {
            reason
        }

        var formBody = [];

        for (var property in data) {
            var encodedKey = encodeURIComponent(property);
            var encodedValue = encodeURIComponent(data[property]);
            formBody.push(encodedKey + "=" + encodedValue);
        }

        formBody = formBody.join("&");

        client.fetch(url, {
            method: "POST",
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
                sid: client.token
            },
            body: formBody
        })
            .then(x => x.json())
            .then(x => {
                if (x.code !== 200) {
                    new client.Structures.Error(x["msg"]);
                }

                resolve(new client.Structures[Structure](x.json, client));

            })
    })
}