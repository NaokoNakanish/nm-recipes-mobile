<template>
  <page>
    <Stacklayout width="100%" backgroundColor="#c9c9c3">
      <Label class="list-title" text="Recipe Title" />
      <Label class="list-title" text="Photo URL" />
      <Label class="list-title" text="Ingredients" />
      <Label class="list-title" text="Process" />
    </Stacklayout>
  </page>
</template>

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
