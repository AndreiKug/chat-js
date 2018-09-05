(function(){
    'use strict';

    /**
     * @typedef {Object} ChatMessage
     * @property {string} username
     * @property {string} message
     */

    class Chat {
        constructor({el, data = {messages: []}}) {
            this.el = el;
            this.data = data; // массив сообщений
        }

        render () {

            let messagesHTML = this.data.messages.map(mData => {
               return `<div class="chat__message">
                        <span class="chat__author">${mData.username}</span>
                        ${mData.message}
                    </div>`;
            }).join('<br>');

            this.el.innerHTML = `
                <div class="chat">
                    <div class="chat__message chat__message_my">
                        <span class="chat__author">Tim</span>
                        Всем привет!
                    </div>                                       
                </div>
            `;
        }

        /**
         * Add message into chat store. Without rerender
         * @param {ChatMessage} данные сообщения
         */

        addMessage (message) { // Кто-то должен вызвать этот метод и добавить сообщение в массив this.data в конструктор
            this.data.messages.push(message);
        }
    }

    //export из замыкания
    window.Chat = Chat;
})();