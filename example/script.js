// In this example we are going to create a chat client
// That will let you show you who is currently online

// get some references to functions
let send = function () {};
let submit = function () {};

// create an optional config object, these are the defaults
const config = { prop: 'uuid', caseSensitive: false };

// create another instance of chat-engine for our actual user
const ChatEngine = ChatEngineCore.create({
    publishKey: 'pub-c-c2a407d1-2771-4d22-9063-bd538c8d720f',
    subscribeKey: 'sub-c-72ef270e-c41a-11e7-8c2e-7612aca27832'
});

// connect eddy to the network, and when it is successful, do some stuff
ChatEngine.connect('Ed');

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
