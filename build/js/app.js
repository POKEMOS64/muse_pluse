

$(document).ready(function(){
    var glide = new Glide('#intro', {
        type: 'slider',
        perView: 1,
        focusAt: 'center',
        breakpoints: {
          800: {
            perView: 1
          },
          480: {
            perView: 1
          }
        }
      })
      
      glide.mount()
});


$(document).ready(function(){
    $('.modal').modal();
    $('.scrollspy').scrollSpy();
    $('.sidenav').sidenav();
    $('.tabs').tabs();
    $('.fixed-action-btn').floatingActionButton();
    $('.dropdown-trigger').dropdown();
  });

$(document).ready(function(){
   $('.click-link').on('click', function(){
     $(this).addClass('active');  
   });
   $('.search-click').on('click', function(){
       $('.search-nav').addClass('active');
   });
   $('.lang-click').on('click', function(){
    $('.lang').addClass('active');
});
   $('.close').on('click', function(){
        $('.search-nav,.search-click,.lang').removeClass('active');
         
   });
});