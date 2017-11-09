// this script is just connecting a bunch of dummy users to the channel

// connect some dummy users to the channel
// typically you will not do this more than once in a client side app,
// but we need some users to be online
let users = ['Edd','Eddy','Jimmy','Johnny','Sarah','Nazz','Rolf','Kevin','Plank','Lee-Kanker','May-Kanker','Marie-Kanker'];

users.forEach((user) => {

    // create some dummy clients
    let client = ChatEngineCore.create({
        publishKey: YOUR_PUBLISH_KEY,
        subscribeKey: YOUR_SUBSCRIBE_KEY
    });

    // connect our dummy clients to the channel
    client.connect(user);

});
