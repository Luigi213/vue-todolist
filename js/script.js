// Descrizione: Rifare l'esercizio della to do list. Ogni todo sarà un oggetto, formato da due proprietà:
// - text, una stringa che indica il testo del todo
// - done, un booleano (true/false) che indica se il todo è stato fatto oppure no

const {
    createApp
} = Vue;

createApp({
    data(){
        return {
            listActive: 0,
            listObject: [
                {
                    text: 'Fare colazione',
                    done: false,
                },
                {
                    text: 'Giocare ai videogiochi',
                    done: false,
                },
                {
                    text: 'Fare la spesa',
                    done: false,
                },
                {
                    text: 'Uscire con gli amici',
                    done: false,
                },
            ]
        }
    }
}).mount('#app')