<template>
  <div class="content-block">
    <h2>Inputs <a href="https://www.figma.com/file/QBuh5OJf5xnjfx0Ecm4hvO/%F0%9F%A6%85--%F0%9F%A6%A9-CRM-Corporate-%2F-UI-kit?node-id=2%3A804&t=rL2fm8QEz8RwQgFg-0" target="_blank">Figma</a></h2>

    <div>TextBox Simple</div>
    <div class="row">
      <div class="column"> <DxTextBox label="Label" value ="" label-mode ="floating" :height="58" :hover-state-enabled="false" :show-clear-button="true"/></div>
      <div class="column"> <DxTextBox label="Label" value ="Text" label-mode ="floating" :height="58" :hover-state-enabled="false" :show-clear-button="true"/> </div>
    </div>

    <div class="row">
      <div class="column"> <DxTextBox label="Label" value ="" :disabled="true" label-mode ="floating" :height="56" :hover-state-enabled="false" :show-clear-button="true"  /></div>
      <div class="column"> <DxTextBox label="Label" value ="Text" :disabled="true" label-mode ="floating" :height="56" :hover-state-enabled="false" :show-clear-button="true" /> </div>
    </div>

    <div>TextBox Simple with validation</div>
    <div class="row">
      <div class="column"> 
        <DxTextBox label="Label"  value ="" label-mode ="floating" :height="56" :hover-state-enabled="false" :show-clear-button="true"> 
          <DxValidator>
              <DxRequiredRule message="Text field is required"/>
          </DxValidator>
      </DxTextBox>
      </div>
      <div class="column"> 
        <DxTextBox label="Label" value ="Text" label-mode ="floating" :height="56" :hover-state-enabled="false" :show-clear-button="true">
        <DxValidator>
          <DxCustomRule 
                    message="Error" 
                    :validation-callback="customCallback"
                    :reevaluate="true"
                />
          </DxValidator>
        </DxTextBox>
       </div>
    </div>

    <div>TextBox Simple with simple button</div>
    <div class="row">
        <div class="column"> 
          <DxTextBox label="Label" value ="" label-mode ="floating" :height="56" :hover-state-enabled="false" :show-clear-button="true">
            <DxTextBoxButton name="clear"/>
            <DxTextBoxButton
              :options="buttonOption"
              name = "button"
              location="after"
            />
          </DxTextBox>         
        </div>
        <div class="column"> 
          <DxTextBox label="Label" value ="Text3" label-mode ="floating" :height="56" :hover-state-enabled="false" :show-clear-button="true" >
            <DxValidator>
          <DxCustomRule 
                    message="Error" 
                    :validation-callback="customCallback"
                    :reevaluate="true"
                />
          </DxValidator>
            <DxTextBoxButton name="clear"/>
            <DxTextBoxButton
              :options="buttonOption"
              name = "button"
              location="after"
            >
            </DxTextBoxButton>
          </DxTextBox>
          <DxTextBoxButton name="clear"/> 
         </div>
    </div>

    <div class="row">
        <div class="column"> 
          <DxTextBox label="Label" value ="" label-mode ="floating" :height="56" :hover-state-enabled="false" :show-clear-button="true" :is-valid="false">
            <DxTextBoxButton name="clear"/>
            <DxTextBoxButton
              :options="buttonOption"
              name = "button"
              location="after"
            />
          </DxTextBox>         
        </div>
        
         <div class="column"> 
          <DxTextBox label="Label" value ="" label-mode ="floating" :height="56" :hover-state-enabled="false" :show-clear-button="true" :disabled="true">
            <DxTextBoxButton name="clear"/>
            <DxTextBoxButton
              :options="buttonOption"
              name = "button"
              location="after"
            />
          </DxTextBox>         
        </div>
    </div>

    <div>Autocomplite</div>
    <div class="row">
        <div class="column"> 
          <DxAutocomplete
            :data-source="names"
            :show-clear-button="true"
            label="Label" label-mode ="floating" :height="56" :hover-state-enabled="false"> 
            <DxValidator>
          <DxCustomRule 
                    message="Error" 
                    :validation-callback="customCallback"
                    :reevaluate="true"
                />
          </DxValidator>
          </DxAutocomplete>
         </div>

         <div class="column"> 
          <DxTextBox label="Label" value ="" label-mode ="floating" :height="56" :hover-state-enabled="false" :show-clear-button="true" :disabled="true">
            <DxTextBoxButton name="clear"/>
            <DxTextBoxButton
              :options="buttonOption"
              name = "button"
              location="after"
            />
          </DxTextBox>         
        </div>
    </div>


    <div>TextBox DropList</div>
    <div class="row">
        <div class="column"> 
          <DxSelectBox
              :search-enabled="true"
              :data-source="simpleProducts"
              :show-clear-button="true"
              display-expr="Name"
              value-expr="ID"
              label="Label" 
              label-mode ="floating"
              :height="56"
              placeholder=""
            />
         </div>

         <div class="column"> 
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
              placeholder=""
            />    
        </div>
    </div>

    <div class="row">
        <div class="column"> 
          <DxSelectBox
              :search-enabled="true"
              :data-source="simpleProducts"
              :show-clear-button="true"
              display-expr="Name"
              value-expr="ID"
              label="Label" 
              label-mode ="floating"
              :height="56"
              placeholder=""
              :is-valid="false"
            />
         </div>

         <div class="column"> 
          <DxSelectBox
              :search-enabled="true"
              :data-source="simpleProducts"
              :show-clear-button="true"
              display-expr="Name"
              value-expr="ID"
              label="Label" 
              label-mode ="floating"
              :height="56"
              placeholder=""
            >  
            <DxValidator>
              <DxCustomRule 
                        message="Error" 
                        :validation-callback="customCallback"
                        :reevaluate="true"
                    />
              </DxValidator> 
          </DxSelectBox>
        </div>
    </div>

    <div>SelectBox DropTable</div>
    <div class="row">
        <div class="column"> 
          <DropDownBoxWithDataGrid />
         </div>
         <div class="column"> 
          <DropDownBoxWithDataGrid :is-valid="false"/>
        </div>
    </div>

    <div>Text Area</div>
    <div class="row">
        <div class="column"> 
          <DxTextArea
              label="Label" 
              label-mode ="floating"
              :height="90"
          />
         </div>

         <div class="column"> 
          <DxTextArea
              label="Label" 
              label-mode ="floating"
              :height="90"
              :disabled="true"
          /> 
        </div>
    </div>
    <div class="row">
        <div class="column"> 
          <DxTextArea
              label="Label" 
              label-mode ="floating"
              :height="90"
          />
         </div>

         <div class="column"> 
          <DxTextArea
              label="Label" 
              label-mode ="floating"
              :height="90"
              :is-valid="false"
          /> 
        </div>
    </div>

    
             
  </div>
</template>

<script>
import { DxTextBox, DxButton as DxTextBoxButton } from 'devextreme-vue/text-box';
import { DxSelectBox } from 'devextreme-vue/select-box';
import DxTextArea from 'devextreme-vue/text-area';
import { DxAutocomplete } from 'devextreme-vue/autocomplete';

import DropDownBoxWithDataGrid from '../components/DropDownBoxWithDataGrid.vue'

import {
  DxValidator,
  DxRequiredRule,
  DxCustomRule
} from 'devextreme-vue/validator';


export default {
  data() {
    return {  
      buttonOption: {
        icon: 'bookmark',
        stylingMode:"text",
        focusStateEnabled:false,
        hoverStateEnabled:false,
        activeStateEnabled:false,
        onClick: () => {
          alert(1)
        },
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
    DxTextBox,  DxValidator, DxCustomRule, DxRequiredRule, DxTextBoxButton, DxAutocomplete, DxSelectBox, DxTextArea, DropDownBoxWithDataGrid
  }
};
</script>

<style lang="scss">
.row {
  display: flex;
}
 
.column {
  padding: 20px;
  width: 500px;
}
</style>
