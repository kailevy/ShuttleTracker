$.material.init();

var $form = $(".ajax-form");
// console.log($form)

function printDate(date) {
    return date.toLocaleDateString() + ' at ' + date.toLocaleTimeString()
};

var onSuccess = function(data, status) {
  $("#lastPlace").html('Last seen at: ' + data.place);
  $("#lastTime").html(data.timestamp);
  $("#changeHeader").html('Thank you for helping!');
  $("#hideForm").remove();
};

var onError = function(data, status) {
  console.log("status", status);
  console.log("error", data);
};

$form.submit(function(event) {
  // console.log('submitted')
  event.preventDefault();
  var location = $form.find("[name='location']:checked").val();
  if(location){
    $.post("submit", {
      data: location
    })
    .done(onSuccess)
    .error(onError);
  }
});