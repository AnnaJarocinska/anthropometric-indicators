class Start {
    constructor() {
        this.btnStart = document.getElementById('start')

        this.btnStart.addEventListener('click', () => {
            let informations = new Informations();
            let calculate = new Calculate(informations.weight, informations.height);
            let results = new Results(calculate.bmi);
            start.btnStart.classList.add('active')
        })
    }
}

let start = new Start();
