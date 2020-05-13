
# FrontEnd Routes
1. Home Page `/` display on trend clothes.
2. Login `/login` => redirect to profile page of a buyer (`/profile`).
3. Register `/register` =>  make a post request => redirect to home page.
___
4. Basket `/profile/basket` => view the basket and payment form
5. Checkout `/profile/basket/checkout` => It will be protected route , renders check out form (but not do anything with checkout, just fill the form: shipping address, shipping method, payment,.. )
6. Products `/category/:category` => show all items  inside the certain category
7. Single product `products/:id` => product detail

___
# BackEnd Routes

1. Users (buyers) routes
   * GET `users/:id` => return user profile information
   * POST `/users` create a new account
   * POST `/users/token` => create toke when loggin
   * PUT `users/:id` => update a particular user's information
