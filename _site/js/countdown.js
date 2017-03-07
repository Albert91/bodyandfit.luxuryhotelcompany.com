$(function() {
  var start_date = moment();
  var end_date = moment().endOf('day');

  var diff = end_date.diff(start_date);
  var durr = moment.duration(diff);
  var seconds = durr.asSeconds();

  var clock = $('.flipclock').FlipClock(seconds, { countdown: true });
});
