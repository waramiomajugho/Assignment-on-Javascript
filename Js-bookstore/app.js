  console.log("Hello javascript is working");

  const storeName = "Warami's bookstore";

  let isOpen = true;

  console.log(storeName);
  console.log(isOpen);

  const featuredBook = {
      title: "The Great Adventure",
      price: 15.99,
      inStock: true
  };

  featuredBook.price = 20.99;

  console.log(featuredBook);


  const customerCart = [
    "The Great Adventure",
    "Harry porter",
    "Things Fall Apart "
  ];

  customerCart[3] = "Atomic Habits";

  console.log(customerCart);

  console.log(customerCart.length);

  
  function greetCustomer(customerName){
    console.log(" Hello "  + customerName  + " ,Welcome to "  + storeName +  "!");

    
  }
 
  greetCustomer("Success");


  function calculateTotal(price, quantity){
    return price * quantity;
  }

  console.log(calculateTotal(20.99, 3));





