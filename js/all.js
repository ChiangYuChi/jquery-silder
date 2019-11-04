$(document).ready(function () {
    $pic = 1;
    $("#nxtbtn").click(function () {
        if ($pic == 1) {
            shrink();
            $('#silder').delay(1000).animate({
                left: "-100%"
            }, 1000);
            zoom();

            $pic = 2;
        } else if ($pic == 2) {
            shrink();
            $('#silder').delay(1000).animate({
                left: "-200%"
            }, 1000);
            zoom();
            $pic = 3;
        }
    });

    $("#prvbtn").click(function () {
        if ($pic == 3) {
            shrink();
            $('#silder').delay(1000).animate({
                left: "-100%"
            }, 1000)
            zoom();
            $pic = 2;
        } else if ($pic == 2) {
            shrink();
            $('#silder').delay(1000).animate({
                left: "0%"
            }, 1000)
            zoom();
            $pic = 1;
        }
    });

    function shrink() {
        $('#main').css({
            '-webkit-clip-path': "polygon(10% 20%,0% 100%,100% 100%,100% 0%,10% 20%)"
        });

        setTimeout(function () {
            $('#main').css({
                '-webkit-clip-path': "polygon(10% 20%,0% 100%,100% 100%,90% 20%,10% 20%)"
            });
        }, 150);

        setTimeout(function () {
            $('#main').css({
                '-webkit-clip-path': "polygon(10% 20%,0% 100%,90% 80%,90% 20%,10% 20%)"
            });
        }, 300);

        setTimeout(function () {
            $('#main').css({
                '-webkit-clip-path': "polygon(10% 20%,10% 80%,90% 80%,90% 20%,10% 20%)"
            });
        }, 450);
    }

    function zoom() {
        setTimeout(function () {
            $('#main').css({
                '-webkit-clip-path': "polygon(10% 20%,0% 100%,90% 80%,90% 20%,10% 20%)"
            });
        }, 2000);
        setTimeout(function () {
            $('#main').css({
                '-webkit-clip-path': "polygon(10% 20%,0% 100%,100% 100%,90% 20%,10% 20%)"
            });
        }, 2150);

        setTimeout(function () {
            $('#main').css({
                '-webkit-clip-path': "polygon(10% 20%,0% 100%,100% 100%,100% 0%,10% 20%)"
            });
        }, 2300);

        setTimeout(function () {
            $('#main').css({
                '-webkit-clip-path': "polygon(0% 0%,0% 100%,100% 100%,100% 0%,0% 0%)"
            });
        }, 2450);


    }

});