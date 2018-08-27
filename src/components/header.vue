<template>
    <header class="header">
        <div>
            {{logo}}
        </div>
        <ul class="nav">
            <li v-for="nav in navs">
                {{nva}}
            </li>
        </ul>
    </header>
</template>

<script>
export default {
  data() {
    return {
      logo: "",
      navs: ["top", "middle"]
    };
  }
};
</script>

<style>
</style>

