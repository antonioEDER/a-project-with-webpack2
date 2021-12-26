import Message from './model/message.model';
import template from './template/messages.html';

import './styles/modules/MessageBox.scss';
import './styles/modules/MessagesArea.scss';

/* eslint no-undef: 0 */
document.getElementById('send').onclick = () => {
  const newMessage = document.getElementById('message').value;
  const m = new Message(newMessage);
  document.getElementById('messages').innerHTML += template(m);
};

if (module && module.hot) {
  module.hot.accept();
}
