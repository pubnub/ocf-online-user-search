// In this example we are going to create a chat client
// That will let you show you who is currently online

// get some references to functions
let send = function () {};
let submit = function () {};

// create an optional config object, these are the defaults
const config = { prop: 'uuid', caseSensitive: false };

// create another instance of chat-engine for our actual user
const ChatEngine = ChatEngineCore.create({
    publishKey: 'pub-c-2d798b67-5637-4429-baaa-f7a559763cd8',
    subscribeKey: 'sub-c-c12ea6c2-c4ee-11e7-b2fd-1e2f18d1069d'
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
