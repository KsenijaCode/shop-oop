export class Layout {
    constructor() {
        this.render();
    }

    header() {
        const HTML = `
            <header class="container">
                <div class="row">
                    <div class="col">
                        <img src="#" alt="Logo">
                        <nav>
                            <a href="./">Home</a>
                            <a href="./services">Services</a>
                            <a href="./team">Team</a>
                            <a href="./contact-us">Contact Us</a>
                        </nav>
                    </div>
                </div>
            </header>`;
        return HTML;
    }

    main() {
        const HTML = '<main>MAIN</main>';
        return HTML;
    }

    footer() {
        const HTML = '<footer>&copy; Copyright 2024</footer>';
        return HTML;
    }

    render() {
        const DOM = document.getElementById('app');
        const HTML = this.header() + this.main() + this.footer();

        DOM.insertAdjacentHTML('beforeend', HTML);
    }
}