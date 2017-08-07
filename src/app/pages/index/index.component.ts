import { Component, OnInit, OnDestroy } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

// models
import { IDomNode } from '../../models/dome-mode';

// services
import { DomNodeService } from '../../services/dom-node.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css'],
  providers: [
    DomNodeService
  ]
})
export class IndexComponent implements OnInit, OnDestroy {
  resHtml: any;
  getDataConnection: any;

  constructor(
    private domNodeService: DomNodeService,
    private sanitizer: DomSanitizer
  ) { }

  ngOnInit() {
    this.getData();
  }

  getData() {
    this.getDataConnection = this.domNodeService.getData().subscribe(
      (data) => {
        this.resHtml = this.sanitizer.bypassSecurityTrustHtml(this.parseHTMLShablon(data));
      },
      (err) => {
        console.log(err);
      }
    );
  }

  parseHTMLShablon(domNode: IDomNode) {
    if (!domNode) {
      return '';
    }
    let resContent = '';
    if (domNode.content && domNode.content.length > 0) {
      for (let i = 0; i < domNode.content.length; i ++) {
        resContent += this.parseHTMLShablon(domNode.content[i]);
      }
    }

    let attributesHtml = '';
    if (domNode.attributes) {
      for (const property in domNode.attributes) {
        if (domNode.attributes[property]) {
          attributesHtml += ' ' + property + '="' + domNode.attributes[property] + '"';
        }
      }
    }
    const text = domNode.text ? domNode.text : '';
    const attributes = attributesHtml ? ' ' + attributesHtml : '';
    if (domNode.tag) {
      return '<' + domNode.tag + attributes + '>' + text + resContent + '</' + domNode.tag + '>';
    }

    return text + resContent;
  }

  ngOnDestroy() {
    if (this.getDataConnection && this.getDataConnection.unsubscribe) {
      this.getDataConnection.unsubscribe();
    }
  }

}
