export default{data(){return{idSelected:0,items:[{id:0,html:`
            <div class="row">
            <div class="col m4 s12">
              <img
                src="./src/img/1-QR.png"
                alt="Star"
                 
                
                style="width: 100%; max-width: 120px"
              />
            </div>
            <div class="col m8 s12 flex--align-center" style="text-wrap: balance;">
              <p class="mt-0">
                Base Nacional Comum Curricular BNCC
              </p>
            </div>
          </div>
              `},{id:1,html:`

          <div class="row">
            <div class="col m4 s12">
              <img
                src="./src/img/2-QR.png"
                alt="Star"
                 
                
                style="width: 100%; max-width: 120px"
              />
            </div>
            <div class="col m8 s12 flex--align-center" style="text-wrap: balance;">
              <p class="mt-0">
                Currículo de Referência em Tecnologia e Computação do Centro de
                Inovação para a Educação Brasileira (CIEB)
              </p>
            </div>
          </div>
              `},{id:2,html:`
            <div class="row">
            <div class="col m4 s12">
              <img
                src="./src/img/3-QR.png"
                alt="Star"
                 
                
                style="width: 100%; max-width: 120px"
              />
            </div>
            <div class="col m8 s12 flex--align-center" style="text-wrap: balance;">
              <p class="mt-0">
                BNCC da Computação
              </p>
            </div>
          </div>
              `},{id:3,html:`
            <div class="row">
            <div class="col m4 s12">
              <img
                src="./src/img/4-QR.png"
                alt="Star"
                 
                
                style="width: 100%; max-width: 120px"
              />
            </div>
            <div class="col m8 s12 flex--align-center" style="text-wrap: balance;">
              <p class="mt-0">
                Política Nacional de Educação Digital - Lei 14.533
              </p>
            </div>
          </div>
              `}]}},methods:{menu(e,l){for(var i=document.getElementsByClassName("nucleos-item"),s=0;s<i.length;s++)i[s].classList.remove("selected");e.target.classList.add("selected"),this.idSelected=l}},mounted(){},template:`
     
          <div class="content_menu_01" :data-order="idSelected">
            <div class="box-attention content px-24 py-16 px-8-mobile" >
              <div class="row">
                <div class="col m3 s3 nucleos-menu">
                  <ul class="ml-16">
                    <li @click="menu($event, 0)" class="pointer nucleos-item selected">2017</li>
                    <li @click="menu($event, 1)" class="pointer nucleos-item">2018</li>
                    <li @click="menu($event, 2)" class="pointer nucleos-item">2022</li>
                    <li @click="menu($event, 3)" class="pointer nucleos-item">2023</li>
                  </ul>
                </div>
                <div class="col m9 s9 flex--align-center" v-html="items[idSelected].html">
                  
                </div>
              </div>
            </div>
          </div>

    
    `};