class ResultsWHR {
    constructor(whr) {
        this.divResults = [...document.querySelectorAll('div.results>div')];
        this.spansWHR = [...document.querySelectorAll('span.whr')];
        this.divInputs = document.querySelector('div.inputs');
        this.inputsRadio = [...document.getElementsByName('gender')]
        let _whr = whr;
        this.getWhrValue = () => _whr;
        this.conditions = [
            (this.inputsRadio[0].checked && whr >= 0.85 && !isNaN(whr) && whr != Infinity && whr != 0 && whr > 0),
            (this.inputsRadio[0].checked && whr < 0.85 && !isNaN(whr) && whr != Infinity && whr != 0 && whr > 0),
            (this.inputsRadio[1].checked && whr >= 1 && !isNaN(whr) && whr != Infinity && whr != 0 && whr > 0),
            (this.inputsRadio[1].checked && whr < 1 && !isNaN(whr) && whr != Infinity && whr != 0 && whr > 0)
        ];

        if (!this.inputsRadio[0].checked && !this.inputsRadio[1].checked) {
            alert("Nie wybrano płci")
        } else if (this.conditions[0] || this.conditions[2]) {
            this.divResults[0].style.display = "flex";
            this.divInputs.style.display = "none";
            this.spansWHR[0].textContent = `${_whr}`;
        } else if (this.conditions[1] || this.conditions[3]) {
            this.divResults[1].style.display = "flex";
            this.divInputs.style.display = "none";
            this.spansWHR[1].textContent = `${_whr}`;
        }
        else {
            alert("Podano nieprawidłową wartość")
        }
    }
}