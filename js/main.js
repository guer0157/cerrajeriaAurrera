let app={
    mapsd:document.getElementById("mapImg"),
    init: function(){
    let size = {
  width: window.innerWidth || document.body.clientWidth,
  height: window.innerHeight || document.body.clientHeight
};
    async function getMap(){
        let mapSource=`https://maps.googleapis.com/maps/api/staticmap?center=18.922735%2c%20-99.210363&zoom=18&size=${size.width}x${size.height}&maptype=roadmap&markers=color:red%7Clabel:C%7C18.922735%2c%20-99.210363&key=AIzaSyA0owNrzFrFeVPpDJrl42xKgbs7rq2eIfU&signature=mgDUQaEMTSahgfwGWXANy_4cpQQ=`;
console.log(mapSource);
    }
    await 
}
/*
https://maps.googleapis.com/maps/api/staticmap?center=18.922735%2c%20-99.210363&zoom=18&size=1249x214&maptype=roadmap&markers=color:red%7Clabel:C%7C18.922735%2c%20-99.210363&key=AIzaSyA0owNrzFrFeVPpDJrl42xKgbs7rq2eIfU&signature=mgDUQaEMTSahgfwGWXANy_4cpQQ=
*/
}
document.addEventListener('DOMContentLoaded', app.init)