export default {
    name: "prevent",
    props: ["preventions"],

    template: `
    <div>
    <div class="prevention">
        <section class="title">
            <h1>How do you prevent it?</h1>
        </section>

        <div class="container">
        <div class="row px-3 mt-5  px-lg-4 ">
        <div class="col symptoms px-1 pb-5" cols="6" md="4" v-for="prevention in preventions" :key="prevention.id" v-bind:prevention="preventions">
                    <div class="symptoms-img">
                        <img :src=" 'images/' + 'prevent-' + prevention.image">
                    </div>

                    <h6>{{prevention.title}}</h6>
                </div>
            </div>
        </div>
    </div>
    </div>
    `,
}