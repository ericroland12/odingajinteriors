
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

      if($('.burger').hasClass('open')){
          $('.menu').slideDown(450,() => {
          $('.menu-list > li').fadeIn(350)
      })
      }else{
          $('.menu-list > li').fadeOut(100, () => {
              $('.menu').slideUp(200)
          })
      }


    })
<<<<<<< HEAD



=======
>>>>>>> 13a31b32667acef35a2ca550b96d721a0b6eabaa


  // const showText = () => {

<<<<<<< HEAD
    // setTimeout( () => {
      var list = $('.banner-text > li').length
      var count = 0
      // setInterval(() => {
=======
>>>>>>> 13a31b32667acef35a2ca550b96d721a0b6eabaa

  //     var list = $('.banner-text > li').length
  //     var count = 0
  //     setTimeout(() => {

  //       $('.banner-text > li:eq(' + count + ')').animate({
  //         opacity: '1',
  //         top: '40%'
  //     }, 600, 'linear', setTimeout(() => {
  //       $('.banner-text > li:eq(' + count + ')').animate({
  //         opacity : '0',
  //         top : '1%'
  //       }, 400, 'linear'
  //       )}, 6000)
  //       )
  //       console.log(count)

  //       count += 1
  //       if(count == list){
  //         count = 0
  //       }

  //     //  setInterval(showText, 7000)
        
       
<<<<<<< HEAD
      // }, 7000)

     
    // },800)
   
  }
  showText()
  
=======
  //     },7000)
   
  // }


  // showText()
>>>>>>> 13a31b32667acef35a2ca550b96d721a0b6eabaa



})



