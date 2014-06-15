function FinalAction(partialTickEl, totalTickEl, totalTimeOffset, callback) {
  Action.call(this, partialTickEl, totalTickEl, totalTimeOffset, callback);
  this.timeoutSound = new Audio("resources/RoosterCrow.mp3");
}

FinalAction.prototype = Object.create(Action.prototype);
FinalAction.prototype.constructor = HoldAction;
