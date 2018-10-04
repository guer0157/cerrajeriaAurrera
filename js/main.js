let mapsd=document.getElementById("mapImg");
var size = {
  width: window.innerWidth || document.body.clientWidth,
  height: window.innerHeight || document.body.clientHeight
}
mapsd.src=`https://maps.googleapis.com/maps/api/staticmap?center=18.922735%2c%20-99.210363&zoom=18&size=${size.width}x${size.height}&maptype=roadmap&markers=color:red%7Clabel:C%7C18.922735%2c%20-99.210363&key=AIzaSyA0owNrzFrFeVPpDJrl42xKgbs7rq2eIfU&signature=mgDUQaEMTSahgfwGWXANy_4cpQQ=`
https://maps.googleapis.com/maps/api/staticmap?center=18.922735%2c%20-99.210363&zoom=18&size=1249x214&maptype=roadmap&markers=color:red%7Clabel:C%7C18.922735%2c%20-99.210363&key=AIzaSyA0owNrzFrFeVPpDJrl42xKgbs7rq2eIfU&signature=mgDUQaEMTSahgfwGWXANy_4cpQQ=