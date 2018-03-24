document.ready(function(){
  console.log("document ready")
})

var toggleHandler = function(toggleTrigger,toggleTarget){
  toggleTrigger.addEventListener('click', function(){
    alert(toggleTarget);
  })
}
