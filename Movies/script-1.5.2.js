$(document).ajaxStart(function() {
    $('.content-loading').addClass('loading');
}).ajaxStop(function() {
    $('.content-loading').removeClass('loading');
});

$(document).ready(function() {

    $('select').selectmenu({
        width : 'auto'
    });

    $('#city-select').selectmenu('menuWidget').addClass('city-select-overflow');

    $('.basic-right').each(function() { $(this).selectmenu('widget').addClass('basic-right-select'); });

    $('.basic-default').each(function() { $(this).selectmenu('widget').addClass('basic-default-select'); });

    $('.lg-orange-select').each(function() { $(this).selectmenu('widget').addClass('lg-orange-selectmenu'); });

    $('.lg-white-select').each(function() { $(this).selectmenu('widget').addClass('lg-white-selectmenu'); });

    $('#cinema-select')
        .selectmenu('menuWidget')
        .addClass('cinema-select-overflow');

    $('#age-select')
        .selectmenu({width: '131px'})
        .selectmenu('menuWidget')
        .addClass('cinema-select-overflow');

    $('.search').find('a').click(function() {
        $('.search-active').fadeIn('fast').find('input[type="text"]').focus();
        $('.nav').addClass('blur');
        return false;
    });
    $('.cancel').find('a').click(function () {
        $('.search-active').hide();
        $('.nav').removeClass('blur');
        return false;
    });

    $('.timetable').find('a').on('click', function() {
        var accordion = $('#header-schedule');
        if (accordion.accordion('option', 'active') === false) {
            accordion.accordion('option', 'active', 0);
            $(this).parent().addClass('selected');
            accordion.show();
        } else {
            accordion.accordion('option', 'active', false);
            $(this).parent().removeClass('selected');
        }
        return false;
    });

    $(".jqmClose").hide();

    $("#city-select").on("selectmenuchange", function(){
        var list = document.getElementById("cinema-select");
        for (i_ in list.options.length) {
            list.options[i_] = null;
        }
        $.ajax({
            url: '/list_cinemas',
            dataType : "json",
            data: {
                city: $(this).val(),
                'city-select': $(this).val()
            },
            success: function (data, textStatus) {
                var pos = 0;
                list.options[0] = new Option("Выберите кинотеатр", "0");
                pos++;
                $.each(data, function(i, item) {
                    list.options[pos] = new Option(item.name, item.id);
                    pos++;
                });
                list.length = pos;
                $("#cinema-select").selectmenu("refresh");
                $("#seances").html('');
            },
            error: function (XMLHttpRequest, textStatus, errorThrown) {
            }
        });
    });

    function getScheduleCinema() {
        $("#seances tbody").hide();

        var cinemaId = $("#cinema-select").val();
        if (cinemaId > 0) {
            var sort = $("#sort").val();
            var day = $("#day").val();
            var actual = $("#actual_seances").val();
            $.post(
                ctx_ + "/schedule_cinema",
                {id: cinemaId, sort: sort, day: day, actual: actual},
                function (data) {
                    $("#seances").html(data);

                    $("#about_cinema").show();
                    $(".more-wrapper").show();
                }
            );
        }
    }

    $("#cinema-select").on("selectmenuchange", function(){
        getScheduleCinema();
    });

    $("#about_cinema_link").click(function () {
        var cinemaId = $("#cinema-select").val();
        if (cinemaId > 0) {
            location.href = ctx_ + "/cinema/" + cinemaId;
        }
    });

    $("#actual_seances").on("selectmenuchange", function(){
        getScheduleCinema();
    });

    $("#more-seances").click(function () {
        $("#more-seances-wr").removeAttr("style");
        $(this).parent().hide();
        return false;
    });

    $("#sort_movies").click(function () {
        $("#sort_movies").parent().removeClass("selected");
        $("#sort_halls").parent().removeClass("selected");
        $(this).parent().attr("class", "selected");
        $("#sort").val(0);
        getScheduleCinema();
        return false;
    });

    $("#sort_halls").click(function () {
        $("#sort_movies").parent().removeClass("selected");
        $("#sort_halls").parent().removeClass("selected");
        $(this).parent().attr("class", "selected");
        $("#sort").val(1);
        getScheduleCinema();
        return false;
    });

    $("#schedule_today").click(function () {
        $("#schedule_today").parent().removeClass("selected");
        $("#schedule_tomorrow").parent().removeClass("selected");
        $("#schedule_after_tomorrow").parent().removeClass("selected");
        $(this).parent().attr("class", "selected");
        $("#day").val(0);
        getScheduleCinema();
        return false;
    });

    $("#schedule_tomorrow").click(function () {
        $("#schedule_today").parent().removeClass("selected");
        $("#schedule_tomorrow").parent().removeClass("selected");
        $("#schedule_after_tomorrow").parent().removeClass("selected");
        $(this).parent().attr("class", "selected");
        $("#day").val(1);
        getScheduleCinema();
        return false;
    });

    $("#schedule_after_tomorrow").click(function () {
        $("#schedule_today").parent().removeClass("selected");
        $("#schedule_tomorrow").parent().removeClass("selected");
        $("#schedule_after_tomorrow").parent().removeClass("selected");
        $(this).parent().attr("class", "selected");
        $("#day").val(2);
        getScheduleCinema();
        return false;
    });

    $("#header-schedule").accordion({ active: false, collapsible: true, animate: false, icons: false, heightStyle: 'content' });

    $("#banner_close").click(function(){
        $("#banner_close_container").hide();$("#banner_fixed_container").slideUp();
    });
});

function getTime(hours, minutes) {
    return addZero(hours) + ":" + addZero(minutes);
}

function addZero(i) {
    if (i < 10) {
        i = '0' + i;
    }
    return i;
}
function sellTicketTheatreTicketon(cinema, date){
    $('#ticketSellAgreement').jqm({ajax: ctx_ + "/ticket/agreement/ticketon?type=1&cinemaId="+cinema+"&date="+date});
    $('#ticketSellAgreement').jqmShow();
}
function sellTicketTheatreKinopark(cinema){
    $('#ticketSellAgreement').jqm({ajax: ctx_ + "/ticket/agreement/kinopark?cinemaId="+cinema});
    $('#ticketSellAgreement').jqmShow();
}
function sellTicketTheatreKinoplexx(cinema){
    $('#ticketSellAgreement').jqm({ajax: ctx_ + "/ticket/agreement/kinoplexx?cinemaId="+cinema});
    $('#ticketSellAgreement').jqmShow();
}
function sellTicketTheatreArman3D(cinema){
    $('#ticketSellAgreement').jqm({ajax: ctx_ + "/ticket/agreement/arman3d?cinemaId="+cinema});
    $('#ticketSellAgreement').jqmShow();
}
function sellTicketSeanceTicketon(session){
    $('#ticketSellAgreement').jqm({ajax: ctx_ + "/ticket/agreement/ticketon?type=2&sessionId="+session});
    $('#ticketSellAgreement').jqmShow();
}
function sellTicketMovieTicketon(movie, date){
    $('#ticketSellAgreement').jqm({ajax: ctx_ + "/ticket/agreement/ticketon?type=3&movieId="+movie+"&date="+date});
    $('#ticketSellAgreement').jqmShow();
}
