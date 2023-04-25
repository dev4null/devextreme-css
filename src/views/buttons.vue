<template>
  <div class="content-block">
    <h2>Buttons <a href="https://www.figma.com/file/QBuh5OJf5xnjfx0Ecm4hvO/%F0%9F%A6%85--%F0%9F%A6%A9-CRM-Corporate-%2F-UI-kit?node-id=5%3A925&t=5ArZtHMG4Ap5a79Y-0" target="_blank">Figma</a></h2>
    <table width="75%">
      <tr>
        <th>&nbsp;</th>
        <th>Active</th>
        <th>With icon</th>
        <th>Disabled</th>

      </tr>
      <tr>
        <td>Primary</td>
        <td>
          <DxButton
              :height="56"
              text="TextText"
              type="default"
              styling-mode="contained"
              @click="onClick($event)"
            />
          </td>
        <td>
          <DxButton
              :height="56"
              text="TextText"
              icon="link"
              type="default"
              styling-mode="contained"
              @click="onClick($event)"
            />
        </td>
        <td> 
          <DxButton
              :height="56"
              text="TextText"
              type="default"
              :disabled="true"
              styling-mode="contained"
              @click="onClick($event)"
            />
          </td>
      </tr>
      <tr>
        <td>Secondary</td>
        <td>
          <DxButton
              :height="56"
              text="TextText"
              type="success"
              styling-mode="contained"
              @click="onClick($event)"
            />
        </td>
        <td>
          <DxButton
              :height="56"
              text="TextText"
              icon="link"
              type="success"
              styling-mode="contained"
              @click="onClick($event)"
            />
        </td>
        <td>
          <DxButton
              :height="56"
              text="TextText"
              type="success"
              :disabled="true"
              styling-mode="contained"
            />
        </td>
      </tr>
      <tr>
        <td>Tertiary</td>
        <td>
          <DxButton
              :height="56"
              text="TextText"
              type="normal"
              styling-mode="text"
              @click="onClick($event)"
            />
        </td>
        <td>
          <DxButton
              :height="56"
              text="TextText"
              icon="link"
              type="normal"
              styling-mode="text"
              @click="onClick($event)"
            />
        </td>
        <td>
          <DxButton
              :height="56"
              text="TextText"
              type="normal"
              :disabled="true"
              styling-mode="text"
            />
        </td>
      </tr>
      <tr>
        <td>Danger</td>
        <td>
          <DxButton
              :height="56"
              text="TextText"
              type="danger"
              styling-mode="contained"
              @click="onClick($event)"
            />
        </td>
        <td>
          <DxButton
              :height="56"
              text="TextText"
              icon="link"
              type="danger"
              styling-mode="contained"
              @click="onClick($event)"
            />
        </td>
        <td>
          <DxButton
              :height="56"
              text="TextText"
              type="danger"
              :disabled="true"
              styling-mode="contained"
            />
        </td>
      </tr>
      <tr>
        <td>Icon(primary)</td>
        <td>
          <DxButton
              :height="56"
              :width="56"
              icon="floppy"
              type="default"
              styling-mode="contained"
              @click="onClick($event)"
            />
        </td>
        <td>
        </td>
        <td>
          <DxButton
              :height="56"
              :width="56"
              icon="floppy"
              type="default"
              styling-mode="contained"
              :disabled="true"
              @click="onClick($event)"
            />
        </td>
      </tr>
      <tr>
        <td>Icon(secondary)</td>
        <td>
          <DxButton
              :height="56"
              :width="56"
              icon="floppy"
              type="success"
              styling-mode="contained"
              @click="onClick($event)"
            />
        </td>
        <td>
        </td>
        <td>
          <DxButton
              :height="56"
              :width="56"
              icon="floppy"
              type="success"
              styling-mode="contained"
              :disabled="true"
              @click="onClick($event)"
            />
        </td>
      </tr>
      <tr>
        <td>Icon(Danger)</td>
        <td>
          <DxButton
              :height="56"
              :width="56"
              icon="floppy"
              type="danger"
              styling-mode="contained"
              @click="onClick($event)"
            />
        </td>
        <td>
        </td>
        <td>
          <DxButton
              :height="56"
              :width="56"
              icon="floppy"
              type="danger"
              styling-mode="contained"
              :disabled="true"
              @click="onClick($event)"
            />
        </td>
      </tr>
    </table>
  </div>
</template>

<script>
import DxButton from 'devextreme-vue/button';
import notify from 'devextreme/ui/notify';



export default {
  data() {
    return {  
      actions: [
    { id: 1, text: 'My profile' },
    { id: 2, text: 'Messages' },
    { id: 3, text: 'Contacts', icon: 'group' },
    { id: 4, text: 'Log out', icon: 'runner' }
]
    };
  },
  methods: {
    onClick(e) {
      const buttonText = e.component.option('text');
      notify(`The ${buttonText} button was clicked`);
    },
    action(e) {
            notify(`The ${e.itemData.text} button was clicked`);
        },
       buttonClick(e) {
         const buttonText = e.component.option('text');
          notify(`The ${buttonText} button was clicked`);
        }
    },    
  components: {
    DxButton
  }
};
</script>

<style lang="scss">
td {
  text-align: center;
  vertical-align: middle;
}
th, td {
  padding: 5px;
}
</style>
