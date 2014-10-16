TimeHelper = {

  convertSecondsToText: function(sec) {
    var minText = Math.floor(sec / 60);
    var secText = sec % 60;
    if (minText == 0) {
      return secText.toString();
    } else {
      return minText + ((secText < 10) ? ":0" : ":") + secText;
    }
  },

  convertTextToSeconds: function(text) {
    var time = text.split(":");
    return (time.length == 1) ? parseInt(time[0], 10)
      : parseInt(time[0], 10) * 60 + parseInt(time[1], 10);
  }

};
