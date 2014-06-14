function FinalAction(partialTickEl, totalTickEl) {
  this.partialTickEl = partialTickEl;
  this.totalTickEl = totalTickEl;
  this.timeoutSound = new Audio("/src/resources/RoosterCrow.mp3");
}

HoldAction.prototype.tick = function(value) {
  this.partialTickEl.text(value);
  this.totalTickEl.text(value);
}

HoldAction.prototype.timeout = function() {
  this.timeoutSound.play();
}
