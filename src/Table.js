function Table(personalBest, partialTimeEl, totalTimeEl) {
  this.personalBest = personalBest;
  this.partialTimeEl = partialTimeEl;
  this.totalTimeEl = totalTimeEl;
}

Table.start = function() {
  var timeManager = new TimeManager(this.personalBest);
  var next = timeManager.shift();

  var time = next.time;
  var remaining = next.remaining;
  var status = next.status;

  var timeOffset = remaining - time;

  var noticePeriod = 8;

  var action = new RestAction(this.partialTimeEl, this.totalTimeEl, timeOffset)
  new Countdown(time, action, noticePeriod);

}
