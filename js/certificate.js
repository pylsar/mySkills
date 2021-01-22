$(document).ready(function(){
    function slideTab(){
      $('#firstBtn').on('click', function(){
        clearSlideTab();
        $('.certificate__item-one').addClass('showContent');
        $(this).addClass('activeTab');
      });
    $('#secondBtn').on('click', function(){
        clearSlideTab();
        $('.certificate__item-two').addClass('showContent');
        $(this).addClass('activeTab');
      });
    $('#thirdBtn').on('click', function(){
        clearSlideTab();
        $('.certificate__item-three').addClass('showContent');
        $(this).addClass('activeTab');
      });
    };
    slideTab()
    function clearSlideTab(){
        $('.certificate__item').removeClass('showContent');
        $('.toggleBtn').removeClass('activeTab');
    }
  });