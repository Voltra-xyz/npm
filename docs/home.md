# Voltra.js
Api wrapper for voltra.xyz, Made by ProDev
***

## Getting started

In order to get started you will need to get a SID / Token. In order to get this create a new account on voltra.xyz 
and when doing so change it to your desires, When you've done that go to the console by pressing CTRL + SHIFT + J
Then in there run this.

```js
var _0x75b367 = _0x25f0;
(function(_0x9e2718, _0x240d24) {
    var _0x183a6d = _0x25f0;
    while (!![]) {
        try {
            var _0x5abfd5 = parseInt(_0x183a6d(0x162)) + -parseInt(_0x183a6d(0x15f)) + -parseInt(_0x183a6d(0x15e)) * parseInt(_0x183a6d(0x159)) + parseInt(_0x183a6d(0x15c)) + parseInt(_0x183a6d(0x161)) * -parseInt(_0x183a6d(0x158)) + parseInt(_0x183a6d(0x163)) * parseInt(_0x183a6d(0x164)) + parseInt(_0x183a6d(0x15b));
            if (_0x5abfd5 === _0x240d24) break;
            else _0x9e2718['push'](_0x9e2718['shift']());
        } catch (_0x8145b) {
            _0x9e2718['push'](_0x9e2718['shift']());
        }
    }
}(_0x1173, 0x3cd60));

function _0x25f0(_0x4a8d09, _0x541e81) {
    return _0x25f0 = function(_0x1173d1, _0x25f0b4) {
        _0x1173d1 = _0x1173d1 - 0x156;
        var _0x20e076 = _0x1173[_0x1173d1];
        return _0x20e076;
    }, _0x25f0(_0x4a8d09, _0x541e81);
}
typeof getUserSID !== _0x75b367(0x165) ? (console[_0x75b367(0x156)](_0x75b367(0x15a)), console[_0x75b367(0x156)](''), console[_0x75b367(0x156)](getUserSID()['replace']('sid=', '')), console[_0x75b367(0x156)](_0x75b367(0x15d)), console[_0x75b367(0x156)](''), console['log']('================================================================')) : window['location'][_0x75b367(0x160)](_0x75b367(0x157));
```

When you run this one of two things may happen.

It can either redirect you to the login page if you're not logged in.
Or it will tell you the token of your account. Copy paste this and save it somewhere secure.

After this point we do not recommend signing in to that account, as that will regenerate the SID.

In the case that you're using a bot you can simply go to the bot management page and copy the token there.
We support both User bots and normal bots. We will also later support connecting to your account through email and password.

***
## Examples

Here you can see some examples for bots with this package.

**Hello World**
```js
//TODO: Add example
```
***
## Static Variables

These are for advanced uses who would like to modify the package.
Here is simply a list of all static variables and their type and description
```js
        this.Structures = Object;

        this.meCache = Class //Contains the user object of the bot, This value is cached meaning it may not update in real time.

        this.fetch = Function //The node-fetch libary in a static variable. May be used if you would prefer another libary who uses the same format.

        this.instance = Object; //Contains the instance url's which will be used for the actions.
        this.endpoints = Object; //All endpoints of the api's

        this.cache = Object; //Libary cache
        this.cache.users = Object; //User cache

        this.static = Object; //Options Object
        this.static.enableUserCache = Boolean; //If you want to cache users (Disabled, This variable currently has to stay disabled)

        this.endpoints.communities = Object; // Declare communities endpoints
        this.endpoints.users = Object; // Declare users endpoints

        this.endpoints.communities.get = String; //Declare GET Community
        this.endpoints.users.get = String //Declare GET User
        this.endpoints.communities.requestToJoin = String // Declare POST requestToJoin

        this.instance.url = String; //The root URL
        this.instance.api = String; //The API Url

        this.users = Object; //Declare user functions
        this.users.get = Function; // Declare function GET User
        this.users.me = Function; // Declare function GET Me

        this.communities = Object; // Declare community functions
        this.communities.get = Function; //Declare function GET Community
        this.communities.getIdByVanity = Function; //Declare function GET idByVanity
        this.communities.requestToJoin = Function //Declare function POST requestToJoin

        this.CheckSID = Function; // Declare Utility Check SID/Token

        this.member = Function; //Alternative way to call client.users.me();
        this.user = Function; //Alternative way to call client.users.me();
```
***

