cordova.define("cordova-plugin-easemob-chat.Chat", function(require, exports, module) {

	var exec = require('cordova/exec');


	var Chat = function() {
	};

	Chat.login = function(success, failure, user, password) {
		exec(success, failure, "Chat", "login", [user, password]);
	}

	Chat.logout = function(success, failure) {
		exec(success, failure, "Chat", "logout", []);
	}

	Chat.sendTxtMsg = function(success, failure, user, content, type) {
		exec(success, failure, "Chat", "sendTxtMsg", [url, content, type]);
	}

	Chat.registerMsgListener = function(success, failure) {
		exec(success, failure, "Chat", "registerMsgListener");
	}
	module.exports = Chat;
});
