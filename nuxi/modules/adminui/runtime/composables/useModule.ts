import { useState } from "#imports";
import type { Ref, ref } from "vue";
import { COLUMN_TYPE, IModule } from "../types";

export default function useModule() {
  const data: IModule = {
    name: 'My Module',
    columns: [{
      text: 'Title',
      datafield: 'title',
      displayfield: 'title',
      width: 250,
      sortable: true,
      filterable: true,
      columntype: COLUMN_TYPE.textbox

    }]
  }


  return { data };
}
