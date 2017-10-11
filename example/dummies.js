// this script is just connecting a bunch of dummy users to the channel

// connect some dummy users to the channel
// typically you will not do this more than once in a client side app,
// but we need some users to be online
let users = ['Ed','Edd','Eddy','Jimmy','Johnny','Sarah','Nazz','Rolf','Kevin','Plank','Lee Kanker','May Kanker','Marie Kanker'];

users.forEach((user) => {

    // create some dummy clients
    let client = ChatEngineCore.create({
        publishKey: 'pub-c-bcf4e625-d5e0-45de-9f74-f222bf63a4a1',
        subscribeKey: 'sub-c-70f29a7c-8927-11e7-af73-96e8309537a2',
    }, {
        endpoint: 'http://localhost:3000/insecure',
        globalChannel: 'online-user-search-example'
    });

    // connect our dummy clients to the channel
    client.connect();

})
