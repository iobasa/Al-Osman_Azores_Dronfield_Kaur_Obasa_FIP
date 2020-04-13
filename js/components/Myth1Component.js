export default {
    name: "TheMyth1Component",

    // The page for the HIV 101 Page, please code around the content already shown

    template: `
    <section>

    <section class="videoCont">
    <iframe width="560" height="315" src="https://www.youtube.com/embed/{{currentMediaDetails.video_id}}" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    
                </section>

                <section class="mythsfactsContainer">
                    <section class="mythContent">
                        <h3>Myths</h3>
                        <h2>{{currentMediaDetails.myth}}</h2>
                    </section>

                    <section class="factsContent">
                        <h3>Facts</h3>
                        <h2>{{currentMediaDetails.fact_title}}</h2>
                        <p v-html="currentMediaDetails.fact_description">
                            description
                        </p>

                        <h3>Learn More</h3>
                        <!-- MAKE LINKS DYNAMIC -->
                        <a :href="currentMediaDetails.link1">HIV Prevention</a>
                        <br>
                        <a :href="currentMediaDetails.link2">HIV Testing</a>

                    </section>
                </section>
        
    </section>
    `,

    data: function () {
        return {
            currentMediaDetails: {}
        }
    },

    created: function(){
        this.retrieveVideoContent();
    },

    methods: {

        retrieveVideoContent() {
            // fetch all the video content here (don't care about filtering, genre etc at this point)
            // debugger;

        if (localStorage.getItem["cachedVideo"]) {
            this.currentMediaDetails = this.allRetrieveVideos[0];

        }else {
            let url =  `./admin/index.php?media=content`;

            fetch(url)
            .then(res => res.json())
            .then(data => {
                localStorage.setItem("cachedVideo", JSON.stringify(data));

                this.currentMediaDetails = data[0];
            })

        }


        },

        loadNewMovie(movie) {
            this.currentMediaDetails = movie;
        }
    }
}