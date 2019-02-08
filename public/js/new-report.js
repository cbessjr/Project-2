var $submitReportBtn = $("#submit-report");
var $reportType = $("#type");
var $reportDescription = $("#description");
var $reportLocation = $("#location");
var $reportCity = $("#city");
var $reportState = $("#state-select");

var API = {
  submitReport: function(data) {
    return $.ajax({
      headers: {
        "Content-Type": "application/json"
      },
      type: "POST",
      url: "/api/reports",
      data: JSON.stringify(data)
    });
  }
};

var handleReportSubmit = function(event) {
  event.preventDefault();

  var data = {
    type: $reportType
      .val()
      .trim()
      .toLowerCase(),
    description: $reportDescription
      .val()
      .trim()
      .toLowerCase(),
    location: $reportLocation
      .val()
      .trim()
      .toLowerCase(),
    city: $reportCity
      .val()
      .trim()
      .toLowerCase(),
    state: $reportState
      .val()
      .trim()
      .toLowerCase()
  };

  if (
    !data.type ||
    !data.description ||
    !data.location ||
    !data.city ||
    !data.state
  ) {
    return alert("Please fill out all fields before submitting");
  }

  API.submitReport(data).then(function() {
    console.log(data);
    location.reload();
  });
};

$submitReportBtn.on("click", handleReportSubmit);
