import footers from "./footers.js";
import navig from "./Navigation.js";


export default {
    template: `
    <div>
    <navig/>
    <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png" /> -->
    <div class ="masonry card-columns">
      <div class ="card red cardClass padding-lg">
        <div class ="card-title" ><h1>Hello, it’s nice to meet you.</h1></div>
      </div>
    
      <div class ="card blue cardClass padding-m">
            <div class ="card-img-top">
            <img src="images/home-hi.png" alt="Meet HIV character saying hi">
            </div>
      </div>
    
      <div class ="card yellow cardClass padding-lg">
        <div class="card-title">
          <h1>You've probably never heard of me</h1>
        </div>
      </div>
    
      <div class ="card yellow cardClass padding-lg">
      <router-link class="card-link" to="/hiv-101">Get to know</router-link>
      </div>
    
      <div class ="card red cardClass">
        <div class ="card-img-top">
            <img src="images/home-confused.svg" alt="Teen confused about HIV">
        </div>
      </div>
    
      <div class ="card purple cardClass padding-lg">
        <div class ="card-title" ><h1>Maybe you heard that HIV is scary but there are ways to prevent it.</h1></div>
      </div>
    
      <div class ="card purple cardClass padding-lg">
      <router-link to="/hiv-prevention">Prevent HIV</router-link>
      </div>
    
      <div class ="card red cardClass">
        <div class ="card-img-top">
           <img src="images/home-ghost-off.svg" img-alt="HIV character hiding under a blanket">
        </div>
      </div>
    
      <div class ="card yellow cardClass">
        <div class ="card-img-top">
        <img src="images/home-ghost.svg" alt="HIV character takes off the ghost blanket">
        </div>
      </div>
      
      <div class ="card blue cardClass padding-none">
            <div class ="card-img-top">
            <img src="images/home-ew.svg" alt="HIV blood in front of text that says gross">
            </div>
      </div>
    
      <div class ="card purple cardClass padding-lg">
        <div class ="card-title">
          <h1>What's the tea?</h1>
        </div>
      </div>
    
      <div class ="card orange cardClass padding-lg">
        <div class ="card-title">
          <h1>Or.. have you heard the nasty things that they say about me?</h1>
        </div>
      </div>
    
      <div class ="card orange cardClass padding-lg">
      <router-link class="card-link" to="/myths">Bust Myths</router-link>
      </div>
    
      <div class ="card yellow cardClass">
        <div class ="card-img-top">
        <img src="images/home-teens.svg"
        img-alt="Group of teens affected by HIV"
        >
        </div>
      </div>
    
      <div class ="card blue cardClass padding-lg">
        <div class ="card-title">
          <h1>Or about the people that I've affected</h1>
        </div>
      </div>
    
      <div class ="card blue cardClass padding-lg">
      <router-link class="card-link" to="/hiv-living">Living with HIV</router-link>
      </div>
    
      <div class ="card red cardClass padding-m">
        <div class ="card-img-top">
        <img src="images/home-hivaids.svg"
        img-alt="HIV and AIDS"
        >
        </div>
      </div>
    
            
    </div>
    </div>
    <section class="cta">
         <h1>It's about time we got to know each other.</h1>
        </section>

    <footers/>
    </div>
    `,

    components: {
      footers: footers,
      navig: navig
    },

}