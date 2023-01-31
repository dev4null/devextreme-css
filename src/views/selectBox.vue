<template>
  <div class="content-block">
    <h2>SelectBox <a href="https://www.figma.com/file/QBuh5OJf5xnjfx0Ecm4hvO/%F0%9F%A6%85--%F0%9F%A6%A9-CRM-Corporate-%2F-UI-kit?node-id=2%3A804&t=rL2fm8QEz8RwQgFg-0" target="_blank">Figma</a></h2>


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
          <DxSelectBox
              :search-enabled="true"
              :data-source="simpleProducts"
              :show-clear-button="true"
              display-expr="Name"
              value-expr="ID"
              label="Label" 
              label-mode ="floating"
              :height="56"
            />
        </td>
        <td>
          <DxSelectBox
              :search-enabled="true"
              :data-source="simpleProducts"
              :show-clear-button="true"
              display-expr="Name"
              value-expr="ID"
              label="Label" 
              label-mode ="floating"
              :height="56"
              :value="2"
            />
        </td>
      </tr>
      <tr>
      <td>Error</td>
        <td>
          <DxSelectBox
              :search-enabled="true"
              :data-source="simpleProducts"
              :show-clear-button="true"
              display-expr="Name"
              value-expr="ID"
              label="Label" 
              label-mode ="floating"
              :height="56"
              validation-status="invalid"
            >
            <DxValidator>
                <DxRequiredRule message="Text field is required"/>
            </DxValidator>
          </DxSelectBox>  
        </td>
        <td>
          <DxSelectBox
              :search-enabled="true"
              :data-source="simpleProducts"
              :show-clear-button="true"
              display-expr="Name"
              value-expr="ID"
              label="Label" 
              label-mode ="floating"
              :height="56"
              :value="2"
              validation-status="invalid">
            <DxTextBoxButton name="clear"/>
            <DxValidator>
              <DxCustomRule 
                        message="Error" 
                        :validation-callback="customCallback"
                        :reevaluate="true"
                    />
              </DxValidator>
          </DxSelectBox>   
        </td>
        </tr>
        <tr>
        <td>ReadOnly </td>
        <td>
          <DxSelectBox
              :search-enabled="true"
              :data-source="simpleProducts"
              :show-clear-button="true"
              display-expr="Name"
              value-expr="ID"
              label="Label" 
              label-mode ="floating"
              :height="56"
              :read-only="true"
            />     
        </td>
        <td>
          <DxSelectBox
              :search-enabled="true"
              :data-source="simpleProducts"
              :show-clear-button="true"
              display-expr="Name"
              value-expr="ID"
              label="Label" 
              label-mode ="floating"
              :height="56"
              :read-only="true"
              :value="2"
            />       
        </td>       
      </tr>
      <tr>
      <td>Disabled </td>
        <td>
          <DxSelectBox
              :search-enabled="true"
              :data-source="simpleProducts"
              :show-clear-button="true"
              display-expr="Name"
              value-expr="ID"
              label="Label" 
              label-mode ="floating"
              :height="56"
              :disabled="true"
            />     
                  
        </td> 
        <td>
          <DxSelectBox
              :search-enabled="true"
              :data-source="simpleProducts"
              :show-clear-button="true"
              display-expr="Name"
              value-expr="ID"
              label="Label" 
              label-mode ="floating"
              :height="56"
              :disabled="true"
              :value="2"
            />     
        </td>       
      </tr>
      <tr>
        <td colspan="3"><h3>With button</h3></td>
      </tr>
      <tr>
        <td>Normal</td>
        <td>
          <DxSelectBox
              :search-enabled="true"
              :data-source="simpleProducts"
              :show-clear-button="true"
              display-expr="Name"
              value-expr="ID"
              label="Label" 
              label-mode ="floating"
              :height="56"
            >  
            <DxTextBoxButton name="clear"/>
            <DxTextBoxButton name="dropDown"/>
            <DxTextBoxButton
              :options="buttonOptionInfo"
              name = "info"
              location="after"
            />
          </DxSelectBox>
        </td>
        <td>
          <DxSelectBox
              :search-enabled="true"
              :data-source="simpleProducts"
              :show-clear-button="true"
              display-expr="Name"
              value-expr="ID"
              label="Label" 
              label-mode ="floating"
              :height="56"
              :value="2"
            >  
            <DxTextBoxButton name="clear"/>
            <DxTextBoxButton name="dropDown"/>
            <DxTextBoxButton
              :options="buttonOptionInfo"
              name = "info"
              location="after"
            />
          </DxSelectBox> 
        </td>
      </tr>
      <tr>
        <td>Error</td>
        <td>
          <DxSelectBox
              :search-enabled="true"
              :data-source="simpleProducts"
              :show-clear-button="true"
              display-expr="Name"
              value-expr="ID"
              label="Label" 
              label-mode ="floating"
              :height="56"
              validation-status="invalid"
            >  
            <DxTextBoxButton name="clear"/>
            <DxTextBoxButton name="dropDown"/>
            <DxTextBoxButton
              :options="buttonOptionInfo"
              name = "info"
              location="after"
            />
            <DxValidator>
              <DxCustomRule 
                        message="Error" 
                        :validation-callback="customCallback"
                        :reevaluate="true"
                    />
              </DxValidator>
          </DxSelectBox>
        </td>
        <td>
          <DxSelectBox
              :search-enabled="true"
              :data-source="simpleProducts"
              :show-clear-button="true"
              display-expr="Name"
              value-expr="ID"
              label="Label" 
              label-mode ="floating"
              :height="56"
              :value="2"
              validation-status="invalid"
            >  
            <DxTextBoxButton name="clear"/>
            <DxTextBoxButton name="dropDown"/>
            <DxTextBoxButton
              :options="buttonOptionInfo"
              name = "info"
              location="after"
            />
            <DxValidator>
              <DxCustomRule 
                        message="Error" 
                        :validation-callback="customCallback"
                        :reevaluate="true"
                    />
              </DxValidator>
          </DxSelectBox> 
        </td>
      </tr>
      <tr>
        <td>ReadOnly</td>
        <td>
          <DxSelectBox
              :search-enabled="true"
              :data-source="simpleProducts"
              :show-clear-button="true"
              display-expr="Name"
              value-expr="ID"
              label="Label" 
              label-mode ="floating"
              :height="56"
              :read-only="true"
            >  
            <DxTextBoxButton name="clear"/>
            <DxTextBoxButton name="dropDown"/>
            <DxTextBoxButton
              :options="buttonOptionInfo"
              name = "info"
              location="after"
            />
          </DxSelectBox>
        </td>
        <td>
          <DxSelectBox
              :search-enabled="true"
              :data-source="simpleProducts"
              :show-clear-button="true"
              display-expr="Name"
              value-expr="ID"
              label="Label" 
              label-mode ="floating"
              :height="56"
              :value="2"
              :read-only="true"
            >  
            <DxTextBoxButton name="clear"/>
            <DxTextBoxButton name="dropDown"/>
            <DxTextBoxButton
              :options="buttonOptionInfo"
              name = "info"
              location="after"
            />
          </DxSelectBox> 
        </td>
      </tr>
      <tr>
        <td>ReadOnly</td>
        <td>
          <DxSelectBox
              :search-enabled="true"
              :data-source="simpleProducts"
              :show-clear-button="true"
              display-expr="Name"
              value-expr="ID"
              label="Label" 
              label-mode ="floating"
              :height="56"
              :disabled="true"
            >  
            <DxTextBoxButton name="clear"/>
            <DxTextBoxButton name="dropDown"/>
            <DxTextBoxButton
              :options="buttonOptionInfo"
              name = "info"
              location="after"
            />
          </DxSelectBox>
        </td>
        <td>
          <DxSelectBox
              :search-enabled="true"
              :data-source="simpleProducts"
              :show-clear-button="true"
              display-expr="Name"
              value-expr="ID"
              label="Label" 
              label-mode ="floating"
              :height="56"
              :value="2"
              :disabled="true"
            >  
            <DxTextBoxButton name="clear"/>
            <DxTextBoxButton name="dropDown"/>
            <DxTextBoxButton
              :options="buttonOptionInfo"
              name = "info"
              location="after"
            />
          </DxSelectBox> 
        </td>
      </tr>
    </table>            
  </div>
</template>

<script>
import { DxSelectBox } from 'devextreme-vue/select-box';
import { DxButton as DxTextBoxButton } from 'devextreme-vue/text-box';

import {
  DxValidator,
  DxRequiredRule,
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
    },    
  components: {
      DxValidator, DxCustomRule, DxSelectBox, DxTextBoxButton, DxRequiredRule
  }
};
</script>

<style lang="scss">
</style>
