function TimeManager(personalBest) {
  var holdTime  = personalBest / 2,
      timeSpan  = [],
      REST_TIME = [150, 135, 120, 105, 90, 75, 60, 60];

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
    { time: 0, remaining: 0, total: 1195, status: "done" } :
  { time:      this.timeSpan[this.index],
   remaining: this._remainingTime(),
   total:     this.totalTime,
   status:    (this.index % 2 == 0) ? "rest" : "hold"
  };
};

TimeManager.prototype._remainingTime = function() {
  var remaining = 0;
  for (var i = this.index; i < this.timeSpan.length; i++) {
    remaining += this.timeSpan[i];
  }
  return remaining;
}
