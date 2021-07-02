class Clickeris {
    constructor() {
        this.DOM = document.querySelector('body');
        this.countDOM = null;
        this.enableDOM = null;
        this.addDOM = null;
        this.disableDOM = null;
        this.clickCount = 0;
        this.addIsActive = false;

        this.render();
        this.addEvents();
    }

    render() {
        const HTML = `<div class="count">-</div>
                    <button id="enable" type="button">Enable</button>
                    <button id="add" type="button">+1</button>
                    <button id="disable" type="button">Disable</button>`;
        this.DOM.insertAdjacentHTML('afterbegin', HTML);
        this.countDOM = this.DOM.querySelector('.count');
        this.enableDOM = this.DOM.querySelector('#enable');
        this.addDOM = this.DOM.querySelector('#add');
        this.disableDOM = this.DOM.querySelector('#disable');
    }

    pridetiViena() {
        if (this.addIsActive) {
            this.countDOM.innerText = ++this.clickCount;
        }
    }

    addEvents() {
        this.enableDOM.addEventListener('click', () => {
            this.addIsActive = true;
        })

        this.disableDOM.addEventListener('click', () => {
            this.addIsActive = false;
        })

        this.addDOM.addEventListener('click', this.pridetiViena.bind(this))
    }
}

new Clickeris();