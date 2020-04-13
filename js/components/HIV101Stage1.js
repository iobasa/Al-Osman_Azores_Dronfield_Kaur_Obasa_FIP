export default {
    name: "stageone",

    props: ["onesymptoms"],

    template: `
    <div>
    <div class="hiv-stages">
    <div class="stages-title">
        <div class="col-title">
            <h3>Stage One -<br>Primary Infection</h3>
            <h1>Acute HIV</h1>
        </div>
        <div class="col-desc">
            <p>
                This stage is around one to four weeks after getting HIV. These flu-like symptoms can be so mild that you don’t notice them but the amount of virus in your bloostream is quite high. As a result, the infection spreads more easily.
            </p>
        </div>
    </div>

    <div class="container">
        <div class="row px-3">
            <div class="col symptoms px-1 pb-5" cols="4" v-for="symptom in onesymptoms" :key="symptom.id" v-bind:symptom="onesymptoms">
                <div class="symptoms-img">
                    <img :src=" 'images/' + 'symptoms-' + symptom.image ">
                </div>

                <h6>{{symptom.title}}</h6>
            </div>
        </div>
    </div>
</div>
    </div>

    `,
}