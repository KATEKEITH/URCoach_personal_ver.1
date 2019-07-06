<template>
 <v-container
   fill-height
   fluid
 >
   <v-layout
     justify-center
     align-center
   >
     <v-flex xs12>
       <material-card
         color="black"
         title= ""
       >
       <div>{{this.coachName}}</div>
        <img src="https://placeimg.com/1200/480/men"/>
       </material-card>

       <material-card>
         <v-card-text>
           <h1 class="font-weight-light mb-4">About Coach</h1>
           <!-- 'I will be the leader of a company that ends up being worth billions of dollars, because I got the answers. I understand culture. I am the nucleus. I think that’s a responsibility that I have, to push possibilities, to show people, this is the level that things could be at.' -->
           {{coachInfo}}
         </v-card-text>
       </material-card>

       <material-card>
         <v-card-text>
           <h3>Link</h3>
           <v-icon>mdi-package-up</v-icon>
          <span>
          <a href= "https://www.instagram.com/hongsick/">{{coachLink}}</a>
          <p>{{id}}</p>
          </span>
         </v-card-text>
       </material-card>

        <material-card>
         <v-card-text>
           <h3>career</h3>
           <v-icon>mdi-package-up</v-icon>
          <span>
          {{coachResume1}}
          </span>
          <div>
          <v-icon>mdi-package-up</v-icon>
          <span>
          {{coachResume2}}
          </span>
          </div>
          <div>
          <v-icon>mdi-package-up</v-icon>
          <span>
           {{coachResume3}}
          </span>
          </div>
         </v-card-text>
       </material-card>

       <material-card>
         <div>
         <div class="mapouter">
         <div class="gmap_canvas">
            <iframe
              id="gmap_canvas"
              width="100%"
              height="100%"
              src="https://maps.google.com/maps?q=google&t=&z=13&ie=UTF8&iwloc=&output=embed"
              frameborder="0"
              scrolling="no"
              marginheight="0"
              marginwidth="0"
             />
          </div>
          </div>
          </div>
         </material-card>
      
       <!--  -->
         <!-- <div class="row">
           <v-btn class="mx-0 font-weight-light" color="black" v-on:click="doc_del_rendar"  >상담받기</v-btn>
         </div> -->
          <v-btn class="mx-0 font-weight-light" color="black" @click="modify()">modify</v-btn>
          <v-btn class="mx-0 font-weight-light" color="black" @click="deleteById">delete</v-btn>
          <!-- <button class="btn btn-danger" @click="del()">delete</button> -->
      
     </v-flex>
   </v-layout>
 </v-container>
</template>

<script>
const leader = 'I will be the leader of a company that ends up being worth billions of dollars, because I got the answers. I understand culture. I am the nucleus. I think that’s a responsibility that I have, to push possibilities, to show people, this is the level that things could be at.'
const leaderShort = leader.slice(0, 105) + '...'
// const material = 'About Coach'
const small = 'About Coach'
const middle = ''

import axios from 'axios'
export default {
  name:'typography',
  props:['id'],
  data(){
  return {
    context: 'http://localhost:3000/coach',
     
    typography: {
     'small': ['Small Tag', small, 'h2'],
     '': ['Paragraph', leader, 'p']
   },
      coachId: this.$route.params.coachId,
      coachName: '',
      coachInfo:'',
      coachLink:'',
      coachResume1:'',
      coachResume2:'',
      coachResume3:''
    }
  },
  //     watch:{
  //      '$route':function(from,to){
  //       this.init()
  //    }
  //  },
  watch:{
    '$route': 'read'
  },
   mounted(){
       this.doc_del_rendar();
   },
   methods : {
     read(){
       axios.get(`http://localhost:3000/coach/${this.coachId}`)
       .then( res => {

          this.coachName = res.data.coachName
          this.coachInfo = res.data.coachInfo
          this.coachLink = res.data.coachLink
          this.coachResume1 = res.data.coachResume1
          this.coachResume2 = res.data.coachResume2
          this.coachResume3 = res.data.coachResume3
       })
        .catch((e)=>{
           alert('안됨 ㅠㅠ')
         })
     },
    //  init(){
    //    axios.get(`${this.context}`).then((res)=>{
    //      this.coach = res.data
    //    })
    //    .catch((e)=>{
    //      alert('ERROR')
    //    })
    //  },
     modify(){
       axios.get(`http://localhost:3000/coach/${this.coachId}`)
       .then( res => {

          this.coachId = res.data.coachId
          this.coachName = res.data.coachName
          this.password = res.data.password
          this.coachLoc = res.data.coachLoc
          this.coachInfo = res.data.coachInfo
          this.coachLink = res.data.coachLink
          this.coachResume1 = res.data.coachResume1
          this.coachResume2 = res.data.coachResume2
          this.coachResume3 = res.data.coachResume3
          this.photo = res.data.photo
          
          this.$router.push({
            name: 'MemberModify',
            params: {
              coachId :this.coachId,
              coachName :this.coachName,
              password: this.password,
              coachLoc: this.coachLoc,
              coachInfo:this.coachInfo,
              coachLink:this.coachLink,
              coachResume1:this.coachResume1,
              coachResume2:this.coachResume2,
              coachResume3:this.coachResume3,
              photo:this.photo
            }
          })
          
       })
       .catch(e =>{
         alert('안됨 ㅠㅠ')
       })
     },
    //  del(){
    //    del(this.coachId).then(()=>{
    //      this.$router.push('/typography')
    //    })
    //  },
    deleteById(){
      axios.delete(`http://localhost:3000/coach/${this.coachId}`)
      .then( res => {
              alert(`deletebyId SUCCESS`)
      })
      .catch( e=>{
        alert('ERROR')
      })
    },
      doc_del_rendar(){
               this.$modal.show(DelPopup,{
                   hot_table : 'data',
                   modal : this.$modal },{
                       name: 'dynamic-modal',
                       width : '330px',
                       height : '130px',
                       draggable: true,
           })
       }
   },
   beforeMount () {
     this.read()
   }
}
</script>

<style lang="scss">
 .tim-note {
   bottom: 10px;
   color:white;
   display: block;
   font-weight: 400;
   font-size: 13px;
   line-height: 13px;
   left: 0;
   margin-left: 20px;
   width: 260px;
 }

.gmap_canvas {
 overflow:hidden;
 background:none!important;
 height:100%;
 width:100%;
}
</style>


