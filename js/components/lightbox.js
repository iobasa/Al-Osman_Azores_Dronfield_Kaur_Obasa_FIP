import Myth2Component from './Myth2Component.js';
import Myth1Component from './Myth1Component.js';
import Myth3Component from './Myth3Component.js';
import Myth4Component from './Myth4Component.js';
import Myth5Component from './Myth5Component.js';
import Myth6Component from './Myth6Component.js';

export default{
    template: `
    <div class="container ">

    <!-- Button trigger modal -->
    <div class="row px-5 p-md-3 my-lg-5 justify-content-center">

    <div class="mythsbuttons px-3 py-3 my-3 mx-md-4 m-lg-3 p-lg-3 col-md-3 col-12">

<div type="button" data-toggle="modal" data-target="#exampleModalCenter1">
<div>
<h1>I can get HIV from hugging someone who has HIV.</h1>
<img src="images/icon-circle.svg" class="icon"> 
</div>
</div>

</div>




<!-- button -->
<div class="mythsbuttons px-3 py-3 my-3 mx-md-4 m-lg-3 p-lg-3 col-md-3 col-12">

<div type="button" data-toggle="modal" data-target="#exampleModalCenter2">
<div>
<h1>I can treat HIV without any medical help.</h1>
<img src="images/icon-circle.svg" class="icon"> 
</div>
</div>

</div>

<!-- button -->
<div class="mythsbuttons px-3 py-3 my-3 mx-md-4 m-lg-3 p-lg-3 col-md-3 col-12">

<div type="button" data-toggle="modal" data-target="#exampleModalCenter">
<div>
<img src="images/myth-1.svg"> 
</div>
</div>

</div>

<!-- button -->
<div class="mythsbuttons px-3 py-3 my-3 mx-md-4 m-lg-3 p-lg-3 col-md-3 col-12">

<div type="button" data-toggle="modal" data-target="#exampleModalCenter">
<div>
<img src="images/myth-2.svg"> 
</div>
</div>

</div>

<!-- button -->
<div class="mythsbuttons px-3 py-3 my-3 mx-md-4 m-lg-3 p-lg-3 col-md-3 col-12">
<div type="button" data-toggle="modal" data-target="#exampleModalCenter3">
<div>
<h1>If you get HIV, your life is over.</h1>
<img src="images/icon-circle.svg" class="icon"> 
</div>
</div>

</div>

<!-- button -->
<div class="mythsbuttons px-3 py-3 my-3 mx-md-4 m-lg-3 p-lg-3 col-md-3 col-12">

<div type="button" data-toggle="modal" data-target="#exampleModalCenter4">
<div>
<h1>If I get infected fluid from an HIV+ person, I will get HIV.</h1>
<img src="images/icon-circle.svg" class="icon"> 
</div>
</div>

</div>

<!-- button -->
<div class="mythsbuttons px-3 py-3 my-3 mx-md-4 m-lg-3 p-lg-3 col-md-3 col-12">

<div type="button" data-toggle="modal" data-target="#exampleModalCenter5">
<div>
<h1>You can only get HIV if you’re gay.</h1>
<img src="images/icon-circle.svg" class="icon"> 
</div>
</div>

</div>

<!-- button -->
<div class="mythsbuttons px-3 py-3 my-3 mx-md-4 m-lg-3 p-lg-3 col-md-3 col-12">

<div type="button" data-toggle="modal" data-target="#exampleModalCenter6">
<div>
<h1>Having HIV means that person is dirty or sexually promiscuous.</h1>
<img src="images/icon-circle.svg" class="icon"> 
</div>
</div>

</div>

<!-- button -->
<div class="mythsbuttons px-3 py-3 my-3 mx-md-4 m-lg-3 p-lg-3 col-md-3 col-12">

<div type="button" data-toggle="modal" data-target="#exampleModalCenter">
<div>
<img src="images/myth-3.svg"> 
</div>
</div>

</div>

</div>
















<!-- Modal -->
<div class="modal fade " id="exampleModalCenter1" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
    <div class="modal-dialog modal-lg modal-dialog-centered">
    <div class="modal-content" role="document">
    <div id="modal-facts___BV_modal_header_" class="modal-header">
        <div type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </div>
      </div>
    <div class="modal-content modal-body">
      
    
      <myth1/>
    
    </div>
    </div>
    </div>
    </div>

    <!-- Modal -->
    <div class="modal fade " id="exampleModalCenter2" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
        <div class="modal-dialog modal-lg modal-dialog-centered">
        <div class="modal-content" role="document">
        <div id="modal-facts___BV_modal_header_" class="modal-header">
            <div type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </div>
          </div>
        <div class="modal-content modal-body">
          
        
          <myth2/>
        
        </div>
        </div>
        </div>
        </div>

        <!-- Modal -->
        <div class="modal fade " id="exampleModalCenter3" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
            <div class="modal-dialog modal-lg modal-dialog-centered">
            <div class="modal-content" role="document">
            <div id="modal-facts___BV_modal_header_" class="modal-header">
                <div type="button" class="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </div>
              </div>
            <div class="modal-content modal-body">
              
            
              <myth3/>
            
            </div>
            </div>
            </div>
            </div>

            <!-- Modal -->
            <div class="modal fade " id="exampleModalCenter4" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                <div class="modal-dialog modal-lg modal-dialog-centered">
                <div class="modal-content" role="document">
                <div id="modal-facts___BV_modal_header_" class="modal-header">
                    <div type="button" class="close" data-dismiss="modal" aria-label="Close">
                      <span aria-hidden="true">&times;</span>
                    </div>
                  </div>
                <div class="modal-content modal-body">
                  
                
                  <myth4/>
                
                </div>
                </div>
                </div>
                </div>


                <!-- Modal -->
                <div class="modal fade " id="exampleModalCenter5" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                    <div class="modal-dialog modal-lg modal-dialog-centered">
                    <div class="modal-content" role="document">
                    <div id="modal-facts___BV_modal_header_" class="modal-header">
                        <div type="button" class="close" data-dismiss="modal" aria-label="Close">
                          <span aria-hidden="true">&times;</span>
                        </div>
                      </div>
                    <div class="modal-content modal-body">
                      
                    
                      <myth5/>
                    
                    </div>
                    </div>
                    </div>
                    </div>


                    <!-- Modal -->
                    <div class="modal fade " id="exampleModalCenter6" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                        <div class="modal-dialog modal-lg modal-dialog-centered">
                        <div class="modal-content" role="document">
                        <div id="modal-facts___BV_modal_header_" class="modal-header">
                            <div type="button" class="close" data-dismiss="modal" aria-label="Close">
                              <span aria-hidden="true">&times;</span>
                            </div>
                          </div>
                        <div class="modal-content modal-body">
                          
                        
                          <myth6/>
                        
                        </div>
                        </div>
                        </div>
                        </div>

    </div>
    `,

    components: {
        myth2: Myth2Component,
        myth1: Myth1Component,
        myth3: Myth3Component,
        myth4: Myth4Component,
        myth5: Myth5Component,
        myth6: Myth6Component,
    }

}