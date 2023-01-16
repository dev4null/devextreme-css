<template>
  <div  class="content-block">
    <h2>Tabs &nbsp; <a href="https://www.figma.com/file/SSDOj1Nc4uCBK0sLLt5CuZ/%F0%9F%A6%85-CRM-Corporate?node-id=6167%3A219002&t=5VvakbjwEF0yxLRF-0" target="_blank">Figma</a></h2>
    <div>
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


   <br/>

   <div>
    <DxTabPanel
      :height="250"
      :animation-enabled="false"
      :swipe-enabled="false"
      :focus-state-enabled="false"
      :hover-state-enabled="false"
    >
      <TabItem title="Title #1">
        <template #default>
          Text #1
        </template>
      </TabItem>
      <TabItem title="Title #1">
        <template #default>
          Text #2
        </template>
      </TabItem>
      <TabItem title="Title #1">
        <template #default>
          Text #3
        </template>
      </TabItem>
    </DxTabPanel>
   </div>


  </div>
</template>

<script>
import DxTabs from 'devextreme-vue/tabs';
import DxTabPanel, {DxItem as TabItem} from 'devextreme-vue/tab-panel';

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
    DxTabs,
    DxTabPanel,
    TabItem
}
};
</script>

<style lang="scss">
</style>
