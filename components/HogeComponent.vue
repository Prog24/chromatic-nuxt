<template>
  <v-chip outlined>
    <v-icon small left color="grey">mdi-tag</v-icon>
    {{ text }}
  </v-chip>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'nuxt-property-decorator'
@Component
export default class HogeComponent extends Vue {
  @Prop({ default: 'タグ', required: true }) text!: string
}
</script>
