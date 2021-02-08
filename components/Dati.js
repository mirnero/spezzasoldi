app.component('Dati', {
    data() {
        return {
            importo: null
        }
    },
    template:
    /*html*/
    `<div class="dati">
    <label class="block">
            <span class="text-gray-700">Inserisci l'importo (in centesimi di euro):</span>
            <input class="text-4xl border-gray-800 border-4 form-input mt-1 block w-full" 
                   id="importo"
                   type="number"
                   v-model="importo"
                   v-on:change="computa">
    </label>
    </div>
            `,
    computed: {
        computa() {
            this.$emit('calcola', this.importo)  
    }
}
})