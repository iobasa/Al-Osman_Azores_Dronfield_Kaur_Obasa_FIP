import Myth2Component from './Myth2Component.js';
import Myth1Component from './Myth1Component.js';
import Myth3Component from './Myth3Component.js';
import lightComponent from './lightbox.js';
import getTested from './getTested.js';import footers from "./footers.js";
import navig from "./Navigation.js";

export default {
    template: `
    <div>

    <navig/>
        <div class="myths">
        <section class="hero" id="hivmyths">
            <div class="herotext">
                <h3 class="light">HIV Myths</h3>
                <h1>HIV is not what you think it is.</h1>
            </div>
            
            <div class="heroimage">
                <img src="images/hiv-myth.svg" alt="Characters smiling">
            </div>
    </section>

    <light/>

        <!-- END -->
        <gettested />

        <!-- LEARN MORE -->
    <div class="learn-more">
        <div class="row px-5 justify-content-center">
            
            <div class="col-12 learn-button my-3"  id="learn-text">
            <h1>Learn More</h1>
            </div>
            
            <router-link to="/hiv-101" tag="li">
            <div class="col-12 learn-button my-3"  id="learn-101">
            <h5>HIV 101</h5>
            <img src="images/hero-hiv101.svg" alt="HIV 101"> 
            </div>
            </router-link>

            <router-link to="/hiv-prevention" tag="li">
            <div class="col-12 learn-button my-3"  id="learn-prevent">
            <h5>Prevention</h5>
            <img src="images/hiv-prevention.svg" alt="HIV prevention">
            </div>
            </router-link>

            <router-link to="/hiv-living" tag="li">
            <div class="col-12 learn-button my-3"  id="learn-living">
            <h5>Living with HIV</h5>
                <img src="images/hiv-living.svg" alt="Living with HIV"> 
            </div>
            </router-link>
        </div>
    </div>


    <footers/>

  </div>


  </div>
    `,

    components: {
        
        gettested: getTested,
        HIV101: Myth1Component,
        myth3: Myth3Component,
        light: lightComponent,
        footers: footers,
        navig: navig,
    }
    
}

