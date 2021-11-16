const Room = function(name, area, painted=false) {
    this.name = name;
    this.area = area;
    this.painted = painted;
};


Room.prototype.paint = function() {
    this.painted = true;
}


module.exports = Room;