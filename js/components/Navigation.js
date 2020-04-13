export default {
    template: `
    <div>
    <div>
    <!-- MOBILE -->
    <div class="mobile-nav">
        <div class="logo">
            <img src="images/logo.svg" alt="HIV prevention"> 
        </div>

        <div v-show="!isLearnMoreActive" class="burger-menu">
            <img @click="toggleMenu()" src="images/icon-menu.svg" alt="Burger menu"> 
        </div>
    </div>

    <div class="mobile-nav-open" id="get-to-know" v-bind:class="{ open: isLearnMoreActive }">
        <ul>
            <li @click="toggleLearnMore(); toggleArrowRotate()"><a href="#">
                <img src="images/icon-forward.svg" alt="Arrow pointing right" class="back" v-bind:class="{ rotate: isArrowRotated }"> Get to Know 
            </a></li>
        </ul>

        <div class="learn-more-menu">
            <div class="learn-button" id="learn-101" @click="toggleLearnMore(); toggleMenu()">
                <router-link to="/hiv-101" tag="li">
                <h5>HIV 101</h5>
                <img src="images/hero-hiv101.svg" alt="HIV 101"> 
                </router-link>
            </div>

            <div class="learn-button" id="learn-prevent" @click="toggleMenu(); toggleLearnMore(); toggleArrow(); toggleArrowRotate()">
                <router-link to="/hiv-prevention" tag="li">
                <h5>Prevention</h5>
                <img src="images/hiv-prevention.svg" alt="HIV prevention"> 
                </router-link>
            </div>

            <div class="learn-button" id="learn-myths" @click="toggleMenu(); toggleLearnMore(); toggleArrow(); toggleArrowRotate()">
                <router-link to="/myths" tag="li">
                <h5>Myths</h5>
                <img src="images/hiv-myth.svg" alt="HIV myths">
                </router-link>
            </div>

            <div class="learn-button" id="learn-living" @click="toggleMenu(); toggleLearnMore(); toggleArrow(); toggleArrowRotate()">
                <router-link to="/hiv-living" tag="li">
                <h5>Living with HIV</h5>
                <img src="images/hiv-living.svg" alt="Living with HIV"> 
                </router-link>
            </div>

            
        </div>
    </div>

    <div class="mobile-nav-open" v-bind:class="{ open: isActive }">
        <ul>
        <li><router-link to="/">HOME</router-link></li>
            <li @click="toggleLearnMore(); toggleArrow(); toggleArrowRotate()"><a href="#">
                Get to Know <img v-bind:class="{ rotate: isSecondArrow }" src="images/icon-forward.svg" alt="Arrow pointing right"> 
            </a></li>
            <li><a href="https://hivaidsconnection.ca/" target="_blank">RHAC</a></li>
            <li><router-link to="/login" class="login">LOGIN</router-link></li>
        </ul>
    </div>

    <!-- TABLET AND UP -->
        <div class="nav">
            <div class="logo">
                <img src="images/logo.svg" alt="HIV prevention"> 
            </div>

            <div class="menu">
                <ul>
                <li><router-link to="/">HOME</router-link></li>
                    <li @click="toggleLearnMore()"><a href="#">Get to Know <img src="images/icon-forward.svg" alt="Arrow pointing down"></a></li>
                    <li><a href="https://hivaidsconnection.ca/" target="_blank">RHAC</a></li>
                    <li><router-link to="/login" class="login">LOGIN</router-link></li>
                </ul>
            </div>

            <ul class="social">
                <li><a href="#"><img src="images/icon-facebook.svg" alt="Facebook icon"></a></li>
                <li><a href="#"><img src="images/icon-instagram.svg" alt="Instagram icon"></a></li>
                <li><a href="https://www.youtube.com/channel/UC1x21wCXJQ0vltkF97xzS2g/" target="_blank"><img src="images/icon-youtube.svg" alt="Youtube icon"></a></li>
            </ul> 
        </div>

        <div class="nav-open" id="get-to-know" v-bind:class="{ scrolldown: isLearnMoreActive }">
            <div class="learn-more-menu">
                <div class="learn-button" id="learn-101" @click="toggleLearnMore()">
                    <router-link to="/hiv-101" tag="li">
                    <h5>HIV 101</h5>
                    <img src="images/hero-hiv101.svg" alt="HIV 101"> 
                    </router-link>
                </div>

                <div class="learn-button" id="learn-prevent" @click="toggleLearnMore()">
                    <router-link to="/hiv-prevention" tag="li">
                    <h5>Prevention</h5>
                    <img src="images/hiv-prevention.svg" alt="HIV prevention"> 
                    </router-link>
                </div>

                <div class="learn-button" id="learn-myths" @click="toggleLearnMore()">
                    <router-link to="/myths" tag="li">
                    <h5>Myths</h5>
                    <img src="images/hiv-myth.svg" alt="HIV myths">
                    </router-link>
                </div>

                <div class="learn-button" id="learn-living" @click="toggleLearnMore()">
                    <router-link to="/hiv-living" tag="li">
                    <h5>Living with HIV</h5>
                    <img src="images/hiv-living.svg" alt="Living with HIV"> 
                    </router-link>
                </div>
            </div>
        </div>



</div>


    </div>
    `,

        data() {
            return {
                isActive: false,
                isLearnMoreActive: false,
                isArrowRotated: false,
                isSecondArrow: false
            };
        },


        methods: {
            toggleMenu: function() {
                this.isActive = !this.isActive
            },

            toggleLearnMore: function() {
                this.isLearnMoreActive = !this.isLearnMoreActive
            },

            toggleArrow: function() {
                this.isSecondArrow = !this.isSecondArrow
            },

            toggleArrowRotate: function() {
                this.isArrowRotated = !this.isArrowRotated
            }


        },

}