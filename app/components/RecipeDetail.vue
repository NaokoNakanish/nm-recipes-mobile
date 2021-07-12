<template>
  <page>
    <!-- recipe title -->
    <ActionBar class="fab" title="RecipeDetail">
      <Label text="RecipeName" fontSize="24" verticalAlignment="center" />
      <ActionItem ios.systemIcon="7" ios.position="right" text="Compose" />
    </ActionBar>

    <StackLayout width="100%" backgroundColor="#c9c9c3">
      <!-- category and update info -->
      <GridLayout
        height="40"
        columns="*, 3*"
        rows="*"
        backgroundColor="#D6C428"
      >
        <Label
          text="Category"
          row="0"
          col="0"
          color="#ffffff"
          backgroundColor="#D6C428"
          horizontalAlignment="center"
        />
        <Label
          text="Last update on 2020/10/2 by minoru"
          row="0"
          col="1"
          color="#D6C428"
          backgroundColor="#ffffff"
        />
      </GridLayout>

      <Image
        height="220"
        src="https://lh3.googleusercontent.com/pkjHuAsV-oHxh1yLhNkmRdwaVto3YOzbJdDaGqhkv28h2Jy7KwZRsLmbj9_mep_3fgPCD6kfridXEL3iaTzGmrQkcmJdmM_4CwCHckvHh4bxR7VNKI3l-fyBjVDPlNXU7srwOW-Dsnc=w2400"
        stretch="aspectFill"
      />

      <!-- ingredients List -->
      <Label class="list-title" text="ingredients" />

      <Label
        v-for="ingredient in ingredients"
        :key="ingredient.index"
        class="list-text"
        textWrap="true"
      >
        <Span :text="ingredient.ingredient" />
        <Span text="..." />
        <Span :text="ingredient.quantity" />
      </Label>

      <!-- Process List -->
      <Label class="list-title" text="process" />

      <Label
        v-for="process in processes"
        :key="process.index"
        class="list-text"
        textWrap="true"
      >
        <Span :text="process.order" />
        <Span text=") " />
        <Span :text="process.do" />
      </Label>
    </StackLayout>
  </page>
</template>

<script>
export default {
  data() {
    return {
      ingredients: [
        {
          ingredient: 'にく',
          quantity: '3枚',
        },
        {
          ingredient: 'にんじん',
          quantity: '2本',
        },
      ],
      processes: [
        {
          order: 1,
          do: 'スパイスをジャーってやって、収まったら野菜とか肉とか炒める',
        },
        {
          order: 2,
          do: 'トマト缶とちょっと水を入れて煮込む',
        },
        {
          order: 3,
          do: 'ガラムマサラや塩などで味を調節する',
        },
      ],
    }
  },
}
</script>

<style scoped>
.list-title {
  height: 30;
  vertical-align: left;
  font-size: 20;
  padding-left: 15;
  padding-right: 15;
  padding-top: 7;
  padding-bottom: 7;
  background-color: #d6c428;
  color: #ffffff;
}
.list-text {
  vertical-align: left;
  font-size: 15;
  padding-left: 15;
  padding-right: 15;
  padding-top: 7;
  padding-bottom: 7;
  background-color: white;
}
</style>
