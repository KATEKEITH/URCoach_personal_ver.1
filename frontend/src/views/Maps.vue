<template>
 <v-container
   fill-height
   fluid
   grid-list-xl
    
 >
   <v-layout wrap>
    
     <v-flex
       md12
       sm12
       lg4
     >
       <material-card>
         <!-- <a href="typography"><img: src="coach.photo"/></a> -->
         <h4 class="title font-weight-light">{{coach.coachName}}</h4>
         <p class="category d-inline-flex font-weight-light">
           <span class="blue--text">{{coach.coachLoc}}</span>
         </p> 
          
         <template slot="actions">
           <span class="caption grey--text font-weight-light">updated 4 minutes ago</span>
         </template>
        
       </material-card>
     </v-flex>
       <v-flex
       md12
       sm12
       lg4
     >
       <material-card>
         <img src="https://demos.creative-tim.com/vue-material-dashboard/img/marc.aba54d65.jpg">
         <h4 class="title font-weight-light"></h4>
         <p class="category d-inline-flex font-weight-light">
           <span class="blue--text"></span>
         </p> 
          
         <template slot="actions">
           <span class="caption grey--text font-weight-light">updated 4 minutes ago</span>
         </template>
        
       </material-card>
     </v-flex>
     <!-- <v-flex
       md12
       sm12
       lg4
     >
       <material-card>
         <a href="typography"><img src= {{photo}}/></a>
         <h4 class="title font-weight-light">{{coachName}}</h4>
         <p class="category d-inline-flex font-weight-light">
           <span class="blue--text">{{coachLoc}}</span>
         </p> 
          
         <template slot="actions">
           <span class="caption grey--text font-weight-light">updated 4 minutes ago</span>
         </template>
       </material-card>
     </v-flex>
   
         <v-flex
       md12
       sm12
       lg4
     >
       <material-card>
         <a href="typography"><img src= {{photo}}/></a>
         <h4 class="title font-weight-light">{{coachName}}</h4>
         <p class="category d-inline-flex font-weight-light">
           <span class="blue--text">{{coachLoc}}</span>
         </p> 
          
         <template slot="actions">
           <span class="caption grey--text font-weight-light">updated 4 minutes ago</span>
         </template>
       </material-card>
     </v-flex>
         <v-flex
       md12
       sm12
       lg4
     >
       <material-card>
         <a href="typography"><img src= {{photo}}/></a>
         <h4 class="title font-weight-light">{{coachName}}</h4>
         <p class="category d-inline-flex font-weight-light">
           <span class="blue--text">{{coachLoc}}</span>
         </p> 
          
         <template slot="actions">
           <span class="caption grey--text font-weight-light">updated 4 minutes ago</span>
         </template>
       </material-card>
     </v-flex>
    
        <v-flex
       md12
       sm12
       lg4
     >
       <material-card>
         <a href="typography"><img src= {{photo}}/></a>
         <h4 class="title font-weight-light">{{coachName}}</h4>
         <p class="category d-inline-flex font-weight-light">
           <span class="blue--text">{{coachLoc}}</span>
         </p> 
          
         <template slot="actions">
           <span class="caption grey--text font-weight-light">updated 4 minutes ago</span>
         </template>
       </material-card>
     </v-flex>
         <v-flex
       md12
       sm12
       lg4
     >
       <material-card>
         <a href="typography"><img src= {{photo}}/></a>
         <h4 class="title font-weight-light">{{coachName}}</h4>
         <p class="category d-inline-flex font-weight-light">
           <span class="blue--text">{{coachLoc}}</span>
         </p> 
          
         <template slot="actions">
           <span class="caption grey--text font-weight-light">updated 4 minutes ago</span>
         </template>
       </material-card>
     </v-flex> -->
  
      <!-- <v-flex>
       <v-btn class="mx-0 font-weight-light" color="black">
        more
     </v-btn>
      </v-flex> -->
   </v-layout>
 </v-container>
</template>

<script>
import axios from 'axios'

export default {
 data () {
   return {
      context: 'http://localhost:3000/coaches',
      coaches: []
   }
 },
 methods:{

 },
 created(){
   axios.get(`${this.context}`).then((res) =>{
     this.coaches = res.data;
   })
 }
}
</script>

