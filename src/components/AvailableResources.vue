<template>
    <h1>Available Resources</h1>
    <v-card
 class="mx-auto"
 width="800"
 >
 <v-card-text class="bg-surface-light pt-4">
 <v-card-title>Cart
 {{ total }}
 <v-btn
 color="deep-purple-lighten-2"
 text="Checkout"
 ></v-btn>
 </v-card-title>
 <v-row>
 <v-col cols="12" md="4" v-for="product in cartItems" :key=product> 
 <v-card
 class="mx-auto my-12"
 max-width="374"
 >
 <v-img
 height="250"
:src="product.itemImage"
cover
 ></v-img>
 <v-card-item>
 <v-card-title>{{product.itemName}}</v-card-title>
 </v-card-item>
 <v-card-text>
 <div class="my-4
text-subtitle-1">{{product.itemQuantity}}</div>
 </v-card-text>
 <v-divider class="mx-4 mb-1"></v-divider>
 <v-card-actions>
 <v-btn
 color="deep-purple-lighten-2"
text="Remove"
block
border
@click="removeFromCart(product)"

 ></v-btn>
 </v-card-actions>
 </v-card>
 </v-col>
 </v-row>
 </v-card-text>
</v-card>

    <div>
 <v-row>
 <v-col cols="12" md="4" v-for="product in stockDetails" :key=product>

    <v-card
    class="mx-auto my-12"
 max-width="374"
 >
 <v-img
 height="250"
 :src="product.itemImage"
 cover
 ></v-img>
 <v-card-item>
    <v-card-title>{{product.itemName}}</v-card-title>
 </v-card-item>
 <v-card-text>
    <div class="my-4 text-subtitle-1">{{product.year}}</div>
 <div>{{ product.description }}</div>

 </v-card-text>
 <v-divider class="mx-4 mb-1"></v-divider>
 <v-card-actions>
 <v-btn
 color="deep-purple-lighten-2"
 text="Add to Cart"
 block
 border
 @click="addToCart(product)"
 ></v-btn>
 </v-card-actions>
 </v-card>
</v-col>
 </v-row>
 </div>
   </template>

   <script>
   import { mapActions, mapGetters } from 'vuex'
   export default {
    data(){
      return{
          products:[1,2,3,4,5,6,7,8,9,10,11],
          stockDetails : [


          {
              itemNumber: 1,
              itemName : "Deitel Intro to Python",
              itemQuantity: 1,
              year : "Year I & II",
              itemImage: '../Images/deitel.jpg',
              description: "This is a step by step guide to coding in Python"
          },
          {
              itemNumber: 27466,
              itemName : "Engineering Mathematics with Dexter",
              itemQuantity: 1,
              year : "Year II",
              itemImage: '../Images/engmath.jpg',
              description: "This book is useful in Matrices,and ODEs for year 2 students"

          },
          {
              itemNumber: 2745,
              itemName : "Fluid Mechanics IV",
              itemQuantity: 1,
              year: "Year IV",
              itemImage: '../Images/fluids.jpg',
              description: "Useful in the fluid dynamics for fourth year Enginnering mechanics students"

          },
          {
              itemNumber: 2732,
              itemName : "Math methods for molecular science",
              itemQuantity: 1,
              year : "Year V",
              itemImage: '../Images/math_methods.jpg',
              description: "This book is useful for Chemical engineering students and those in similar areas in learning molar science."

          },
          {
              itemNumber: 266,
              itemName : "Cell Biology III",
              itemQuantity: 1,
              year: "Year III",
              itemImage: '../Images/bio.gif',
              description: "Cell biology III is useful for students mostly in the health sciences as a reference book"

          },
          {
              itemNumber: 27394,
              itemName : "Laws of Medicine",
              itemQuantity: 1,
              year: "Year I and II",
              itemImage: '../Images/medbook.jpg',
              description: "This is an introductory guide book for first and second year medicine students"

          },
          {
              itemNumber: 86,
              itemName: "Quantum physics",
              itemQuantity: 1,
              itemImage: '../Images/quantum_physics.jpg',
              description: "This is a feeder book for all students interested in quantum physics"

          },
          {
              itemNumber: 2796,
              itemName : "Science encyclopedia",
              itemQuantity: 1,
              itemImage: '../Images/science_encyclopedia.jpeg',
              description: "This is a science encyclopedia for all students interested in science"

          },
          {
              itemNumber: 27466,
              itemName : "Strength of Materials I-IV",
              itemQuantity: 1,
              year : "Year I-IV",
              itemImage: '../Images/SOM.jpg',
              description: "This is a full edition book that guides students in civil and mechanical eng in  studying the strength of materials."

          },
          {
              itemNumber: 2706,
              itemName : "Theory of Structures I-IV",
              itemQuantity: 1,
              year: "Year I-IV",
              itemImage: '../Images/TOS.jpg',
              description: "This is a full edition of theory of structures for first to fourth year students"

          },
          {
              itemNumber: 456,
              itemName : "Unichem Papers",
              itemQuantity: 1,
              itemImage: '../Images/unichem.jpg',
              description: "These are Chemistry research papers written by students in the university, used as reference mmaterial"

          }

        ], 
        cartItems: [],
        total: 0,


        }
  },
  methods:{
    calculateTotal(itemQuantity){
  this.total += itemQuantity
},
addToCart(product){
this.cartItems.push(product)
this.calculateTotal(product.itemQuantity)
},

removeFromCart(product){
this.cartItems.pop(product)
this.total -= product.itemQuantity
}



 },
 computed: {
...mapGetters({
stock: 'stock'
})
},

 
   }
   </script>
