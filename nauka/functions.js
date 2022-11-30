
function Basket() {
    this.products = [];
    this.sum = 0;
}

Basket.prototype.addProduct = function (name, price) {
    const product = {
        name: name,
        price: price,
    }
    this.products.push(product);
    this.sum += price;
}

Basket.prototype.showBasket = function () {
    for (const product of this.products) {
        console.log("Nazwa: " + product.name + " Cena: " + product.price)
    }
    console.log("-~=-~=-~=-~=-~")
    console.log("Sum: " + this.sum);
}

const aliceBasket = new Basket();
aliceBasket.addProduct("pomidor",10);
aliceBasket.addProduct("arbuz",40);
aliceBasket.showBasket();


const bruceBasket = new Basket();
bruceBasket.addProduct("rice", 10);
bruceBasket.addProduct("grzyby mun",50);
bruceBasket.addProduct("tofu",20);
bruceBasket.showBasket();