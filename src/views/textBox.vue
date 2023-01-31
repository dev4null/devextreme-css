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
          <DxTextBox label="Label" value ="" label-mode ="floating" :height="56" hint=" TextBox SimpleTextBox SimpleTextBox Simple TextBox Simple" :show-clear-button="true"/>
        </td>
        <td>
          <DxTextBox label="Label" value ="Text" label-mode ="floating" :height="56" :show-clear-button="true"/> 
        </td>
      </tr>
      <tr>
        <td>Error</td>
        <td>
          <DxTextBox label="Label" value ="" validation-status="invalid" label-mode ="floating" :height="56" :show-clear-button="true"> 
            <DxValidator>
                <DxRequiredRule message="Text field is required"/>
            </DxValidator>
          </DxTextBox>
        </td>
        <td>
          <DxTextBox label="Label" value ="Text" validation-status="invalid" label-mode ="floating" :height="56" :show-clear-button="true">
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
        <td>ReadOnly</td>
        <td>
          <DxTextBox label="Label" value ="" label-mode ="floating" :height="56" :read-only="true" :show-clear-button="true"/>
        </td>
        <td>
          <DxTextBox label="Label" value ="Text" label-mode ="floating" :height="56" :read-only="true" :show-clear-button="true"/> 
        </td>       
      </tr>
      <tr>
        <td>Disabled</td>
        <td>
          <DxTextBox label="Label" value ="" label-mode ="floating" :height="56" :disabled="true" :show-clear-button="true"/>
        </td>
        <td>
          <DxTextBox label="Label" value ="Text" label-mode ="floating" :height="56" :disabled="true" :show-clear-button="true"/> 
        </td>    
      </tr>
      <tr>
        <td colspan="3"><h3>TextBox Simple + Button + Link</h3></td>
      </tr>
      <tr>
        <td>Normal</td>
        <td>
          <DxTextBox label="Label" value ="" label-mode ="floating" :height="56" :show-clear-button="true">
            <DxTextBoxButton name="clear"/>
            <DxTextBoxButton
              :options="buttonOptionInfo"
              name = "button"
              location="after"
            />
          </DxTextBox>  
        </td>
        <td>
          <DxTextBox label="Label" value ="Text" label-mode ="floating" :height="56" :element-attr="rightButtonAttr" :show-clear-button="true">
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
          <DxTextBox label="Label" value ="" label-mode ="floating" :height="56" validation-status="invalid" :show-clear-button="true">
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
          <DxTextBox label="Label" value ="Text" label-mode ="floating" :height="56" validation-status="invalid" :element-attr="rightButtonAttr" :show-clear-button="true">
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
          <DxTextBox label="Label" value ="" label-mode ="floating" :height="56" :read-only="true" :show-clear-button="true">
            <DxTextBoxButton
              :options="buttonOptionInfo"
              name = "button"
              location="after"
            />
          </DxTextBox>            
        </td>
        <td>
          <DxTextBox label="Label" value ="Text" label-mode ="floating" :height="56" :read-only="true" :element-attr="rightButtonAttr" :show-clear-button="true">
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
          <DxTextBox label="Label" value ="" label-mode ="floating" :height="56" :disabled="true" :show-clear-button="true">
            <DxTextBoxButton
              :options="buttonOptionInfo"
              name = "button"
              location="after"
            />
          </DxTextBox>            
        </td> 
        <td>
          <DxTextBox label="Label" value ="Text" label-mode ="floating" :height="56" :disabled="true" :element-attr="rightButtonAttr" :show-clear-button="true">
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
        <td colspan="3"><h3>TextBox Simple + Button</h3></td>
      </tr>
      <tr>
        <td>Normal</td>
        <td>
          <DxTextBox label="Label" value ="" label-mode ="floating" :height="56" :show-clear-button="true">
            <DxTextBoxButton name="clear"/>
            <DxTextBoxButton
              :options="buttonOptionInfo"
              name = "button"
              location="after"
            />
          </DxTextBox>  
        </td>
        <td>
          <DxTextBox label="Label" value ="Text" label-mode ="floating" :height="56" :show-clear-button="true">
            <DxTextBoxButton name="clear"/>
            <DxTextBoxButton
              :options="buttonOptionInfo"
              name = "info"
              location="after"
            />
          </DxTextBox>   
        </td>
      </tr>
      <tr>
      <td>Error</td>
        <td>
          <DxTextBox label="Label" value ="" label-mode ="floating" :height="56" validation-status="invalid" :show-clear-button="true">
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
          <DxTextBox label="Label" value ="Text" label-mode ="floating" :height="56" validation-status="invalid" :show-clear-button="true">
            <DxTextBoxButton name="clear"/>
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
          <DxTextBox label="Label" value ="" label-mode ="floating" :height="56" :read-only="true" :show-clear-button="true">
            <DxTextBoxButton name="clear"/>
            <DxTextBoxButton
              :options="buttonOptionInfo"
              name = "button"
              location="after"
            />
          </DxTextBox>            
        </td>
        <td>
          <DxTextBox label="Label" value ="Text" label-mode ="floating" :height="56" :read-only="true" :show-clear-button="true">
            <DxTextBoxButton name="clear"/>
            <DxTextBoxButton
              :options="buttonOptionInfo"
              name = "info"
              location="after"
            />
          </DxTextBox>   
        </td>       
      </tr>
      <tr>
      <td>Disabled </td>
        <td>
          <DxTextBox label="Label" value ="" label-mode ="floating" :height="56" :disabled="true" :show-clear-button="true">
            <DxTextBoxButton name="clear"/>
            <DxTextBoxButton
              :options="buttonOptionInfo"
              name = "button"
              location="after"
            />
          </DxTextBox>            
        </td> 
        <td>
          <DxTextBox label="Label" value ="Text" label-mode ="floating" :height="56" :disabled="true" :show-clear-button="true">
            <DxTextBoxButton name="clear"/>
            <DxTextBoxButton
              :options="buttonOptionInfo"
              name = "info"
              location="after"
            />
          </DxTextBox>   
        </td>       
      </tr>

      <tr>
        <td colspan="3"><h3>TextBox Simple + Link</h3></td>
      </tr>
      <tr>
        <td>Normal</td>
        <td>
          <DxTextBox label="Label" value ="" label-mode ="floating" :height="56" :show-clear-button="true">
            <DxTextBoxButton name="clear"/>
          </DxTextBox>  
        </td>
        <td>
          <DxTextBox label="Label" value ="Text" label-mode ="floating" :height="56" :element-attr="rightButtonAttr" :show-clear-button="true">
            <DxTextBoxButton name="clear"/>
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
          <DxTextBox label="Label" value ="" label-mode ="floating" :height="56" validation-status="invalid" :show-clear-button="true">
            <DxTextBoxButton name="clear"/>
            <DxValidator>
                <DxRequiredRule message="Text field is required"/>
            </DxValidator>
          </DxTextBox>  
        </td>
        <td>
          <DxTextBox label="Label" value ="Text" label-mode ="floating" :height="56" validation-status="invalid" :element-attr="rightButtonAttr" :show-clear-button="true">
            <DxTextBoxButton name="clear"/>
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
          <DxTextBox label="Label" value ="" label-mode ="floating" :height="56" :read-only="true" :show-clear-button="true"/>          
        </td>
        <td>
          <DxTextBox label="Label" value ="Text" label-mode ="floating" :height="56" :read-only="true" :element-attr="rightButtonAttr" :show-clear-button="true">
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
          <DxTextBox label="Label" value ="" label-mode ="floating" :height="56" :disabled="true" :show-clear-button="true"/>          
        </td> 
        <td>
          <DxTextBox label="Label" value ="Text" label-mode ="floating" :height="56" :disabled="true" :element-attr="rightButtonAttr" :show-clear-button="true">
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
  margin-top: 12px !important;
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
