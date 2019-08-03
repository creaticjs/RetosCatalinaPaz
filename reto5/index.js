Vue.component('products', {
    props: ['nombre_producto', 'precio', 'cantidad', 'iva', 'subtotal'], /* */
    template:  `<div>
    <div class="col s3"> {{nombre_producto}}</div>
               
                <div class="col s2">{{precio}} </div>
                <div class="col s2">{{cantidad}} </div>
                <div class="col s2">{{iva}} </div> 
                <div class="col s3">{{subtotal}}  </div>
                </div>
                `
});
  


let app = new Vue({ //creando un objeto vue
    el: '#app',
    data: {
        id: 1, 
        nombre: '',
        cedula: '',
        productos: [],
        nombre_producto: '',
        precio: '',
        cantidad: '',
        iva: '',
        subtotal: '',
        total: '',
        sum: 0
  },
  computed: {
    result: function () {
      return this.precio * this.cantidad;
    }
    },
    methods: {
        addProduct: function () {
        this.iva = this.precio * this.cantidad * 0.16;
        this.subtotal = (this.precio * this.cantidad) + this.iva;
        this.productos.push({ id: this.id, nombre_producto: this.nombre_producto, precio: this.precio, cantidad: this.cantidad, iva:this.iva, subtotal: this.subtotal});  
        this.id = this.id + 1;
        console.log(this.productos);
            
        
            this.nombre_producto = '';
            this.precio = '';
            this.cantidad = '';
            this.iva= '';
            this.getTotal()
        },
        getTotal: function () {
           // const self = this;
          app.sum = 0;
            this.productos.forEach(function (fruta, i) {
                app.sum = app.sum + fruta.subtotal;
                console.log('subtotal:'+fruta.subtotal);
            })
            this.total = app.sum;
            console.log('total'+this.total);

            return this.total;
        },
        
    }
  })