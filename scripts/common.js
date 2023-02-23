document.addEventListener('DOMContentLoaded', (event) => {
   const hoverItem =  document.querySelector('.js-messenge-item');

    document.querySelector('.js-open-modal').addEventListener('click', () => {
      document.querySelector('.popup-form').classList.add('open')
    })


  document.querySelector('.close-upload').addEventListener('click', () => {
    document.querySelector('.popup-form').classList.remove('open')
  })


   if(hoverItem !== null) {

     if(window.innerWidth > 1280) {
       hoverItem.addEventListener('mouseover', () => {
         document.querySelector('.main-block').classList.add('hover-item')
       })

       hoverItem.addEventListener('mouseleave', () => {
         document.querySelector('.main-block').classList.remove('hover-item')
       })
     } else {
       hoverItem.addEventListener('click', () => {
         if(document.querySelector('.main-block').classList.contains('hover-item')) {
           document.querySelector('.main-block').classList.remove('hover-item')
         } else {
           document.querySelector('.main-block').classList.add('hover-item')
         }
       })
     }
   }

  const src = document.querySelector('#ytplayer').getAttribute('data-src')
  function onYouTubeIframeAPIReady() {
    window.player = new YT.Player('ytplayer', {
      width: '100%',
      videoId: src,
      playerVars: {'playsinline': 1, 'showinfo': 0, 'enablejsapi': 1 }
    });
  }

  setTimeout(() => {
    onYouTubeIframeAPIReady()
  }, 500)
   document.querySelector('.js-play-video').addEventListener('click', () => {
     console.log(184848);
     document.querySelector('.js-play-video').classList.add('hide')
     window.player.playVideo()
   })
})
