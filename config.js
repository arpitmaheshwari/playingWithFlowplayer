$(function () {
    var elems = $("#chapters a"),

        chaptertoggle = function (index) {
            elems.each(function (i) {
                $(this).toggleClass("active", index == i);
            });
        },

        clearchapters = function () {
            elems.removeClass("active");
        },

        api = flowplayer("#player", {
            ratio: 5/12,
            cuepoints: [0.5, 1.2, 1.5, 2.7],
            clip: {
                sources: [
                    { type: "application/x-mpegurl", src: "//edge.flowplayer.org/playful.m3u8" },
                    { type: "video/mp4",             src: "//edge.flowplayer.org/playful.mp4" }
                ]
            },
            embed:true

        }).on("beforeseek", function (e, api, pos) {
            if (pos < api.conf.cuepoints[0]) {
                clearchapters();

            } else {
                $.each(api.conf.cuepoints, function (index, cue) {
                    if (index == api.conf.cuepoints.length - 1 ||
                        pos >= cue && pos < api.conf.cuepoints[index + 1]) {

                        chaptertoggle(index);
                        return false;
                    }
                });
            }

        }).on("unload", clearchapters);

    console.dir(elems);
    elems.click(function (e) {
        var cue = api.conf.cuepoints[elems.index(this)];

        e.preventDefault();

        chaptertoggle(cue.index);

        if (api.ready) {
            api.seek(cue);
        } else {
            api.one("ready.chapter", function (e, api) {
                api.seek(cue);
            });
            api.load();
        }

    });

});
