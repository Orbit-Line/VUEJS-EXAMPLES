Vue.component('movie-card',{
    props: ['image', 'title', 'message', 'color'],
    template: 
    `
     <div>
     <h2>{{title}}</h2>
     <img width="200" v-bind:src="image" :alt="title" :alt="message" :alt="color"/>
     <h3>{{message}}</h3>
     <h3>{{color}}</h3>
     
     </div>
    `
    
})

new Vue({
    el: '#app', 
    data: {
        movies: [
            {title: 'Mandala' , image: 'fondo.jpg', message: 'Son de buena suerte', color: 'rosa'},           
            {title: 'Mandala', image: 'fondo.jpg', message: 'Ayudan a relajarse' },
            {title: 'Mandala', image: 'fondo.jpg'},
            {title: 'Mandala', image: 'fondo.jpg'}
       ]
    },
    template: 
    `
    <div>
    <movie-card
    v-for="(movie, index) in movies"
    :key="index"
     v-bind:title="movie.title"
           :image="movie.image"
           :message="movie.message"
           :color="movie.color">
    </movie-card>

    </div>
    `
})