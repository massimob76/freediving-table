describe("TimeHelper", function() {

  it("should convert time in seconds to text", function() {
    expect(TimeHelper.convertSecondsToText(200)).toEqual("3:20");
    expect(TimeHelper.convertSecondsToText(43)).toEqual("43");
    expect(TimeHelper.convertSecondsToText(185)).toEqual("3:05");
    expect(TimeHelper.convertSecondsToText(120)).toEqual("2:00");
  });

  it("should conver text to time in seconds", function() {
    expect(TimeHelper.convertTextToSeconds("3:20")).toEqual(200);
    expect(TimeHelper.convertTextToSeconds("43")).toEqual(43);
    expect(TimeHelper.convertTextToSeconds("3:05")).toEqual(185);
    expect(TimeHelper.convertTextToSeconds("2:00")).toEqual(120);
  });
});
