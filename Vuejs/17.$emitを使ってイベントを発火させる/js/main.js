(function() {
  "use strict";

  // Components

  var likeComponent = Vue.extend({
    props: {
      message: {
        type: String,
        default: "Like"
      }
    },

    data: function() {
      return {
        count: 0
      };
    },

    template: '<button @click="countUp">{{ message }} {{ count }}</button>',
    methods: {
      countUp: function() {
        this.count++;
        this.$emit("increment");
      }
    }
  });

  var app = new Vue({
    el: "#app",
    components: {
      "like-component": likeComponent
    },
    data: {
      total: 0
    },
    methods: {
      incrementTotal: function() {
        this.total++;
      }
    }
  });
})();
