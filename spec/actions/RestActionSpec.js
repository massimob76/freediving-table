describe ("RestAction", function() {

  it("should update the partial and total time", function() {

    function PartialTickEl() {};
    var partialTickEl = new PartialTickEl();
    PartialTickEl.prototype.text = jasmine.createSpy("partialTimeText");

    function TotalTickEl() {};
    var totalTickEl = new TotalTickEl();
    TotalTickEl.prototype.text = jasmine.createSpy("totalTimeText");

    var totalTimeOffset = 100;

    var action = new RestAction(partialTickEl, totalTickEl, totalTimeOffset, null);
    action.tick(13);
    expect(partialTickEl.text).toHaveBeenCalledWith('13');
    expect(totalTickEl.text).toHaveBeenCalledWith('1:53');
  });

  it("should call a callback function on timeout", function() {

    var callback = new Object();
    callback.start = jasmine.createSpy("callback");

    var action = new RestAction(null, null, 0, callback);
    action.timeout();
    expect(callback.start).toHaveBeenCalled();
  });

})
