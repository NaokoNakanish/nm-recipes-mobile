<template>
    <Page>
        <ActionBar class="fas" title="nm-recipes">
            <Label text="nm-recipes" fontSize="24" verticalAlignment="center" />
            <ActionItem ios.systemIcon="7" ios.position="right" text="Compose" />
        </ActionBar>
        
    <!-- Recipe List -->
        <ScrollView orientation="vertical">
            <StackLayout backgroundColor=#c9c9c3>
                <GridLayout v-for="n in numOfRecipes" :key="n" height="260" columns="*" rows="40, 220">
                    <Label text="pudding" row="0" col="0" backgroundColor="#ffffff" />
                    <Image row="1" col="0" src="https://lh3.googleusercontent.com/Ec7omwVXGOIlQp35N0bbRTByVIE9nlNlaVl_X45AYl_iN6Y19qo3sW6j4NHN4G5atpM0IbqIkHynCSUmdTf-E9SxZVDgXYmNYTMjhEK0sJrNbfpv_ZKWGMvSx2oJSkcr25Sdol1AEvwgc2wrFi-TJWrtfrlRMpeZ0SeNmLu5NrCriQxcJYKz_L4VlghvgR07rvAx3um6YyimZRZ919iICeQKrw3HBzk0iyvyS_emZ1etWwbm2ymIAPiAg90-e_q7z96ID8AbXm_AzoYDyZq8y17rfK7pjztNk2d7vTEEOwl5tospdKr5xkUKKMSRP3KjhKllJj5uFlAxHYcDYiH7lIxcs19hjA8os2e61JrbcrR6e338ynr8Fp2wsyk-HdHyccdEM18oDhpNfMqBX0O7vRdb5cYQK9_6ndHCK9zGVBuMD4syylKAN1V7_5Q1tnX7OYKSKHbk-KN5AB-Kqhcrk9l1gQH5LkVvRIog8sy4p6UrLSe4Q8R7otmUrEDV_ayvleGxA-DbUxyE9yM8MnxKG_I9g4VELUCauj30mPWVSfcNQdvoQiOyGLPM2uKVtAf56nwbvQ2T5RUXsxXM4wmmCtcPGbjoZKZizX-44CGCFfnZavYlZDeRzV9O4VAH_jwJHfvF8Uk5CXuozOQLWmwmnEkJPerd5DE707F7n085Yxj6L-kuR7yMiP__T8jdXDMGLoeAimLuGyJAoEDqd0rhbzReQQ=w2190-h1232-no?authuser=0" stretch="aspectFill" @tap="toDetail"/>
                </GridLayout>
            </StackLayout>
        </ScrollView>
    </Page>
</template>

<script>
  export default {
    data() {
        return {
            numOfRecipes: 3
        }
    },
    computed: {
      message() {
        return "category tab will come here";
      },
    },
    methods: {
        toDetail(){
            this.$navigator.navigate('/recipedetail')
        }
    }
  };
</script>

<style scoped lang="scss">
    @import '@nativescript/theme/scss/variables/blue';

    // Custom styles

    .info {
       font-size: 20;
       text-align: center;
    }
</style>
