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
        :hover-state-enabled="false"
      />
<br/>
      <DxTabs
        :data-source="longtabs"
        :width="1200"
        :scroll-by-content="true"
        :show-nav-buttons="false"
        :focus-state-enabled="false"
        :selectedIndex = "2"
        :hover-state-enabled="false"
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
  { text: 'Лиды' }
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
