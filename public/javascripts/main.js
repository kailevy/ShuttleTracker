// $.material.init();

var $form = $(".ajax-form");
// console.log($form)

var onSuccess = function(data, status) {
  $("#lastPlace").html('Last seen at: ' + data.place);
  $("#lastTime").html('<strong>'+data.timestamp+'</strong>');
  $("#changeHeader").html('Thank you for helping!');
  $("#hideForm").remove();
  $("#cats").show();
  $("#cats").click(function () {
    var imgUrl = $(this).data('rel');
    $("#area").html("<img style='max-width:20rem; height:auto;' src='" + imgUrl + "' alt='cats' />");
    $("#cats").hide();
  });
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