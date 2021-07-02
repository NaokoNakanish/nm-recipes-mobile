<template>
    <Page>
        <ActionBar title="nm-recipes">
            <Label text="nm-recipes" fontSize="24" verticalAlignment="center" />
            <ActionItem @tap="onTapDelete" ios.systemIcon="7" ios.position="right" text="Compose" />

        </ActionBar>

        <GridLayout columns="*" rows="100, 300" backgroundColor="#e0f5cb">
            <Label class="info" row="0" col="0" backgroundColor="#ffffff">
                <FormattedString>
                    <Span class="fas" text.decode="&#xf135; "/>
                    <Span :text="message"/>
                </FormattedString>
            </Label>
            <Label class="info" row="1" col="0" backgroundColor="#95b576">
                <FormattedString>
                    <Span :text="message2" />
                </FormattedString>
            </Label>
        </GridLayout>
    </Page>
</template>

<script>
  export default {
    computed: {
      message() {
        return "Blank {N}-Vue app";
      },
      message2() {
          return "test";
      }
    }
  };
</script>

<style scoped lang="scss">
    @import '@nativescript/theme/scss/variables/blue';

    // Custom styles
    .fas {
        @include colorize($color: accent);
    }

    .info {
       font-size: 20;
       text-align: center;
    }
</style>
