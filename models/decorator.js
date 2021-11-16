const Decorator = function(name) {
    this.name = name;
    this.stock = [];
};

Decorator.prototype.addPaint = function(paintCan) {
    this.stock.push(paintCan);
};

module.exports = Decorator