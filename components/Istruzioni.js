app.component('Istruzioni', {
    props: {
        testo: {
            type: String,
            required: true
        }
    },
    template:
    /*html*/
    `<div class="istruzioni">
        <div class="istruzioni-container">
            <h1>
                 {{titolo}}
            </h1>
        </div>
    </div>`,
    computed: {
        titolo() {
            return this.testo
        }
    }
})