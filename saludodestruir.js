const app = new Vue({

    el: '#app',
    data: {
       saludo: 'Soy la mas chingona'
    },
    beforeCreate(){

    },
    methods:{
        destruir(){
            this.$destroy();
        }
    }
    
});