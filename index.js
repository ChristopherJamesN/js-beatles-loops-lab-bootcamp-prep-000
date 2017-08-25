function theBeatlesPlay(musicians, instruments) {
  var arr = [];
  for (i=0; i<musicians.length; i++) {
    arr[i] = musicians[i] + " plays " + instruments[i];
  }
  return arr;
}