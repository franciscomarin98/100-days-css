<template>
  <div class="container-cards">
    <CountryCard/>
    <CountryCard/>
    <CountryCard/>
    <CountryCard/>
    <CountryCard/>
    <CountryCard/>
    <CountryCard/>
    <CountryCard/>
  </div>
</template>

<script>
import CountryCard from "./CountryCard";

export default {
  name: "CountryListCard",
  components: {CountryCard}
}
</script>

<style scoped>
.container-cards {
  padding: 0 2.2rem 40px 2.2rem;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-wrap: wrap;
}


</style>
