<template>
 <v-toolbar
   id="core-toolbar"
   color="black"
   flat
   prominent
   style="background:black;"
 >
   <!-- <div class="v-toolbar-title" >
      <v-toolbar-title class="tertiary--text font-weight-light" >
        <router-link
         v-ripple
         class="toolbar-items"
         to="/main"
       >
        <div color="white">URCoach</div>
       </router-link>
     </v-toolbar-title>
   </div> -->
   <router-link
         v-ripple
         class="toolbar-items"
         to="/memberlist"
       >
        <div>URCoach</div>
       </router-link>
       <v-spacer/>
   <v-spacer/>
   <v-toolbar-items>
     <v-flex
       align-center
       layout
       py-2
     >
       <v-spacer/>
       <router-link
         v-ripple
         class="toolbar-items"
         to="/user-profile"
       >
         <v-icon color="white">mdi-account</v-icon>
       </router-link>
     </v-flex>
   </v-toolbar-items>
 </v-toolbar>
</template>

<script>

import {
  mapMutations
} from 'vuex'

export default {
  data: () => ({
    notifications: [
      'Mike, John responded to your email',
      'You have 5 new tasks',
      'You\'re now a friend with Andrew',
      'Another Notification',
      'Another One'
    ],
    title: null,
    responsive: false,
    responsiveInput: false
  }),

  watch: {
    '$route' (val) {
      this.title = val.name
    }
  },

  mounted () {
    this.onResponsiveInverted()
    window.addEventListener('resize', this.onResponsiveInverted)
  },
  beforeDestroy () {
    window.removeEventListener('resize', this.onResponsiveInverted)
  },

  methods: {
    ...mapMutations('app', ['setDrawer', 'toggleDrawer']),
    onClickBtn () {
      this.setDrawer(!this.$store.state.app.drawer)
    },
    onClick () {
      //
    },
    onResponsiveInverted () {
      if (window.innerWidth < 991) {
        this.responsive = true
        this.responsiveInput = false
      } else {
        this.responsive = false
        this.responsiveInput = true
      }
    }
  }
}
</script>


<style>
 #core-toolbar a {
   text-decoration:black;
 }
</style>
