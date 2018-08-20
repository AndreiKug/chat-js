(function(){
    'use strict';

    class Chat {
        constructor({el}) {
            this.el = el;

        }

        render () {
            this.el.innerHTML = `
                <div class="chat">
                    <div class="chat__message chat__message_my">
                        <span class="chat__author">Tim</span>
                        Всем привет!
                    </div>
                    <div class="chat__message">
                        <span class="chat__author">Nikolay</span>
                        Привет, верстальщики!
                    </div>
                    
                </div>
            `;
        }
    }

    //export из замыкания
    window.Chat = Chat;
})();