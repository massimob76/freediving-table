function Table(personalBest, partialTimeEl, totalTimeEl) {
  this.personalBest = personalBest;
  this.partialTimeEl = partialTimeEl;
  this.totalTimeEl = totalTimeEl;
}

Table.prototype.start = function() {
  var noticePeriod = 8;
  var timeManager = new TimeManager(this.personalBest);
  var next;
  do {
    next = timeManager.shift();
    var timeOffset = next.total - next.partial;
    var isLastOne  = _isLastOne(next.stage);
    var action = this._getAction(next.status, timeOffset, isLastOne);

    new Countdown(next.partial, action, noticePeriod);

  } while (next.status != "done");
}

Table.prototype._getAction = function(status, timeOffset, isLastOne) {
  switch (status) {
    case "rest":
      return new RestAction(this.partialTimeEl, this.totalTimeEl, timeOffset);
    case "hold":
      return (isLastOne) ?
        new FinalAction(this.partialTimeEl, this.totalTimeEl, timeOffset)
      : new HoldAction(this.partialTimeEl, this.totalTimeEl, timeOffset);
  }
}

Table.prototype._isLastOne = function(stage) {
  return (stage == 16);
}
