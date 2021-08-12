<template>
  <div class="card">
    <div class="card-header">
      <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Flag_of_Germany.svg/200px-Flag_of_Germany.svg.png"
          alt="bandera">
    </div>
    <div class="card-body">

    </div>
  </div>
</template>

<script>
export default {
  name: "CountryCard"
}
</script>

<style scoped>
.card {
  height: 18rem;
  width: 16rem;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, .1);
  border-radius: .5rem;
  margin-bottom: 1.5rem;
}

.card .card-header {
  height: 10rem;

}

.card .card-header img {
  height: inherit;
  width: 100%;
  border-top-left-radius: .5rem;
  border-top-right-radius: .5rem;
}

.card .card-body {
  padding: 1rem;
}
</style>
