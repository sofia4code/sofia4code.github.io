import { Component, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { JsonEditorOptions, JsonEditorComponent } from 'ang-jsoneditor';
import { ConfigOptions, download, generateCsv, mkConfig } from 'export-to-csv';

@Component({
  selector: 'app-json-sheet-convert',
  templateUrl: './json-sheet-convert.component.html',
  styleUrl: './json-sheet-convert.component.scss',
})
export class JsonSheetConvertComponent {
  public editorOptions: JsonEditorOptions;
  public data: any;
  form: FormGroup;
  @ViewChild(JsonEditorComponent, { static: false })
  editor!: JsonEditorComponent;

  constructor(private fb: FormBuilder) {
    this.editorOptions = new JsonEditorOptions();
    this.editorOptions.modes = ['code', 'text', 'tree', 'view']; // set all allowed modes
    this.editorOptions.mode = 'text';
    //this.options.mode = 'code'; //set only one mode
    this.data = []
    this.form = this.fb.group({
      myinput: [this.data],
    });
  }

  submit() {
    console.log(this.form.value.myinput);
    const csvConfig = mkConfig({ useKeysAsHeaders: true });
    const csv = generateCsv(csvConfig)(this.form.value.myinput);
    download(csvConfig)(csv);
  }

  parseJSONObject_(object: any) {
    var headers = new Array();
    var data = new Array();

    // get all headers
    for (var i = 0; i < object.length; i++) {
      for (var key in object[i]) {
        if (!headers.includes(key)) {
          headers.push(key);
        }
      }
    }
    data[0] = headers;
    return this.parseData_(headers, data, { rowIndex: 1 }, object);
  }
  parseData_(headers: any, data: any,  state:any, value:any) {
    var dataInserted = false;

    if (Array.isArray(value) && this.isObjectArray_(value)) {
      for (var i = 0; i < value.length; i++) {
        let d = [];
        for (var j = 0; j < headers.length; j++) {
          d.push(value[i][headers[j]]);
        }
        data[state.rowIndex] = d;
        state.rowIndex++;
      }
    }
    console.log(data);
    return data;
  }

  /**
   * Parses the headers array and inserts it into the first row of the data array.
   */
  parseHeaders_(headers:any, data: any) {
    data[0] = new Array();

    for (var key in headers) {
      data[0][headers[key]] = key;
    }
  }

  /**
   * Returns true if the given test value is an object; false otherwise.
   */
  isObject_(test:any) {
    return Object.prototype.toString.call(test) === '[object Object]';
  }

  /**
   * Returns true if the given test value is an array containing at least one object; false otherwise.
   */
  isObjectArray_(test: any) {
    for (var i = 0; i < test.length; i++) {
      if (this.isObject_(test[i])) {
        return true;
      }
    }

    return false;
  }
}
