<template>
  <Navbar/>
  <div class="container">
    <div class="header-container">
      <Input/>
      <Dropdown/>
    </div>
    <div class="body-container">
      <CountryListCard/>
    </div>
  </div>
</template>

<script>
import Navbar from "../components/Navbar";
import Input from "../components/Input";
import Dropdown from "../components/Dropdown";
import CountryListCard from "../components/CountryListCard";

export default {
  name: 'CountryApp',
  components: {CountryListCard, Dropdown, Input, Navbar}
}
</script>

<style>

</style>
