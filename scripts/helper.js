class Helper {
  playPauseAndUpdate(song) {
    player.playPause(song);
    totalTime = player.getDuration
  };
  $('#time-control .total-time').text(totalTime);
}
    const helper = new Helper();


// $('#time-control input').on('input', function (event) {
//   player.skipTo(event.target.value);
// });
//
// setInterval( () => {
//   if (player.playState !== 'playing') {return; }
//   const currentTime = player.getTime();
//   const duration = player.getDuration();
//   const percent = (currentTime / duration) * 100;
//   $('#time-control .current-time').text(currentTime);
//   $('#time-control input').val(percent);
// }, 1000);
