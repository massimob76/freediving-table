describe("TableConf", function() {

  describe("load and save", function() {

    it("should load the current configuration from cookies", function() {
      spyOn($.prototype, "val");
      spyOn(TableConf, "personalBest").and.returnValue(200);
      spyOn(TableConf, "restTime").and.returnValue([1,2,3]);

      TableConf.load();
      expect($.prototype.val).toHaveBeenCalledWith("3:20");
      expect($.prototype.val).toHaveBeenCalledWith(['1','2','3']);

    });

    it("should save the current configuration to cookies", function() {
      var expected = "something";

      spyOn($, "cookie");
      spyOn($.prototype, "val").and.returnValue("123");
      TableConf.save();
      expect($.cookie).toHaveBeenCalledWith("personalBest", 123);
      expect($.cookie).toHaveBeenCalledWith("restTime", '123');
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
      spyOn($, "cookie").and.returnValue("150, 135");

      expect(TableConf.restTime()).toEqual([150, 135]);
    });

  });

});
