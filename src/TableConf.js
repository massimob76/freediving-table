function TableConf() {};

TableConf.defaultPersonalBest = 200;
TableConf.defaultRestTime = [150, 135, 120, 105, 90, 75, 60, 60];

TableConf.save = function() {
  $.cookie("personalBest", $('#personalBest').text());
  $.cookie("restTime", $('#restTime').text());
}

TableConf.elements = function() {
  return {
    partialTime: $('#partial'),
    totalTime:   $('#total'),
    stage:       $('#stage'),
    status:      $('#status')
  };
};

TableConf.personalBest = function() {
  var personalBest = $.cookie("personalBest");
  return personalBest ? personalBest : TableConf.defaultPersonalBest;
}

TableConf.restTime = function() {
  var restTime = $.cookie("restTime");
  return restTime ? restTime : TableConf.defaultRestTime;
}

