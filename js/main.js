$(document).ready(function(){
  $('#loading').fadeOut()
  var heightNav = $('nav').outerHeight(true)
  // Skills Bars
  $('.sk-bar').each(function(){
    var data = $(this).data('sk-val')
    $(this).find('.bar').css('width', `0%`)
    $(this).find('.sk-count').text('0%')
    $(this).find('.sk-count').css('left', '0%')
  })

  // menu bar => nav in mob
  $('.menu-bar').click(function(){
    $('.mob-nav-list').toggleClass('show-list-menu')
    $(this).toggleClass('toggle-translatex-menu')
  })


  // TYping form typeit
  new TypeIt('h2.job-title span', {
       strings: ["Developer", "Designer"],
       speed: 100,
       deleteSpeed: 80,
       loop: true,
       breakLines: false,
       nextStringDelay: 2000,
       startDelay: 2000
  });

  // slider => to show previos's products image
  $('.slider').slick({
    // fade: true;
    autoplay: true
  })

  $('#projects .card').click(function(){
    $('.slidersectionbaba').css('transform', 'translateX(0)')
  })
  $('.close').click(function(){
    $('.slidersectionbaba').css('transform', 'translateX(100%)')
  })
  // steakhouse
  $('.card.one').click(function(){
    $('.slidersectionbaba slider').css('z-index', '1')
    $('.slider.steakhouse').css('z-index', '2')
  })
  // management system
  $('.card.two').click(function(){
    $('.slidersectionbaba slider').css('z-index', '1')
    $('.slider.management-system').css('z-index', '2')
  })
  // frosh
  $('.card.three').click(function(){
    $('.slidersectionbaba slider').css('z-index', '1')
    $('.slider.frosh').css('z-index', '2')
  })
  // radwaherbs
  $('.card.four').click(function(){
    $('.slidersectionbaba slider').css('z-index', '1')
    $('.slider.radwaherbs').css('z-index', '2')
  })

})



var skillsOffset = $('#skills').offset().top

// Scroll Down Button in home section
$('.scroll-down').click(function(){
  var scrollTop = $(window).scrollTop()
      heightHome = $('#home').outerHeight(true)
  $('html, body').animate({scrollTop: heightHome}, 700)
})

$(window).scroll(function(){
  var scrollTop = $(window).scrollTop()
      heightNav = $('nav').outerHeight(true)
      heightHome = $('#home').outerHeight(true)
      changeColorNav = heightHome - heightNav
  if(scrollTop >= changeColorNav ){
    $('nav').css({
      'background-color': '#fff',
      'border-bottom': '1px solid #ddd'
    })
    $('nav ul li a').css('color', '#2E2E34')
  }else{
    $('nav').css({
      'color': '#fff',
      'background-color': 'transparent',
      'border': 'none'
    })
    $('nav ul li a').css('color', '#fff')
  }

  if(scrollTop > skillsOffset - '100'){
    $('.sk-bar').each(function(){
      var data = $(this).data('sk-val')
      $(this).find('.bar').css('width', data + `%`)
      $(this).find('.sk-count').text(data + '%')
      $(this).find('.sk-count').css('left', data - '5' + '%')
    })
  }
})

// Random Icon in description section in about me
$('.random-icon i').each(function(){
  var windowWidth = $(window).width() - 20
      descriptionHeight = $('#about .description').height()
      x = Math.floor( (Math.random() * windowWidth) + 20 )
      y = Math.floor( (Math.random() * descriptionHeight) + 20 )
  // console.log('y: ' + y + ', ' + 'x: ' + x);
  // console.log(windowWidth);
  $(this).css({'top': y, 'left': x})
})


// CODE SOURCE: https://codepen.io/joxmar/pen/NqqMEg?editors=1010
// Cache selectors
var lastId,
topMenu = $("nav > ul"),
topMenuHeight = topMenu.outerHeight()+1,
// All list items
menuItems = topMenu.find("a"),
// Anchors corresponding to menu items
scrollItems = menuItems.map(function(){
  var item = $($(this).attr("href"));
   if (item.length) { return item; }
});

// Bind click handler to menu items
// so we can get a fancy scroll animation
menuItems.click(function(e){
 var href = $(this).attr("href"),
     offsetTop = href === "#" ? 0 : $(href).offset().top-topMenuHeight+1;
 $('html, body').stop().animate({
     scrollTop: offsetTop
 }, 850);
 e.preventDefault();
});

// Bind to scroll
$(window).scroll(function(){
  // Get container scroll position
  var fromTop = $(this).scrollTop()+topMenuHeight;

  // Get id of current scroll item
  var cur = scrollItems.map(function(){
    if ($(this).offset().top < fromTop)
      return this;
  });
  // Get the id of the current element
  cur = cur[cur.length-1];
  var id = cur && cur.length ? cur[0].id : "";

  if (lastId !== id) {
      lastId = id;
      // Set/remove active class
      menuItems
        .parent().removeClass("active")
        .end().filter(`[href="#${id}"]`).parent().addClass("active");
  }
});






















// Sending new Message from Contact Form
function _(id){ return document.getElementById(id); }
function submitForm(){
  _("mybtn").disabled = true;
  _("sending").style.display = 'block';

  var formdata = new FormData();
  formdata.append( "n", _("n").value );
  formdata.append( "p", _("p").value );
  formdata.append( "e", _("e").value );
  formdata.append( "m", _("m").value );
  var ajax = new XMLHttpRequest();
  ajax.open( "POST", "mail.php" );
  ajax.onreadystatechange = function() {
    if(ajax.readyState == 4 && ajax.status == 200) {
      if(ajax.responseText == "success"){
        _("sending").style.display = 'none';
        _("sent").sytle.display = 'block';
      } else {
        console.log(ajax.responseText)
        _("sending").style.display = 'none';
        _("sent").style.display = 'block';
        _("sent").innerHTML = ajax.responseText;
        _("mybtn").disabled = false;
      }
    }
  }
  ajax.send( formdata );
}