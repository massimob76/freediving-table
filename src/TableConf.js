function TableConf() {};

TableConf.defaultPersonalBest = 200;
TableConf.defaultRestTime = [150, 135, 120, 105, 90, 75, 60, 60];

TableConf.load = function() {
  $('#personalBest').val(TableConf.personalBest());
  $('#restTime').val(TableConf.restTime());
}

TableConf.save = function() {
  $.cookie("personalBest", $('#personalBest').val());
  $.cookie("restTime", $('#restTime').val());
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
  return restTime ? restTime.split(',').map(Number) : TableConf.defaultRestTime;
}

