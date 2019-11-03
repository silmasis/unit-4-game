$(document).ready(function () {
    // generate target number
    var target = (Math.floor(Math.random() * 101) + 19);
    $("#randomNumber").text(target);
    // generate random number for RBYW
    var rednumber = (Math.floor(Math.random() * 11) + 1);
    var bluenumber = (Math.floor(Math.random() * 11) + 1);
    var yellownumber = (Math.floor(Math.random() * 11) + 1);
    var whitenumber = (Math.floor(Math.random() * 11) + 1);

    // tallies
    var wins = 0;
    var losses = 0;
    var total = 0;

    $("#wins").text(wins);
    $("#losses").text(losses);
    $("#total").text(total);

    function reset() {
        var target = (Math.floor(Math.random() * 101) + 19);
        $(".randomNumber").text(target);
        rednumber = (Math.floor(Math.random() * 11) + 1);
        bluenumber = (Math.floor(Math.random() * 11) + 1);
        yellownumber = (Math.floor(Math.random() * 11) + 1);
        whitenumber = (Math.floor(Math.random() * 11) + 1);
    }

    // click function on crystals

    $("#Red").on("click", function () {
        total = total + rednumber;
        $("#total").text(total);
        if (target === total) {
            wins++;
            $("#wins").html("<h3>" + wins + "</h3>");
            reset();
        }

        else if (target < total) {
            losses++;
            $("#losses").html("<h3>" + losses + "</h3>");
            reset();
        }
    })

    $("#Blue").on("click", function () {
        total = total + bluenumber;
        $("#total").text(total);
        if (target === total) {
            wins++;
            $("#wins").html("<h3>" + wins + "</h3>");
            reset();
        }

        else if (target < total) {
            losses++;
            $("#losses").html("<h3>" + losses + "</h3>");
            reset();
        }
    })

    $("#Yellow").on("click", function () {
        total = total + yellownumber;
        $("#total").text(total);
        if (target === total) {
            wins++;
            $("#wins").html("<h3>" + wins + "</h3>");
            reset();
        }

        else if (target < total) {
            losses++;
            $("#losses").html("<h3>" + losses + "</h3>");
            reset();
        }
    })
    $("#White").on("click", function () {
        total = total + whitenumber;
        $("#total").text(total);
        if (target === total) {
            wins++;
            $("#wins").html("<h3>" + wins + "</h3>");
            reset();
        }

        else if (target < total) {
            losses++;
            $("#losses").html("<h3>" + losses + "</h3>");
            reset();
        }
    });
});