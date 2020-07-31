$(document).ready(function () {




  function date_time() {
    today = moment().format('dddd, MMMM Do YYYY, h:mm:ss a');
    $("#currentDay").append(today);
    setTimeout(function () { date_time(); }, 1000);
  }
  date_time();



});
