
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
    // })

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

    // $('.bg-slide').css('filter', 'brightness(60%)')
    
    $('.bg-slide').vegas({
      slides: [
        
        { src:'spacejoy-9M66C_w_ToM-unsplash.jpg' },
      
        { src:'wallpapersden.com_interior-design-style-istanbul_1920x1080.jpg' },
    
        { src:'kam-idris-hYb7kbu4x7E-unsplash.jpg' }
        
          ],
          delay : 7000,
          loop : true,
          timer : false,
          autoplay : true,
          cover:true,
          align:'center',
          valign:'center',
          transition:'fade',
          transitionDuration: 1500,
          animationDuration:'auto'
         
        })
       

        $('.bg-slide').vegas(
          slides[0].css('filter', 'brightness(60%)')
        )

    // const arr = [text1, text2, text3]

  const showText = () => {

    setTimeout( () => {
      var list = $('.banner-text > li').length
      var count = 0
      setInterval(() => {

        $('.banner-text > li:eq(' + count + ')').animate({
          opacity: '1',
          top: '40%'
      }, 600, 'linear', setTimeout(() => {
        $('.banner-text > li:eq(' + count + ')').animate({
          opacity : '0',
          top : '1%'
        }, 400, 'linear'
        )}, 6000)
        )
        console.log(count)

        count += 1
        if(count == list){
          count = 0
        }
        
       
      }, 7000)


  //     $('#text1').animate({
  //       opacity: '1',
  //       top: '40%'
  //     }, 600, 'linear', setTimeout(() => {
  //     $('#text1').animate({
  //       opacity : '0',
  //       top : '1%'
  //     }, 400, 'linear', () => {
  //       $('#text2').animate({
  //         opacity : '1',
  //         top : '40%'
  //       }, 600, 'linear', setTimeout( () => {
  //         $('#text2').animate({
  //           opacity : '0',
  //           top : '1%'
  //         }, 400, 'linear', () => {
  //           $('#text3').animate({
  //             opacity : '1',
  //             top : '40%'
  //           }, 600, 'linear', setTimeout( () => {
  //             $('#text3').animate({
  //               opacity : '0',
  //               top : '1%'
  //             },400, 'linear')
  //           },6000))
  //         })
  //       },6000))
  //     })
  //     }, 6000))
     
    },800)
   
  }

  // showText()



})



