// In this example we are going to create a chat client
// That will let you show you who is currently online

// get some references to functions
let send = function () {};
let submit = function () {};

// create an optional config object, these are the defaults
const config = { prop: 'uuid', caseSensitive: false };

// connect some dummy users to the channel
// typically you will not do this more than once in a client side app,
// but we need some users to be online

// create another instance of chat-engine for our actual user
const ChatEngine = ChatEngineCore.create({
    publishKey: 'pub-c-bcf4e625-d5e0-45de-9f74-f222bf63a4a1',
    subscribeKey: 'sub-c-70f29a7c-8927-11e7-af73-96e8309537a2',
}, {
    endpoint: 'http://localhost:3000/insecure',
    globalChannel: 'online-user-search-example'
});

// connect eddy to the network, and when it is successful, do some stuff
ChatEngine.connect('Username');

ChatEngine.on('$.ready', () => {

    // dummies.js creates a bunch of dummy users after this script runs
    // grab each as they come online to make a list of all users
    ChatEngine.global.on('$.online.*', (payload) => {
        $('#all-user-list').append('<li class="list-group-item">' + payload.user.uuid + '</li>');
    });

    // * * * * *  begin plugin specific code  * * * * *

    // attach the online-user-search plugin to the global channel
    ChatEngine.global.plugin(ChatEngineCore.plugin['chat-engine-online-user-search'](config));

    // create a helper function to search the online user list
    let getOnlineUsers = function (term) {
        return ChatEngine.global.onlineUserSearch.search(term);
    };

    // * * * * *  end plugin specific code  * * * * *


    // use the input box value as search term and clear it when you hit send
    send = function () {

        $('#online-user-list').html('');

        let results = getOnlineUsers($('#input').val());

        for (let result of results) {
            $('#online-user-list').append('<li class="list-group-item">' + result.uuid + '</li>');
        }

        $('#input').val('');

    };

    // hook up the enter key for maximum usability
    submit = function (e) {

        if (e.keyCode === 13) {
            send();
        }
    };

});
