Technologies Used:
- JavaScript
```javascript
function test() {
  console.log("Hello World!");
}
```
- Bootstrap
- jQuery
```javascript
$(document).ready(function() {
  $("#target1").css("color", "red");
  $("#target1").prop("disabled", true);
  $("#target4").html("<em>#target4</em>");
  $("#target4").remove();
  $("#target2").appendTo("#right-well");
  $("#target5").clone().appendTo("#left-well");

  $("#target1").parent().css("background-color", "red");
  $("#right-well").children().css("color", "orange");
  $(".target:nth-child(2)").addClass("animated bounce");
  $(".target:even").addClass("animated shake");
  $("body").addClass("animated hinge");
});
```
- SASS
```scss
<style type='text/scss'>
  @for $j from 1 through 6{
    .text-#{$j} {
      font-size: 15px*$j;
    }
  }
</style>

<p class="text-1">Hello</p>
<p class="text-2">Hello</p>
<p class="text-3">Hello</p>
<p class="text-4">Hello</p>
<p class="text-5">Hello</p>
```
