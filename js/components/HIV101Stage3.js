export default{
    name: "stagethree",
        props: ["threesymptoms"],

    template:`
    <div>
    <div class="hiv-stages">
    <div class="stages-title">
        <div class="col-title">
            <h3>Stage Three -</h3>
            <h1>Symptomatic HIV</h1>
        </div>
        <div class="col-desc">
            <p>
                By this stage, a person’s immune system is severely damaged. They will. Be more likely to get serious infections or diseases that the body would otherwise be able to fight off.
            </p>
        </div>
    </div>

    <div class="container">
    <div class="row px-3 px-lg-0">
    <div class="col symptoms px-1 px-lg-0 pb-5" cols="4" lg="3" v-for="threesymptom in threesymptoms" :key="threesymptom.id" v-bind:threesymptom="threesymptoms">
                <div class="symptoms-img">
                    <img :src=" 'images/' + 'symptoms-' + threesymptom.image ">
                </div>

                <h6>{{threesymptom.title}}</h6>
            </div>
        </div>
    </div>
</div>
    </div>
    `,
}