<template>
  <div class="container">
    <Navbar/>
    <div class="form-container">

    </div>
    <CountryListCard/>
  </div>
</template>

<script>
import Navbar from "../components/Navbar";
import CountryListCard from "../components/CountryListCard";

export default {
  name: 'CountryApp',
  components: {CountryListCard, Navbar}
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@300;600;800&display=swap');

:root {
  --dark-blue-elements: hsl(209, 23%, 22%);
  --dark-mode-background: hsl(207, 26%, 17%);
  --light-mode-text: hsl(200, 15%, 8%);
  --light-mode-input: hsl(0, 0%, 52%);
  --light-mode-background: hsl(0, 0%, 98%);
  --background-elements: hsl(0, 0%, 100%);
}

* {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}

#app {
  height: 100vh;
  max-width: 1440px;
  min-width: 375px;
  font-family: 'Nunito Sans', sans-serif;
  background-color: var(--light-mode-background);
  position: relative;
  margin: 0 auto;
}

.container {
  width: 100%;
  background-color: inherit;
}

.form-container {
  height: 120px;
  background-color: transparent;

}
</style>
