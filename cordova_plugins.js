cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
    {
        "file": "plugins/cordova-plugin-dialogs/www/notification.js",
        "id": "cordova-plugin-dialogs.notification",
        "pluginId": "cordova-plugin-dialogs",
        "merges": [
            "navigator.notification"
        ]
    },
    {
        "file": "plugins/cordova-plugin-dialogs/www/browser/notification.js",
        "id": "cordova-plugin-dialogs.notification_browser",
        "pluginId": "cordova-plugin-dialogs",
        "merges": [
            "navigator.notification"
        ]
    },
    {
        "file": "plugins/cordova-plugin-network-information/www/network.js",
        "id": "cordova-plugin-network-information.network",
        "pluginId": "cordova-plugin-network-information",
        "clobbers": [
            "navigator.connection",
            "navigator.network.connection"
        ]
    },
    {
        "file": "plugins/cordova-plugin-network-information/www/Connection.js",
        "id": "cordova-plugin-network-information.Connection",
        "pluginId": "cordova-plugin-network-information",
        "clobbers": [
            "Connection"
        ]
    },
    {
        "file": "plugins/cordova-plugin-network-information/src/browser/network.js",
        "id": "cordova-plugin-network-information.NetworkInfoProxy",
        "pluginId": "cordova-plugin-network-information",
        "runs": true
    },
    {
        "file": "plugins/cordova-plugin-google-play-game-services/www/play-games-services.js",
        "id": "cordova-plugin-google-play-game-services.PlayGamesServices",
        "pluginId": "cordova-plugin-google-play-game-services",
        "clobbers": [
            "cordova.plugins.playGamesServices",
            "window.plugins.playGamesServices"
        ]
    }
];
module.exports.metadata = 
// TOP OF METADATA
{
    "cordova-plugin-dialogs": "2.0.2",
    "cordova-plugin-network-information": "2.0.2",
    "cordova-plugin-whitelist": "1.3.4",
    "cordova-plugin-google-play-game-services": "0.0.1",
    "cordova-plugin-android-iab": "1.0.0"
}
// BOTTOM OF METADATA
});