class CalculateWHtR {
    constructor(waist, height) {
        let _waist = waist;
        let _height = height;
        this.getWaistValue = () => _waist;
        this.getHeightValue = () => _height;
        this.whtr = (_waist / _height).toFixed(2);
    }
}