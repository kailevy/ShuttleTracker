var $form = $(".ajax-form");
console.log($form)

var onSuccess = function(data, status) {
  console.log('DONE')
  console.log(data)
};

var onError = function(data, status) {
  console.log("status", status);
  console.log("error", data);
};

$form.submit(function(event) {
  console.log('submitted')
  event.preventDefault();
  var location = $form.find("[name='location']:checked").val();
  $.post("submit", {
    data: location
  })
    .done(onSuccess)
    .error(onError);
});