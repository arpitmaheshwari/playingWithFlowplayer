$(document).ready(function () {

    flowplayer("#player", {
        ratio: 25/47,
        rtmp: "rtmp://s3b78u0kbtx79q.cloudfront.net/cfx/st",
        clip: {
            sources: [
                { type: "video/webm",  src: "//edge.flowplayer.org/white/470x250.webm" },
                { type: "video/mp4",   src: "//edge.flowplayer.org/white/470x250.mp4" },
                { type: "video/flash", src: "mp4:white/470x250" }
            ]
        }
    });
}
)