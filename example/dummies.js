// this script is just connecting a bunch of dummy users to the channel
// so that you can search through them
// please ignore

// create some dummy clients
const edClient = ChatEngineCore.create({
    publishKey: 'pub-c-bcf4e625-d5e0-45de-9f74-f222bf63a4a1',
    subscribeKey: 'sub-c-70f29a7c-8927-11e7-af73-96e8309537a2',
}, {
    endpoint: 'http://localhost:3000/insecure',
    globalChannel: 'online-user-search-example'
});

const eddClient = ChatEngineCore.create({
    publishKey: 'pub-c-bcf4e625-d5e0-45de-9f74-f222bf63a4a1',
    subscribeKey: 'sub-c-70f29a7c-8927-11e7-af73-96e8309537a2',
}, {
    endpoint: 'http://localhost:3000/insecure',
    globalChannel: 'online-user-search-example'
});

const eddyClient = ChatEngineCore.create({
    publishKey: 'pub-c-bcf4e625-d5e0-45de-9f74-f222bf63a4a1',
    subscribeKey: 'sub-c-70f29a7c-8927-11e7-af73-96e8309537a2',
}, {
    endpoint: 'http://localhost:3000/insecure',
    globalChannel: 'online-user-search-example'
});

const jimmyClient = ChatEngineCore.create({
    publishKey: 'pub-c-bcf4e625-d5e0-45de-9f74-f222bf63a4a1',
    subscribeKey: 'sub-c-70f29a7c-8927-11e7-af73-96e8309537a2',
}, {
    endpoint: 'http://localhost:3000/insecure',
    globalChannel: 'online-user-search-example'
});

const johnnyClient = ChatEngineCore.create({
    publishKey: 'pub-c-bcf4e625-d5e0-45de-9f74-f222bf63a4a1',
    subscribeKey: 'sub-c-70f29a7c-8927-11e7-af73-96e8309537a2',
}, {
    endpoint: 'http://localhost:3000/insecure',
    globalChannel: 'online-user-search-example'
});

const sarahClient = ChatEngineCore.create({
    publishKey: 'pub-c-bcf4e625-d5e0-45de-9f74-f222bf63a4a1',
    subscribeKey: 'sub-c-70f29a7c-8927-11e7-af73-96e8309537a2',
}, {
    endpoint: 'http://localhost:3000/insecure',
    globalChannel: 'online-user-search-example'
});

const nazzClient = ChatEngineCore.create({
    publishKey: 'pub-c-bcf4e625-d5e0-45de-9f74-f222bf63a4a1',
    subscribeKey: 'sub-c-70f29a7c-8927-11e7-af73-96e8309537a2',
}, {
    endpoint: 'http://localhost:3000/insecure',
    globalChannel: 'online-user-search-example'
});

const rolfClient = ChatEngineCore.create({
    publishKey: 'pub-c-bcf4e625-d5e0-45de-9f74-f222bf63a4a1',
    subscribeKey: 'sub-c-70f29a7c-8927-11e7-af73-96e8309537a2',
}, {
    endpoint: 'http://localhost:3000/insecure',
    globalChannel: 'online-user-search-example'
});

const kevinClient = ChatEngineCore.create({
    publishKey: 'pub-c-bcf4e625-d5e0-45de-9f74-f222bf63a4a1',
    subscribeKey: 'sub-c-70f29a7c-8927-11e7-af73-96e8309537a2',
}, {
    endpoint: 'http://localhost:3000/insecure',
    globalChannel: 'online-user-search-example'
});

const plankClient = ChatEngineCore.create({
    publishKey: 'pub-c-bcf4e625-d5e0-45de-9f74-f222bf63a4a1',
    subscribeKey: 'sub-c-70f29a7c-8927-11e7-af73-96e8309537a2',
}, {
    endpoint: 'http://localhost:3000/insecure',
    globalChannel: 'online-user-search-example'
});

const leeClient = ChatEngineCore.create({
    publishKey: 'pub-c-bcf4e625-d5e0-45de-9f74-f222bf63a4a1',
    subscribeKey: 'sub-c-70f29a7c-8927-11e7-af73-96e8309537a2',
}, {
    endpoint: 'http://localhost:3000/insecure',
    globalChannel: 'online-user-search-example'
});

const mayClient = ChatEngineCore.create({
    publishKey: 'pub-c-bcf4e625-d5e0-45de-9f74-f222bf63a4a1',
    subscribeKey: 'sub-c-70f29a7c-8927-11e7-af73-96e8309537a2',
}, {
    endpoint: 'http://localhost:3000/insecure',
    globalChannel: 'online-user-search-example'
});

const marieClient = ChatEngineCore.create({
    publishKey: 'pub-c-bcf4e625-d5e0-45de-9f74-f222bf63a4a1',
    subscribeKey: 'sub-c-70f29a7c-8927-11e7-af73-96e8309537a2',
}, {
    endpoint: 'http://localhost:3000/insecure',
    globalChannel: 'online-user-search-example'
});

// connect our dummy clients to the channel
edClient.connect('Ed');
eddClient.connect('Edd');
eddyClient.connect('Eddy');
jimmyClient.connect('Jimmy');
johnnyClient.connect('Johnny');
sarahClient.connect('Sarah');
nazzClient.connect('Nazz');
rolfClient.connect('Rolf');
kevinClient.connect('Kevin');
plankClient.connect('Plank');
leeClient.connect('Lee Kanker');
mayClient.connect('May Kanker');
marieClient.connect('Marie Kanker');