$(document).ready(function () {
    var sliderControls = {
        next : ".next",
        prev : ".prev",
        state : {
            disabled : "disabled"
        }
    };

    var film_club_slider = $('#film-club-slider');
    var film_club_slider_nav = $('#film-club-slider-navigation');
    var upcoming_slider = $('#upcoming-slider');
    var upcoming_slider_nav = $('#upcoming-slider-navigation');
    var this_week_slider = $('#this-week-slider');
    var this_week_slider_nav = $('#this-week-slider-navigation');

    film_club_slider.lightSlider({
        autoWidth: true,
        pager: false,
        controls: false,
        verticalHeight: 356,
        slideMargin: 14,
        onSliderLoad: function() {
            film_club_slider.removeClass('cS-hidden');
        }
    });

    upcoming_slider.lightSlider({
        autoWidth: true,
        pager: false,
        controls: false,
        verticalHeight: 387,
        slideMargin: 26,
        onSliderLoad: function() {
            upcoming_slider.removeClass('cS-hidden');
        }
    });

    this_week_slider.lightSlider({
        item: 1,
        //autoWidth: true,
        pager: false,
        controls: false,
        verticalHeight: 311,
        slideMargin: 25,
        onSliderLoad: function() {
            this_week_slider.removeClass('cS-hidden');
        }
    });

    // Custom Navigation Events
    film_club_slider_nav.find(sliderControls.next).click(function(){
        film_club_slider.goToNextSlide();
    });
    film_club_slider_nav.find(sliderControls.prev).click(function(){
        film_club_slider.goToPrevSlide()
    });

    // Custom Navigation Events
    upcoming_slider_nav.find(sliderControls.next).click(function(){
        upcoming_slider.goToNextSlide();
    });
    upcoming_slider_nav.find(sliderControls.prev).click(function(){
        upcoming_slider.goToPrevSlide()
    });

    // Custom Navigation Events
    this_week_slider_nav.find(sliderControls.next).click(function(){
        this_week_slider.goToNextSlide();
    });
    this_week_slider_nav.find(sliderControls.prev).click(function(){
        this_week_slider.goToPrevSlide()
    });

    $("#city-select-index").on("selectmenuchange", function(){

        var list = document.getElementById("cinema-select");
        for (i_ in list.options.length) {
            list.options[i_] = null;
        }

        $("#city-hidden").val($(this).val());
        $("#city-form").submit();
    });

    $(".cinema-select-index").on("selectmenuchange", function(){
        $(".cinema-form-index").submit();
    });

    $("#poll_submit").click(function(){
        var poll_id=$("#poll_id").val();
        var answer_id=$("input[name='poll']:checked").attr("value");
        answer_id=answer_id.replace("opt",'');
        $.ajax({
            url: ctx_ + "/poll/" + poll_id + "/vote",
            contentType:"application/json; charset=utf-8",
            dataType:"json",
            beforeSend:function(x){
                if(x && x.overrideMimeType){x.overrideMimeType("application/j-son;charset=UTF-8");}
            },
            data:{
                answer:answer_id
            },
            success:function(data){
                var total_votes=0;
                $.each(data, function( key, value ) {
                    if (key == "stat") {
                        total_votes=total_votes+parseInt(value);
                    } else if (key == "answers") {
                        var results_html="<div id='poll-results'><p><strong>Результаты</strong></p><table border='0' cellpadding='4'>\n";
                        $.map(value, function( item ) {
                            var percent=Math.round((parseInt(item.stat)/parseInt(total_votes))*100);
                            results_html=results_html+"<tr><td><label>"+item.answer+"</label></td><td><strong>"+percent+"%</strong></td></tr>\n";
                        });
                        results_html=results_html+"</table><p><strong>Всего:</strong> "+total_votes+"</p></div>\n";
                        results_html=results_html+"<div><a href=\"" + ctx_ + "/poll/results\" class=\"detail_content_link\">Другие опросы</a></div>";
                        $(".poll-container").empty().append(results_html);
                    }
                });
            },
            error:function(XMLHttpRequest,textStatus,errorThrown){}
        });
    });
});

ddaccordion.init({headerclass:"mov_header",contentclass:"mov_detail",scrolltoheader:true,revealtype:"click",mouseoverdelay:200,collapseprev:false,defaultexpanded:[],onemustopen:false,animatedefault:false,persiststate:false,toggleclass:["mov","mov_scr"],togglehtml:false,animatespeed:"slow",oninit:function(expandedindices){},onopenclose:function(header,index,state,isuseractivated){}});

function showSchedule(movieId, day) {
    if (movieId > 0) {
        if ($("#detail_" + movieId + " div").is(":hidden")) {
            $.post(
                ctx_ + "/schedule_movie_index",
                {id: movieId, day: day},
                function (data) {
                    $("#seances_" + movieId).html(data);
                    $("#detail_" + movieId).show();
                }
            ).always(function() {
                $("#seances_" + movieId).trigger("update");
            });
            $("#timetable_sch_" + movieId).addClass('selected');
        } else {
            $("#detail_" + movieId).hide();
            $("#timetable_sch_" + movieId).removeClass('selected');
        }
    }
    return false;
}

function toggleMovieDetails(pos) {
    ddaccordion.toggleone('mov_header', pos - 2);
}
