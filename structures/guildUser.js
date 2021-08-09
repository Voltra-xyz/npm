class communityUser {

    constructor(userObj, originGuild, client) {
        Object.keys(userObj).forEach((x) => {
            this[x] = userObj[x];
        })

        if (this.joinedAt) this.joinedAt = new Date(this.joinedAt)

        delete this._id;
        delete this.__v;

        if (this.html) {
            this.bio = {
                markdown: this.bio,
                html: this.html
            }

            delete this.html;
        }

        this.guild = originGuild;
        this.community = originGuild;
        this.server = originGuild;

        this.member = this;
        this.user = this;
    }
}

module.exports = communityUser;