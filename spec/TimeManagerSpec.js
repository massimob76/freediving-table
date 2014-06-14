describe ("TimeManager", function() {

  var timeManager;

  beforeEach(function() {
    timeManager = new TimeManager(100);
  });

  it("should be able to create a new freediving table", function() {
    expect(timeManager.personalBest).toEqual(100);
    expect(timeManager.timeSpan).toEqual([150, 50, 135, 50, 120, 50, 105, 50, 90, 50, 75, 50, 60, 50, 60, 50]);
  });

  it("should be able to shift to the next rest/holding time", function() {
    var expectedArray = [
      { partial: 150, total: 1195, stage: 1, status: "rest" },
      { partial:  50, total: 1045, stage: 2, status: "hold" },
      { partial: 135, total:  995, stage: 3, status: "rest" },
      { partial:  50, total:  860, stage: 4, status: "hold" },
      { partial: 120, total:  810, stage: 5, status: "rest" },
      { partial:  50, total:  690, stage: 6, status: "hold" },
      { partial: 105, total:  640, stage: 7, status: "rest" },
      { partial:  50, total:  535, stage: 8, status: "hold" },
      { partial:  90, total:  485, stage: 9, status: "rest" },
      { partial:  50, total:  395, stage: 10, status: "hold" },
      { partial:  75, total:  345, stage: 11, status: "rest" },
      { partial:  50, total:  270, stage: 12, status: "hold" },
      { partial:  60, total:  220, stage: 13, status: "rest" },
      { partial:  50, total:  160, stage: 14, status: "hold" },
      { partial:  60, total:  110, stage: 15, status: "rest" },
      { partial:  50, total:   50, stage: 16, status: "hold" },
      { partial:   0, total:    0, stage: "N/A", status: "done"}
    ];
    var expected;

    while (expected = expectedArray.shift()) {
      expect(timeManager.shift()).toEqual(expected);
    }

  });


  it("should be able to peek the current rest/holding time", function() {
    expect(timeManager.peek()).toEqual({ partial: 150, total: 1195, stage: 1, status: "rest" });

    timeManager.shift();
    expect(timeManager.peek()).toEqual({ partial:  50, total: 1045, stage: 2, status: "hold" });

    while(timeManager.shift().status != "done");
    expect(timeManager.peek()).toEqual({ partial:   0, total:    0, stage: "N/A", status: "done" });
  });



});
