const productDataBase = `https://kea-alt-del.dk/t7/api/products/?limit=100`;
fetch(productDataBase)
  .then((res) => res.json())
  .then(showProduct);

function showProduct(productData) {
  const gallery = document.querySelector(".product_grid");
  const template = document.getElementById("product_card_template").content;
  productData.forEach((product) => {
    const templateClone = template.cloneNode(true);

    templateClone.querySelector(".discount").textContent = product.discount;

    templateClone.querySelector("img").src = `https://kea-alt-del.dk/t7/images/webp/640/${product.id}.webp`;
    templateClone.querySelector("img").alt = product.productdisplayname;
    templateClone.querySelector(".subtle").textContent = product.brandname + product.articletype;
    templateClone.querySelector("h2").textContent = product.productdisplayname;
    templateClone.querySelector(".price").textContent = Math.floor(product.price - (product.price / 100) * product.discount);
    if (product.soldout > 0) {
      templateClone.querySelector(".small_product").classList.add("soldout");
    }
    gallery.appendChild(templateClone);
  });
}
