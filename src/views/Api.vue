<template>
  <v-container grid-list-xl text-xs-center style="max-width:800px">
     <v-layout row wrap align-center justify-center>
        <AccordionPanel />
     </v-layout>
  </v-container>
</template>

<script>
import AccordionPanel from '../components/AccordionPanel'

export default {
  components: {
    AccordionPanel
  }
}
</script>
