let eventHandler = require("events");
let fetch = require("node-fetch");

class Client extends eventHandler {

    constructor(options = {}) {
        super();

        this.Structures = require("./../util/structures");

        this.meCache = {};

        this.fetch = fetch;

        this.instance = {};
        this.endpoints = {};

        this.cache = {};
        this.cache.users = {};

        this.static = {};
        this.static.enableUserCache = false;

        this.endpoints.communities = {};
        this.endpoints.users = {};

        this.endpoints.communities.get = "[instance]/c/[id]/info";
        this.endpoints.users.get = "[instance]/@/[id]"
        this.endpoints.communities.requestToJoin = "[instance]/c/[id]/request"
        this.endpoints.communities.approveJoinRequest = "[instance]/c/[id]/mod/request"
        this.endpoints.communities.join = "[instance]/c/[id]/join"

        this.instance.url = "https://voltra.xyz";
        this.instance.api = "https://voltra.xyz/api/v1";

        this.users = {};
        this.users.get = (id) => require("./../actions/users/get")(id, this);
        this.users.me = () => require("./../actions/users/me")(this);

        this.communities = {};
        this.communities.get = (id) => require("./../actions/communities/get")(id, this);
        this.communities.getIdByVanity = (id) => require("./../actions/communities/getIdByVanity")(id, this);
        this.communities.requestToJoin = (id, reason) => require("./../actions/communities/reqeustToJoin")(id, reason, this)
        this.communities.approveJoinRequest = (userId, communityId, approve) => require("./../actions/communities/approveJoinRequest")(communityId, userId, approve, this)
        this.communities.join = (id) => require("./../actions/communities/join")(id, this);

        this.CheckSID = (sid) => require("./../util/CheckSID")("sid=" + sid, this);

        this.member = this.users.me;
        this.user = this.users.me;

    }

    login(token) {

        (async() => {

            let checkSid = await this.CheckSID(token);

            if (!checkSid) return new this.Structures.Error("Invalid Token")

            this.token = "sid=" + token;

            this.emit("ready", checkSid);

            this.meCache = checkSid;

        })();

    }

    updateBotWithObject(e){
        this.meCache = e;
    }

    updateBotWithRequest(){

        (async() => {

            this.meCache = await this.users.me();

        })();

    }
}

module.exports = Client;