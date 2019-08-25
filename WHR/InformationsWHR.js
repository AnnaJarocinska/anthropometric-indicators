class InformationsWHR {
    constructor() {
        this.inputsRadio = [...document.getElementsByName('gender')]
        this.inputWaist = document.querySelector('input.waistwhr');
        this.inputHips = document.querySelector('input.hipswhr');
        this.btnStartWHR = document.querySelector('button.startwhr');
        this.waist = this.inputWaist.value;
        this.hips = this.inputHips.value;

        if (this.inputWaist.value === "" && this.inputHips.value !== "") {
            alert("Nie podano wartości obwodu talii")
        }
        if (this.inputHips.value === "" && this.inputWaist.value !== "") {
            alert("Nie podanao wartości obwodu bioder")
        }
        if (this.inputHips.value === "" && this.inputWaist.value === "") {
            alert("Nie podanao wartości obwodu talii i obwodu bioder")
        }
        if (this.inputHips.value === 0 || this.inputWaist.value === 0) {
            alert("Podana wartość jest za niska")
        }
    }
}