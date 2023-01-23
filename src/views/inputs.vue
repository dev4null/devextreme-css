<template>
  <div class="content-block">
    <h2>Inputs <a href="https://www.figma.com/file/QBuh5OJf5xnjfx0Ecm4hvO/%F0%9F%A6%85--%F0%9F%A6%A9-CRM-Corporate-%2F-UI-kit?node-id=2293%3A17219&t=IBM2WgAYME2kMaTu-1" target="_blank">Figma</a></h2>


    <table>
      <tr>
        <td colspan="3"><h3>TextBox Simple</h3></td>
      </tr>
      <tr>
        <td>&nbsp;</td>
        <td width="300px">Empty</td>
        <td width="300px">Fill</td>
      </tr>
      <tr>
        <td>Normal</td>
        <td>
          <DxTextBox label="Label" value ="" label-mode ="floating" :height="58" :show-clear-button="true"/>
        </td>
        <td>
          <DxTextBox label="Label" value ="Text" label-mode ="floating" :height="58" :show-clear-button="true"/> 
        </td>
      </tr>
      <tr>
        <td>Error</td>
        <td>
          <DxTextBox label="Label" value ="" validation-status="invalid" label-mode ="floating" :height="58" :show-clear-button="true"> 
            <DxValidator>
                <DxRequiredRule message="Text field is required"/>
            </DxValidator>
          </DxTextBox>
        </td>
        <td>
          <DxTextBox label="Label" value ="Text" validation-status="invalid" label-mode ="floating" :height="58" :show-clear-button="true">
            <DxValidator>
              <DxCustomRule 
                        message="Error" 
                        :validation-callback="customCallback"
                        :reevaluate="true"
                    />
              </DxValidator>
          </DxTextBox>
        </td>
      </tr>
      <tr>
        <td>ReadOnly </td>
        <td>
          <DxTextBox label="Label" value ="" label-mode ="floating" :height="58" :read-only="true" :show-clear-button="true"/>
        </td>
        <td>
          <DxTextBox label="Label" value ="Text" label-mode ="floating" :height="58" :read-only="true" :show-clear-button="true"/> 
        </td>       
      </tr>
      <tr>
        <td>Disabled</td>
        <td>
          <DxTextBox label="Label" value ="" label-mode ="floating" :height="58" :disabled="true" :show-clear-button="true"/>
        </td>
        <td>
          <DxTextBox label="Label" value ="Text" label-mode ="floating" :height="58" :disabled="true" :show-clear-button="true"/> 
        </td>    
      </tr>
      <tr>
        <td colspan="3"><h3>Вариации:TextBox Simple + Button + Link</h3></td>
      </tr>
      <tr>
        <td>Normal</td>
        <td>
          <DxTextBox label="Label" value ="" label-mode ="floating" :height="58" :show-clear-button="true">
            <DxTextBoxButton name="clear"/>
            <DxTextBoxButton
              :options="buttonOptionInfo"
              name = "button"
              location="after"
            />
          </DxTextBox>  
        </td>
        <td>
          <DxTextBox label="Label" value ="Text" label-mode ="floating" :height="58" :element-attr="rightButtonAttr" :show-clear-button="true">
            <DxTextBoxButton name="clear"/>
            <DxTextBoxButton
              :options="buttonOptionInfo"
              name = "info"
              location="after"
            />
            <DxTextBoxButton
              :options="buttonOptionLink"
              name = "link"
              location="before"
            />
          </DxTextBox>   
        </td>
      </tr>
      <td>Error</td>
        <td>
          <DxTextBox label="Label" value ="" label-mode ="floating" :height="58" validation-status="invalid"  :show-clear-button="true">
            <DxTextBoxButton name="clear"/>
            <DxTextBoxButton
              :options="buttonOptionInfo"
              name = "button"
              location="after"
            />
            <DxValidator>
                <DxRequiredRule message="Text field is required"/>
            </DxValidator>
          </DxTextBox>  
        </td>
        <td>
          <DxTextBox label="Label" value ="Text" label-mode ="floating" :height="58" validation-status="invalid" :element-attr="rightButtonAttr" :show-clear-button="true">
            <DxTextBoxButton name="clear"/>
            <DxTextBoxButton
              :options="buttonOptionInfo"
              name = "info"
              location="after"
            />
            <DxTextBoxButton
              :options="buttonOptionLink"
              name = "link"
              location="before"
            />
            <DxValidator>
              <DxCustomRule 
                        message="Error" 
                        :validation-callback="customCallback"
                        :reevaluate="true"
                    />
              </DxValidator>
          </DxTextBox>   
        </td>
        <tr>
        <td>ReadOnly </td>
        <td>
          <DxTextBox label="Label" value ="" label-mode ="floating" :height="58" :read-only="true" :show-clear-button="true">
            <DxTextBoxButton name="clear"/>
            <DxTextBoxButton
              :options="buttonOptionInfo"
              name = "button"
              location="after"
            />
          </DxTextBox>            
        </td>
        <td>
          <DxTextBox label="Label" value ="Text" label-mode ="floating" :height="58" :read-only="true"  :element-attr="rightButtonAttr" :show-clear-button="true">
            <DxTextBoxButton name="clear"/>
            <DxTextBoxButton
              :options="buttonOptionInfo"
              name = "info"
              location="after"
            />
            <DxTextBoxButton
              :options="buttonOptionLink"
              name = "link"
              location="before"
            />
          </DxTextBox>   
        </td>       
      </tr>
      <tr>
      <td>Disabled </td>
        <td>
          <DxTextBox label="Label" value ="" label-mode ="floating" :height="58" :disabled="true" :show-clear-button="true">
            <DxTextBoxButton name="clear"/>
            <DxTextBoxButton
              :options="buttonOptionInfo"
              name = "button"
              location="after"
            />
          </DxTextBox>            
        </td>
        <td>
          <DxTextBox label="Label" value ="Text" label-mode ="floating" :height="58" :disabled="true"  :element-attr="rightButtonAttr" :show-clear-button="true">
            <DxTextBoxButton name="clear"/>
            <DxTextBoxButton
              :options="buttonOptionInfo"
              name = "info"
              location="after"
            />
            <DxTextBoxButton
              :options="buttonOptionLink"
              name = "link"
              location="before"
            />
          </DxTextBox>   
        </td>       
      </tr>
    </table>
             
  </div>
