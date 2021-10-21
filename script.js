document.body.innerHTML+=`


<section class="products container">
<div class="hp"><h3>Makeup Products</h3></div>
<div class="row">
</div>
</section>`;


async function getproductBybrand(){
    try{
    const data1=await fetch("http://makeup-api.herokuapp.com/api/v1/products.json?product_type=bronzer");
    const makeup=await data1.json();
    console.log(makeup);
    makeup.forEach((mab_product) => {
        document.querySelector(".row").innerHTML+=`
                            
                          
                                <div class="col-12 col-sm-6 col-md-6 col-lg-4 space ">
                                <div>
                                    <img class="image" src="${mab_product.image_link}" alt="${mab_product.name}">
                                </div>
                                <div class="details">
                                    <h3>${mab_product.brand}</h3>
                                    <p><span class="text">Product Name:</span> ${mab_product.name}</p>
                                    
                                    <p><span class="text">Price:</span> ${mab_product.price}</p>
                                    <p><span class="text">Product Type:</span> ${mab_product.product_type}</p>
                                    <p class="productLink"><span class="text">Product Link:</span> <a href="${mab_product.product_link}">${mab_product.product_link}<a></p>
                                 </div>
                                 <label class="dislabel"><span class="text">Description</span></label>
                                 <textarea class="description">
                                 
                                  ${mab_product.description}
                                 </textarea>
                                
                         </div>`
                         
    
    });
}
catch(err){
   console.log(err);
}
 }
 getproductBybrand()