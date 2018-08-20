(function(){
    'use strict';

    class Form {
        constructor({el}) {
            this.el = el;

        }

        render () {
            this.el.innerHTML = `
                <form class="form">
                    
                    <textarea name="message" rows="4"></textarea>
                    <br>
                    <input type="submit">
                </form>   
            `;
        }
    }

    //export из замыкания
    window.Form = Form;
})();
