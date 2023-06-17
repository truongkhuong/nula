
export interface NavbarRoute {
  label?: string;
  icon?: string;
  path?: string;
  disabled?: boolean,
  type?: string,
  children?: NavbarRoute[];
}


export enum COLUMN_TYPE {
  textbox = 'textbox',
  number = 'number',
  checkbox = 'checkbox',
  numberinput = 'numberinput',
  dropdownlist = 'dropdownlist',
  combobox = 'combobox',
  datetimeinput = 'datetimeinput',
}

export interface IColumn {
  text: String,
  datafield: String,
  displayfield: String,
  width: Number | String,
  sortable: Boolean,
  filterable: Boolean,
  columntype: COLUMN_TYPE
}

export interface IModule {
  name: String,
  columns: IColumn[],
}