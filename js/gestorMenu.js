var arrayActivities = [0, 1, 2];
var indexActivity = 0;

$(document).ready(function () {
  $("#rightArrowActivity").click(function (e) {
    e.preventDefault();
    if (indexActivity == arrayActivities.length - 1) {
      indexActivity = 0;
    } else {
      indexActivity++;
    }
    cambiarActividad();
  });
  $("#leftArrowActivity").click(function (e) {
    e.preventDefault();
    if (indexActivity == 0) {
      indexActivity = arrayActivities.length - 1;
    } else {
      indexActivity--;
    }
    cambiarActividad();
  });
});

function cambiarActividad() {
  switch (indexActivity) {
    case 0:
      $("#activity").html("VOCABULARY");
      break;
    case 1:
      $("#activity").html("TOPICS");
      break;
    case 2:
      $("#activity").html("IMAGES");
      break;
    default:
      break;
  }
}
