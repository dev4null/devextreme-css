<template>
  <div class="content-block">
    <h2>Autocomplete<a href="https://www.figma.com/file/QBuh5OJf5xnjfx0Ecm4hvO/%F0%9F%A6%85--%F0%9F%A6%A9-CRM-Corporate-%2F-UI-kit?node-id=2521%3A22965&t=otKKb7HHDHQ7ofX9-0" target="_blank">Figma</a></h2>
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
          <DxAutocomplete :data-source="names" label="Label" value ="" label-mode ="floating" :height="56" :show-clear-button="true"/>
        </td>
        <td>
          <DxAutocomplete :data-source="names" label="Label" value ="Christopher" label-mode ="floating" :height="56" :show-clear-button="true"/> 
        </td>
      </tr>
      <tr>
        <td>Error</td>
        <td>
          <DxAutocomplete :data-source="names" :show-clear-button="true" label="Label" label-mode ="floating" :height="56" validation-status="invalid"> 
            <DxValidator>
              <DxCustomRule  message="Error" :validation-callback="customCallback" :reevaluate="true" />
            </DxValidator>
          </DxAutocomplete>
        </td>
        <td>
          <DxAutocomplete  value ="Christopher" :data-source="names" :show-clear-button="true" label="Label" label-mode ="floating" :height="56" validation-status="invalid"> 
            <DxValidator>
              <DxCustomRule message="Error" :validation-callback="customCallback" :reevaluate="true" />
            </DxValidator>
          </DxAutocomplete>
        </td>
      </tr>
      <tr>
        <td>ReadOnly</td>
        <td>
          <DxAutocomplete :data-source="names" label="Label" value ="" label-mode ="floating" :height="56" :show-clear-button="true" :read-only="true"/>
        </td>
        <td>
          <DxAutocomplete :data-source="names" label="Label" value ="Christopher" label-mode ="floating" :height="56" :show-clear-button="true" :read-only="true"/> 
        </td>       
      </tr>
      <tr>
        <td>Disabled</td>
        <td>
          <DxAutocomplete :data-source="names" label="Label" label-mode ="floating" :height="56" :show-clear-button="true" :disabled="true" /> 
        </td>
        <td>
          <DxAutocomplete :data-source="names" value ="Christopher" label="Label" label-mode ="floating" :height="56" :show-clear-button="true" :disabled="true" /> 
        </td>    
      </tr>

      <tr>
        <td colspan="3"><h3>Button</h3></td>
      </tr>
      <tr>
        <td>Normal</td>
        <td>
          <DxAutocomplete :data-source="names" label="Label" label-mode ="floating" :height="56" :show-clear-button="true">
            <DxTextBoxButton name="clear"/>
            <DxTextBoxButton
              :options="buttonOptionInfo"
              name = "button"
              location="after"
            />
          </DxAutocomplete>  
        </td>
        <td>
          <DxAutocomplete :data-source="names" label="Label" value ="Christopher" label-mode ="floating" :height="56" :show-clear-button="true">
            <DxTextBoxButton name="clear"/>
            <DxTextBoxButton
              :options="buttonOptionInfo"
              name = "info"
              location="after"
            />
          </DxAutocomplete>   
        </td>
      </tr>
      <td>Error</td>
        <td>
          <DxAutocomplete :data-source="names" label="Label" label-mode ="floating" :height="56" validation-status="invalid" :show-clear-button="true">
            <DxTextBoxButton name="clear"/>
            <DxTextBoxButton
              :options="buttonOptionInfo"
              name = "button"
              location="after"
            />
            <DxValidator>
                <DxRequiredRule message="Text field is required"/>
            </DxValidator>
          </DxAutocomplete>  
        </td>
        <td>
          <DxAutocomplete :data-source="names" label="Label" value ="Christopher" label-mode ="floating" :height="56" validation-status="invalid" :show-clear-button="true">
            <DxTextBoxButton name="clear"/>
            <DxTextBoxButton
              :options="buttonOptionInfo"
              name = "button"
              location="after"
            />
            <DxValidator>
              <DxCustomRule 
                        message="Error" 
                        :validation-callback="customCallback"
                        :reevaluate="true"
                    />
              </DxValidator>
          </DxAutocomplete>   
        </td>
        <tr>
        <td>ReadOnly </td>
        <td>
          <DxAutocomplete :data-source="names" label="Label" label-mode ="floating" :height="56" :read-only="true" :show-clear-button="true">
            <DxTextBoxButton name="clear"/>
            <DxTextBoxButton
              :options="buttonOptionInfo"
              name = "button"
              location="after"
            />
          </DxAutocomplete>            
        </td>
        <td>
          <DxAutocomplete :data-source="names" label="Label" value ="Christopher" label-mode ="floating" :height="56" :read-only="true" :show-clear-button="true">
            <DxTextBoxButton name="clear"/>
            <DxTextBoxButton
              :options="buttonOptionInfo"
              name = "info"
              location="after"
            />
          </DxAutocomplete>   
        </td>       
      </tr>
      <tr>
      <td>Disabled </td>
        <td>
          <DxAutocomplete :data-source="names" label="Label" label-mode ="floating" :height="56" :disabled="true" :show-clear-button="true">
            <DxTextBoxButton name="clear"/>
            <DxTextBoxButton
              :options="buttonOptionInfo"
              name = "button"
              location="after"
            />
          </DxAutocomplete>            
        </td> 
        <td>
          <DxAutocomplete :data-source="names" label="Label" value ="Christopher" label-mode ="floating" :height="56" :disabled="true" :show-clear-button="true">
            <DxTextBoxButton name="clear"/>
            <DxTextBoxButton
              :options="buttonOptionInfo"
              name = "info"
              location="after"
            />
          </DxAutocomplete>   
        </td>       
      </tr>
    </table>
             
  </div>
</template>

<script>
import { DxButton as DxTextBoxButton } from 'devextreme-vue/text-box';
import { DxAutocomplete } from 'devextreme-vue/autocomplete';

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
     
      names: ['James', 'John', 'Robert', 'Michael', 'William', 'David', 'Richard', 'Charles', 'Joseph', 'Thomas', 'Christopher', 'Daniel', 'Paul', 'Mark', 'Donald', 'George', 'Kenneth', 'Steven', 'Edward', 'Brian', 'Ronald', 'Anthony', 'Kevin', 'Jason', 'Jeff', 'Mary', 'Patricia', 'Linda', 'Barbara', 'Elizabeth', 'Jennifer', 'Maria', 'Susan', 'Margaret', 'Dorothy', 'Lisa', 'Nancy', 'Karen', 'Betty', 'Helen', 'Sandra', 'Donna', 'Carol', 'Ruth', 'Sharon', 'Michelle', 'Laura', 'Sarah', 'Kimberly', 'Deborah'] ,
    };
  },
  methods: {
        customCallback() {
            return false;
        }
    },    
  components: {
     DxValidator, DxCustomRule, DxRequiredRule, DxTextBoxButton, DxAutocomplete 
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
  margin-top: 10px !important;
}

.fixCustomButtomBefore {
  margin-left: 15px !important;
}



</style>
