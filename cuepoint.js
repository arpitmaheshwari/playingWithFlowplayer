$(document).ready(function(){
        player = flowplayer("#player");

        $("#transcript a").on("click", function(){
            player.seek(Number(this.attributes[0].value));
        });
    }
);