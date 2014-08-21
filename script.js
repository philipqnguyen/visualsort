$(function(){

  var stickHeight = []

  var maxSticks;

  var i = 1;

  var didSort = false;

  function fillStickHeight () {
    var arr = [];
    for (var x = 0; x < 50; x++){
      stickHeight.push(Math.floor(Math.random() * 50 + 20));
    }
    maxSticks = stickHeight.length;
  }

  //initiate sticks
  function createSticks() {
    for (var n = 0; n < stickHeight.length; n++ ) {
      $("#sort-area").append("<div class='stick' data-height=" + stickHeight[n] + " style='height:" + stickHeight[n] + "px'></div>");
    }
  }

  function insertSticks() {
    $("#sort-area").empty();
    createSticks();
  }

  function goSort() {
    var beforeStick = stickHeight[i - 1];
    var afterStick = stickHeight[i];
    if (beforeStick > afterStick) {
      var afterTemp = afterStick;
      stickHeight[i] = beforeStick;
      stickHeight[i - 1] = afterTemp;
      didSort = true;
      insertSticks();
    }

    if (i === maxSticks - 1 && didSort === false){
      alert('done!');
    }
    else {
      startSort();
    }
    if (i === maxSticks - 1){
      i = 1;
      maxSticks--;
      didSort = false;
    }
    else {
      i++;
    }
  }

  function startSort(){
    window.setTimeout(goSort, 10);
  }

  fillStickHeight();
  createSticks();

  $('.sort-button').on('click', startSort);
});
