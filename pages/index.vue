<template>
  <div>
    <div class="container mt-3">
      <div class="h1 text-center text-success">database-of-countries</div>
      <div class="table-responsive">
        <table class="table table-dark">
          <thead>
            <tr>
              <th>ID</th>
              <th>Country Name</th>
              <th>Dialing Code</th>
              <th>Letters 2</th>
              <th>Letters 3</th>
              <th>Flag</th>
            </tr>
            <tr v-for='(e,i) of data' :key="i" >
              <td>{{e.id}}</td>
              <td>{{e.country_name}}</td>
              <td>{{e.dialing_code}}</td>
              <td>{{e.letters_2}}</td>
              <td>{{e.letters_3}}</td>
              <td> <img class='img-fluid' :src="'home/flags/'+e.flag+'.svg'" :alt="e.flag"> </td>
            </tr>
          </thead>
        </table>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  head() {
    return {
      title: "Home" + this.$config.env.APP_TITLE,
    }
  },
  name: "PP_Home",
  layout: 'default',
  data() {
    return {
      data: []
    }
  },
  methods: {},
  created(){
    fetch('/home/data.json',{
      method: 'GET'
    })
    .then( res => {
      if(res.ok===true) return res.json();
    })
    .then( SR => {
      if( SR!==undefined ){
        this.data = SR;
      }
    })
  }
}
</script>
