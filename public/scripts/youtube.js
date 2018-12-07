$('#submit').click(function(){

const search=$('#search').val()
const youTubeUrl=`https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=10&q=${search}&type=video&key=${key}`
    
$.ajax({
    url: youTubeUrl,
    success:function (data){
          console.log(data, youTubeUrl)
              video = data.items
    
          for (i = 0; i < video.length; i++){
              watchVideo="https://www.youtube.com/watch?v=" + video[i].id.videoId
              console.log(watchVideo)
              $("#video").attr("href", watchVideo)
              $(".card-img-top"+i).attr("src",video[i].snippet.thumbnails.high.url )
              console.log(video[i].snippet.thumbnails.default.url)
          $('.youtubeVid').slideDown(1000)
    
          }
      }
    })
    
    $('#search').keyup(function (e) {
      let key = e.which;
      if (key == 13) 
      {console.log("You pressed return/enter")
      $('#submit').click();
          return false;
      }
    })
    });