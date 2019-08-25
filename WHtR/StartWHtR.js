class StartWHtR {
    constructor() {
        this.btnStart = document.getElementById('startwhtr')

        this.btnStart.addEventListener('click', () => {
            let informationsWHtR = new InformationsWHtR();
            let calculateWHtR = new CalculateWHtR(informationsWHtR.waist, informationsWHtR.height);
            let resultsWHtR = new ResultsWHtR(calculateWHtR.whtr);
            startWHtR.btnStart.classList.add('active')
        })
    }
}

let startWHtR = new StartWHtR();