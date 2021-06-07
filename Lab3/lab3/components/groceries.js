app.component('groceries', {
        template: /*html*/ `<div id="groceries">
    
    <div id = "filters" class = "buttons">
    <button v-on:click="toggleLact()">add/remove lactose</button>
    <button v-on:click="toggleNuts()">add/remove nuts</button>
    
    </div>
                  
    
    <table border="1">
            <thead>
              <tr>
              <th>Name
              <button @click="sort('name')" v-bind:class="[sortBy === 'name' ? sortDirection : '']">sort</th>
              <th>Price
              <button @click="sort('price')" v-bind:class="[sortBy === 'price' ? sortDirection : '']">sort</th>
               </thead>
      <!-- ...thead... -->
      <tbody>
        <tr v-for="product in sortedProducts" :key="product.id">
          <td>{{ product.name }}</td>
          <td>{{ product.price }}</td>
          <td><button v-on:click="addToCart(product.id, product.name, product.price)">Add to Cart</button></td>
        
        </tr>
      </tbody>
    </table>
  </div>
  <div>
  <button v-on:click="toCart()">Go to Cart</button>
  <div></div>
  <br><br><br><br>
  <table border="1">
            <thead>Cart
              <tr>
              <th>Name</th>
              <th>Price</th>
              <th>quantity</th>
              <th>total</th>
               </thead>
      <!-- ...thead... -->
      <tbody>
        <tr v-for="item in cart" :key="item.id">
          <td>{{ item.name }}</td>
          <td>{{ item.price }}</td>
          <td>{{ item.quantity}}</td>
          <td>{{ item.total}}</td>
        
        </tr>
        <tr> Total 
        <td> </td><td> </td>
        <td> {{ totalprice}} </td></tr>
      </tbody>
    </table>

   
  `,

        data() {
            return {
                products: [{
                        id: 1,
                        name: "milk",
                        lactoseFree: false,
                        nutFree: true,
                        organic: false,
                        price: 11.99
                    },
                    {
                        id: 2,
                        name: "peanut butter",
                        lactoseFree: true,
                        nutFree: false,
                        organic: false,
                        price: 2.35
                    },
                    {
                        id: 3,
                        name: "salmon",
                        lactoseFree: true,
                        nutFree: true,
                        organic: false,
                        price: 10.99
                    },
                    {
                        id: 4,
                        name: "salmon (organic)",
                        lactoseFree: true,
                        nutFree: true,
                        organic: true,
                        price: 20.99
                    }
                ],

                sortBy: "name",
                sortDirection: "asc",
                nutfree: false,
                lactosefree: false,
                cart: [{
                        id: 1,
                        name: "milk",
                        price: 11.99,
                        quantity: 0,
                        total: 0
                    },
                    {
                        id: 2,
                        name: "peanut butter",
                        price: 2.35,
                        quantity: 0,
                        total: 0
                    },
                    {
                        id: 3,
                        name: "salmon",
                        price: 10.99,
                        quantity: 0,
                        total: 0
                    },
                    {
                        id: 4,
                        name: "salmon (organic)",
                        price: 20.99,
                        quantity: 0,
                        total: 0
                    }


                ]


            }
        },
        methods: {
            sort: function(s) {
                if (s === this.sortBy) {
                    this.sortDirection = this.sortDirection === 'asc' ? 'desc' : 'asc';
                }
                this.sortBy = s;
            },

            toggleNuts: function() {
                if (this.nutfree) {
                    this.nutfree = false;
                } else {
                    this.nutfree = true;
                }

            },

            toggleLact: function() {
                if (this.lactosefree) {
                    this.lactosefree = false;
                } else {
                    this.lactosefree = true;
                }
            },



        },
        computed: {

            sortedProducts: function() {

                return this.products.sort((p1, p2) => {
                    let modifier = 1;
                    if (this.sortDirection === 'desc') modifier = -1;
                    if (p1[this.sortBy] < p2[this.sortBy]) return -1 * modifier;
                    if (p1[this.sortBy] > p2[this.sortBy]) return 1 * modifier;
                    return 0;
                })
            },
            getTotalPrice: function() {
                totalPrice = 0;
                for (let i = 0; i < products.length; i += 1) {
                    if (chosenProducts.indexOf(products[i].name) > -1) {
                        totalPrice += products[i].price;
                    }
                }
                return totalPrice;
            }

        }

        /*
                filtered: function() {
                    {
                        return this.products.filter(product => {
                            return ({}
                                product.lactoseFree === this.lactose && product.nutFree === this.nuts)
                        }
                    */



    }








)