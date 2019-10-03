class Informations {
    constructor() {
        this.inputWeight = document.querySelector('input.weight');
        this.inputHeight = document.querySelector('input.height');
        this.btnStart = document.querySelector('button.start');
        this.weight = this.inputWeight.value;
        this.height = this.inputHeight.value;


        if (this.weight === "" && this.height !== "") {
            alert("Nie podano wagi")
        }
        if (this.height === "" && this.weight !== "") {
            alert("Nie podano wzrostu")
        }
        if (this.weight === "" && this.height === "") {
            alert("Nie podanao wartości obwodu talii i obwodu bioder")
        }
        if (this.weight <= 0 || this.height <= 0) {
            alert("Podana wartość jest za niska")
        }
    }
}