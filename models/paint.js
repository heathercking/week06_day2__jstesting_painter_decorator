const Paint = function(colour, litres, empty=false) {
    this.colour = colour;
    this.litres = litres;
    this.empty = empty;
};

Paint.prototype.emptyPaint = function(quantity) {
    this.litres -= quantity;
    if (this.litres === 0) {
        this.empty = true;
    };
}

module.exports = Paint;