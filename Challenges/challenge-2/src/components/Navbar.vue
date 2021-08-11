<template>
<div class="header">
  <div class="nav">
    <div class="nav-link">
      <a href="#">Where in the world?</a>
    </div>
    <div class="button-mode">
      <button>
        <ion-icon name="moon-outline"></ion-icon>
        Dark Mode
      </button>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: "Navbar"
}
</script>

<style scoped>
.header{
  width: 100%;
  height: 100%;
}

.nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 70px;
  padding-left: 5rem;
  padding-right: 5rem;
  background-color: var(--background-elements);
  box-shadow: 0 2px 4px 0 rgba(0,0,0,.1);
}

.nav-link a{
  font-size: 20px;
  text-decoration: none;
  color: var(--light-mode-text);
  font-weight: 900;
}

.button-mode button{
  position: relative;
  border: none;
  padding: .7rem;
  background-color: transparent;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 14px;
  font-weight: 300;
  cursor: pointer;
}

.button-mode button ion-icon{
  font-size: 16px;
  margin: 5px;
}
</style>
