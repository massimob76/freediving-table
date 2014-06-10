function Table(personalBest, phaseRemainingTimeEl, totalRemainingTimeEl) {
  this.personalBest = personalBest;
  this.phaseRemainingTimeEl = phaseRemainingTimeEl;
  this.totalRemainingTimeEl = totalRemainingTimeEl;
}

Table.start = function() {
  var timeManager = new TimeManager(this.personalBest);
  var next = timeManager.shift();

  var time = next.time;
  var remaining = next.remaining;
  var status = next.status;

  new Countdown(timeout, action, noticePeriod);

}
