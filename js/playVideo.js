"use strict";

document.addEventListener("DOMContentLoaded", function () {
  var btnPlayList = document.querySelectorAll(".btn-play");

  btnPlayList.forEach(function (btnPlay) {
    btnPlay.addEventListener("click", function () {
      var videoUrl = this.getAttribute("data-src");
      var videoFrame = document.getElementById("customVideoFrame");
      videoFrame.setAttribute("src", videoUrl);
    });
  });

  var videoModal = new bootstrap.Modal(
    document.getElementById("customVideoModal")
  );

  videoModal._element.addEventListener("hidden.bs.modal", function () {
    var videoFrame = document.getElementById("customVideoFrame");
    videoFrame.setAttribute("src", "");
  });
});
