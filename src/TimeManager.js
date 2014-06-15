function TimeManager(personalBest) {
  var holdTime  = personalBest / 2,
      timeSpan  = [],
      REST_TIME = [15, 13, 12, 10, 9, 7, 6, 6];

  //REST_TIME = [150, 135, 120, 105, 90, 75, 60, 60];

  REST_TIME.forEach(function(el) {
    timeSpan.push(el);
    timeSpan.push(holdTime);
  });

  this.personalBest = personalBest;
  this.timeSpan = timeSpan;
  this.totalTime = timeSpan.reduce(function(previous, current) {
    return previous + current;
  });
  this.index = 0;
};

TimeManager.prototype.shift = function() {
    var current = this.peek();
    if (this.index != this.timeSpan.length) this.index++;
    return current;
};

TimeManager.prototype.peek = function() {
  return (this.index == this.timeSpan.length) ?
    { partial: 0, total: 0, stage: "N/A", status: "done" } :
  { partial: this.timeSpan[this.index],
   total:    this._totalRemaining(),
   stage:    this.index + 1,
   status:   (this.index % 2 == 0) ? "rest" : "hold"
  };
};

TimeManager.prototype.isLastOne = function() {
  return (this.index == this.timeSpan.length);
}

TimeManager.prototype._totalRemaining = function() {
  var remaining = 0;
  for (var i = this.index; i < this.timeSpan.length; i++) {
    remaining += this.timeSpan[i];
  }
  return remaining;
}
