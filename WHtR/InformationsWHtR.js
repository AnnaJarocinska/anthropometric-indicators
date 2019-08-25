class InformationsWHtR {
    constructor() {
        this.inputWaist = document.querySelector('input.waistwhtr');
        this.inputHeight = document.querySelector('input.heightwhtr');
        this.btnStart = document.querySelector('button#startwhtr');
        // let waist = this.waist;
        // let height = this.height;
        this.waist = this.inputWaist.value;
        this.height = this.inputHeight.value;
    }
}