const app = new Vue({
    el: '#app',
    data: {
        titulo: 'Selecciona tu tipo de dieta',
           dietas: [
            {nombre: 'Hipertensa', kcal:''},
            {nombre: 'Diabetica', kcal: ''},
            {nombre: 'Cetogenica', kcal:''},
            {nombre: 'Vegetariana', kcal:''}
           ],
            nuevaDieta: '',
            total: 0
        
           },
        methods: {
            agregarDieta () {
              this.dietas.push({
                nombre: this.nuevaDieta, kcal: 0
              });
              this.nuevaDieta = '';
            }
          },
        computed: {
          sumarKcal() {
              this.total = 0;
              for(dieta of this.dietas){
              this.total = this.total + dieta.kcal;
            }
            return this.total;
        }
     }
     
    })

   
