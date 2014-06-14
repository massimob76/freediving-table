function RestAction(partialTickEl, totalTickEl, totalTimeOffset) {
  this.partialTickEl = partialTickEl;
  this.totalTickEl = totalTickEl;
  this.totalTimeOffset = totalTimeOffset;
  this.timeoutSound = new Audio("TempleBell.mp3");
  this.noticeSound = new Audio("AlarmClock.mp3");
}

RestAction.prototype.tick = function(value) {
  this.partialTickEl.text(value);
  this.totalTickEl.text(value + this.totalTimeOffset);
}

RestAction.prototype.timeout = function() {
  this.timeoutSound.play();
}

RestAction.prototype.notice = function() {
  this.noticeSound.play();
}
