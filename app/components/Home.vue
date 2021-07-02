<template>
    <Page>
        <ActionBar class="fas" title="nm-recipes">
            <Label text="nm-recipes" fontSize="24" verticalAlignment="center" />
            <ActionItem @tap="onTapEdit" ios.systemIcon="7" ios.position="right" text="Compose" />

        </ActionBar>

        <GridLayout columns="*" rows="50, 300" backgroundColor="#e0f5cb">
            <Label class="info" row="0" col="0" backgroundColor="#ffffff">
                <FormattedString>
                    <Span class="fas" />
                    <Span :text="message"/>
                </FormattedString>
            </Label>
                <Image class="info" row="1" col="0" backgroundColor="#95b576" src="https://lh3.googleusercontent.com/QIBYEZbfFdfSVsWzYBgKh0ngvbsgAPlBxrfWwMDV3OtB4gxFue3gSDADwwpLV_PgajYr-SDLCxTdPQubhL1kz_G-wJBoLog3qhh65dyVB2V6dAKbFi6wUIM5tjf0M2GEEsCVsCQzojJOuZXU5oIJNTZwBToNVkGV7-LaVJyouRt_ihUJarIvA_W1MLggvDJ_3ZCgF7jFUrUjzIk514QT-omWxMdY3qPH60jZlv-TXKzdW-bxtU9pQNgh1Vkpz9sZ0ejtE-DbyIy-Y2MNob8efc9uENJYBv72JJYE5Y67HDlnaLeQjQlr65PcknyYNRW7gZ5tsN-SmMScMhIbemWBeSeCVGOPVnNFo899KIuRB4CPcoE1TAYdAg0ycvnzQJKwvjtrjLjMfjZylZySIiaZcQ5ANitN_nzFDT1KKVHlS-NkZ-N0B5a1e890QJuoiTd04_0DtdOebuzN1Dsp7oXU_fplRxpLL_QxgKElrQuTc6GPuYWmwwVhMjO5nPIoOpJiI5p3vd3iLTwcF1zPLeuJ4q3rkm-YaOn9TS_T6SzujReRoJsfVdARh_1YxlTznAMgLVVU8x-rkUtATZyx1gNn-PKEcCRWn9Jzzv90L3FMYW-Lt0XzNM4WsLxHeZE-QPYCAIp5XsiCgICrbGzb1yUzwuxNHqXlECn5qmiUYtvQnC1wFVB132uq9tG5tDJJzoAtMYleKxwKA5ARUz1nSqwxjb-ELQ=w2422-h1364-no?authuser=0" stretch="aspectFit" />
        </GridLayout>
    </Page>
</template>

<script>
  export default {
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
