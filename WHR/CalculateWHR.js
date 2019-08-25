class CalculateWHR {
    constructor(waist, hips) {
        let _waist = waist;
        let _hips = hips;
        this.getWaistValue = () => _waist;
        this.getHipsValue = () => _hips;
        this.whr = (_waist / _hips).toFixed(2);
    }
}