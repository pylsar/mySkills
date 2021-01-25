//табы
function tabs(){
    // таб верстка
    $('#makets').on('click', function(){
        clearTab();
        $(this).addClass('activeTab');
        $('.card').each(function () {
            if($(this).hasClass('makets')){
                $(this).show(); // показываем содержимое табов
                $('#allMakets').addClass('cardSubtitleIsActive');// показываем текст
            }else{
                $(this).hide();
            }
        });
    });
    // таб вью
    $('#vue').on('click', function(){
        clearTab();
        $(this).addClass('activeTab');
        $('.card').each(function () {
            if($(this).hasClass('vue')){
                $(this).show(); // показываем содержимое табов
                $('#allVue').addClass('cardSubtitleIsActive');// показываем текст
            }else{
                $(this).hide();
            }
        });
    });
    //таб разное
    $('#dif').on('click', function(){
        clearTab();
        $(this).addClass('activeTab');
        $('.card').each(function () {
            if($(this).hasClass('dif')){
                $(this).show(); // показываем содержимое табов
                $('#allDif').addClass('cardSubtitleIsActive');// показываем текст
            }else{
                $(this).hide();
            }
        });
    });
    //таб все ответы
    $('#all').on('click', function(){
        clearTab();
        $(this).addClass('activeTab');
        $('.card').show(); // показываем содержимое табов
        $('#allTitle').addClass('cardSubtitleIsActive'); // показываем текст
    });
}
tabs();
// сбрасываем все активные табы и текст
function clearTab(){
    $('.tab').removeClass('activeTab');
    $('.card__subtitle').removeClass('cardSubtitleIsActive');
}