<template>
  <div>
    <clogin></clogin>
    <cfooter></cfooter>
  </div>
</template>

<script>
import clogin from "@/components/login";
import cfooter from "@/components/footer";

export default {
  name: "login",
  data() {
    return {
      ll: ""
    };
  },
  components: { clogin, cfooter }
};
</script>

<style>
</style>
