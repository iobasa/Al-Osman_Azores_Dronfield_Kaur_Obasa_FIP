import HIV101Component from './HIV101Component.js';
import LivingComponent from './LivingComponent.js';
import MythsComponent from './MythsComponent.js';

//DO NOT TOUCH THIS COMPONENT OR CODE IN THSI COMPONENT!!!!!!

export default {
    name: "TheNavInfoComponent",

    props: ['currentuser'],

    template: `
<div class="container">
<component :is="this.activeComponent"></component>

<!-- show media icons here -->
<div class="row"> <!-- 2-up for nav and media info -->


    <nav class="col-12 col-sm-3 nav">
        <ul class="media-type">
            <li v-for="media in mediaTypes" :data-type="media.description" @click="switchMedia(media.component)">
                <p class="d-none d-md-block">{{ media.description }}</p>
            </li>
        </ul>
    </nav>
</div>
</div>
    `,

    data: function() {
        return {
            activeComponent: HIV101Component,
            
            mediaTypes: [
                { description: "LIVING WITH HIV", component: HIV101Component },
                { description: "HIV 101", component: LivingComponent },
                {  description: "Myths", component: MythsComponent },
            ]
        }
    },

    methods: {
        switchMedia(theComponent) {
            this.activeComponent = theComponent;
        }
    }
}