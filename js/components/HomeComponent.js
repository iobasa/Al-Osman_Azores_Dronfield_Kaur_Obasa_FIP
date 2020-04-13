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
    
      <div class ="card yellow cardClass">
        <div class="card-title">
          <h1>You've probably never heard of me</h1>
        </div>
      </div>
    
      <div class ="card yellow cardClass">
        <a href="#" class="card-link">Get to Know</a>
      </div>
    
      <div class ="card red cardClass">
        <div class ="card-img-top">
            <img src="images/home-confused.svg" alt="Teen confused about HIV">
        </div>
      </div>
    
      <div class ="card purple cardClass">
        <div class ="card-title" >Maybe you heard that HIV is scary but there are ways to prevent it.</div>
      </div>
    
      <div class ="card purple cardClass">
        <a href="#" class="card-link">Prevent HIV</a>
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
    
      <div class ="card purple cardClass">
        <div class ="card-title">
          <h1>What's the tea?</h1>
        </div>
      </div>
    
      <div class ="card orange cardClass">
        <div class ="card-title">
          Or.. have you heard the nasty things that they say about me?
        </div>
      </div>
    
      <div class ="card orange cardClass">
        <a href="#" class="card-link">Bust Myths</a>
      </div>
    
      <div class ="card yellow cardClass">
        <div class ="card-img-top">
        <img src="images/home-teens.svg"
        img-alt="Group of teens affected by HIV"
        >
        </div>
      </div>
    
      <div class ="card blue cardClass padding-m">
        <div class ="card-title">
          Or about the people that I've affected
        </div>
      </div>
    
      <div class ="card blue cardClass">
        <a href="#" class="card-link">Living with HIV</a>
      </div>
    
      <div class ="card red cardClass padding-m">
        <div class ="card-img-top">
        <img src="images/home-hivaids.svg"
        img-alt="HIV and AIDS"
        >
        </div>
      </div>
    
            <section class="cta">
         <h1>It's about time we got to know each other.</h1>
        </section>
    </div>
    </div>

    <footers/>
    </div>
    `,

    components: {
      footers: footers,
      navig: navig
    },

}