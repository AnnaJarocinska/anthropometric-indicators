class ResultsWHtR {
    constructor(whtr) {
        this.divResults = [...document.querySelectorAll('div.results>div')];
        this.spansWHtR = [...document.querySelectorAll('span.whtr')];
        this.divInputs = document.querySelector('div.inputs');
        let _whtr = whtr;
        this.getWHtRValue = () => _whtr;


        if (!isNaN(_whtr) && whtr != Infinity && whtr != 0 && whtr > 0) {
            if (whtr >= 0.5) {
                this.divResults[0].style.display = "flex";
                this.divInputs.style.display = "none";
                this.spansWHtR[0].textContent = `${_whtr}`;
            } else {
                this.divResults[1].style.display = "flex";
                this.divInputs.style.display = "none";
                this.spansWHtR[1].textContent = `${_whtr}`;
            }
        } else {
            alert("Podano nieprawidłową wartość")
        }
    }
}