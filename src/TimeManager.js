var TimeManager = {

  REST_TIME: [150, 135, 120, 105, 90, 75, 60, 60],
  personalBest: null,
  timeSpan: [],
  index: 0,

  setUp: function(personalBest) {

    var holdTime = personalBest / 2,
        timeSpan = [];

    this.REST_TIME.forEach(function(el) {
      timeSpan.push(el);
      timeSpan.push(holdTime);
    });

    this.personalBest = personalBest;
    this.timeSpan = timeSpan;
    this.index = 0;
  },

  shift: function() {
    if (this.index == this.timeSpan.length) return null;
    return this.timeSpan[this.index++];
  },

  peek: function() {
    if (this.index == this.timeSpan.length) return null;
    return this.timeSpan[this.index];
  },

  status: function() {
    if (this.index == this.timeSpan.length) return "done";
    return (this.index % 2 == 0) ? "rest" : "hold";
  },

  remainingTime: function() {
    var remaining = 0;
    for (var i = this.index; i < this.timeSpan.length; i++) {
      remaining += this.timeSpan[i];
    }
    return remaining;
  },

  totalTime: function() {
    return this.timeSpan.reduce(function(previous, current) {
      return previous + current;
    });
  }



}
