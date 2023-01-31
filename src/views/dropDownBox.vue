<template>
  <div class="content-block">
    <h2>DropDownBox <a href="https://www.figma.com/file/QBuh5OJf5xnjfx0Ecm4hvO/%F0%9F%A6%85--%F0%9F%A6%A9-CRM-Corporate-%2F-UI-kit?node-id=2%3A804&t=rL2fm8QEz8RwQgFg-0" target="_blank">Figma</a></h2>


    <table>
      <tr>
        <td colspan="3"><h3>Simple</h3></td>
      </tr>
      <tr>
        <td>&nbsp;</td>
        <td width="300px">Empty</td>
        <td width="300px">Fill</td>
      </tr>
      <tr>
        <td>Normal</td>
        <td>
          <DropDownBoxWithDataGrid />
        </td>
        <td>
          <DropDownBoxWithDataGrid />   
        </td>
      </tr>
      <tr>
      <td>Error</td>
        <td>
          <DropDownBoxWithDataGrid :is-valid="false"/>   
        </td>
        <td>
          <DropDownBoxWithDataGrid :is-valid="false"/>   
        </td>
        </tr>
        <tr>
        <td>ReadOnly </td>
        <td>
          <DropDownBoxWithDataGrid :read-only="true"/>   
        </td>
        <td>
          <DropDownBoxWithDataGrid :read-only="true"/>   
        </td>       
      </tr>
      <tr>
      <td>Disabled </td>
        <td>
          <DropDownBoxWithDataGrid :disabled="true"/>   
        </td> 
        <td>
          <DropDownBoxWithDataGrid :disabled="true"/>   
        </td>       
      </tr>
     
    </table>
      
  </div>
</template>

<script>

import DropDownBoxWithDataGrid from '../components/DropDownBoxWithDataGrid.vue'

import * as infoIcon from "../assets/icons/info.svg";

export default {
  data() {
    return {  
      buttonOptionInfo: {
        icon: infoIcon,
        stylingMode:"text",
        focusStateEnabled:false,
        hoverStateEnabled:false,
        activeStateEnabled:false,
        elementAttr: {
          class: "fixCustomButtomAfter"
        },
        disabled: false,
        onClick: () => {
          alert(1)
        },
      },
    };
  },
  methods: {
    },    
  components: {
      DropDownBoxWithDataGrid
  }
};
</script>

<style lang="scss">
</style>
