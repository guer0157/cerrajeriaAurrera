let app={
    //init: function(){
        console.log("hello")
       let overlaydiv=document.createElement("div");
        overlaydiv.setAttribute("id","overlayers");
        let doc=document.querySelector("body");
        let oferta=document.createElement("div");
        oferta.setAttribute("id","oferta")
        let h1=document.createElement("h1");
        let h2=document.createElement("h2");
        let h12=document.createElement("h1");
        let img=document.createElement("img");
        img.setAttribute("id","ofert")
        img.src="../img/oferta-8.png"
        h1.textContent="Oferta!";
        h2.textContent="Por lanzamiento de nuestra pagina web.";
        h12.textContent="20% de descuento en servicios a domicilio!";
        oferta.appendChild(h1);
        oferta.appendChild(h2);
        oferta.appendChild(img);
         oferta.appendChild(h12);
        overlaydiv.appendChild(oferta)
        doc.appendChild(overlaydiv);
        setTimeout(function(){  
            console.log("something")
            console.log(doc),
            doc.removeChild(overlaydiv);
        },5000)
//}
}
// document.addEventListener('DOMContentLoaded', app.init);