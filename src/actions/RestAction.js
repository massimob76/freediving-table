function RestAction(partialTickEl, totalTickEl, totalTimeOffset, callback) {
  Action.call(this, partialTickEl, totalTickEl, totalTimeOffset, callback);
  this.timeoutSound = new Audio("resources/TempleBell.mp3");
  this.noticeSound = new Audio("resources/WhistlingPerson.mp3");
}

RestAction.prototype = Object.create(Action.prototype);
RestAction.prototype.constructor = RestAction;

RestAction.prototype.notice = function() {
  this.noticeSound.play();
}
