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
          <DxTextArea label="Label" label-mode ="floating" :height ="124" />
        </td>
        <td>
          <DxTextArea label="Label" value="Text" label-mode ="floating" :height ="124"  />
        </td>
      </tr>
      <tr>
        <td>Error</td>
        <td>
          <DxTextArea label="Label" label-mode ="floating" :height ="124"  validation-status="invalid">        
            <DxValidator>
              <DxCustomRule  message="Error" :validation-callback="customCallback" :reevaluate="true" />
            </DxValidator>
          </DxTextArea>
        </td>
        <td>
          <DxTextArea label="Label" value="Text" label-mode ="floating" :height ="124" validation-status="invalid"> 
            <DxValidator>
              <DxCustomRule message="Error" :validation-callback="customCallback" :reevaluate="true" />
            </DxValidator>
          </DxTextArea>
        </td>
      </tr>
      <tr>
        <td>ReadOnly</td>
        <td>
          <DxTextArea label="Label" label-mode ="floating" :height ="124" :read-only="true"/>
        </td>
        <td>
          <DxTextArea label="Label" label-mode ="floating" :height ="124" :read-only="true" value="Prepare 2013 Marketing Plan: We need to double revenues in 2013 and our marketing strategy is going to be key here. R&D is improving existing products and creating new products so we can deliver great AV equipment to our customers.Robert, please make certain to create a PowerPoint presentation for the members of the executive team" />
        </td>  
      </tr>
      <tr>
        <td>Disabled</td>
        <td>
          <DxTextArea label="Label" label-mode ="floating" :height ="124" :read-only="true"  :disabled="true"/>
        </td>
        <td>
          <DxTextArea label="Label" label-mode ="floating" :height ="124" :read-only="true"  :disabled="true" value="Prepare 2013 Marketing Plan: We need to double revenues in 2013 and our marketing strategy is going to be key here. R&D is improving existing products and creating new products so we can deliver great AV equipment to our customers.Robert, please make certain to create a PowerPoint presentation for the members of the executive team" />
        </td>  
      </tr>
      <tr>
        <td colspan="3"><h3>AutoSize</h3></td>
      </tr>
      <tr>
        <td>&nbsp;</td>
        <td width="300px">Empty</td>
        <td width="300px">Fill</td>
      </tr>
      <tr>
        <td>Normal</td>
        <td>
          <DxTextArea label="Label" label-mode ="floating" :min-height ="124" :autoResizeEnabled="true"/>
        </td>
        <td>
          <DxTextArea label="Label" label-mode ="floating" :min-height ="124" :autoResizeEnabled="true"  value="Prepare 2013 Marketing Plan: We need to double revenues in 2013 and our marketing strategy is going to be key here. R&D is improving existing products and creating new products so we can deliver great AV equipment to our customers.Robert, please make certain to create a PowerPoint presentation for the members of the executive team" />
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
