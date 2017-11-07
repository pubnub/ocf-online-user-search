# Online User Search Plugin for Chat Engine

Adds the ability to search for currently online users on a ChatEngine Chat

### Quick Start

0. Have a ChatEngine server running already, instantiate a client and connect it
```js
const ChatEngine = ChatEngineCore.create({
    publishKey: 'pub-key-here',
    subscribeKey: 'sub-key-here'
};

ChatEngine.connect('Username');
ChatEngine.on('$ready', () = { ... });
```

1. Attach this plugin to the channel you want, in this case global
```js
ChatEngine.global.plugin(ChatEngineCore.plugin['chat-engine-online-user-search']());
```

2. Query the channel for a search term
```js
// returns all users with uuid's containing 'foo'
ChatEngine.global.onlineUserSearch.search('foo');
```

