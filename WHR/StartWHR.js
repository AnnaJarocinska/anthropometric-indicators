class StartWHR {
    constructor() {
        this.btnStartWHR = document.getElementById('startwhr')

        this.btnStartWHR.addEventListener('click', () => {
            let informationsWHR = new InformationsWHR();
            let calculateWHR = new CalculateWHR(informationsWHR.waist, informationsWHR.hips);
            let resultsWHR = new ResultsWHR(calculateWHR.whr);
        });
    }
}

let startWHR = new StartWHR();