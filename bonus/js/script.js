// Descrizione: Rifare l'esercizio della to do list. Ogni todo sarà un oggetto, formato da due proprietà:
// - text, una stringa che indica il testo del todo
// - done, un booleano (true/false) che indica se il todo è stato fatto oppure no
// MILESTONE 1
// Stampare all'interno di una lista HTML un item per ogni todo. Se la proprietà done è uguale a true, visualizzare il testo del todo sbarrato.
// MILESTONE 2
// Visualizzare a fianco ad ogni item ha una "x": cliccando su di essa, il todo viene rimosso dalla lista.
// MILESTONE 3
// Predisporre un campo di input testuale e un pulsante "aggiungi": cliccando sul pulsante, il testo digitato viene letto e utilizzato per creare un nuovo todo, che quindi viene aggiunto alla lista dei todo esistenti.
// Bonus (da fare solo una volta finite le milestone principali):
// 1- oltre al click sul pulsante, intercettare anche il tasto ENTER per aggiungere il todo alla lista
// 2- cliccando sul testo dell'item, invertire il valore della proprietà done del todo corrispondente (se done era uguale a false, impostare true e viceversa)
const {
    createApp
} = Vue;

createApp({
    data(){
        return {
            newObject: '',
            change: null,
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
    },
    methods: {
        deleteObject(index){
            this.listObject.splice(index, 1);
        },
        addObject(){
            let obj = {
                text: this.newObject,
                done: false
            };
            this.newObject = '';
            this.listObject.push(obj);
        },
        itemChange(index){
            this.change = this.listObject[index];
            if(this.change.done == false){
                this.change.done = true
            }
            else(
                this.change.done = false
            )
        }
    }
}).mount('#app')