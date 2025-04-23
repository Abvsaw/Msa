
let bots = [];
let theme = 'light';

document.getElementById('dark-toggle').onclick = () => {
  theme = theme === 'light' ? 'dark' : 'light';
  document.documentElement.setAttribute('data-theme', theme);
}

function login() {
  document.querySelector('.login').style.display = 'none';
  document.querySelector('.chat').style.display = 'block';
  document.querySelector('.business-tools').style.display = 'block';
  document.querySelector('.bot-builder').style.display = 'block';
  document.querySelector('.encryption-tools').style.display = 'block';
  document.querySelector('.away-message').style.display = 'block';
  document.getElementById('user-status').textContent = 'Logged In';
}

function logout() {
  location.reload();
}

function sendMessage() {
  const msg = document.getElementById('messageInput').value;
  const el = document.createElement('div');
  el.className = 'message';
  el.textContent = msg;
  document.getElementById('messages').appendChild(el);
  document.getElementById('messageInput').value = '';
  bots.forEach(bot => {
    if (msg.includes(bot.trigger)) {
      const botMsg = document.createElement('div');
      botMsg.className = 'message';
      botMsg.textContent = 'Bot: ' + bot.response;
      document.getElementById('messages').appendChild(botMsg);
    }
  });
}

function addBot() {
  const trigger = document.getElementById('botTrigger').value;
  const response = document.getElementById('botResponse').value;
  bots.push({ trigger, response });
  const item = document.createElement('li');
  item.textContent = `When "${trigger}" reply "${response}"`;
  document.getElementById('botList').appendChild(item);
}

function lockMessages() {
  alert('Messages encrypted (simulated).');
}

function unlockMessages() {
  alert('Messages decrypted (simulated).');
}

function saveBusinessProfile() {
  alert('Business profile saved (simulated).');
}

function saveAwayMessage() {
  alert('Away message set (simulated).');
}
