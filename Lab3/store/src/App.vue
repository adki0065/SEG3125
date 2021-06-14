
<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    HelloWorld
  },

data() {
  return {
    products: [
      {
	        name: "milk",
	        lactoseFree: false,
	        nutFree: true,
          organic: false,
	        price: 11.99
	    },
	    {
	        name: "peanut butter",
	        lactoseFree: true,
	        nutFree: false,
          organic: false,
	        price: 2.35
	    },
	    {
	        name: "salmon",
	        lactoseFree: true,
	        nutFree: true,
          organic: false,
	        price: 10.00
	    },
	    {
	        name: "salmon (organic)",
	        lactoseFree: true,
	        nutFree: true,
          organic: true,
	        price: 20.00
	    }
	],
  }
}
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
