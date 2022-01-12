$(document).ready(function() {
  $("#form").submit(function(event) {
    event.preventDefault();
    const name = $("input#name").val();
    const born = $("input#born").val();
    const beverage = $("#beverage").val();
    const flavor = $("input:radio[name=flavor]:checked").val();
    const color = $("#color").val();
    $("#output").text(name);
    $("#output1").text(born);
    $("#output2").text(beverage);
    $("#output3").text(flavor);
    $("#output4").text(color);
  });
});