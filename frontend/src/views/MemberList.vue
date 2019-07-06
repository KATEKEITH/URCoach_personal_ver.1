<template>
 <v-container
   fill-height
   fluid
   grid-list-xl
 >
   <v-layout
     justify-center
     wrap
     v-for="coach in coaches" :key="coach"
   >
    <div>
     <v-flex
       md12
     >
       <material-card
         color="black"
         flat
         full-width
         title=""
       >
       <a @click="detail(coach)"><img src= "https://placeimg.com/100/100/any"/></a>
       <!-- <img src= "https://placeimg.com/100/100/any"/>    -->
       <!-- <a href="typography" ><img src= "https://placeimg.com/100/100/any"/></a> -->
       <!-- <a href="typography"><img src= {{coach.photo}}/></a> -->
       <!-- <a href="typography"><img :src= "coach.photo"/></a> -->
              {{coach.coachId}}
              <div>{{ coach.coachName }}</div>
              <div>{{ coach.coachLoc }}</div>
        
       </material-card>
     </v-flex>
     </div>


    <!-- <div>
     <v-flex
       md12
     >
       <material-card
         color="black"
         flat
         full-width
         title=""
       >   
       <a href="typography"><img src="https://placeimg.com/100/100/any"/></a>
           <template>
              <div>{{ coach.coachName }}</div>
              <div>{{ coach.coachLoc }}</div>
           </template>
       </material-card>
     </v-flex>
     </div> -->
     
      <!-- <div>
     <v-flex
       md12
     >
       <material-card
         color="black"
         flat
         full-width
         title=""
       >   
       <a href="typography"><img src="https://placeimg.com/100/100/any"/></a>
           <template>
              <div>{{ coach.coachName }}</div>
              <div>{{ coach.coachLoc }}</div>
           </template>
       </material-card>
     </v-flex>
     </div> -->

   </v-layout>
 </v-container>
</template>

<script>
import axios from 'axios'

export default {
 data () {
   return {
      context: 'http://localhost:3000/coach',
      coaches: []
   }
 },
  methods:{
   detail(coach){
    alert(`${coach.coachId}`)
    this.$router.push({name:'Typography', params:{ coachId:`${coach.coachId}`}})
  }
 },
  created(){
   axios.get(`${this.context}`).then((res) =>{
     this.coaches = res.data;
     alert(this.coaches)
   })
 }
}
</script>
<style scoped>
#bg{width:100%!important}
</style>


