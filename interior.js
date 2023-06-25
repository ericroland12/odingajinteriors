
window.onscroll = () => {
    const sticky1 = document.getElementsByTagName('nav')[0].offsetTop
    // console.log(sticky1)
  if(window.scrollY > sticky1){
    document.getElementsByTagName('nav')[0].classList.add('floating-nav')
  }else if(window.scrollY == sticky1){
    document.getElementsByTagName('nav')[0].classList.remove('floating-nav')
  }
}
   



$(function(){
    // $(window).on('scroll', () => {
    //   const sticky = $('nav').offset().top
    //   if($(window).scrollY > sticky){
    //     $('nav').addClass('floating-nav')
    //   }else if($(window).scrollY == sticky){
    //     $('nav').removeClass('floating-nav')
    //   }
    // })`Q1  

    // $('.slide-text').css('filter', 'brightness(100%)')
  


    $('.burger-group').on('click', () => {

      $('#b1').toggleClass('open')
      $('#b2').toggleClass('open')
      $('#b3').toggleClass('open')

      if($('.burger').hasClass('open') || $('.burger-con').hasClass('open')){
          $('.menu').slideDown(450,() => {
          $('.menu-list > li').fadeIn(350)
          $('.burger-con').css('color', '#f2e8dc')
          $('#contact-slogan').css('color', '#f2e8dc')
      })
      }else{
          $('.menu-list > li').fadeOut(100, () => {
              $('.menu').slideUp(200)
              $('.burger-con').css('color', 'black')
              $('#contact-slogan').css('color', 'black')
             
          })
      }


    })

const formSubmit = () => {

  var saveData = []

  $('.enter').on('click', (e) => {
    e.preventDefault()
    if($('.name').val() == ''){
      $('#error1').html('This field is required')
    }else if($('.mail').val() == ""){
        $('#error2').html('This field is required')
    }else if($('.phone').val() == "" ){
      $('#error3').html('This field is required')
    }else if( $('.phone').val().length < 11 || $('.phone').val().length > 11){
         $('#error3').html('Phone number is invalid')
    }else{
        
      const clientData = {
        name: $('.name').val(),
        email: $('.mail').val(),
        phone: $('.phone').val(),
        subject: $('.sub').val(),
        message: $('.message').val()
      }

      saveData.push(clientData)
      console.log(clientData)
      $('.error-msg').hide()
      $('form')[0].reset()
      $('.feedback').html('Message sent successfully!')
    } 
  })
 
}
  


formSubmit()



})



