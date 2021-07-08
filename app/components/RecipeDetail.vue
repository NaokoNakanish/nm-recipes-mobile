<template>
    <page>
        <!-- recipe title -->
        <ActionBar class="fab" title="RecipeDetail">
            <Label text="RecipeName" fontSize="24" verticalAlignment="center" />
            <ActionItem ios.systemIcon="7" ios.position="right" text="Compose" />
        </ActionBar>

        <StackLayout width="100%" backgroundColor=#c9c9c3>
            <!-- category and update info -->
            <GridLayout height="40" columns="*, 3*" rows="*" backgroundColor="#D6C428">
                <Label text="Category" row="0" col="0" color="#ffffff" backgroundColor="#D6C428" horizontalAlignment="center"/>
                <Label text="Last update on 2020/10/2 by minoru" row="0" col="1" color="#D6C428" backgroundColor="#ffffff" />
            </GridLayout>
            <Image height="220" src="https://lh3.googleusercontent.com/pkjHuAsV-oHxh1yLhNkmRdwaVto3YOzbJdDaGqhkv28h2Jy7KwZRsLmbj9_mep_3fgPCD6kfridXEL3iaTzGmrQkcmJdmM_4CwCHckvHh4bxR7VNKI3l-fyBjVDPlNXU7srwOW-Dsnc=w2400" stretch="aspectFill" />
            
            <!-- ingredients List -->
            <Label class="list-title" text="ingredients" height="30" color="#ffffff" backgroundColor="#D6C428" />
            <ListView for="ingredient in ingredients">
                <v-template>
                    <Label class="list-text" height="30" textWrap="true" backgroundColor="#ffffff">
                        <Span :text="ingredient.ingredient" />
                        <Span text="..." />
                        <Span :text="ingredient.quantity" />
                    </Label>
                </v-template>
            </ListView>
            
            <!-- Process List -->
            <Label class="list-title" text="ingredients" height="30" color="#ffffff" backgroundColor="#D6C428" />
            <ListView for="ingredient in ingredients">
                <v-template>
                    <Label class="list-text" height="30" textWrap="true" backgroundColor="#ffffff">
                        <Span :text="ingredient.ingredient" />
                        <Span text="..." />
                        <Span :text="ingredient.quantity" />
                    </Label>
                </v-template>
            </ListView>
        </StackLayout>
    </page>
</template>

<script>
  export default {
    data() {
        return {
            ingredients: [
                {
                ingredient: "にく",
                quantity: "3枚"
                },
                {
                ingredient: "にんじん",
                quantity : "2本"
                }
            ]
        }
    },
  };
</script>

<style scoped>
 .list-title {
     vertical-align: left;
     font-size: 20;
     padding: 15;
 }
  .list-text {
     vertical-align: left;
     font-size: 15;
     padding: 15;
 }
</style>
