app.component('Risposta', {
    props: {
        array: {
            type: Array,
            required: true
        },
        tagli: {
            type: Array,
            required: true
        }
    },
    template: 
    /*html*/
    `
    <div class="risposta">
        <ul class="text-center">
            <li v-for="(a, index) in array">
            <div v-if="a != 0">
            {{a}}
            {{tagli[index]>=500 ? 'banconot' : 'monet'}}{{a>1 ? 'e' : 'a'}}
            da
            {{ tagli[index]>=100 ? tagli[index]/100 + ' euro' : tagli[index] == 1 ? tagli[index] + ' centesimo' : tagli[index] + ' centesimi'}}
            </div>
            </li>
        </ul>
    </div>
    `
})