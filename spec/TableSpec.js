describe ("Table", function() {

  describe("getAction", function() {

    var personalBest = 0,
        restTime     = [],
        elements     = { partialTime: 100, totalTime: 200 },
        table,
        timeOffset   = 100;

    beforeEach(function() {
      table = new Table(personalBest, restTime, elements);
    });

    it("should return the rest action during rest periods", function() {
      var status    = "rest";

      var action = table._getAction(status, timeOffset);
      expect(action instanceof RestAction).toBeTruthy();
      verifyAction(action);

    });

    it("should return the hold action during hold periods", function() {
      var status    = "hold";

      spyOn(table.timeManager, "isLastOne").and.returnValue(false);
      var action = table._getAction(status, timeOffset);
      expect(action instanceof HoldAction).toBeTruthy();
      verifyAction(action);

    });

    it("should return the final action during last hold period", function() {
      var status    = "hold";

      spyOn(table.timeManager, "isLastOne").and.returnValue(true);
      var action = table._getAction(status, timeOffset);
      expect(action instanceof FinalAction).toBeTruthy();
      verifyAction(action);

    });

    function verifyAction(action) {
      expect(action.partialTickEl).toEqual(100);
      expect(action.totalTickEl).toEqual(200);
      expect(action.totalTimeOffset).toEqual(100);
      expect(action.callback).toBe(table);
    };

  });

});
