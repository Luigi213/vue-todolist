// Descrizione: Rifare l'esercizio della to do list. Ogni todo sarà un oggetto, formato da due proprietà:
// - text, una stringa che indica il testo del todo
// - done, un booleano (true/false) che indica se il todo è stato fatto oppure no
// MILESTONE 1
// Stampare all'interno di una lista HTML un item per ogni todo. Se la proprietà done è uguale a true, visualizzare il testo del todo sbarrato.
const {
    createApp
} = Vue;

createApp({
    data(){
        return {
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