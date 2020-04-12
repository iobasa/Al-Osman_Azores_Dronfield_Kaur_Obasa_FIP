// add imports from each page
import AllUsersComponent from './components/AllUsersComponent.js';
import LoginComponent from './components/LoginComponent.js';
import NavInfoComponent from './components/NavInfoComponent.js';
import HIV101Component from './components/HIV101Component.js';
import MythsComponent from './components/MythsComponent.js';
import LivingComponent from './components/LivingComponent.js';
import dashComponent from './components/Dashboard.js';
import homeComponent from './components/HomeComponent.js';


// adding routes
(() => {
  let router = new VueRouter({
    // set routes
    routes: [
     { path: '/', redirect: { name: "home" } },
     { path: '/', name: "home", component: homeComponent },
      { path: '/login', name: "login", component: LoginComponent },
      { path: '/users', name: 'users', component: AllUsersComponent },
      { path: '/nav', name: 'nav', component: NavInfoComponent, props: true },
      { path: '/living', name: "living", component: LivingComponent },
      { path: '/myths', name: 'myths', component: MythsComponent },
      { path: '/hiv', name: "hiv", component: HIV101Component },
      { path: '/dash', name: "dash", component: dashComponent },
    ]
  });

  const vm = new Vue({
    data: {
      authenticated: false,
      administrator: false,
      user: [],

      //currentUser: {},
    },

    methods: {
      setAuthenticated(status, data) {
        this.authenticated = status;
        this.user = data;
      },

      //logout of the page
      logout() {
        // push user back to login page
        this.$router.push({ name: "home" });
        this.authenticated = false;

        if (localStorage.getItem("cachedUser")) {
          localStorage.removeItem("cachedUser");
        }

        if (localStorage.getItem["cachedVideo"]){
          localStorage.removeItem["cachedVideo"];
        }
      }
    },

    created: function() {
        //check for a user in localStorage
        // if we've logged in before, this should be here until we annually remove

        if (localStorage.getItem("cachedUser")) {
          let user = JSON.parse(localStorage.getItem("cachedUser"));

          this.authenticated = true;

          this.$router.push({ name: "home", params: { currentuser: user }});
        } else {
          this.$router.push({ name: "home" });
        }
    },

    router: router
  }).$mount("#app");

  // router.beforeEach((to, from, next) => {
  //   //console.log('router guard fired!', to, from, vm.authenticated);

  //   if (vm.authenticated == false) {
  //     next("/login");
  //   } else {
  //     next();
  //   }
  // });
})();