<template>
  <Page>
    <ActionBar class="fas" title="nm-recipes">
      <Label text="nm-recipes" fontSize="24" verticalAlignment="center" />
      <ActionItem
        ios.systemIcon="7"
        ios.position="right"
        text="Compose"
        @tap="toEdit"
      />
    </ActionBar>

    <!-- Recipe List -->
    <ScrollView orientation="vertical">
      <StackLayout backgroundColor="#ffffff">
        <GridLayout
          v-for="n in numOfRecipes"
          :key="n"
          height="260"
          columns="*"
          rows="40, 220"
        >
          <Label
            text="pudding"
            row="0"
            col="0"
            backgroundColor="#ffffff"
            horizontalAlignment="center"
          />

          <Image
            row="1"
            col="0"
            src="https://lh3.googleusercontent.com/pkjHuAsV-oHxh1yLhNkmRdwaVto3YOzbJdDaGqhkv28h2Jy7KwZRsLmbj9_mep_3fgPCD6kfridXEL3iaTzGmrQkcmJdmM_4CwCHckvHh4bxR7VNKI3l-fyBjVDPlNXU7srwOW-Dsnc=w2400"
            stretch="aspectFill"
            @tap="toDetail"
          />
        </GridLayout>
      </StackLayout>
    </ScrollView>
  </Page>
</template>

<script>
export default {
  data() {
    return {
      numOfRecipes: 3,
    }
  },
  computed: {
    message() {
      return 'category tab will come here'
    },
  },
  methods: {
    toDetail() {
      this.$navigator.navigate('/recipedetail')
    },
    toEdit() {
      this.$navigator.navigate('/recipeedit')
    },
  },
}
</script>

<style scoped lang="scss">
@import '@nativescript/theme/scss/variables/blue';

// Custom styles

.info {
  font-size: 20;
  text-align: center;
}
</style>
