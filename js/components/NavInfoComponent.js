import Myth1Component from './Myth1Component.js';
import Myth2Component from './Myth2Component.js';
import Myth3Component from './Myth3Component.js';

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
            activeComponent: Myth1Component,
            
            mediaTypes: [
                { description: "LIVING WITH HIV", component: Myth1Component },
                { description: "HIV 101", component: Myth2Component },
                {  description: "Myths", component: Myth3Component },
            ]
        }
    },

    methods: {
        switchMedia(theComponent) {
            this.activeComponent = theComponent;
        }
    }
}