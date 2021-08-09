class User {

    constructor(userObj) {
        Object.keys(userObj).forEach((x) => {
            this[x] = userObj[x];
        })

        this.joinedAt = new Date(this.joinedAt)

        let b = [];
        let f = [];

        Object.keys(this.badges).forEach((y) => {
            if (this.badges[y]) b.push(y);
        })

        Object.keys(this.features).forEach((y) => {
            if (this.features[y]) f.push(y);
        })

        this.badges = b;
        this.features = f;

        this.member = this;
        this.user = this;

    }
}

module.exports = User;