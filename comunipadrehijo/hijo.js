Vue.component('hijo',{

    template: 
    `
      <div class="py-5 s">
        <h4>Componente Hijo: {{numero}}</h4>
        <h4>Nombre: {{nombre}}</h4>
      </div>
    `,
    props: ['numero'],
    data(){
        return{
            nombre: 'judith'
        }
    },
    mounted()  {
        this.$emit('nombreHijo', this.nombre);
    },
})