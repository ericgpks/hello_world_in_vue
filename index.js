var app = new Vue({ 
  el: '#app',
  data: {
      message: 'Hello Vue!'
  }
});

var app2 = new Vue({
  el: '#app-2',
  data: {
    message: 'You loaded this page on ' + new Date().toLocaleString()
  }
})

var app3 = new Vue({
  el: '#app-3',
  data: {
    seen: true
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
  }
})

Vue.component('todo-item', {
  props: ['todo'],
  template: '<li>{{ todo.text }}</li>'
})

var app7 = new Vue({
  el: '#app-7',
  data: {
    groceryList: [
      { id: 0, text: 'Vegetables' },
      { id: 1, text: 'Cheese' },
      { id: 2, text: 'Whatever else humans are supposed to eat' }
    ]
  }
})

var app8 = new Vue({
  el: '#app-8',
  data: {
    message: 'Hello World!'
  },
  methods: {
    sayHi() {
      this.message = 'Hello VueJS'
      return 'Hi'
    },
  },
})

var app9 = new Vue({
  el: '#app-9',
  data: {
    html: '<h1>h1です</h1>'
  },
})

var app10 = new Vue({
  el: '#app-10',
  data: {
    url: 'https://google.com',
    urlTwitter: 'https://twitter.com',
    number: 31,
    attribute: 'href',
    twitterObject: {
      href: 'https://twitter.com',
      id: 31,
    },
  },
})

var app11 = new Vue({
  el: '#app-11',
  data: {
    number: 0,
    x: 1,
    y: 1,
  },
  methods: {
    countUp: function(times) {
      this.number += 1 * times
    },
    changeMousePosition: function(event, divideNumber) {
      this.x = event.clientX / divideNumber
      this.y = event.clientY / divideNumber
    },
    noEvent: function(event) {
      event.preventDefault()
    },
    myAlert: function() {
      alert('アラート')
    }
  },
})

var app12 = new Vue({
  el: '#app-12',
  data: {
    number: 0,
    event: 'click'
  },
  methods: {
    countUp: function() {
      this.number += 1;
    },
  },
})

var app13 = new Vue({
  el: '#app-13',
  data: {
    number: 0,
    event: 'click'
  },
  methods: {
    countUp: function() {
      this.number += 1;
    },
  },
})

var app14 = new Vue({
  el: '#app-14',
  data: {
    message: 'こんにちは'
  },
})