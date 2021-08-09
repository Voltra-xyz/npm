let Voltra = require("./../index");

let client = new Voltra.client();

client.on("ready", async(e) => {

    console.log(`Logged in to ${e.username}!`)

    //let x = await client.communities.get("22792657835233280"); // Ree6 Community get, can be vanity or id

    //let x = await client.communities.get("ree6"); //Get by vanity, or id

    //let x = await client.communities.requestToJoin("23039203575173120", "hello senpai prodev") //Request to join community, id only

    //let x = await client.communities.getIdByVanity("ree6"); //get id by vanity, can be id or vanity but will always return the id

    //let x = await client.communities.get("slimakois-den"); //get locked community, is supposed to fail (voltra international)

    //let y = await x.join();

    //let y = await x.approveUser("162715075777922387710845112320", true) //Approve an User (User = seer)

    //let x = await client.communities.join("helpers");

    let x = await client.users.get("162721484553422656515219492864"); //get user by id

    console.log(x);

})

client.login("bcfd5f0b-645f-4adf-b93e-fcaea33a19a1pi65OlmK01627470577461EpchPUv6vzJXSkM5b8bxSbY6mRUWKf")
