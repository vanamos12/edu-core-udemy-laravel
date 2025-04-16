import $ from 'jquery'

$('.toogle-password .eye-on').on('click', function(e){
    const divPassword = $(e.target).closest('.toogle-password')
    const field = divPassword.find('input');
    
    field.attr('type', 'text')

    divPassword.find('.input-group-text').toggleClass('d-none')
    
})   
    

$('.toogle-password .eye-off').on('click', function(e){
    const divPassword = $(e.target).closest('.toogle-password')
    const field = divPassword.find('input');

    field.attr('type', 'password');

    divPassword.find('.input-group-text').toggleClass('d-none')
})