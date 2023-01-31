<template>
  <div class="content-block">
    <h2>TextArea<a href="#" target="_blank">Figma</a></h2>
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
          <DxTextArea label="Label" label-mode ="floating" :height="160" />
        </td>
        <td>
          <DxTextArea label="Label" value="Text" label-mode ="floating" :height="160" />
        </td>
      </tr>
      <tr>
        <td>Error</td>
        <td>
          <DxTextArea label="Label" label-mode ="floating" :height="160" validation-status="invalid"> 
            <DxValidator>
              <DxCustomRule  message="Error" :validation-callback="customCallback" :reevaluate="true" />
            </DxValidator>
          </DxTextArea>
        </td>
        <td>
          <DxTextArea label="Label" value="Text" label-mode ="floating" :height="160" validation-status="invalid"> 
            <DxValidator>
              <DxCustomRule message="Error" :validation-callback="customCallback" :reevaluate="true" />
            </DxValidator>
          </DxTextArea>
        </td>
      </tr>
      <tr>
        <td>ReadOnly</td>
        <td>
          <DxTextArea label="Label" label-mode ="floating" :height="160" :read-only="true"/>
        </td>
        <td>
          <DxTextArea label="Label" value="Text" label-mode ="floating" :height="160" :read-only="true"/>
        </td>  
      </tr>
      <tr>
        <td>Disabled</td>
        <td>
          <DxTextArea label="Label" label-mode ="floating" :height="160" :read-only="true"  :disabled="true"/>
        </td>
        <td>
          <DxTextArea label="Label" value="Text" label-mode ="floating" :height="160" :read-only="true"  :disabled="true"/>
        </td>  
      </tr>

    </table>
             
  </div>
</template>

<script>
import DxTextArea from 'devextreme-vue/text-area';

import {
  DxValidator,
  DxCustomRule
} from 'devextreme-vue/validator';

export default {
  data() {
    return {  };
  },
  methods: {
        customCallback() {
            return false;
        }
    },    
  components: {
     DxValidator, DxCustomRule, DxTextArea 
  }
};
</script>

<style lang="scss">

</style>
