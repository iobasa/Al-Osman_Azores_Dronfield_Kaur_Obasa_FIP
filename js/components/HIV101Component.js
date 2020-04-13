import stageone from "./HIV101Stage1";
import stagetwo from "./HIV101Stage2";
import stagethree from "./HIV101Stage3";
import gettested from "./getTested";
import footers from "./footers.js";
import navig from "./Navigation.js";

export default {
    template:  `
    <div>
    <navig/>
    <div class="hiv101">
    <section class="hero" id="hiv101">
      <div class="herotext">
        <h3 class="light">HIV 101</h3>
        <h1>Let's get to know each other!</h1>
      </div>
      
      <div class="heroimage">
        <img src="images/hero-hiv101.svg" alt="Gen Z studying beside HIV 101 character">
      </div>
    </section>

    <section class="hiv-info" id="hiv">
        <div class="col-text">
            <h1>The Human Immunodeficiency Virus (HIV)</h1>
            <p>HIV is a virus that attacks the immune system, which is the body’s natural defense system. This means HIV interferes with your body’s ability to fight infection and disease.</p>
        </div>

        <div class="col-img">
            <img src="images/hiv101-hiv.svg" alt="HIV character">
        </div>
    </section>

    <section class="hiv-info" id="aids">
        <div class="col-img">
            <img src="images/hiv101-aids.svg" alt="AIDS character">
        </div>
        <div class="col-text">
            <h2>When left untreated,</h2>
            <h1>HIV leads <br>to AIDS</h1>
            <p>AIDS stands for Acquired Immunodeficiency Syndrome. Having HIV does not mean you have AIDS but when HIV is left untreated and completely breaks down your immune system over several years, it leads to AIDS.</p>
        </div>
    </section>

    <!-- STAGES -->
    <stageone v-bind:onesymptoms="onesymptoms" />
    <stagetwo />
    <stagethree v-bind:threesymptoms="threesymptoms" />

    <!-- END PAGE -->
    <gettested />

    <!-- LEARN MORE -->
    <div class="learn-more">
      <div class="row px-5 justify-content-center">
      <div class="col-12 learn-button my-3"" md="4" id="learn-text">
          <h1>Learn More</h1>
        </div>
        
        <router-link to="/hiv-prevention" tag="li">
        <div class="col-12 learn-button my-3" md="4" id="learn-prevent">
          <h5>Prevention</h5>
          <img src="images/hiv-prevention.svg" alt="HIV prevention"> 
        </div>
        </router-link>

        <router-link to="/myths" tag="li">
        <div class="col-12 learn-button my-3" md="4" id="learn-myths">
          <h5>Myths</h5>
          <img src="images/hiv-myth.svg" alt="HIV myths">
        </div>
        </router-link>

        <router-link to="/hiv-living" tag="li">
        <div class="col-12 learn-button my-3" md="4" id="learn-living">
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
          onesymptoms: [
            {
              id: 1,
              image: "fever.svg",
              title: "Fever"
            },
            {
              id: 2,
              image: "bodyrash.svg",
              title: "Body rash"
            },
            {
              id: 3,
              image: "sorethroat.svg",
              title: "Sore throat"
            },
            {
              id: 4,
              image: "lymphglands.svg",
              title: "Swollen lymph glands"
            },
            {
              id: 5,
              image: "headache.svg",
              title: "Headache"
            },
            {
              id: 6,
              image: "diarrhea.svg",
              title: "Diarrhea"
            },
            {
              id: 7,
              image: "jointaches.svg",
              title: "Joint aches and pains"
            },
            {
              id: 8,
              image: "musclepain.svg",
              title: "Muscle pain"
            },
            {
              id: 9,
              image: "cough.svg",
              title: "Coughs"
            },
            {
              id: 10,
              image: "nightsweats.svg",
              title: "Night sweats"
            }
          ],
  
          threesymptoms: [
            {
              id: 1,
              image: "fever.svg",
              title: "Fever"
            },
            {
              id: 2,
              image: "fatigue.svg",
              title: "Fatigue"
            },
            {
              id: 3,
              image: "lymphglands.svg",
              title: "Swollen lymph glands"
            },
            {
              id: 4,
              image: "diarrhea.svg",
              title: "Diarrhea"
            },
            {
              id: 5,
              image: "weightloss.svg",
              title: "Weight loss"
            },
            {
              id: 6,
              image: "oralyeast.svg",
              title: "Oral yeast infection"
            },
            {
              id: 7,
              image: "shingles.svg",
              title: "Shingles"
            },
            {
              id: 8,
              image: "pneumonia.svg",
              title: "Pneumonia"
            },
            {
              id: 9,
              image: "nightsweats.svg",
              title: "Night sweats"
            },
            {
              id: 10,
              image: "mouthskinprobs.svg",
              title: "Mouth/skin problems"
            }
          ]
        }
      },

      components: {
        stageone: stageone,
        stagetwo: stagetwo,
        stagethree: stagethree,
        gettested: gettested,
        footers: footers,
        navig: navig
      },
}