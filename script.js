$(function(){
  var stickHeight = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20].reverse();

  var maxSticks = stickHeight.length;

  var i = 1;

  var didSort = false;

  //initiate sticks
  function createSticks() {
    for (var n = 0; n < maxSticks; n++ ) {
      $("#sort-area").append("<div class='stick' data-height=" + stickHeight[n] + " style='height:" + stickHeight[n] + "px'></div>");
    }
  }

  function insertSticks() {
    $("#sort-area").empty();
    createSticks();
  }

  function goSort() {
    if (i < maxSticks) {
      var beforeStick = stickHeight[i - 1];
      var afterStick = stickHeight[i];
      if (beforeStick > afterStick) {
        var afterTemp = afterStick;
        stickHeight[i] = beforeStick;
        stickHeight[i - 1] = afterTemp;
        didSort = true;
      }
      insertSticks();

      if (i === maxSticks - 1 && didSort === false){
        alert('done!');
      }
      else {
        startSort();
      }
      if (i === maxSticks - 1){
        i = 1;
        didSort = false;
      }
      else {
        i++;
      }
    }
  }

  function startSort(){
    window.setTimeout(goSort, 100);
  }

  createSticks();
  startSort();
});
