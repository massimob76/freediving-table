describe ("TimeManager", function() {

  beforeEach(function() {
    TimeManager.setUp(100);
  });

  it("should be able to create a new freediving table", function() {
    expect(TimeManager.personalBest).toEqual(100);
    expect(TimeManager.timeSpan).toEqual([150, 50, 135, 50, 120, 50, 105, 50, 90, 50, 75, 50, 60, 50, 60, 50]);
  });

  it("should be able to shift to the next rest/holding time", function() {
    var restHoldTime = [150, 50, 135, 50, 120, 50, 105, 50, 90, 50, 75, 50, 60, 50, 60, 50],
        expected;

    while (expected = restHoldTime.shift()) {
      expect(TimeManager.shift()).toEqual(expected);
    }

    expect(TimeManager.shift()).toBeNull();
  });

  it("should be able to peek the current rest/holding time", function() {
    expect(TimeManager.peek()).toEqual(150);

    TimeManager.shift();
    expect(TimeManager.peek()).toEqual(50);

    while(TimeManager.shift() != null);
    expect(TimeManager.peek()).toBeNull();
  });

  it("should be able to check the current status", function() {
    expect(TimeManager.status()).toEqual("rest");

    TimeManager.shift();
    expect(TimeManager.status()).toEqual("hold");

    while(TimeManager.shift() != null);
    expect(TimeManager.status()).toEqual("done");
  });

  it("should be able to return the remaing time", function() {
    expect(TimeManager.remainingTime()).toEqual(1195);

    TimeManager.shift();
    expect(TimeManager.remainingTime()).toEqual(1045);

    while(TimeManager.shift() != null);
    expect(TimeManager.remainingTime()).toEqual(0);
  });

  it("should be able to return the total time", function() {
    expect(TimeManager.totalTime()).toEqual(1195);
  })

});
