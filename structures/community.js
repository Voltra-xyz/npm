let APIError = require("./error");
let guildUser = require("./guildUser");

class Community {

    constructor(communityObj, client) {

        Object.keys(communityObj).forEach((x) => {
            this[x] = communityObj[x];
        })

        if (this.disabled) new APIError("This community is disabled!")

        /*
        open
        closed
        invite
         */

        /*if (this.features.privacy === "open") {
            this.public = true;
        } else if {
            this.public = false;
        }*/

        this.privacy = {};
        switch (this.features.privacy) {
            case "open": // You can join by pressing the join button
                this.privacy.invite = false;
                this.privacy.request = false;
                this.privacy.public = true;
                break;
            case "closed": //Code only
                this.privacy.invite = true;
                this.privacy.request = false;
                this.privacy.public = false;
                break;
            case "invite": //Code or request
                this.privacy.invite = true;
                this.privacy.request = true;
                this.privacy.public = false;
                break;
        }

        this.info = {
            markdown: this.info,
            html: this.html
        }

        let a = [];

        Object.keys(this.privacy).forEach((y) => {
            if (this.privacy[y]) a.push(y);
        })

        this.privacy.array = a;

        this.privacy.raw = this.features.privacy;

        delete this.features.privacy;
        delete this.__v;
        delete this._id;
        delete this.html;

        delete this.staff; //Currently this does not have any apearent functionality, Please comment this line once this is important.

        delete this.disabled; //An error will be thrown once disabled

        let f = [];

        Object.keys(this.features).forEach((y) => {
            if (this.features[y]) f.push(y);
        })

        this.features = f;

        this.createdAt = new Date(this.createdAt);

        this.owner = new guildUser(JSON.parse(this.owner), this, client);

        this.approveUser = (userId, approve) => client.communities.approveJoinRequest(userId, this.id, approve)
        this.join = () => client.communities.join(this.id)
        this.requestToJoin = (reason) => client.communities.requestToJoin(this.id, reason)

        this.guild = this;
        this.community = this;
        this.server = this;

    }

}

module.exports = Community;