class Calculate {
    constructor(weight, height) {
        let _weight = weight;
        let _height = height;
        this.getWeightValue = () => _weight;
        this.getHeightValue = () => _height;
        this.bmi = (_weight / ((_height / 100) * (_height / 100))).toFixed(2);

    }
}
