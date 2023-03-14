const products = [];

class ProductManager {
  constructor(title, description, price, thumbnail, code, stock) {
    (this.title = title),
      (this.description = description),
      (this.price = price),
      (this.thumbnail = thumbnail),
      (this.code = code),
      (this.stock = stock);
  }
  addProduct(title, description, price, thumbnail, code, stock) {
    let id = products.length + 1;
    const producto = {
      id,
      title,
      description,
      price,
      thumbnail,
      code,
      stock,
    };
    products.push(producto);
  }
  getProducts() {
    console.log(products);
  }
  getProductsById(id) {
    products.map((el) => {
      const idBuscado = el.id;
      if (id == idBuscado) {
        console.log(el);
      } else {
        console.log("Not found");
      }
    });
  }
}
const producto1 = new ProductManager();
producto1.addProduct("Televisor", "Televisor led", 8500, "tvled.com", 1, 8);
const producto2 = new ProductManager();
producto2.addProduct("Laptop", "Asus rog", 25000, "asus.com", 5, 4);
const producto3 = new ProductManager();
producto3.addProduct("Pc", "Pc gamer", 85000, "pc.com", 1, 8);
const producto4 = new ProductManager();
producto4.addProduct("Monitor", "Asus rog", 30000, "asus.com", 1, 7);

producto4.getProducts();
