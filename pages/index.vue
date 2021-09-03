<template>
  <section class="mx-8">


    <div class="my-4 text-4xl text-center text-green-600">Data - By Afancy</div>
    <div class="overflow-auto">
      <table class="w-full text-center table-auto">
        <thead>
          <tr class="bg-emerald-600">
            <th class="p-2 border border-emerald-600 whitespace-nowrap">ID</th>
            <th class="p-2 border border-emerald-600 whitespace-nowrap">Country Name</th>
            <th class="p-2 border border-emerald-600 whitespace-nowrap">Dialing Code</th>
            <th class="p-2 border border-emerald-600 whitespace-nowrap">Letters 2</th>
            <th class="p-2 border border-emerald-600 whitespace-nowrap">Letters 3</th>
            <th class="p-2 border border-emerald-600 whitespace-nowrap">Flag</th>
          </tr>
          <tr class="hover:bg-emerald-600" v-for='(e,i) of data' :key="i" >
            <td class="p-2 border border-emerald-600">{{e.id}}</td>
            <td class="p-2 border border-emerald-600">{{e.country_name}}</td>
            <td class="p-2 border border-emerald-600">{{e.dialing_code}}</td>
            <td class="p-2 border border-emerald-600">{{e.letters_2}}</td>
            <td class="p-2 border border-emerald-600">{{e.letters_3}}</td>
            <td class="p-2 border border-emerald-600"> <img :src="'https://cdn.jsdelivr.net/npm/organized-data@2.0.0/flags/svg/'+e.flag+'.svg'" :alt="e.flag"> </td>
          </tr>
        </thead>
      </table>
    </div>


  </section>
</template>


<script>
export default {
  head() {
    return {
      title: "Home" + this.$config.base.APP_TITLE,
    }
  },
  data() {
    return {
      data: []
    }
  },
  created(){
    this.$axios({
      method: 'get',
      url: 'https://cdn.jsdelivr.net/npm/organized-data@2.0.0/src/countries.min.json'
    })
    .then(d=>{
      this.data = d.data;
    });
  }
}
</script>
