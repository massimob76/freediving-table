function Table(personalBest, elements) {
  this.elements = elements;
  this.timeManager = new TimeManager(personalBest);
  this.noticePeriod = 8;
}

Table.prototype.start = function() {
  var next = this.timeManager.shift();

  if (next.status != "done") {

    this.elements.stage.text(next.stage);
    this.elements.status.text(next.text);

    var timeOffset = next.total - next.partial,
        action     = this._getAction(next.status, timeOffset);

    new Countdown(next.partial, action, this.noticePeriod).start();

  }
}

Table.prototype._getAction = function(status, timeOffset) {
  switch (status) {
    case "rest":
      return new RestAction(this.elements.partialTime, this.elements.totalTime, timeOffset, this.start);
    case "hold":
      return (this.timeManager.isLastOne()) ?
        new FinalAction(this.elements.partialTime, this.elements.totalTime, timeOffset, this.start)
      : new HoldAction(this.elements.partialTime, this.elements.totalTime, timeOffset, this.start);
  }
}