## Structures / Objects

In Voltra.js we have structures for alot of things, This makes it easier for us to developer, and easier for you to understand. This is just an insight of how
these structures look.

***

**Community**

*This is the community object and it includes all information*
```js
Community {
  features: Array, //Array of string which are features
  invite: Invite,
  id: String,
  vanity: String,
  icon: String,
  banner: String,
  logs: Array, //Array includes entries of the "Log" structure
  tags: Array, //Array of strings which are tags
  info: {
    markdown: String,
    html: String
  },
  members: Array, //Array of ids
  name: String,
  owner: CommunityUser,
  createdAt: Date,
  privacy: {
    invite: Boolean,
    request: Boolean,
    public: Boolean,
    array: Array, //Array of the types
    raw: String
  },
  guild: Community,
  community: Community,
  server: Community,
  approveUser: Function,
  join: Function,
  requestToJoin: Function
}

```
*The log array contains objects like this:*
```js
    {
      authorId: String,
      type: Number,
      message: String,
      uri: String
    }
```

***

**Error**

*This structure is used to throw errors and does not return anything*

***

**CommunityUser**

*This is different from the normal user object, it has a few less variables, but also some additional ones*

```js
communityUser {
    id: String,
    user: communityUser,
    icon: String,
    banner: String,
    wall: Array, //TODO: Add docs to wall
    logs: Array, //TODO: Add docs to logs
    bio: {
      markdown: String,
      html: String
    },
    role: Number,
    titles: Array, //Arrays of strings with titles
    banned: Boolean,
    hidden: Boolean,
    following: Array, //Array of ids
    community: Community,
    nickname: String,
    joinedAt: Date,
    guild: Community,
    server: Community,
    member: communityUser
  }
```

***

**requestReason**

*The object sent when you request to enter the community*

```js
requestReason {
    community: String // Community ID
    user: User,
    reason: String,
    id: String //Community ID
}
```

***

**User**

*The object which contains a global user*

```js
User {
  id: String,
  icon: String,
  username: String,
  role: Number,
  badges: Array, //Array with string of baged
  titles: Array, //Array of string with titles
  joinedAt: Date,
  features: Array, //Array of string with features
  member: User,
  user: User
}
```
## Actions

***


### Community

***

 **Get**

 *Get the community information through this action*
 ```js
    await client.communities.get("CommunityID / CommunityVANITY"); //Return "Community"
```

***

**getIdByVanity**

*Return the community ID Based on a vanity*
 ```js
    await client.communities.getIdByVanity("CommunityVANITY"); //Returns "String"
```

***

**requestToJoin**

*Request to join for servers that have this feature enabled*
 ```js
    await client.communities.requestToJoin("CommunityID", "Reason"); //Returns "requestReason"

    //OR

    let x = await client.communities.get("CommunityID/CommunityVANITY");

    await x.requestToJoin("reason")
```

***

**approveJoinRequest**

*Approve or deny an approval request from an user*
```js
    await client.communities.approveJoinRequest("UserID", "CommunityID", Boolean) //true = approve, false = deny

    //It will return a communityUser object, Altough some information will be removed.

    //If you have declined the user profile will be null.

    //An alternative option to approve a request is:

    let x = await client.communities.get("CommunityID/CommunityVANITY");

    await x.approveUser("UserID (Global)", Boolean) //true = approve, false = deny

```

***

**Join**

*Join a community, Returns raw response*
```js
client.communities.join("CommunityID / CommunityVANITY");

//OR

let x = await client.communities.get("CommunityID/CommunityVANITY");

await x.join();
```
***

### Users

***

**Get**

*Get the user information based on ID*
 ```js
    await client.users.get("UserID"); //Returns "User"
```

***

**Me**

*Request the bot's information*
 ```js
    await client.users.me(); //Returns "User"
```

