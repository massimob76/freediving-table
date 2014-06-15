describe("Countdown", function() {

  beforeEach(function() {
    jasmine.clock().install();
  });

  afterEach(function() {
    jasmine.clock().uninstall();
  });

  it("should not call any method that doesn't exist", function() {
    function Action() {};
    action = new Action();

    countdown = new Countdown(60, action);
    countdown.start();

    // creating spy after countdown has already started
    Action.prototype.timeout = jasmine.createSpy("timeout");
    jasmine.clock().tick(60001);
    expect(action.timeout).not.toHaveBeenCalled();

  });

  it("should call the timeout method when it times out", function() {
    function Action() {};
    action = new Action();

    Action.prototype.timeout = jasmine.createSpy("timeout");

    countdown = new Countdown(60, action);
    countdown.start();

    expect(action.timeout).not.toHaveBeenCalled();
    jasmine.clock().tick(59999);
    expect(action.timeout).not.toHaveBeenCalled();
    jasmine.clock().tick(2);
    expect(action.timeout).toHaveBeenCalled();
  });


  it("should call the tick method every second", function() {
    function Action() {};
    action = new Action();

    Action.prototype.tick = jasmine.createSpy("tick");

    countdown = new Countdown(2, action);
    countdown.start();

    jasmine.clock().tick(2);
    expect(action.tick).toHaveBeenCalledWith(2);

    jasmine.clock().tick(1000);
    expect(action.tick).toHaveBeenCalledWith(1);

    jasmine.clock().tick(1000);
    expect(action.tick).toHaveBeenCalledWith(0);

  });

  it("should call the notice method in the notice period before the timeout", function() {
    function Action() {};
    action = new Action();

    Action.prototype.notice = jasmine.createSpy("notice");

    countdown = new Countdown(4, action, 2);
    countdown.start();

    jasmine.clock().tick(1999);
    expect(action.notice).not.toHaveBeenCalled();

    jasmine.clock().tick(2);
    expect(action.notice).toHaveBeenCalled();

  });

  it("should not call the notice method if the notice period is not defined", function() {
        function Action() {};
    action = new Action();

    Action.prototype.notice = jasmine.createSpy("notice");

    countdown = new Countdown(4, action);
    countdown.start();

    jasmine.clock().tick(2001);
    expect(action.notice).not.toHaveBeenCalled();
  });

});
