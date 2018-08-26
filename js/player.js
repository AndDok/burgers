let player;

function onYouTubeIframeAPIReady() {
  player = new YT.Player("ytplayer", {
    width: "660",
    height: "405",
    videoId: "zmg_jOwa9Fc",
    playerVars: {
      controls: 1,
      disablekb: 1,
      showinfo: 1,
      rel: 1,
      autoplay: 0,
      modestbranding: 1
    },
    events: {
      // 'onReady': onPlayerReady,
      // 'onPlaybackQualityChange': onPlayerPlaybackQualityChange,
      // 'onStateChange': onPlayerStateChange,
      // 'onError': onPlayerError
    }
  });
}