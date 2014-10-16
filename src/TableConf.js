function TableConf() {};

TableConf.defaultPersonalBest = 200;
TableConf.defaultRestTime = [150, 135, 120, 105, 90, 75, 60, 60];

TableConf.load = function() {
  var personalBestText = TimeHelper.convertSecondsToText(TableConf.personalBest());
  $('#personalBest').val(personalBestText);
  var restTimeArrayText = TableConf.restTime().map(TimeHelper.convertSecondsToText);
  $('#restTime').val(restTimeArrayText);
}

TableConf.save = function() {
  var personalBest = $('#personalBest').val();
  $.cookie("personalBest", TimeHelper.convertTextToSeconds(personalBest));
  var restTimeArray = $('#restTime').val().split(',').map(TimeHelper.convertTextToSeconds).join(',');
  $.cookie("restTime", restTimeArray);
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

