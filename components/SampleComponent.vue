<template>
  <div class="hoge">hogehoge</div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
@Component
export default class SampleComponent extends Vue {}
</script>

<style scoped>
.hoge {
  border: 1px solid red;
  width: 130px;
  height: 30px;
}
</style>
