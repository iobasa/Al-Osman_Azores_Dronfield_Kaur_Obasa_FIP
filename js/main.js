// add imports from each page
import AllUsersComponent from './components/AllUsersComponent.js';
import LoginComponent from './components/LoginComponent.js';
import NavInfoComponent from './components/NavInfoComponent.js';
import dashComponent from './components/Dashboard.js';
import MythFactComponent from './components/MythFactComponent.js';
import LivingHIVComponent from './components/LivingWithHIV.js';
import HIVprevention from './components/HIVprevention.js';
import HIV101Component from './components/HIV101Component.js';
import HomeComponent from './components/HomeComponent.js';


// adding routes
(() => {
  let router = new VueRouter({
    // set routes
    routes: [
    //  { path: '/', redirect: { name: "home" } },
    { path: '/', name: "home", component: HomeComponent },
     { path: '/myths', name: "mythfact", component: MythFactComponent },
      { path: '/login', name: "login", component: LoginComponent },
      { path: '/users', name: 'users', component: AllUsersComponent },
      { path: '/nav', name: 'nav', component: NavInfoComponent, props: true },
      { path: '/dash', name: "dash", component: dashComponent },
      { path: '/hiv-living', name: "hiv-living", component: LivingHIVComponent },
      { path: '/hiv-prevention', name: "hiv-prevention", component: HIVprevention },
      { path: '/hiv-101', name: "hiv-101", component: HIV101Component },
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