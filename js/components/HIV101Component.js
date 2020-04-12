export default {
    name: "TheHIV101Component",

    template: `
    <section>
    
        <div class="row">
            <div class="col-12 order-2 order-md-1 col-md-3 media-container">
                <h1 class="media-title">{{currentMediaDetails.title}}</h1>
                <p class="media-details" v-html="currentMediaDetails.description">Storyline here</p>
            </div>
        </div>
        
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