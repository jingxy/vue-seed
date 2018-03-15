import Vue from 'vue';
import moment from "moment";
moment.locale('zh-cn');
Vue.filter("sum", function(value) {
  return value + 6;
});
Vue.filter("phaseFilter", function(phase) {
    if (phase == "Complete") {
      return "构建成功"
    } else if (phase == "Running") {
      return "正在构建"
    } else if (phase == "Failed") {
      return "构建失败"
    } else if (phase == "Pending" || phase == "New") {
      return "正在拉取代码"
    } else if (phase == "Error") {
      return "构建错误"
    } else if (phase == "Cancelled") {
      return "终止"
    } else {
      return phase || "-"
    }
});
Vue.filter("dateRelative", function(timestamp, dropSuffix) {
  if (!timestamp) {
    return "-";
  }
  return moment(timestamp).fromNow(dropSuffix);
});
Vue.filter("duration", function(um) {
  if (!um) {
    return "-";
  }
  var duration = moment.duration(um / 1000000);
  var humanizedDuration = [];
  var years = duration.years();
  var months = duration.months();
  var days = duration.days();
  var hours = duration.hours();
  var minutes = duration.minutes();
  var seconds = duration.seconds();

  function add(count, pluralText) {
    if (count > 0) {
      humanizedDuration.push(count + pluralText);
    }
  }
  add(years, "年");
  add(months, "月");
  add(days, "日");
  add(hours, "时");
  add(minutes, "分");
  add(seconds, "秒");

  if (humanizedDuration.length === 0) {
    humanizedDuration.push("0秒");
  }

  if (humanizedDuration.length > 2) {
    humanizedDuration.length = 2;
  }

  return humanizedDuration.join("");
});

Vue.filter("timescon", function(times) {
  if (times) {
    return moment(times).format('YYYY-MM-DD HH:mm:ss');
  }
});
