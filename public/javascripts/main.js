// $.material.init();

var $form = $(".ajax-form");
var $fakeform = $("#nextdest");
var $feedbackform = $("#feedbackform");
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

var i = 0;

var fakeSuccess = function(data, status) {
  var colors = ["#FF0000", "#00FF00","#0000FF"]
  var setcolor = colors[i%3];
  // console.log(setcolor)
  $("#successful").html("<p style='color:"+ setcolor +"'>Submitted-- check main page.</p>")
  i += 1;
}

var feedbackSuccess = function(data, status) {
  var colors = ["#FF0000", "#00FF00","#0000FF"]
  var setcolor = colors[i%3];
  $("#success").html("<p style='color:"+ setcolor +"'>Thank you for your feedback!</p>")
  i += 1;
}

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

$fakeform.submit(function(event) {
  event.preventDefault();
  var place = $("#place").val();
  var minutes = $fakeform.find("[name='minutes']").val();
  var image = $("#image").val();
  var displaying = $("#displaying").val();
  // console.log({
  //   place: place, minutes: minutes, image: image, displaying: displaying
  //   })
  if (minutes) {
  $.post("fakesubmits", {
    place: place, minutes: minutes, image: image, displaying: displaying
    })
  .done(fakeSuccess).error(onError)
  }
});

$feedbackform.submit(function(event) {
  event.preventDefault();
  var name = $feedbackform.find("[name='name']").val();
  var feedback = $feedbackform.find("[name='feedback']").val();
  if (name && feedback) {
    $.post("feedback", {
      name: name, feedback: feedback
    })
    .done(feedbackSuccess).error(onError)
  }
});