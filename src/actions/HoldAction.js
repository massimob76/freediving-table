function HoldAction(partialTickEl, totalTickEl, totalTimeOffset, callback) {
  Action.call(this, partialTickEl, totalTickEl, totalTimeOffset, callback);
  this.timeoutSound = new Audio("resources/TempleBell.mp3");
}

HoldAction.prototype = Object.create(Action.prototype);
HoldAction.prototype.constructor = HoldAction;
