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
		exec(success, failure, "Chat", "sendTxtMsg", [user, content, type]);
	}

	Chat.registerMsgListener = function(success, failure) {
		exec(success, failure, "Chat", "registerMsgListener", []);
	}

	Chat.loadMessages = function(success, failure, user, msgId, pageSize) {
		if(!pageSize) {
			pageSize = 20;
		}
	    exec(success, failure, "Chat", "loadMessages", [user, msgId, pageSize]);
	}

	Chat.getUnreadMsgCount = function(success, failure, user) {
		exec(success, failure, "Chat", "getUnreadMsgCount", [user]);
	}

	Chat.loadConversations = function(success, failure) {
		exec(success, failure, "Chat", "loadConversations", []);
	}
	module.exports = Chat;
});
