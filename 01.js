const { createApp } = Vue

createApp({
  data() {
   
    return {
      titulo: 'Vue es un framework de javascript',
      fondo: 'bg-warning',
      color: false
    }
  },
    methods: {
      agregarFruta() {
        this.frutas.push({
          nombre: this.nuevaFruta, cantidad:0
        });
        this.nuevaFruta = '';
        
      }
    }   
  
}).mount('#app')