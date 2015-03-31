// $.material.init();

var $form = $(".ajax-form");
// console.log($form)

var onSuccess = function(data, status) {
  $("#lastPlace").html('Last seen at: ' + data.place);
  $("#lastTime").html('<strong>'+data.timestamp+'</strong>');
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
  // console.log('prevented')
  var location = $form.find("[name='location']:checked").val();
  if(location){
    $.post("submit", {
      data: location
    })
    .done(onSuccess)
    .error(onError);
  }
});