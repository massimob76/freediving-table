describe("TableConf", function() {

  describe("load and save", function() {

    it("should load the current configuration from cookies", function() {
      var personalBest = "200";
      var restTime = "[1,2,3]";
      spyOn($.prototype, "val");
      spyOn(TableConf, "personalBest").and.returnValue(personalBest);
      spyOn(TableConf, "restTime").and.returnValue(restTime);

      TableConf.load();
      expect($.prototype.val).toHaveBeenCalledWith(personalBest);
      expect($.prototype.val).toHaveBeenCalledWith(restTime);

    });

    it("should save the current configuration to cookies", function() {
      var expected = "something";

      spyOn($, "cookie");
      spyOn($, "text").and.returnValue(expected);
      TableConf.save();
      expect($.cookie).toHaveBeenCalledWith("personalBest", expected);
      expect($.cookie).toHaveBeenCalledWith("restTime", expected);
    });

  });

  describe("personalBest", function() {

    it("should return the default personal best if it is not set", function() {
      spyOn($, "cookie");

      expect(TableConf.personalBest()).toEqual(TableConf.defaultPersonalBest);
    });


    it("should get the personal best from the cookie", function() {
      var expectedPersonalBest = 123;
      spyOn($, "cookie").and.returnValue(expectedPersonalBest);

      expect(TableConf.personalBest()).toEqual(expectedPersonalBest);
    });

  });

  describe("restTime", function() {

    it("should return the default rest time if it is not set", function() {
      spyOn($, "cookie");

      expect(TableConf.restTime()).toEqual(TableConf.defaultRestTime);
    });


    it("should get the personal best from the cookie", function() {
      var expectedRestTime = [150, 135];
      spyOn($, "cookie").and.returnValue(expectedRestTime);

      expect(TableConf.restTime()).toEqual(expectedRestTime);
    });

  });

});
