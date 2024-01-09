const body = document.querySelector("body")
const title = document.getElementById("title")
const img = document.getElementById("img")
const desc = document.getElementById("desc")
function getParameter(parameter_name) {
          params = window.location.href.split("?")[1].split("&");
          for (i = 0; i < params.length; i++) {
                    e = params[i].split("=");
                    if (e[0] == parameter_name) {
                              return e[1];
                    }
          }
}
const rapidOptions = {
          method: 'GET',
          headers: {
                    'X-RapidAPI-Key': '2fda7ac381mshd085eb92480dad8p1c5030jsn9421027ef2ef',
                    'X-RapidAPI-Host': 'shein-Xi-Yin-data-service.p.rapidapi.com'
          }
}
async function getFeedProducts(id) {
          const url = `https://shein-xi-yin-data-service.p.rapidapi.com/product/get_detailed_recommended_goods?goods_id=${id}&cat_id=2561&country=SAR&language=AR&currency=SAR&page=1&size=20`;
          const p = await fetch(url, rapidOptions)
          return await p.json()
          
}
body.onload = async () => {
          // 24466328
          var feedProducts = await getFeedProducts(3943661);
          var feedProducts2 = await getFeedProducts(23861556);
          var feedProducts3 = await getFeedProducts(27739839);
          var feedProducts4 = await getFeedProducts(21796230)
          var feedProducts5 = await getFeedProducts(15541762)
          var feedProducts6 = await getFeedProducts(24466328)
          var pList = feedProducts.info.products;
          var pList2 = feedProducts2.info.products;
          var pList3 = feedProducts3.info.products;
          var pList4 = feedProducts4.info.products;
          var pList5 = feedProducts5.info.products;
          var pList6 = feedProducts6.info.products;
         
          for (var i = 0; i < 8; i++) {
                    document.getElementById("goodsContainer").innerHTML += `
                    <div class="container">
                    <div class="con">
                    <img width="200px" id="img"  src="${pList[i].goods_img}" alt=""> 
                    <h1 id="title">${pList[i].goods_name}</h1>
                    <p id="desc">${pList[i].salePrice.amountWithSymbol}</p>
                    <a id="href" href="goods_detail.html?goods_id=${pList[i].goods_id}">press</a>
                    <br>
                    <img width="200px" id="img"  src="${pList2[i].goods_img}" alt=""> 
                    <h1 id="title">${pList2[i].goods_name}</h1>
                    <p id="desc">${pList2[i].salePrice.amountWithSymbol}</p>
                    <a id="href" href="goods_detail.html?goods_id=${pList2[i].goods_id}">press</a>
                    <br>
                    <img width="200px" id="img"  src="${pList3[i].goods_img}" alt=""> 
                    <h1 id="title">${pList3[i].goods_name}</h1>
                    <p id="desc">${pList3[i].salePrice.amountWithSymbol}</p>
                    <a id="href" href="goods_detail.html?goods_id=${pList3[i].goods_id}">press</a>
                    <br>
                    <img width="200px" id="img"  src="${pList4[i].goods_img}" alt=""> 
                    <h1 id="title">${pList4[i].goods_name}</h1>
                    <p id="desc">${pList4[i].salePrice.amountWithSymbol}</p>
                    <a id="href" href="goods_detail.html?goods_id=${pList4[i].goods_id}">press</a>
                    <br>
                    <img width="200px" id="img"  src="${pList5[i].goods_img}" alt=""> 
                    <h1 id="title">${pList5[i].goods_name}</h1>
                    <p id="desc">${pList5[i].salePrice.amountWithSymbol}</p>
                    <a id="href" href="goods_detail.html?goods_id=${pList5[i].goods_id}">press</a>
                    
                    <br>
                    <img width="200px" id="img"  src="${pList6[i].goods_img}" alt=""> 
                    <h1 id="title">${pList6[i].goods_name}</h1>
                    <p id="desc">${pList6[i].salePrice.amountWithSymbol}</p>
                    <a id="href" href="goods_detail.html?goods_id=${pList6[i].goods_id}">press</a>
                    </div>
                    `
          }

}