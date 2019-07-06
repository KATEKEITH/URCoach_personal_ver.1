<template>
  <v-container
    fill-height
    fluid
    grid-list-xl>
    <v-layout
      justify-center
      wrap
    >
    <!-- <material-card>
     
    </material-card> -->
    
      <v-flex
        xs12
        md8
      >
        <material-card
          color="black"
          title="Edit Profile"
          text="Complete your profile"
        >
          <v-form>
            <v-container py-0>
              <v-layout wrap>
                 <v-flex
                  xs12
                  md4
                >
                  <v-text-field
                    label="Photo"
                     v-model="photo"
                    />
                </v-flex>
                <v-flex
                  xs12
                  md4
                >
                  <v-text-field
                    label="Id"
                    v-model="coachId"
                    />
                </v-flex>
                    <v-flex
                  xs12
                  md4
                >
                  <v-text-field
                    label="Password"
                    v-model="password"
                    />
                </v-flex>
                <v-flex
                  xs12
                  md4
                >
                  <v-text-field
                    class="purple-input"
                    label="Coach Name"
                    v-model="coachName"
                  />
                </v-flex>
                  <v-flex
                  xs12
                  md4>
                  <v-text-field
                    label="Location"
                    class="purple-input"
                    v-model="coachLoc"
                    />
                </v-flex>
                <v-flex
                  xs12
                  md6
                >
                  <v-text-field
                    label="Link"
                    class="purple-input"
                    v-model="coachLink"
                    />
                </v-flex>
                <v-flex
                  xs12
                  md12>
                  <v-text-field
                    label="Career"
                    class="purple-input"
                    v-model="coachResume1"
                    />
                </v-flex>
                <v-flex
                  xs12
                  md4>
                  <v-text-field
                    label="Career"
                    class="purple-input"
                    v-model="coachResume2"
                    />
                </v-flex>
               <v-flex
                  xs12
                  md4>
                  <v-text-field
                    label="Career"
                    class="purple-input"
                    v-model="coachResume3"
                    />
                </v-flex>
                <v-flex xs12>
                  <v-textarea
                    class="purple-input"
                    label="About Coach"
                    v-model="coachInfo"
                  />
                </v-flex>

                <v-flex
                  xs12
                  text-xs-right
                >
                  <v-btn class="mx-0 font-weight-light" color="black" @click="handleSaveClick">OK</v-btn>
                </v-flex>

              </v-layout>
            </v-container>
          </v-form>
        </material-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>

import axios from 'axios'

export default {
    data() {
      return {
            context:'http://localhost:3000/coach',
            coachId: this.$route.params.coachId,
            coachName: '',
            password: '',
            coachLoc: '',
            coachInfo: '',
            coachLink: '',
            coachResume1: '',
            coachResume2: '',
            coachResume3: '',
            photo:''
      }
    },
    beforeRouteEnter(to,from,next){
      alert('hi')
    },
    created(){
        axios.get(`${this.context}/${coachId}`)
        .then((res => {
                // this.coachId = `${res.data.coachId}`
                // this.coachName =`${res.data.coachName}`
                // this.coachInfo = `${res.data.coachInfo}`
                // this.coachLink = `${res.data.coachLink}`
                // this.coachResume1 = `${res.data.coachResume1}`
                // this.coachResume2 = `${res.data.coachResume2}`
                // this.coachResume3 = `${res.data.coachResume3}`
                // this.photo = `${res.data.photo}`
                this.coach = res.data;
        }))
    },
    methods: {
        read() {
            axios.get(`http://localhost:3000/coach/${this.coachId}`)
            .then( res => {
                this.coachId = res.data.coachId
                this.coachName =res.data.coachName
                this.password = res.data.password
                this.coachInfo = res.data.coachInfo
                this.coachLink = res.data.coachLink
                this.coachResume1 = res.data.coachResume1
                this.coachResume2 = res.data.coachResume2
                this.coachResume3 = res.data.coachResume3
                this.photo = res.data.photo
            })
            .catch(e =>{
                alert('ERROR')
                this.$router.push({
                    name:'Table List'
                })
            })
            
        },
        handleSaveClick(){
        
        let data = {
            coachId : this.coachId,
            coachName : this.coachName,
            password : this.password,
            coachLoc: this.coachLoc,
            coachInfo : this.coachInfo,
            coachLink : this.coachLink,
            coachResume1 : this.coachResume1,
            coachResume2 : this.coachResume2,
            coachResume3 : this.coachResume3,
            photo : this.photo,
            }
            let headers = {
            'Content-Type': 'application/json',
            'Authorization':'JWT fefege..'
            }
            axios.put(`${this.context}/${this.coachId}`,
            JSON.stringify(data),
                { headers: headers })
            .then(() => {
                alert(`${this.coachId}가 수정되었습니다.`)
                this.$router.push({
                    name : 'Typography',
                    params : {
                        coachId: this.coachId
                    }
                })
            })
            .catch(e => {
                alert('ERROR')
                this.$router.push({
                    name : 'MemberList'
                })
            })

        }
        // beforeMount(){
        //     this.read()
        // }
 }  

}

</script>
