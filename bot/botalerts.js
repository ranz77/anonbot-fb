'use strict'
const conf = require('../conf');
const static_content = require('../static/static_content');
const messaging = require('../bot/messaging');

let mod = module.exports = {};

mod.INTRO = function(id) {
  messaging.sendQuickReply(id, "🗿 Hi! Chat anonymously with strangers with this bot. Use the button below to start a conversation.", static_content.QUICK_REPLIES.START_CONVERSATION_PROMPT);
};

mod.NOT_PAIRED = function(id) {
  messaging.sendText(id, "You're not paired");
  messaging.sendButtons(id, "⏳ You are waiting for someone to chat with you. Look for someone to talk to?", static_content.BUTTONS.REROLL_RETRY);
};

mod.NOT_REGISTERED = function(id) {
  messaging.sendQuickReply(id, "🗿 You haven't started a conversation yet!", static_content.QUICK_REPLIES.START_CONVERSATION_PROMPT);
}

mod.REGISTRATION_ERROR = function(id) {
  messaging.sendText(id, "❗ Could not start a conversation. Please try again later.");
}

mod.USER_ENDED = function(id) {
  messaging.sendButtons(id, "🗿 Conversation ended. Do you want to start another one?", static_content.BUTTONS.USER_ENDED_PROMPT);
}

mod.PARTNER_ENDED = function(id) {
  messaging.sendButtons(id, "🗿 The other person left the chat. You're being automatically matched with someone else!", static_content.BUTTONS.PARTNER_ENDED_PROMPT);
}

mod.NO_PARTNERS = function(id) {
  messaging.sendText(id, "⏳ Nobody is available to chat right now. Dont worry, you will be paired with someone automatically.");
}

mod.PARTNER_FOUND = function(id) {
  messaging.sendText(id, "😃 You're now paired with someone else. Say hi!");
}

mod.PARTNER_FOUND_OTHER = function(id) {
  messaging.sendText(id, "😃 Someone started a conversation with you. Say hi!");
}
