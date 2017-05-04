var app = new Vue({
    el: '#app',
    data: {
        message: 'Hello Vue!'
    }
})

var app2 = new Vue({
    el: '#app-2',
    data: {
        message: 'You loaded this page on ' + new Date()
    }
})

var app3 = new Vue({
    el: '#app-3',
    data: {
        seen: true
    }
})

var app4 = new Vue({
    el: '#app-4',
    data: {
        todos: [
            { text: 'Learn JavaScript' },
            { text: 'Learn Vue' },
            { text: 'Build something awesome' }
        ]
    }
})

var app5 = new Vue({
    el: '#app-5',
    data: {
        message: 'Hello Vue.js!'
    },
    methods: {
        reverseMessage: function () {
        this.message = this.message.split('').reverse().join('')
        }
    }
})

var app6 = new Vue({
    el: '#app-6',
    data: {
        message: 'Hello Vue!'
    },
    created: function () {
        var that = this;
        setTimeout(function(){ that.message = "Hello again Vue!"; }, 2000);
    }
})

Vue.component('todo-item', {
  // The todo-item component now accepts a
  // "prop", which is like a custom attribute.
  // This prop is called todo.
  props: ['todo'],
  template: '<li>{{ todo.text }}</li>'
})

var app7 = new Vue({
  el: '#app-7',
  data: {
    groceryList: [
      { text: 'Vegetables' },
      { text: 'Cheese' },
      { text: 'Whatever else humans are supposed to eat' }
    ]
  }
})

var vm = new Vue({
    el: '#app-7',
    data: {
        a: 1
    },
    created: function () {
        // `this` points to the vm instance
        console.log('a is: ' + this.a)
    }
})

var app8 = new Vue({
    el: "#app-8",
    data: {
        movie:{}
    },
    created: function () {
        {
            // GET /someUrl 
            this.$http.get('http://www.omdbapi.com/?t=Rear+WIndow')
            .then(function(res) {
                this.movie = res.body;
             
            }).catch(function(err){
                // error callback 
                console.log(err)
            });
        }
    }
})
// -> "a is: 1"