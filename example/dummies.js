// this script is just connecting a bunch of dummy users to the channel

// connect some dummy users to the channel
// typically you will not do this more than once in a client side app,
// but we need some users to be online
let users = ['Edd','Eddy','Jimmy','Johnny','Sarah','Nazz','Rolf','Kevin','Plank','Lee-Kanker','May-Kanker','Marie-Kanker'];

users.forEach((user) => {

    // create some dummy clients
    let client = ChatEngineCore.create({
        publishKey: 'pub-c-c2a407d1-2771-4d22-9063-bd538c8d720f',
        subscribeKey: 'sub-c-72ef270e-c41a-11e7-8c2e-7612aca27832'
    });

    // connect our dummy clients to the channel
    client.connect(user);

});
