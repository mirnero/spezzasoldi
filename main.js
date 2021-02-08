const app= Vue.createApp({
    data() {
        return {
            importo: 10,
            start: false,
            tagli: [ 50000, 20000, 10000, 5000,2000,1000,500,200,100,50,20,10,5,2,1]
        }
    },
    methods: {
        calcola(importo) {
            this.importo=importo,
            this.start= true
        }
    },
    computed: {
        risultato() {
            let resto = this.importo
            let risposta=[]
            this.tagli.forEach(i =>
            {
                risposta.push(Math.floor(resto/i))
                resto = resto % i
            })
            return risposta
        }
    }
})