</template>

<script>
import { DxTextBox , DxButton as DxTextBoxButton } from 'devextreme-vue/text-box';
/*
import { DxSelectBox } from 'devextreme-vue/select-box';
import DxTextArea from 'devextreme-vue/text-area';
import { DxAutocomplete } from 'devextreme-vue/autocomplete';

import DropDownBoxWithDataGrid from '../components/DropDownBoxWithDataGrid.vue'
*/

import {
  DxValidator,
  DxRequiredRule,
  DxCustomRule
} from 'devextreme-vue/validator';


import * as infoIcon from "../assets/icons/info.svg";
import * as linkIcon from "../assets/icons/link.svg";

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
      buttonOptionLink: {
        icon: linkIcon,
        stylingMode:"text",
        focusStateEnabled:false,
        hoverStateEnabled:false,
        activeStateEnabled:false,
        elementAttr: {
          class: "fixCustomButtomBefore"
        },
        disabled: false,
        onClick: () => {
          alert(1)
        },
      },  

      rightButtonAttr: {
        class:"fixLeftButton"
      },


      names: ['James', 'John', 'Robert', 'Michael', 'William', 'David', 'Richard', 'Charles', 'Joseph', 'Thomas', 'Christopher', 'Daniel', 'Paul', 'Mark', 'Donald', 'George', 'Kenneth', 'Steven', 'Edward', 'Brian', 'Ronald', 'Anthony', 'Kevin', 'Jason', 'Jeff', 'Mary', 'Patricia', 'Linda', 'Barbara', 'Elizabeth', 'Jennifer', 'Maria', 'Susan', 'Margaret', 'Dorothy', 'Lisa', 'Nancy', 'Karen', 'Betty', 'Helen', 'Sandra', 'Donna', 'Carol', 'Ruth', 'Sharon', 'Michelle', 'Laura', 'Sarah', 'Kimberly', 'Deborah'] ,
      simpleProducts : [
  { Name: 'HD Video Player', ID: 0 },
  { Name: 'SuperHD Video Player', ID: 1 },
  { Name: 'SuperPlasma 50', ID: 2 },
  { Name: 'SuperLED 50', ID: 3 },
  { Name: 'SuperLED 42', ID: 4 },
  { Name: 'SuperLCD 55', ID: 5 },
  { Name: 'SuperLCD 42', ID: 6 },
  { Name: 'SuperPlasma 65', ID: 7 },
  { Name: 'SuperLCD 70', ID: 8 },
  { Name: 'Projector Plus', ID: 9 },
  { Name: 'Projector PlusHT', ID: 10 },
  { Name: 'ExcelRemote IR', ID: 11 },
  { Name: 'ExcelRemote Bluetooth', ID: 12 },
  { Name: 'ExcelRemote IP', ID: 13 },
]
    };
  },
  methods: {
        customCallback() {
            return false;
        }
    },    
  components: {
    DxTextBox,  DxValidator, DxCustomRule, DxRequiredRule, DxTextBoxButton 
  }
};
</script>

<style lang="scss">


.dx-button.fixCustomButtomBefore .dx-icon,
.dx-button.fixCustomButtomAfter .dx-icon {
 width: 20px;
 height: 20px;
}

.fixCustomButtomBefore, 
.fixCustomButtomAfter {
  margin-top: 10.5px !important;
}

.fixCustomButtomBefore {
  margin-left: 15px !important;
}

.fixLeftButton .dx-texteditor-input-container .dx-texteditor-input  {
  margin-left: -22px !important;
}

.fixLeftButton .dx-label-before {
  width: 0px !important;
}

</style>
