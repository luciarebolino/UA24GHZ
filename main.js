
$(document).ready(function(){
    var h = window.innerHeight
    var w = window.innerWidth
// browser
var isMobile = false;
if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(navigator.userAgent) 
    || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(navigator.userAgent.substr(0,4))) { 
    isMobile = true;
}
var condition = true
msieversion()
function msieversion() {
    if (/MSIE 10/i.test(navigator.userAgent)) {
        console.log('1')
            condition = false
            windows()
    }else if(/MSIE 9/i.test(navigator.userAgent) || /rv:11.0/i.test(navigator.userAgent)){
        console.log('2')
            condition = false
            windows()
    }else{
    }
    return false;
}function windows(){
    $('.whole').hide()
    $(".content_wrapper").attr('style', 'opacity:1 !important');
}
match_height()
function match_height(){
    console.log('her')
    $('#content_wrapper .right').css({'height': Math.max($('#content_wrapper .left').outerHeight(),$('#content_wrapper .right').outerHeight()) +'px'})
    $('#content_wrapper .left').css({'height': Math.max($('#content_wrapper .left').outerHeight(),$('#content_wrapper .right').outerHeight()) +'px'})
    $('#content_wrapper_kr .right').css({'height': Math.max($('#content_wrapper .left').outerHeight(),$('#content_wrapper .right').outerHeight()) +'px'})
    $('#content_wrapper_kr .left').css({'height': Math.max($('#content_wrapper .left').outerHeight(),$('#content_wrapper .right').outerHeight()) +'px'})
}


$('body').hover(function(){
console.log(';sldkfja;lkddddfj')
})

$('a').hover(function(){
console.log(';sldkfja;lkdfj')
// $('#contact_button_1').css({'text-decoration':'underline'})
})


var trans_array = [0,0]
var trans_array_pre = [0,0]
var orig_w = window.innerWidth
var orig_h = window.innerHeight
var timeout
var popup = false
var r_x
var r_y
var kr_pivot
var scroll_am = 0
var scrolltimeout
var timeout
var m_case = 2


// //scroll overlay over the video container
$(document).ready(function() {
    const overlay = $(".overlay-map");
  
    $(window).scroll(function() {
      const scrollY = $(this).scrollTop();
  
      if (scrollY > 0) {
        overlay.css("transform", `translateY(${scrollY}px)`);
      } else {
        overlay.css("transform", "translateY(0)");
      }
    });
  });



        $('.popup').hide()

if(isMobile){
            if(window.location.hash === '#kr_m'){
                $('body').addClass('kr_m')
                $('.lang_kr').hide()
                $('.lang_en').show()
            }
    $(".left>*").unwrap();
    $(".right>*").unwrap();
    // $(".info").insertAfter(".transborderlab");
    $("#content_wrapper .info").insertAfter("#content_wrapper .transborderlab");
    $("#content_wrapper_kr .info").insertAfter("#content_wrapper_kr .transborderlab");
    // $(".logo_wrap").insertAfter(".people");
    // $('.whole').css({'opacity':'0'})
    // $('.content_wrapper').css({'opacity':'1'})
    console.log('hey')
    $('.whole_title').html('\
                <span>\
                    Future&nbsp;\
                    School&nbsp;<br>\
                    Summer&nbsp;\
                    Studio\
                </span>\
                <span class="tag">(FSSS)</span>')
    $('.schedule').html('<span class="title_f title">Schedule</span><br><span class="b_f">June 29th, 2020 <br>- July 24th, 2020<br>DMZ Trip : July 6th- 8th, 2020<br></span>')
    $('.location').html('<span class="title_f title">Location</span><br><a href="https://www.insa1kote.com/map" id="location_button" target="_blank" class="b_f">7 Insadong-gil,Insa-dong,<br>Jongno-gu,Seoul</a><br></span>')

}
// if(!isMobile){
get_data()
function get_data(){
    if (window.location.hash === '#kr'){
        $('.whole').css({'transform':'rotateY(-90deg)'}) 
        $('#content_wrapper').hide()
        $('#content_wrapper_kr').show()

                $('.lang_kr').hide()
                $('.lang_en').show()
    }else{
    }
}
if(!isMobile){
    $('.side_1.wrap').each(function(){
        $(this).append($("#content_wrapper .content").clone());
        $('<div class="gradient"></div>').insertAfter($(this).find(".content"));
    })
    $('.side_2.wrap').each(function(){
        $(this).append('<div class="content"></div>');
        $('<div class="gradient"></div>').insertAfter($(this).find(".content"));
    })
    $('.side_3.wrap').each(function(){
        $(this).append($("#content_wrapper_kr .content").clone());
        $('<div class="gradient"></div>').insertAfter($(this).find(".content"));
    })

}else{

    if (window.location.hash === '#kr_m'){
        console.log('he')
            $("#content_wrapper_kr").show()
            $("#content_wrapper").hide()
        $('.side_1.wrap').each(function(){
            $(this).append($("#content_wrapper_kr .content").clone());
            $('<div class="gradient"></div>').insertAfter($(this).find(".content"));
        })
        $('.side_2.wrap').each(function(){
            $(this).append('<div class="content"></div>');
            $('<div class="gradient"></div>').insertAfter($(this).find(".content"));
        })
    $('.side_3.wrap').each(function(){
        $(this).append($("#content_wrapper .content").clone());
        $('<div class="gradient"></div>').insertAfter($(this).find(".content"));
    })

    }else{
    $('.side_1.wrap').each(function(){
        $(this).append($("#content_wrapper .content").clone());
        $('<div class="gradient"></div>').insertAfter($(this).find(".content"));
    })
    $('.side_2.wrap').each(function(){
        $(this).append('<div class="content"></div>');
        $('<div class="gradient"></div>').insertAfter($(this).find(".content"));
    })
    $('.side_3.wrap').each(function(){
        $(this).append($("#content_wrapper_kr .content").clone());
        $('<div class="gradient"></div>').insertAfter($(this).find(".content"));
    })


    }

}

// inits


// }
$( window ).resize(function() {
    console.log('hldsfj')
    console.log('resi')
    orig_w = window.innerWidth
    orig_h = window.innerHeight
    console.log(orig_w/2)
    start((orig_w/2),(orig_h/2))
    if(orig_w> orig_h){
        w = orig_w
        h = orig_w
    }else{
        w = orig_w
        h = orig_h
    }
});






$(document.body).on('touchmove', mobile_scroll);
function mobile_scroll(){
      $('.whole .side_1 .content').css({'margin-top':-1*this.scrollY+'px'})
      $('.whole .side_3 .content').css({'margin-top':-1*this.scrollY+'px'})
    if(orig_w> orig_h){
        w = orig_w
        h = orig_w
    }else{
        w = orig_w
        h = orig_h
    }
}
window.addEventListener("scroll", function(event) {
      $('.whole .side_1 .content').css({'margin-top':-1*this.scrollY+'px'})
      $('.whole .side_3 .content').css({'margin-top':-1*this.scrollY+'px'})
      $('.whole .side_1 .content .maintitle').css({'margin-top':this.scrollY+'px'})
      // $('.whole .side_1.wrap.wrap_1 .content .maintitle').css({'margin-top':'0px'})

      $('.whole .side_3 .content .maintitle').css({'margin-top':this.scrollY+'px'})
      $('.whole .side_1.wrap.wrap_1 .content .maintitle').css({'margin-top':'0px'})
      $('.whole .side_3.wrap.wrap_1 .content .maintitle').css({'margin-top':'0px'})

    if(orig_w> orig_h){
        w = orig_w
        h = orig_w
    }else{
        w = orig_w
        h = orig_h
    }
}, false);
var oldx = 0,
    oldy = 0,
    direction_x,
    direction_y,
    downed = false
var	oldx_pre = 0,
    oldy_pre = 0
var clientX,
    clientY
if (window.location.hash === '#kr_m'){
src = document.getElementById('content_wrapper_kr')
    }else{
src = document.getElementById('content_wrapper')
    }
src.addEventListener('touchstart', function(e) {
    h = window.innerHeight
      clientX = e.touches[0].clientX;
      clientY = e.touches[0].clientY;
      start(clientX, clientY)
}, false);
src.addEventListener('touchmove', function(e) {
      clientX = e.changedTouches[0].clientX;
      clientY = e.changedTouches[0].clientY;
      move(clientX, clientY)
}, false);
src.addEventListener('touchend', function(e) {
      end(clientX, clientY)
    if(isMobile){
        clearTimeout(timeout)
        timeout = setTimeout(function(){
            $('.content_wrapper').css({'opacity':'1'})
            $('.whole').css({'opacity':'0'})
        },1000)
    }
}, false);

$( "#content_wrapper" ).mousedown(function(e) {
    if(condition){
        start(e.pageX, e.pageY)
    }
})
$( "#content_wrapper" ).mousemove(function(e) {
    if(condition){
        move(e.pageX, e.pageY)
    }
})
$( "#content_wrapper" ).mouseup(function(e) {
    if(condition){
        end(e.pageX, e.pageY)
    }
})
$( "#content_wrapper_kr" ).mousedown(function(e) {
    if(condition){
        start(e.pageX, e.pageY)
    }
})
$( "#content_wrapper_kr" ).mousemove(function(e) {
    if(condition){
        move(e.pageX, e.pageY)
    }
})
$( "#content_wrapper_kr" ).mouseup(function(e) {
    if(condition){
        end(e.pageX, e.pageY)
    }
})
var timeout_move;
var imply_ani = false
if(!isMobile){

    







    
    // IMPLY
    document.onmousemove = function(e){
          if(!downed){
              clearTimeout(timeout_move);
              if(imply_ani){
                $('.whole').removeClass('animate_slow')
                $('.whole').addClass('animate')
                trans_array[0] = 0
                trans_array[1] = 0
                  imply_ani = false
                $('.whole').css({'transform':'rotateX(0deg) rotateY(0deg) translateZ(0px)'})
              }
                $('.gradient').css({'opacity':'0'})

              timeout_move = setTimeout(function(){
                  if(!downed){
                      imply_ani = true
                      imply(e.pageX, e.pageY)
                  }
                  }, 15000000000000);
            }
    }
}
function start(pos_x,pos_y){
    if(orig_w> orig_h){
        w = orig_w
        h = orig_w
    }else{
        w = orig_w
        h = orig_h
    }
      if(imply_ani){
        $('.whole').removeClass('animate_slow')
        $('.whole').addClass('animate')
        trans_array[0] = 0
        trans_array[1] = 0
          imply_ani = false
      }

        $('.whole').removeClass('animate')
        $('.whole').removeClass('animate_lang')
        $('.whole').removeClass('animate_slow')
        $('.gradient').removeClass('animate')
        $('.gradient').removeClass('animate_slow')
        $('.overlay_wrapper').css({'opacity':0})
            downed = true;
            oldx = parseInt(pos_x);
            oldy = parseInt(pos_y);
            oldx_pre = parseInt(pos_x)
            oldy_pre = parseInt(pos_y)
            r_x = parseInt(pos_x)
            r_y = parseInt(pos_y)
        if(!isMobile){
            kr_pivot = -1*r_y
            $('.wrap_1').css({'width':r_x + 'px'})
            $('.wrap_1').css({'height':r_y + 'px'})
            $('.wrap_2').css({'width':w - r_x + 'px'})
            $('.wrap_2').css({'height':r_y + 'px'})
            $('.wrap_2').css({'left':r_x + 'px'})
            $('.wrap_3').css({'width':r_x + 'px'})
            $('.wrap_3').css({'height':h - r_y + 'px'})
            $('.wrap_3').css({'top':r_y + 'px'})
            $('.wrap_4').css({'width':w - r_x + 'px'})
            $('.wrap_4').css({'height':h - r_y + 'px'})
            $('.wrap_4').css({'left':r_x + 'px'})
            $('.wrap_4').css({'top':r_y + 'px'})


            $('.side_1.wrap_1.extra').css({'width':r_x/2 + 'px'})
            $('.side_1.wrap_1.extra').css({'transform':'rotateX( 0deg)  rotateY( 0deg) translateZ('+ (h - r_y) + 'px)'})
            $('.side_1.wrap_1.extra').css({'height':(r_y/2) + 'px'})

            $('.side_1.wrap_2').css({'transform':'rotateX( 0deg)  rotateY( 0deg) translateZ('+ (h - r_y) + 'px)'})
            $('.side_1.wrap_3').css({'transform':'rotateX( 0deg)  rotateY( 0deg) translateZ('+ -1*r_y + 'px)'})


            $('.side_2.wrap_1.extra').css({'width':r_x/2 + 'px'})
            $('.side_2.wrap_1.extra').css({'top':-1*((h - r_y))+(r_y/2) + 'px'})
            $('.side_2.wrap_1.extra').css({'height':h - r_y + 'px'})
            $('.side_2.wrap_1.extra').css({'transform':'rotateX( 90deg)  rotateY( 0deg) translateY('+ (h - r_y) + 'px)'})

            $('.side_2.wrap_2').css({'transform':'rotateX( 90deg)  rotateY( 0deg) translateZ('+ h-r_y + 'px)'})
            $('.side_2.wrap_3').css({'transform':'rotateX( 90deg)  rotateY( 0deg) translateZ('+ r_y + 'px)'})
            // 

            $('.side_3.wrap_1').css({'transform':'rotateX( 0deg)  rotateY( 90deg) translateZ('+  (r_y) + 'px)'})
            $('.side_3.wrap_2').css({'transform':'rotateX( 0deg)  rotateY( 90deg) translateZ('+ (-1*h + r_y +r_x) + 'px)'})
            $('.side_3.wrap_3').css({'transform':'rotateX( 0deg)  rotateY( 90deg) translateZ('+  ((-1*h + r_y +r_x)-r_x) + 'px)'})
            $('.side_3.wrap_4').css({'transform':'rotateX( 0deg)  rotateY( 90deg) translateZ('+  ((r_y +r_x)-r_x) + 'px)'})
            $('.side_3.wrap_1').css({'width':(h - r_y) + 'px'})
            $('.side_3.wrap_1.extra').css({'width':(h - r_y) + 'px'})
            $('.side_3.wrap_1.extra').css({'height':(r_y/2) + 'px'})
            $('.side_3.wrap_1.extra').css({'transform':'rotateX( 0deg)  rotateY( 90deg) translateZ('+((r_y)-h + r_x/2) + 'px)'})
            $('.side_3.wrap_2').css({'width':( r_y) + 'px'})
            $('.side_3.wrap_2').css({'left':(h - r_y) + 'px'})
            $('.side_3.wrap_3').css({'width':(h - r_y) + 'px'})
            $('.side_3.wrap_4').css({'left':(h - r_y) + 'px'})
            $('.side_3.wrap_4').css({'width':( r_y) + 'px'})





            $('.wrap_2 .content').css({'transform':'translateX('+(-1*r_x) + 'px)'})
            $('.wrap_3 .content').css({'transform':'translateY('+(-1*r_y) + 'px)'}) 
            $('.wrap_4 .content').css({'transform':'translateX('+(-1*r_x) + 'px) translateY('+(-1*r_y) + 'px)'})

            $('.side_3.wrap_2 .content').css({'transform':'translateX('+(-1*(h - r_y)) + 'px)'})
            $('.side_3.wrap_4 .content').css({'transform':'translateX('+(-1*(h - r_y)) + 'px) translateY('+(-1*r_y) + 'px)'})




            $('.side_2.wrap_1 .content').css({'transform':'translateX('+ -1*(w - r_x) + 'px)'})
            $('.side_2.wrap_1.extra .content').css({'transform':'translateY('+ -1*r_y + 'px)'})
            $('.side_2.wrap_2 .content').css({'transform':'translateX(0px)'})
            $('.side_2.wrap_4 .content').css({'transform':'translateY('+(-1*r_y) + 'px)'})
            $('.side_2.wrap_3 .content').css({'transform':'translateY('+(-1*r_y) + 'px) scaleX(-1)'}) 
            if(window.location.hash === '#kr'){
                $('.whole').css({'transform':'rotateX(0deg) rotateY(-90deg) translateZ('+-1*(w/2-r_y)+'px)'})
            }
        }else{
            console.log('---------------------')
                  $('.whole .side_1.wrap.wrap_1.extra .content .maintitle').css({'margin-top':this.scrollY+'px'})
            $('.side_1.wrap_1').css({'width':r_x + 'px'})
            $('.side_1.wrap_1').css({'height':r_y/2 + 'px'})
            $('.side_1.wrap_1').css({'top':r_y/2 + 'px'})
            $('.side_1.wrap_1 .content').css({'transform':'translateY('+(-1*r_y/2) + 'px)'})
            $('.side_1.wrap_1.extra .content').css({'transform':'translateY(0px)'})
            $('.side_1.wrap_2').css({'width':w - r_x + 'px'})
            $('.side_1.wrap_2').css({'height':r_y + 'px'})
            $('.side_1.wrap_2').css({'left':r_x + 'px'})
            $('.side_1.wrap_2').css({'transform':'rotateX( 0deg) rotateY( 0deg) translateZ(50vw)'})
            $('.side_1.wrap_2 .content').css({'transform':'translateX('+(-1*r_x) + 'px)'})

            $('.side_1.wrap_3').css({'transform':'rotateX( 0deg) rotateY( 0deg) translateZ('+(-1*r_y)+'px)'})
            $('.side_1.wrap_3').css({'width':r_x + 'px'})
            $('.side_1.wrap_3').css({'height':h - r_y + 'px'})
            $('.side_1.wrap_3').css({'top':r_y + 'px'})
            $('.side_1.wrap_3 .content').css({'transform':'translateY('+(-1*r_y) + 'px)'}) 

            $('.side_1.wrap_4').css({'width':w - r_x + 'px'})
            $('.side_1.wrap_4').css({'height':h - r_y + 'px'})
            $('.side_1.wrap_4').css({'left':r_x + 'px'})
            $('.side_1.wrap_4').css({'top':r_y + 'px'})
            $('.side_1.wrap_4 .content').css({'transform':'translateX('+(-1*r_x) + 'px) translateY('+(-1*r_y) + 'px)'})

            $('.side_2.wrap_1').css({'height':r_y + 'px'})
            $('.side_2.wrap_1').css({'width':r_x + 'px'})
            
            $('.side_2.wrap_2').css({'height':r_y + 'px'})
            $('.side_2.wrap_2').css({'transform':'rotateX(90deg) rotateY(0deg) translateZ('+(r_y-h) + 'px) rotateY( 180deg) translateX(-100%)'})
            $('.side_2.wrap_2').css({'width':w - r_x + 'px'})
            $('.side_2.wrap_2').css({'left':r_x + 'px'})

            $('.side_2.wrap_3').css({'height':h - r_y + 'px'})
            $('.side_2.wrap_3').css({'top':r_y + 'px'})
            $('.side_2.wrap_3').css({'transform':'rotateX(90deg) rotateY(0deg) translateZ('+(r_y) + 'px)'})
            $('.side_2.wrap_3').css({'width':r_x + 'px'})

            $('.side_2.wrap_4').css({'height':h - r_y + 'px'})
            $('.side_2.wrap_4').css({'top':r_y + 'px'})
            $('.side_2.wrap_4').css({'width':w - r_x + 'px'})
            $('.side_2.wrap_4').css({'left':r_x + 'px'})


            $('.side_2.wrap_1 .content').css({'transform':'translateX('+(-1*(w - r_x)) + 'px)'})
            $('.side_2.wrap_2 .content').css({'transform':'translateX(0px)'})
            $('.side_2.wrap_4 .content').css({'transform':'translateY('+(-1*r_y) + 'px)'})
            $('.side_2.wrap_3 .content').css({'transform':'translateY('+(-1*r_y) + 'px)  scaleX(-1)'}) 



            $('.side_3.wrap_1').css({'height':r_y + 'px'})
            
            $('.side_3.wrap_2').css({'height':r_y/2 + 'px'})
            $('.side_3.wrap_2').css({'top':r_y/2 + 'px'})
            $('.side_3.wrap_2.extra').css({'top':'0px'})
            $('.side_3.wrap_2').css({'width':r_y + 'px'})
            $('.side_3.wrap_2.extra').css({'width':r_y/2 + 'px'})
            $('.side_3.wrap_2.extra').css({'transform':'rotateX( 0deg)  rotateY( 90deg) translateZ('+ (-1*(w/2 -r_x)) + 'px)'})

            $('.side_3.wrap_3').css({'height':h - r_y + 'px'})
            $('.side_3.wrap_3').css({'top':r_y + 'px'})
            $('.side_3.wrap_3 .content').css({'transform':'translateY('+(-1*r_y) + 'px)'})

            $('.side_3.wrap_4').css({'height':h - r_y + 'px'})
            $('.side_3.wrap_4').css({'width':r_y + 'px'})
            $('.side_3.wrap_4').css({'top':r_y + 'px'})
            $('.side_3.wrap_4 .content').css({'transform':'translateY('+(-1*r_y) + 'px)'})

            $('.side_3.wrap_1').css({'transform':'rotateX( 0deg)  rotateY( 90deg) translateZ('+ (-1*(w/2 -r_x)) + 'px)'})
            $('.side_3.wrap_4').css({'transform':'rotateX( 0deg)  rotateY( 90deg) translateZ('+ (-1*(w/2 -r_x)) + 'px)'})
            $('.side_1.wrap_1.extra').css({'top': '0'})
            $('.side_1.wrap_1.extra').css({'transform': 'rotateX( 0deg) rotateY( 0deg) translateZ('+-1*r_y/2+'px)'})
            $('.side_1.wrap_1.extra').css({'height': r_y/2})
            $('.side_2.wrap_1.extra').css({'transform': 'rotateX(90deg) rotateY( 180deg) translateZ('+r_y/2+') translateX(100%)'})
        }
}
function end(pos_x,pos_y){
    if(isMobile){
        $('.lang_wrap').fadeIn(300)
    }
                $('.whole').addClass('animate')
                $('.gradient').addClass('animate')
                  clearTimeout(timeout);
                timeout = setTimeout(function(){
                    $('.whole').removeClass('animate')
                    $('.whole').removeClass('animate_slow')
                    $('.overlay_wrapper').css({'opacity':1})
                },1000)
            downed = false
        if (window.location.hash === '#kr'){
                 trans_array_pre = [0,-90]
                $('.whole').css({'transform':'rotateX(0deg) rotateY(-90deg) translateZ('+(-1*(w/2+kr_pivot))+'px)'})
            }else{
                 trans_array_pre = [0,0]
                $('.whole').css({'transform':'rotateX(0deg) rotateY(0deg) translateZ(0px)'})
            }
                $('.gradient').css({'opacity':0})
                $('.side_1.wrap_2').show()
                $('.side_1.wrap_3').show()
                $('.side_1.wrap_4').show()
}

function move(pos_x,pos_y){

        if(!downed){
            r_x = pos_x
            r_y = pos_y
        }
        if((downed && ((Math.abs(pos_x - oldx)>100) || (Math.abs(pos_y - oldy)>100)) && !isMobile) || (downed && (Math.abs(pos_x - oldx)>50) && (Math.abs(pos_y - oldy)<30) && isMobile)){
        popup = false
        $('.people_hover').removeClass('people_hover')
        $('.popup').hide()

            if(isMobile){
                $('.lang_wrap').fadeOut(300)
            }
            
            if (pos_x < oldx) { direction_x = 'left' } else { direction_x = 'right' }
            if (pos_y < oldy) { direction_y = 'down' } else { direction_y = 'up' }

                $('.whole').addClass('animate')
                $('.gradient').addClass('animate')
                $('.gradient').css({'opacity':0})
                    if((direction_x === "right" && direction_y ===  "down")||(direction_x === "right" && isMobile)){
                        console.log('1')
                        if(isMobile){
                            $('.whole').css({'opacity':'1'})
                            $('.content_wrapper').css({'opacity':'0'})
                        }
                        trans_array[0] = -90
                        trans_array[1] = -180
                        if(isMobile){
                            $('.whole').css({'transform':'rotateX('+(-1*trans_array[0])+'deg) rotateY('+(-1*trans_array[1])+'deg) scale(1) translateZ('+-1*(h/2-r_y)+'px)'})
                        }else{
                            $('.whole').css({'transform':'rotateX('+trans_array[0]+'deg) rotateY('+trans_array[1]+'deg) scale(1) translateZ('+-1*(w/2-r_y)+'px)'})
                        }
                    }
                    if((direction_x ===  "left" && direction_y ===  "up")||(direction_x ===  "left" && isMobile)){
                        console.log('2')
                        if(isMobile){
                            $('.whole').css({'opacity':'1'})
                            $('.content_wrapper').css({'opacity':'0'})
                        }
                        trans_array[0] = -90
                        trans_array[1] = 180
                        if(isMobile){
                            $('.whole').css({'transform':'rotateX('+trans_array[0]+'deg) rotateY('+trans_array[1]+'deg) scale(1) translateZ('+-1*(h/2-r_y)+'px)'})
                        }else{
                            $('.whole').css({'transform':'rotateX('+trans_array[0]+'deg) rotateY('+trans_array[1]+'deg) scale(1) translateZ('+-1*(w/2-r_y)+'px)'})
                        }
                    }
                    if((direction_x ===  "left" && direction_y ===  "down" && !isMobile)){
                        console.log('3')
                        trans_array[0] = -90
                        trans_array[1] = -180
                        $('.whole').css({'transform':'rotateX('+trans_array[0]+'deg) rotateY('+trans_array[1]+'deg) scale(1) translateZ('+-1*(w/2-r_y)+'px)'})
                    }
                    if((direction_x ===  "right" && direction_y ===  "up" && !isMobile)){
                        console.log('4')
                        trans_array[0] = -90
                        trans_array[1] = 180
                        $('.whole').css({'transform':'rotateX('+trans_array[0]+'deg) rotateY('+trans_array[1]+'deg) scale(1) translateZ('+-1*(w/2-r_y)+'px)'})
                    }
        }else if(downed && ((Math.abs(pos_x - oldx)<100) || (Math.abs(pos_y - oldy)<100)) && !isMobile){
        popup = false
        $('.people_hover').removeClass('people_hover')
        $('.popup').hide()
        $('.gradient').css({'opacity':'0.8'})
                $('.whole').removeClass('animate')
                $('.gradient').removeClass('animate')
                $('.whole').removeClass('animate_slow')
                $('.gradient').removeClass('animate_slow')
                if (pos_x < oldx_pre) { direction_x_pre = 'left' } else { direction_x_pre = 'right' }
                if (pos_y < oldy_pre) { direction_y_pre = 'down' } else { direction_y_pre = 'up' }
                oldx_pre = pos_x
                oldy_pre = pos_y
                var scale_val = 1-(Math.abs(pos_y - oldy)+Math.abs(pos_x - oldx))/1000
                    if(direction_x_pre === "right" && direction_y_pre ===  "down"){
                        console.log('1')
                        trans_array_pre[0] = trans_array_pre[0]-0.5 
                        trans_array_pre[1] = trans_array_pre[1]-1
                        $('.whole').css({'transform':'rotateX('+trans_array_pre[0]+'deg) rotateY('+trans_array_pre[1]+'deg) scale3d('+scale_val+', '+scale_val+', '+scale_val+') translateZ('+-1*(w/2-r_y)+'px)'})
                    }
                    if(direction_x_pre ===  "left" && direction_y_pre ===  "up"){
                        console.log('2')
                        trans_array_pre[0] = trans_array_pre[0]+0.5 
                        trans_array_pre[1] = trans_array_pre[1]-1
                        $('.whole').css({'transform':'rotateX('+trans_array_pre[0]+'deg) rotateY('+trans_array_pre[1]+'deg) scale3d('+scale_val+', '+scale_val+', '+scale_val+') translateZ('+-1*(w/2-r_y)+'px)'})
                    }
                    if(direction_x_pre ===  "left" && direction_y_pre ===  "down"){
                        // $('.side_1.wrap_2').css({'transform':'rotateX( 0deg)  rotateY( 0deg) translateZ('+ r_x + 'px)'})
                        // $('.side_1.wrap_3').css({'transform':'rotateX( 0deg)  rotateY( 0deg) translateZ('+ -1*(w - r_x) + 'px)'})
                        console.log('3')
                        trans_array_pre[0] = trans_array_pre[0]-0.5 
                        trans_array_pre[1] = trans_array_pre[1]-1
                        $('.whole').css({'transform':'rotateX('+trans_array_pre[0]+'deg) rotateY('+trans_array_pre[1]+'deg) scale3d('+scale_val+', '+scale_val+', '+scale_val+') translateZ('+-1*(w/2-r_y)+'px)'})
                    }
                    if(direction_x_pre ===  "right" && direction_y_pre ===  "up"){
                        // $('.side_1.wrap_2').css({'transform':'rotateX( 0deg)  rotateY( 0deg) translateZ('+ r_x + 'px)'})
                        // $('.side_1.wrap_3').css({'transform':'rotateX( 0deg)  rotateY( 0deg) translateZ('+ -1*(w - r_x) + 'px)'})
                        console.log('4')
                        trans_array_pre[0] = trans_array_pre[0]+0.5 
                        trans_array_pre[1] = trans_array_pre[1]-1
                        $('.whole').css({'transform':'rotateX('+trans_array_pre[0]+'deg) rotateY('+trans_array_pre[1]+'deg) scale3d('+scale_val+', '+scale_val+', '+scale_val+') translateZ('+-1*(w/2-r_y)+'px)'})
                    }
        }	
}
function imply(pos_x,pos_y){
        popup = false
        $('.people_hover').removeClass('people_hover')
        $('.popup').hide()
            $('.wrap_1').css({'width':r_x + 'px'})
            $('.wrap_1').css({'height':r_y + 'px'})
            
            $('.wrap_2').css({'width':w - r_x + 'px'})
            $('.wrap_2').css({'height':r_y + 'px'})
            $('.wrap_2').css({'left':r_x + 'px'})
            $('.side_1.wrap_2 .content').css({'transform':'translateX('+(-1*r_x) + 'px)'})

            $('.wrap_3').css({'width':r_x + 'px'})
            $('.wrap_3').css({'height':h - r_y + 'px'})
            $('.wrap_3').css({'top':r_y + 'px'})
            $('.wrap_3 .content').css({'transform':'translateY('+(-1*r_y) + 'px)'}) 

            $('.wrap_4').css({'width':w - r_x + 'px'})
            $('.wrap_4').css({'height':h - r_y + 'px'})
            $('.wrap_4').css({'left':r_x + 'px'})
            $('.wrap_4').css({'top':r_y + 'px'})
            $('.side_1.wrap_4 .content').css({'transform':'translateX('+(-1*r_x) + 'px) translateY('+(-1*r_y) + 'px)'})
            $('.side_1.wrap_2').css({'transform':'rotateX( 0deg)  rotateY( 0deg) translateZ('+ (h - r_y) + 'px)'})
            $('.side_1.wrap_3').css({'transform':'rotateX( 0deg)  rotateY( 0deg) translateZ('+ -1*r_y + 'px)'})
            if(isMobile){
                $('.side_2.wrap_2').css({'transform':'rotateX( 90deg)  rotateY( 0deg) translateZ('+ -1*(h - r_y) + 'px)'})
                $('.side_2.wrap_3').css({'transform':'rotateX( 90deg)  rotateY( 0deg) translateZ('+ r_y + 'px)'})
            }else{
                $('.side_2.wrap_2').css({'transform':'rotateX( 90deg)  rotateY( 0deg) translateZ('+ h-r_y + 'px)'})
                $('.side_2.wrap_3').css({'transform':'rotateX( 90deg)  rotateY( 0deg) translateZ('+ r_y + 'px)'})
            }

            $('.side_3.wrap_1').css({'transform':'rotateX( 0deg)  rotateY( 90deg) translateZ('+  ((r_y +r_x)-r_x) + 'px)'})
            $('.side_3.wrap_2').css({'transform':'rotateX( 0deg)  rotateY( 90deg) translateZ('+ (-1*h + r_y +r_x) + 'px)'})
            $('.side_3.wrap_3').css({'transform':'rotateX( 0deg)  rotateY( 90deg) translateZ('+  ((-1*h + r_y +r_x)-r_x) + 'px)'})
            $('.side_3.wrap_4').css({'transform':'rotateX( 0deg)  rotateY( 90deg) translateZ('+  ((r_y +r_x)-r_x) + 'px)'})
            $('.side_3.wrap_1').css({'width':(h - r_y) + 'px'})
            $('.side_3.wrap_2').css({'width':( r_y) + 'px'})
            $('.side_3.wrap_2').css({'left':(h - r_y) + 'px'})
            $('.side_3.wrap_3').css({'width':(h - r_y) + 'px'})
            $('.side_3.wrap_4').css({'left':(h - r_y) + 'px'})
            $('.side_3.wrap_4').css({'width':( r_y) + 'px'})
            $('.side_3.wrap_2 .content').css({'transform':'translateX('+(-1*(h - r_y)) + 'px)'})
            $('.side_3.wrap_4 .content').css({'transform':'translateX('+(-1*(h - r_y)) + 'px) translateY('+(-1*r_y) + 'px)'})

            if (pos_x < orig_w/2) { direction_x = 'left' } else { direction_x = 'right' }
            $('.whole').removeClass('animate')
            $('.whole').addClass('animate_slow')
            $('.gradient').addClass('animate_slow')
            $('.gradient').css({'opacity':0.5})
                if(direction_x === "right"){
                    console.log('1')
                    if(isMobile){
                        $('.whole').css({'opacity':'1'})
                        $('.content_wrapper').css({'opacity':'0'})
                    }
                    trans_array[0] = -30
                    trans_array[1] = -60
                    if(isMobile){
                        $('.whole').css({'transform':'rotateX('+trans_array[0]+'deg) rotateY('+trans_array[1]+'deg) scale3d(0.7,0.7,0.7) translateZ('+-1*(h/2-r_y)+'px)'})
                    }else{
                        $('.whole').css({'transform':'rotateX('+trans_array[0]+'deg) rotateY('+trans_array[1]+'deg) scale3d(0.7,0.7,0.7) translateZ('+-1*(w/2-r_y)+'px)'})
                    }
                }
                if(direction_x ===  "left"){
                    console.log('2')
                    if(isMobile){
                        $('.whole').css({'opacity':'1'})
                        $('.content_wrapper').css({'opacity':'0'})
                    }
                    trans_array[0] = 30
                    trans_array[1] = -60
                    if(isMobile){
                        $('.whole').css({'transform':'rotateX('+trans_array[0]+'deg) rotateY('+trans_array[1]+'deg) scale3d(0.7,0.7,0.7) translateZ('+-1*(h/2-r_y)+'px)'})
                    }else{
                        $('.whole').css({'transform':'rotateX('+trans_array[0]+'deg) rotateY('+trans_array[1]+'deg) scale3d(0.7,0.7,0.7) translateZ('+-1*(w/2-r_y)+'px)'})
                    }
                }
}







// // overlay-desktop
// $( "#content_wrapper" ).mousemove(function(e) {
//     if(!isMobile && !popup && !(window.location.hash === '#kr') && !downed){
//         $('.overlay').show()
//         clearTimeout(scrolltimeout)
//         scrolltimeout = setTimeout(function(){
//             $('.overlay').hide()
//         },2)
//         scroll_am = scroll_am + 1
//         $('.overlay_1').css({'background-image':'url("overlay/diagram_'+(scroll_am%28)+'.png")'})
//     }
// });
// // overlay-mobile
// $(window).scroll(function(){
//     if(isMobile){

//         $('.overlay').show()
//         clearTimeout(scrolltimeout)
//         scrolltimeout = setTimeout(function(){
//             $('.overlay').hide()
//         },2)
//         scroll_am = scroll_am + 1
//         $('.overlay_1').css({'background-image':'url("overlay/diagram_'+(scroll_am%28)+'.png")'})
//     }
// });

















//THIS PART OF THE CODE ALLOW TO FLIP THE WEBSITE BUT ITS CONNECTED WITH THE BUTTON LANGUAGE!!!
// language
$('.lang_wrap .lang_en').click(function(){
    if(!isMobile){
        $('#content_wrapper').show()
        $('#content_wrapper_kr').hide()
        location.replace(window.location.href.split('#')[0]+'#en');
        $('.whole').addClass('animate_lang')
            r_x = orig_w/2
            r_y = orig_h/2
            $('.wrap_1').css({'width':r_x + 'px'})
            $('.wrap_1').css({'height':r_y + 'px'})
            $('.wrap_2').css({'width':w - r_x + 'px'})
            $('.wrap_2').css({'height':r_y + 'px'})
            $('.wrap_2').css({'left':r_x + 'px'})
            $('.wrap_3').css({'width':r_x + 'px'})
            $('.wrap_3').css({'height':h - r_y + 'px'})
            $('.wrap_3').css({'top':r_y + 'px'})
            $('.wrap_4').css({'width':w - r_x + 'px'})
            $('.wrap_4').css({'height':h - r_y + 'px'})
            $('.wrap_4').css({'left':r_x + 'px'})
            $('.wrap_4').css({'top':r_y + 'px'})


            $('.side_1.wrap_1.extra').css({'width':r_x/2 + 'px'})
            $('.side_1.wrap_1.extra').css({'transform':'rotateX( 0deg)  rotateY( 0deg) translateZ('+ (h - r_y) + 'px)'})
            $('.side_1.wrap_1.extra').css({'height':(r_y/2) + 'px'})

            $('.side_1.wrap_2').css({'transform':'rotateX( 0deg)  rotateY( 0deg) translateZ('+ (h - r_y) + 'px)'})
            $('.side_1.wrap_3').css({'transform':'rotateX( 0deg)  rotateY( 0deg) translateZ('+ -1*r_y + 'px)'})


            $('.side_2.wrap_1.extra').css({'width':r_x/2 + 'px'})
            $('.side_2.wrap_1.extra').css({'top':-1*((h - r_y))+(r_y/2) + 'px'})
            $('.side_2.wrap_1.extra').css({'height':h - r_y + 'px'})
            $('.side_2.wrap_1.extra').css({'transform':'rotateX( 90deg)  rotateY( 0deg) translateY('+ (h - r_y) + 'px)'})

            $('.side_2.wrap_2').css({'transform':'rotateX( 90deg)  rotateY( 0deg) translateZ('+ h-r_y + 'px)'})
            $('.side_2.wrap_3').css({'transform':'rotateX( 90deg)  rotateY( 0deg) translateZ('+ r_y + 'px)'})
            // 

            $('.side_3.wrap_1').css({'transform':'rotateX( 0deg)  rotateY( 90deg) translateZ('+  (r_y) + 'px)'})
            $('.side_3.wrap_2').css({'transform':'rotateX( 0deg)  rotateY( 90deg) translateZ('+ (-1*h + r_y +r_x) + 'px)'})
            $('.side_3.wrap_3').css({'transform':'rotateX( 0deg)  rotateY( 90deg) translateZ('+  ((-1*h + r_y +r_x)-r_x) + 'px)'})
            $('.side_3.wrap_4').css({'transform':'rotateX( 0deg)  rotateY( 90deg) translateZ('+  ((r_y +r_x)-r_x) + 'px)'})
            $('.side_3.wrap_1').css({'width':(h - r_y) + 'px'})
            $('.side_3.wrap_1.extra').css({'width':(h - r_y) + 'px'})
            $('.side_3.wrap_1.extra').css({'height':(r_y/2) + 'px'})
            $('.side_3.wrap_1.extra').css({'transform':'rotateX( 0deg)  rotateY( 90deg) translateZ('+((r_y)-h + r_x/2) + 'px)'})
            $('.side_3.wrap_2').css({'width':( r_y) + 'px'})
            $('.side_3.wrap_2').css({'left':(h - r_y) + 'px'})
            $('.side_3.wrap_3').css({'width':(h - r_y) + 'px'})
            $('.side_3.wrap_4').css({'left':(h - r_y) + 'px'})
            $('.side_3.wrap_4').css({'width':( r_y) + 'px'})





            $('.wrap_2 .content').css({'transform':'translateX('+(-1*r_x) + 'px)'})
            $('.wrap_3 .content').css({'transform':'translateY('+(-1*r_y) + 'px)'}) 
            $('.wrap_4 .content').css({'transform':'translateX('+(-1*r_x) + 'px) translateY('+(-1*r_y) + 'px)'})

            $('.side_3.wrap_2 .content').css({'transform':'translateX('+(-1*(h - r_y)) + 'px)'})
            $('.side_3.wrap_4 .content').css({'transform':'translateX('+(-1*(h - r_y)) + 'px) translateY('+(-1*r_y) + 'px)'})




            $('.side_2.wrap_1 .content').css({'transform':'translateX('+ -1*(w - r_x) + 'px)'})
            $('.side_2.wrap_1.extra .content').css({'transform':'translateY('+ -1*r_y + 'px)'})
            $('.side_2.wrap_2 .content').css({'transform':'translateX(0px)'})
            $('.side_2.wrap_4 .content').css({'transform':'translateY('+(-1*r_y) + 'px)'})
            $('.side_2.wrap_3 .content').css({'transform':'translateY('+(-1*r_y) + 'px) scaleX(-1)'}) 

        $('.whole').css({'transform':'scale(0.7) rotateX(10deg) rotateY(-45deg)'})
        setTimeout(function(){
            r_y = orig_h/2
        $('.whole').css({'transform':'rotateY(0deg) translateZ('+-1*(w/2-r_y)+'px)'})
        }, 300)
        $('.lang_kr').show()
        $('.lang_en').hide()
    }else{
        location.replace(window.location.href.split('#')[0]+'#en_m');
        location.reload();
    }
})
$('.lang_wrap .lang_kr').click(function(){
    if(!isMobile){
        $('#content_wrapper').hide()
        $('#content_wrapper_kr').show()
        $('.lang_kr').hide()
        $('.lang_en').show()
        location.replace(window.location.href.split('#')[0]+'#kr');
        $('.whole').addClass('animate_lang')
            r_x = orig_w/2
            r_y = orig_h/2
            $('.wrap_1').css({'width':r_x + 'px'})
            $('.wrap_1').css({'height':r_y + 'px'})
            $('.wrap_2').css({'width':w - r_x + 'px'})
            $('.wrap_2').css({'height':r_y + 'px'})
            $('.wrap_2').css({'left':r_x + 'px'})
            $('.wrap_3').css({'width':r_x + 'px'})
            $('.wrap_3').css({'height':h - r_y + 'px'})
            $('.wrap_3').css({'top':r_y + 'px'})
            $('.wrap_4').css({'width':w - r_x + 'px'})
            $('.wrap_4').css({'height':h - r_y + 'px'})
            $('.wrap_4').css({'left':r_x + 'px'})
            $('.wrap_4').css({'top':r_y + 'px'})


            $('.side_1.wrap_1.extra').css({'width':r_x/2 + 'px'})
            $('.side_1.wrap_1.extra').css({'transform':'rotateX( 0deg)  rotateY( 0deg) translateZ('+ (h - r_y) + 'px)'})
            $('.side_1.wrap_1.extra').css({'height':(r_y/2) + 'px'})

            $('.side_1.wrap_2').css({'transform':'rotateX( 0deg)  rotateY( 0deg) translateZ('+ (h - r_y) + 'px)'})
            $('.side_1.wrap_3').css({'transform':'rotateX( 0deg)  rotateY( 0deg) translateZ('+ -1*r_y + 'px)'})


            $('.side_2.wrap_1.extra').css({'width':r_x/2 + 'px'})
            $('.side_2.wrap_1.extra').css({'top':-1*((h - r_y))+(r_y/2) + 'px'})
            $('.side_2.wrap_1.extra').css({'height':h - r_y + 'px'})
            $('.side_2.wrap_1.extra').css({'transform':'rotateX( 90deg)  rotateY( 0deg) translateY('+ (h - r_y) + 'px)'})

            $('.side_2.wrap_2').css({'transform':'rotateX( 90deg)  rotateY( 0deg) translateZ('+ h-r_y + 'px)'})
            $('.side_2.wrap_3').css({'transform':'rotateX( 90deg)  rotateY( 0deg) translateZ('+ r_y + 'px)'})
            // 

            $('.side_3.wrap_1').css({'transform':'rotateX( 0deg)  rotateY( 90deg) translateZ('+  (r_y) + 'px)'})
            $('.side_3.wrap_2').css({'transform':'rotateX( 0deg)  rotateY( 90deg) translateZ('+ (-1*h + r_y +r_x) + 'px)'})
            $('.side_3.wrap_3').css({'transform':'rotateX( 0deg)  rotateY( 90deg) translateZ('+  ((-1*h + r_y +r_x)-r_x) + 'px)'})
            $('.side_3.wrap_4').css({'transform':'rotateX( 0deg)  rotateY( 90deg) translateZ('+  ((r_y +r_x)-r_x) + 'px)'})
            $('.side_3.wrap_1').css({'width':(h - r_y) + 'px'})
            $('.side_3.wrap_1.extra').css({'width':(h - r_y) + 'px'})
            $('.side_3.wrap_1.extra').css({'height':(r_y/2) + 'px'})
            $('.side_3.wrap_1.extra').css({'transform':'rotateX( 0deg)  rotateY( 90deg) translateZ('+((r_y)-h + r_x/2) + 'px)'})
            $('.side_3.wrap_2').css({'width':( r_y) + 'px'})
            $('.side_3.wrap_2').css({'left':(h - r_y) + 'px'})
            $('.side_3.wrap_3').css({'width':(h - r_y) + 'px'})
            $('.side_3.wrap_4').css({'left':(h - r_y) + 'px'})
            $('.side_3.wrap_4').css({'width':( r_y) + 'px'})





            $('.wrap_2 .content').css({'transform':'translateX('+(-1*r_x) + 'px)'})
            $('.wrap_3 .content').css({'transform':'translateY('+(-1*r_y) + 'px)'}) 
            $('.wrap_4 .content').css({'transform':'translateX('+(-1*r_x) + 'px) translateY('+(-1*r_y) + 'px)'})

            $('.side_3.wrap_2 .content').css({'transform':'translateX('+(-1*(h - r_y)) + 'px)'})
            $('.side_3.wrap_4 .content').css({'transform':'translateX('+(-1*(h - r_y)) + 'px) translateY('+(-1*r_y) + 'px)'})




            $('.side_2.wrap_1 .content').css({'transform':'translateX('+ -1*(w - r_x) + 'px)'})
            $('.side_2.wrap_1.extra .content').css({'transform':'translateY('+ -1*r_y + 'px)'})
            $('.side_2.wrap_2 .content').css({'transform':'translateX(0px)'})
            $('.side_2.wrap_4 .content').css({'transform':'translateY('+(-1*r_y) + 'px)'})
            $('.side_2.wrap_3 .content').css({'transform':'translateY('+(-1*r_y) + 'px) scaleX(-1)'}) 

        $('.whole').css({'transform':'scale(0.7) rotateX(-10deg) rotateY(-45deg)'})
        setTimeout(function(){
            r_y = orig_h/2
            $('.whole').css({'transform':'rotateY(-90deg) translateZ('+-1*(w/2-r_y)+'px)'})
        }, 300)
        console.log('a;dfsljlaksdj')
            $('.content_wrapper_kr>.content').css({'transform':'translateX(0px)'})
             trans_array_pre = [0,-90]
    }else{
            location.replace(window.location.href.split('#')[0]+'#kr_m');
        location.reload();
    }
})
})





