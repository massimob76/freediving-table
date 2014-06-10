function RestAction(tickEl) {
  this.tickEl = tickEl;
  this.timeoutSound = new Audio("TempleBell.mp3");
  this.noticeSound = new Audio("AlarmClock.mp3");
}

RestAction.prototype.tick = function(value) {
  this.tickEl.text(value);
}

RestAction.prototype.timeout = function() {
  this.timeoutSound.play();
}

RestAction.prototype.notice = function() {
  this.noticeSound.play();
}
