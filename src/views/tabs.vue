<template>
  <div>
    <h2 class="content-block">Tabs</h2>
    <div style="padding-left:50px;">
      <DxTabs
        :data-source="longtabs"
        :width="800"
        :scroll-by-content="true"
        :show-nav-buttons="true"
        :focus-state-enabled="false"
        :selectedIndex = "2"
      />
    </div>
  </div>
</template>

<script>
import DxTabs from 'devextreme-vue/tabs';

export default {
  data() {
   
    return {
  longtabs : [
  { html: 'Перетащите новую вкладку', 'disabled': 'true' },
  { text: 'Классификаторы' },
  { text: 'Менеджеры'},
  { text: 'Коммуникации' },
  { text: 'Адреса и телефоны' },
  { text: 'Все продукты' },
  { text: 'Лиды' },
  { text: 'Связанные продажи' },
  { text: 'Связанные продажи - 2' },
  { text: 'Связанные продажи - 3' },
  { text: 'Связанные продажи - 4' },
  ]
     
    };
  },
  components: {
    DxTabs
  }
};
</script>

<style lang="scss">
</style>
