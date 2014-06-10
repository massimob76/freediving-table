describe ("TimeManager", function() {

  beforeEach(function() {
    TimeManager.setUp(100);
  });

  it("should be able to create a new freediving table", function() {
    expect(TimeManager.personalBest).toEqual(100);
    expect(TimeManager.timeSpan).toEqual([150, 50, 135, 50, 120, 50, 105, 50, 90, 50, 75, 50, 60, 50, 60, 50]);
  });

  it("should be able to shift to the next rest/holding time", function() {
    var expectedArray = [
      { time: 150, remaining: 1195, total: 1195, status: "rest" },
      { time:  50, remaining: 1045, total: 1195, status: "hold" },
      { time: 135, remaining:  995, total: 1195, status: "rest" },
      { time:  50, remaining:  860, total: 1195, status: "hold" },
      { time: 120, remaining:  810, total: 1195, status: "rest" },
      { time:  50, remaining:  690, total: 1195, status: "hold" },
      { time: 105, remaining:  640, total: 1195, status: "rest" },
      { time:  50, remaining:  535, total: 1195, status: "hold" },
      { time:  90, remaining:  485, total: 1195, status: "rest" },
      { time:  50, remaining:  395, total: 1195, status: "hold" },
      { time:  75, remaining:  345, total: 1195, status: "rest" },
      { time:  50, remaining:  270, total: 1195, status: "hold" },
      { time:  60, remaining:  220, total: 1195, status: "rest" },
      { time:  50, remaining:  160, total: 1195, status: "hold" },
      { time:  60, remaining:  110, total: 1195, status: "rest" },
      { time:  50, remaining:   50, total: 1195, status: "hold" },
      { time:   0, remaining:    0, total: 1195, status: "done"}
    ];
    var expected;

    while (expected = expectedArray.shift()) {
      expect(TimeManager.shift()).toEqual(expected);
    }

  });


  it("should be able to peek the current rest/holding time", function() {
    expect(TimeManager.peek()).toEqual({ time: 150, remaining: 1195, total: 1195, status: "rest" });

    TimeManager.shift();
    expect(TimeManager.peek()).toEqual({ time:  50, remaining: 1045, total: 1195, status: "hold" });

    while(TimeManager.shift().time != 0);
    expect(TimeManager.peek()).toEqual({ time:   0, remaining:    0, total: 1195, status: "done" });
  });



});
