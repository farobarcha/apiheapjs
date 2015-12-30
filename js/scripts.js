function moreText(a,b){$(a).css({height:b})}function lessText(a){$(a).css({height:"auto"})}function runBitly(){bitlyLink=bitlyObj.parse(),console.log(bitlyLink),runLogMsg()}function runTumblr(){tumblrData=tumblrObj.parse("post_url"),console.log(tumblrData),runLogMsg()}function runImgur(){imgurData=imgurObj.parse("link"),console.log(imgurData),runLogMsg()}function runReddit(){redditData=redditObj.parse("url"),console.log(redditData),runLogMsg()}function runYoutube(){ytData=ytObj.parse(ytObj.RESPONSE,"vid_links"),console.log(ytData),runLogMsg()}function runWeather(){weatherData=weatherObj.parse("main"),console.log(weatherData),runLogMsg()}function runLogMsg(){alertify.logPosition("bottom right"),alertify.success("Done! Open your console for results or <a href='http://webmasters.stackexchange.com/a/77337' style='color:black !important;' target='_blank'>Click Here.</a>")}var bitlyObj=new apiheap("bitly","970855848be23cc9cbb6b577b61c7b9cb3804830"),bitlyLink;bitlyObj.bitly("https://google.ca");var tumblrObj=new apiheap("tumblr","AR53KZcOUK8PYzyebMamkQYeMxMJ3CJwGes6L5Fhbw49LBlUB1"),tumblrData;tumblrObj.tumblr("myexampleblog.tumblr.com",null,"limit=50");var imgurObj=new apiheap("imgur","376b70f973bcd41"),imgurData;imgurObj.imgur("cats","top/all");var redditObj=new apiheap("reddit"),redditData;redditObj.reddit("funny","new","t=week&limit=50");var ytObj=new apiheap("youtube","AIzaSyCE1D-pcjpBzXa0iL60A4SUMDCgNS2uqy4"),ytData=[];ytObj.youtube("search","snippet","q=cat videos");var weatherObj=new apiheap("openweathermap","691da96255af43dbecc7d1e83907f7fd"),weatherData;weatherObj.weather("toronto"),window.mobileAndTabletcheck=function(){var a=!1;return function(b){(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(b)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(b.substr(0,4)))&&(a=!0)}(navigator.userAgent||navigator.vendor||window.opera),a},window.mobileAndTabletcheck()&&$(".cardBtnRun").hide();