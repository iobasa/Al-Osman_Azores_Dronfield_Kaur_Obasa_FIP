import gettested from "./getTested.js";
import prevention from "./HIVprevent.js";
import footers from "./footers.js";
import navig from "./Navigation.js";

export default {
    template: `
    <div>
    <navig/>
    <div class="hivprevention">
    <section class="hero" id="hivprevention">
        <div class="herotext">
            <h3 class="light">HIV 101</h3>
            <h1>HIV isn't supposed to be scary.</h1>
        </div>
        
        <div class="heroimage">
            <img src="images/hiv-prevention.svg" alt="Gen Z studying beside HIV 101 character">
        </div>
    </section>

    <section class="hiv-stages" id="hiv-risks">
        <div class="stages-title">
            <div class="col-title">
                <h1>Anyone is at risk <br>for HIV</h1>
            </div>
            <div class="col-desc">
                <p>
                    To become infected with HIV, infected blood, semen, or vaginal secretions must enter your body.                
                </p>
            </div>
        </div>
    </section>

    <!-- RISKS -->
    <section class="risks">
        <h3>How You Can Get HIV</h3>
    </section>

        <div class="container">
            <div class="row px-3">
                <div class="col symptoms px-1 pb-5 col-lg-3 col-4"  v-for="risk in risks" :key="risk.id" v-bind:risk="risks">
                    <div class="symptoms-img">
                        <img :src=" 'images/' + 'risk-' + risk.image ">
                    </div>

                    <h6>{{risk.title}}</h6>
                </div>
            </div>
        </div>
    
    <!-- NOT RISKS -->
    <section class="risks">
        <h3>How You <strong>Can't</strong> Get HIV</h3>
    </section>

        <div class="container">
            <div class="row px-3">
                <div class="col symptoms px-1 px-lg-0 pb-5 col-lg-3 col-4" cols="4" lg="3" v-for="notrisk in notrisks" :key="notrisk.id" v-bind:notrisk="risks">
                    <div class="symptoms-img">
                        <img :src=" 'images/' + 'risk-' + notrisk.image ">
                    </div>

                    <h6>{{notrisk.title}}</h6>
                </div>
            </div>
        </div>
    
    <!-- PREVENT -->
    <prevention class="prevent-padding" v-bind:preventions="preventions"/>
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
            <img src="images/hero-hiv101.svg" alt="HIV prevention"> 
            </div>
            </router-link>

            <router-link to="/myths" tag="li">
            <div class="col-12 learn-button my-3"  id="learn-myths">
            <h5>Myths</h5>
            <img src="images/hiv-myth.svg" alt="HIV myths">
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

    data() {
        return {
            risks: [
                {
                    id: 1,
                    image: "nocondoms.svg",
                    title: "Sex without condoms"
                },
                {
                    id: 2,
                    image: "needles.svg",
                    title: "Sharing needles"
                },
                {
                    id: 3,
                    image: "pregnancy.svg",
                    title: "Pregnancy"
                },
                {
                    id: 4,
                    image: "breastfeeding.svg",
                    title: "Breast-feeding"
                }
            ],

            notrisks: [
                {
                    id: 1,
                    image: "nocondoms.svg",
                    title: "Hugging"
                },
                {
                    id: 2,
                    image: "sharingwater.svg",
                    title: "Sharing water or food"
                },
                {
                    id: 3,
                    image: "air.svg",
                    title: "air"
                },
                {
                    id: 4,
                    image: "kissing.svg",
                    title: "kissing"
                },
                {
                    id: 5,
                    image: "touch.svg",
                    title: "Touching someone"
                },
                {
                    id: 6,
                    image: "toilet.svg",
                    title: "Toilet seats"
                },
                {
                    id: 7,
                    image: "air.svg",
                    title: "Insect bites"
                },
                {
                    id: 8,
                    image: "sneezes.svg",
                    title: "Sneezes and coughs"
                },
                {
                    id: 7,
                    image: "bath.svg",
                    title: "Bathing"
                },
                {
                    id: 8,
                    image: "sweat.svg",
                    title: "Sweat"
                }
            ],

            preventions: [
                {
                    id: 1,
                    image: "PREP.svg",
                    title: "Take PrEP"
                },
                {
                    id: 2,
                    image: "condom.svg",
                    title: "Use condoms"
                },
                {
                    id: 3,
                    image: "test.svg",
                    title: "Get tested and treated for STDs"
                },
                {
                    id: 4,
                    image: "status.svg",
                    title: "Know partner's HIV status"
                },
                {
                    id: 5,
                    image: "needles.svg",
                    title: "Use clean needles when taking drugs"
                },
                {
                    id: 6,
                    image: "treatment.svg",
                    title: "Get treatment when HIV+"
                },

            ]
        }
    },

    components: {
        gettested: gettested,
        prevention: prevention,
        footers: footers,
        navig: navig
      },
}