import { Component } from '@angular/core';

@Component({selector: 'app-hello-world', template: 'Hello World!'})
  class HelloWorldComponent {
}

@Component({
  selector: 'app-copilot',
  templateUrl: './copilot.component.html',
  styleUrls: ['./copilot.component.css']
})

export class CopilotComponent {
  HelloWorld = HelloWorldComponent;
}
