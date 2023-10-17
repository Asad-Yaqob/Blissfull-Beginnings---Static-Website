
// active navbar 

let nav = document.querySelector(".navigation-wrap");
window.onscroll = function () {
    if(document.documentElement.scrollTop > 20){
        nav.classList.add("scroll-on");
    }else{
        nav.classList.remove("scroll-on");
    }
}

// hide nav
$(".nav-link").click(function(){
    $(".navbar-collapse").collapse("hide")
})





// counter design

document.addEventListener("DOMContentLoaded" , () => {
    function counter(id, start, end, duration ){
        let obj = document.getElementById(id),
        current = start,
        range = end - start,
        increment = end > start ? 1 : -1,
        step= Math.abs(Math.floor(duration / range)),
        timer = setInterval(()=>{
            current += increment,
            obj.textContent = current;
            if(current == end){
                clearInterval(timer);
            }
        }, step);
    }
    counter("count1", 0,2434,5656);
    counter("count2", 100,3434,7678);
    counter("count3", 435,1956,5876);
});

// gellery

$(document).ready(function () {

    $('.button').click(function () {

        $(this).addClass('active').siblings().removeClass('active');

        var filter = $(this).attr('data-filter')

        if (filter == 'all') {
            $('.image').show(400);
        } else {
            $('.image').not('.' + filter).hide(200);
            $('.image').filter('.' + filter).show(400);
        }

    });

    $('.box').magnificPopup({

        delegate: 'a',
        type: 'image',
        box: {
            enabled: true
        }

    });

});
