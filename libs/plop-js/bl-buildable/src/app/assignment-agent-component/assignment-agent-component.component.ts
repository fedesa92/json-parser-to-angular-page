import { Component } from '@angular/core';

@Component({
  selector: 'app-assignment-agent-component',
  templateUrl: './assignment-agent-component.component.html',
  styleUrls: ['./assignment-agent-component.component.css']
})
export class AssignmentAgentComponentComponent {
  formItems = [
  {
    "type": "formItem",
    "name": "formButton",
    "label": "Assegna",
    "config": {
      "inputType": "button",
      "action": "submitEvent",
      "type": "flat",
      "colorTheme": "primary"
    }
  },
  {
    "type": "formItem",
    "name": "listRadioMultiSelect",
    "label": " ",
    "config": {
      "backgroundColor": "green",
      "dropdownPosition": "top"
    }
  }
];
  gridChildren = [];
}