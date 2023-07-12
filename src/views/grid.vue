<template>
  <div>

 <h2 class="content-block">Tasks</h2>
 <div style=" padding: 20px; width: 80%; height: 300px;">
    <dx-data-grid    
      :data-source="dataSourceConfig"
      :show-borders="true"
      :height="500"
      :show-row-lines="true">
      <dx-paging :page-size="10" />
      <dx-pager :show-page-size-selector="true" :show-info="true" :allowed-page-sizes="[10, 20, 50]" :show-navigation-buttons="true"/>
      <dx-filter-row :visible="true" />
      <dx-selection  mode="multiple"/>
      <dx-sorting mode="multiple"/>

      <dx-column data-field="Task_ID" :width="80" />
      <dx-column data-field="Task_Completion" caption="Completion" />
      <dx-column data-field="Task_Subject" caption="Subject"/>
      <dx-column data-field="Task_Description" caption="Description" :allow-sorting="false"/>
      <dx-column data-field="Task_Status"  caption="Status" />

      <dx-column data-field="Task_Priority"  caption="Priority">
        <dx-lookup display-expr="name"  value-expr="value" :data-source="priorities"/>
      </dx-column>
      <dx-column data-field="ResponsibleEmployee.Employee_Full_Name" caption="Assigned To" :allow-sorting="false" />
      <dx-column data-field="Task_Start_Date"  caption="Start Date"  data-type="date"/>
    </dx-data-grid>
    <br/>
    <dx-data-grid    
      :data-source="dataSourceConfig"
      :show-borders="true"
      :height="500"
      :show-row-lines="true">
      <dx-paging :page-size="10" />
      <dx-pager :show-page-size-selector="true" :show-info="true" :allowed-page-sizes="[10, 20, 50]" :show-navigation-buttons="true"/>
      <dx-filter-row :visible="true" />
      <dx-selection  mode="multiple"/>
      <dx-sorting mode="multiple"/>
      <DxGroupPanel :visible="true"/>
      <DxGrouping :auto-expand-all="expanded"/>
      <DxToolbar>
      <DxItem location="before" name="groupPanel"  />
      <DxItem location="before" template="collapseTemplate" />
      <DxItem location="after" template="btnNormal"/>
      <DxItem location="after" template="btnIcon"/>
      </DxToolbar>
      <template #collapseTemplate>
        <DxButton
          :text="expanded ? 'Свернуть' : 'Развернуть'"
          :height="56"
          type="success"
          styling-mode="secondary"
          @click="collapseAllClick"
        />
      </template>
      <template #btnIcon>
          <DxButton
              :height="56"
              :width="56"
              icon="floppy"
              type="success"
              styling-mode="contained"
            />
      </template>
      <template #btnNormal>
        <DxButton
              :height="56"
              text="TextText"
              icon="link"
              type="success"
              styling-mode="contained"
            />
      </template>
      <dx-column type="selection" [width]="50"></dx-column>
      <dx-column data-field="Task_ID" :width="80" />
      <dx-column data-field="Task_Completion" caption="Completion" />
      <dx-column data-field="Task_Subject" caption="Subject"/>
      <dx-column data-field="Task_Description" caption="Description" :allow-sorting="false"/>
      <dx-column data-field="Task_Status"  caption="Status"  :group-index="0"/>

      <dx-column data-field="Task_Priority"  caption="Priority">
        <dx-lookup display-expr="name"  value-expr="value" :data-source="priorities"/>
      </dx-column>
      <dx-column data-field="ResponsibleEmployee.Employee_Full_Name" caption="Assigned To" :allow-sorting="false" />
      <dx-column data-field="Task_Start_Date"  caption="Start Date"  data-type="date"/>
    </dx-data-grid>
<br/>
    <dx-data-grid    
      :data-source="dataSourceConfig"
      :show-borders="true"
      :height="500"
      :show-row-lines="true">
      <dx-paging :page-size="10" />
      <dx-pager :show-page-size-selector="true" :show-info="true" :allowed-page-sizes="[10, 20, 50]" :show-navigation-buttons="true"/>
      <dx-filter-row :visible="true" />
      <DxFilterPanel :visible="true"/>
      <DxFilterBuilderPopup/>
      <dx-selection  mode="multiple"/>
      <dx-sorting mode="multiple"/>
      <dx-header-filter :visible="true" />

      <dx-column data-field="Task_ID" :width="80" :allow-filtering="false"/>
      <dx-column data-field="Task_Completion" caption="Completion" />
      <dx-column data-field="Task_Subject" caption="Subject" :allow-filtering="false"/>
      <dx-column data-field="Task_Description" caption="Description" :allow-sorting="false" :allow-filtering="false"/>
      <dx-column data-field="Task_Status"  caption="Status"  >
        <dx-header-filter>
          <dx-search :enabled="true"/>
        </dx-header-filter>
      </dx-column>

      <dx-column data-field="Task_Priority"  caption="Priority">
        <dx-lookup display-expr="name"  value-expr="value" :data-source="priorities"/>
      </dx-column>
      <dx-column data-field="ResponsibleEmployee.Employee_Full_Name" caption="Assigned To" :allow-sorting="false"  :allow-filtering="false"/>
      <dx-column data-field="Task_Start_Date"  caption="Start Date"  data-type="date" :allow-filtering="false"/>
    </dx-data-grid>

  </div>
  </div>
</template>

<script>
import "devextreme/data/odata/store";
import { DxButton } from 'devextreme-vue/button';
import DxDataGrid, {
  DxColumn,
  DxFilterRow,
  DxLookup,
  DxPager,
  DxPaging,
  DxSelection,
  DxSorting,
  DxGroupPanel,
  DxGrouping,
  DxToolbar,
  DxItem,
  DxHeaderFilter,
  DxSearch,
  DxFilterPanel,
  DxFilterBuilderPopup,
} from "devextreme-vue/data-grid";

const priorities = [
  { name: "High", value: 4 },
  { name: "Urgent", value: 3 },
  { name: "Normal", value: 2 },
  { name: "Low", value: 1 }
];

export default {
  data() {
    return {
      expanded: true,
      priorities
      
    };
  },
  methods: {
    collapseAllClick() {
      this.expanded = !this.expanded;
    },

  },
  created() {
    this.dataSourceConfig = {
      store: {
        type: "odata",
        key: "Task_ID",
        url: "https://js.devexpress.com/Demos/DevAV/odata/Tasks"
      },
      expand: "ResponsibleEmployee",
      select: [
        "Task_ID",
        "Task_Subject",
        "Task_Description",
        "Task_Start_Date",
        "Task_Due_Date",
        "Task_Status",
        "Task_Priority",
        "Task_Completion",
        "ResponsibleEmployee/Employee_Full_Name"
      ]
    };
  },
  components: {
    DxDataGrid,
    DxColumn,
    DxFilterRow,
    DxLookup,
    DxPager,
    DxPaging,
    DxSelection,
    DxSorting,
    DxGroupPanel,
    DxGrouping,
    DxToolbar,
    DxItem,
    DxButton,
    DxHeaderFilter,
    DxSearch,
    DxFilterPanel,
    DxFilterBuilderPopup,
  }
};
</script>
<style>
:root {
  --lh: 1.4rem;
}

.truncate-overflow {
  --max-lines: 3;
  position: relative;
  max-height: 60px;
  overflow: hidden;
  padding-right: 1rem;
}
</style>
