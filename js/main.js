$(document).ready(function(){
    if(window.scrollY > 600) {
        $('#tallot-title-c').addClass("slideDown");
    }
    if(window.scrollY > 700) {
        $('#tallot-title-c').addClass("slideDown");
        $('#tallot-tittle-d').addClass("slideLeft");
    }
    $(window).scroll(function(){
        // sticky navbar on scroll script
        if(this.scrollY > 20){
            console.log(this.scrollY);
            // $('.navbar').addClass("sticky");
            // $('.menu-btn').addClass("menu-btn-scroll");
            // $('#logo').attr("src", "./Recursos/LOGO-alpha.png");
        }else{
            // $('.navbar').removeClass("sticky");
            // $('.menu-btn').removeClass("menu-btn-scroll");
            // $('#logo').attr("src", "./Recursos/LOGO-alpha-2.png");
        }
        // scroll-up button show/hide script
        if(this.scrollY > 350){
            $('.cont-text-a').addClass("slideDown");
            $('.slideeffect').addClass("slideDown");
        }
        if(this.scrollY > 600){
            $('.card').addClass("slideDown");
            // $('.scroll-up-btn').removeClass("show");
        }
        if(this.scrollY > 1500){
            $('.content-cont').addClass("slideDown");
            // $('.scroll-up-btn').removeClass("show");
        }
    });

})
