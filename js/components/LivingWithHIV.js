import getTested from './getTested.js';
import footers from './footers.js';
import navig from "./Navigation.js";

export default {
    template:  `
        <div>

        <navig/>
        <div class="hivliving">
        <section class="hero" id="hivliving">
            <div class="herotext">
                <h3 class="light">Living with HIV</h3>
                <h1>Life isn't over if you have HIV.</h1>
            </div>
            
            <div class="heroimage">
                <img src="images/hiv-living.svg" alt="Gen Z studying beside HIV 101 character">
            </div>
        </section>

        <div class="steps-section">
            <div class="steps-title">
                <h1>What do I do if I have HIV?</h1>
            </div>

            <div class="steps-content-section">
                <div class="steps-content">
                    <div class="steps-content-icon">
                        <img src="images/life-icons-accept.svg" alt="Heart">
                    </div>
        
                    <div class="steps-content-text">
                        <h1>Accept</h1>
                        <p>
                            Receiving a diagnosis of HIV can be a life-changing event. People can feel many emotions—sadness, hopelessness, and anger. However, the first step is to accept your diagnosis and proceed to taking the measures.
                        </p>
                    </div>
                </div>
        
                <div class="steps-content">
                    <div class="steps-content-icon">
                        <img src="images/life-icons-educate.svg" alt="Brain">
                    </div>
        
                    <div class="steps-content-text">
                        <h1>Educate</h1>
                        <p>
                            Receiving a diagnosis of HIV can be a life-changing event. People can feel many emotions—sadness, hopelessness, and anger. However, the first step is to accept your diagnosis and proceed to taking the measures.
                        </p>
                    </div>
                </div>
        
                <div class="steps-content">
                    <div class="steps-content-icon">
                        <img src="images/life-icons-gethelp.svg" alt="Hands shaking">
                    </div>
        
                    <div class="steps-content-text">
                        <h1>Get Help</h1>
                        <p>
                            There are various resources available for people who are diagnosed with HIV, whether it be medical services, social service providers, or even support groups.
                            <br>By reaching out for help, you will be able to access resources in living with HIV.
                        </p>
                    </div>
                </div>    
            </div>
        </div>


        <div class="container living mt-5">
            <div class="row justify-content-center px-4">
                <!-- TREATMENT -->
                <div class="col col-text" id="treatment" cols="12">
                    <h3 class="light">HIV Treatment</h3>
                    <h2>You can still live life</h2>
                    <p>
                        People often think that your life is over when you get HIV. However, if you get HIV and get treated, you are still going to be able to live a healthy life.
                        <br>While a cure for HIV doesn’t exist yet, antiretroviral therapy (ART), is the combination of several drugs that work together by reducing the amount of virus in your blood and body.
                    </p>
                </div>

                <div class="col col-image" id="treatment-image">
                    <img src="images/life-happy.svg" alt="Happy person surrounded by characters">
                </div>
            </div>
        </div>

        <div class="container living mt-5">
            <div class="row justify-content-center px-4 reverse">
                <!-- DATING -->
                <div class="col col-text" id="dating" cols="12">
                    <h3 class="light">Dating with HIV</h3>
                    <h2>You can still love and have sex.</h2>
                    <p>
                        You might worry that you can never have a relationship, or sex, or that you won’t be loved but it is absolutely possible to have all these things when you have HIV. it is important to remember that there is much more to you than HIV.
                    </p>

                    <h3 class="light"><br>Telling Partners</h3>
                    <p>
                        Remember that it is your choice how much to tell them and when but bear in mind that it is important that they know, especially before having sex.
                        <br>Telling partners that you have HIV is challenging but it allows them to make decisions that can protect their health or provide added people of mind.
                    </p>

                    <h3 class="light"><br>HIV Treatment for Partners</h3>
                    <p>
                        Your partner will be at risk for HIV if the both of you are sexually active. However, there are different medication available for your partner such as the emergency treatment PEP (post-exposure prophylaxis) and PrEP (pre-exposure prophylaxis).
                    </p>
                </div>

                <div class="col col-image" id="dating-image" cols="12">
                    <img src="images/life-love.svg" alt="Happy person surrounded by characters">
                </div>
            </div>
        </div>

        <div class="container living my-5">
            <div class="row justify-content-center px-4">
                <div class="col col-text" id="pregnancy" cols="12">
                    <h3 class="light">Pregnancy with HIV</h3>
                    <h2>You can still have healthy babies.</h2>
                    <p>
                        You can pass HIV to your baby during pregnancy, while in labor, while giving birth, or by breastfeeding. The good news is that there are many ways to lower the risk of passing HIV to almost zero. This can be done by talking to a doctor who can work with you to prepare for a healthy pregnancy and help in reducing the risk.                
                    </p>
                </div>

                <div class="col col-image" id="pregnant-image" cols="12">
                    <img src="images/life-pregnant.svg" alt="Happy person surrounded by characters">
                </div>
            </div>
        </div>

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

            <router-link to="/myths" tag="li">
            <div class="col-12 learn-button my-3"  id="learn-myths">
            <h5>Myths</h5>
                <img src="images/hiv-myth.svg" alt="learn-myths"> 
            </div>
            </router-link>
        </div>
    </div>




    <footers/>
        </div>
    `,

    components: {
        
        gettested: getTested,
        footers: footers,
        navig: navig
    }
}