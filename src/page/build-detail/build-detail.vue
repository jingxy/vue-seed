<template>
  <div class="build-list">
              2344768
    {{$route.params.name}}
  </div>
</template>
<script>
  import api from "../../fetch/api"
  import * as webs from "../../components/js/WS";
  export default {
    data() {
      return {
          buildName : ''
      }
    },
    watch:{

    },
    created (){
     this.$route.params.name = this.buildName;
     console.log(this.$route)
    },
    mounted () {


    },
    components :{
    },
    methods : {

    }
  }

</script>
<style>

</style>
