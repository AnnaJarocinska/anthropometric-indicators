class Results {
    constructor(bmi) {
        this.divResults = [...document.querySelectorAll('div.results>div')];
        this.spansBmi = [...document.querySelectorAll('span.bmi')];
        this.divInputs = document.querySelector('div.inputs');
        let _bmi = bmi;
        this.getBmiValue = () => _bmi;
        this.conditions = [
            (_bmi < 16 && _bmi > 0), (_bmi > 16 && _bmi <= 16.99),
            (_bmi > 16.99 && _bmi <= 18.49), (_bmi > 18.49 && _bmi <= 24.99),
            (_bmi > 24.99 && _bmi <= 29.99), (_bmi > 29.99 && _bmi <= 34.99),
            (_bmi > 34.99 && _bmi <= 39.99), (_bmi > 39.99 && _bmi < 200),
            (isNaN(bmi) || bmi == Infinity || bmi == 0)
        ];
        this.showResults();
    }
    showResults() {
        let _bmi = this.getBmiValue();

        if (isNaN(_bmi) || _bmi == Infinity || _bmi == 0 || _bmi <= 0) {
            alert("Podano nieprawiłową wartość")
        }

        for (let i = 0; i < this.divResults.length; i++) {

            if (this.conditions[i] === true) {
                this.divResults[i].style.display = "flex";
                this.divInputs.style.display = "none";
            }

        }

        for (let i = 0; i < this.spansBmi.length; i++) {
            this.spansBmi[i].textContent = `${_bmi}`
        }
    }
}