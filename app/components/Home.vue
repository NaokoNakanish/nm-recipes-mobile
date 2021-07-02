<template>
    <Page>
        <ActionBar class="fas" title="nm-recipes">
            <Label text="nm-recipes" fontSize="24" verticalAlignment="center" />
            <ActionItem @tap="onTapEdit" ios.systemIcon="7" ios.position="right" text="Compose" />
        </ActionBar>
        
        <StackLayout backgroundColor=#c9c9c3>
            <!-- Recipe List -->
            <ScrollView orientation="vertical">
                <StackLayout backgroundColor=#c9c9c3>
                    <GridLayout v-for="n in numOfRecipes" :key="n" height="260" columns="*" rows="40, 220">
                        <Label text="pudding" row="0" col="0" backgroundColor="#ffffff" />
                        <Image row="1" col="0" backgroundColor="#95b576" src="https://lh3.googleusercontent.com/QIBYEZbfFdfSVsWzYBgKh0ngvbsgAPlBxrfWwMDV3OtB4gxFue3gSDADwwpLV_PgajYr-SDLCxTdPQubhL1kz_G-wJBoLog3qhh65dyVB2V6dAKbFi6wUIM5tjf0M2GEEsCVsCQzojJOuZXU5oIJNTZwBToNVkGV7-LaVJyouRt_ihUJarIvA_W1MLggvDJ_3ZCgF7jFUrUjzIk514QT-omWxMdY3qPH60jZlv-TXKzdW-bxtU9pQNgh1Vkpz9sZ0ejtE-DbyIy-Y2MNob8efc9uENJYBv72JJYE5Y67HDlnaLeQjQlr65PcknyYNRW7gZ5tsN-SmMScMhIbemWBeSeCVGOPVnNFo899KIuRB4CPcoE1TAYdAg0ycvnzQJKwvjtrjLjMfjZylZySIiaZcQ5ANitN_nzFDT1KKVHlS-NkZ-N0B5a1e890QJuoiTd04_0DtdOebuzN1Dsp7oXU_fplRxpLL_QxgKElrQuTc6GPuYWmwwVhMjO5nPIoOpJiI5p3vd3iLTwcF1zPLeuJ4q3rkm-YaOn9TS_T6SzujReRoJsfVdARh_1YxlTznAMgLVVU8x-rkUtATZyx1gNn-PKEcCRWn9Jzzv90L3FMYW-Lt0XzNM4WsLxHeZE-QPYCAIp5XsiCgICrbGzb1yUzwuxNHqXlECn5qmiUYtvQnC1wFVB132uq9tG5tDJJzoAtMYleKxwKA5ARUz1nSqwxjb-ELQ=w2422-h1364-no?authuser=0" stretch="aspectFit" />
                    </GridLayout>
                </StackLayout>
            </ScrollView>
        </StackLayout>
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
