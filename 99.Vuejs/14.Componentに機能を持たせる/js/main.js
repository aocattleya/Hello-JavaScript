(function() {
  "use strict";

  // Components

  var likeComponent = Vue.extend({
    template: "<button>Like</button>"
    // template: "<button>Like</button><button>Like</button>"
    // template: "<div><button>Like</button><button>Like</button></div>"
  });

  var app = new Vue({
    el: "#app",
    components: {
      "like-component": likeComponent
    }
  });
})();
