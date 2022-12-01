const iframe = document.querySelector("iframe");
const player = new Vimeo.Player(iframe);

const onPlay = function (data) {
  localStorage.setItem("videoplayer-current-time", JSON.stringify(data));
};

player.on("timeupdate", onPlay);

player.getVideoTitle().then(function (title) {
  console.log("title:", title);
});

const parsedData = JSON.parse(localStorage.getItem("videoplayer-current-time"));
console.log(parsedData);
player
  .setCurrentTime(parsedData.seconds)
  .then(function (seconds) {
    seconds = parsedData.seconds;
  })
  .catch(function (error) {
    switch (error.name) {
      case "RangeError":
        parsedData.seconds < 0 || parsedData.seconds > parsedData.duration;
        break;
    }
  });
