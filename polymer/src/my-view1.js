/**
 * @license
 * Copyright (c) 2016 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
 */

import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';
// import {html} from '@polymer/polymer/lib/utils/html-tag.js';
import { mixinBehaviors } from '@polymer/polymer/lib/legacy/class.js';

import '@polymer/paper-radio-button/paper-radio-button.js';
import '@polymer/paper-input/paper-input.js';
import '@polymer/paper-checkbox/paper-checkbox.js';
import '@polymer/paper-dropdown-menu/paper-dropdown-menu.js';
import '@polymer/paper-item/paper-item.js';
import '@polymer/paper-listbox/paper-listbox.js';
import '@polymer/paper-button/paper-button.js';
import '@polymer/paper-radio-group/paper-radio-group.js';
import '@polymer/iron-form/iron-form.js';
import '@polymer/iron-ajax/iron-ajax.js';
import { NeonAnimationRunnerBehavior } from '@polymer/neon-animation/neon-animation-runner-behavior.js';
// import {IronOverlayBehavior} from '@polymer/iron-overlay-behavior/iron-overlay-behavior.js';
// import '@polymer/neon-animation/animations/scale-down-animation.js';

import './shared-styles.js';

class MyView1 extends mixinBehaviors([NeonAnimationRunnerBehavior], PolymerElement) {
  static get template() {
    return html`
      <style include="shared-styles">
        :host {
          display: block;

          padding: 10px;
        }
      </style>

      <div class="card">
      <header>Account Opening Form</header>
      <iron-form id="ingform">
      <form>
        <div>
          <paper-radio-group selected="{{data.gender}}" value="{{data.gender}}">
            <paper-radio-button name="male">Male</paper-radio-button>
            <paper-radio-button name="female">Female</paper-radio-button>
          </paper-radio-group>
        </div>
        <div>
          <span>
            <paper-input always-float-label label="First Name" value="{{data.firstName}}"></paper-input>
            <paper-input always-float-label label="Last Name" value="{{data.lastName}}"></paper-input>
          </span>
        </div>
        
        <div>
          <paper-dropdown-menu label="Nationality" value="{{data.nationality}}">
            <paper-listbox slot="dropdown-content" selected="1">
              <paper-item>India</paper-item>
              <paper-item>Australia</paper-item>
              <paper-item>Nethelands</paper-item>
              <paper-item>Spain</paper-item>
            </paper-listbox>
          </paper-dropdown-menu>
        </div>
        <div>
          <paper-checkbox checked={{data.tandc}}>Accept terms & conditions</paper-checkbox>
        </div>
        <div>
          <paper-button raised class="indigo" on-click="submit">Submit</paper-button>
        </div>
      </div>
      </form>
      <div class="output"></div>
      </iron-form>
      <div>
        <iron-ajax id="ajax" method="post" url="https://jsonplaceholder.typicode.com/posts" handle-as="json" last-response="{{ajaxResponse}}" on-response="handleRequest"
      on-response="handleResponse" on-error="handleError"></iron-ajax>
        </iron-ajax>
      </div>
    `;
  }

  static get properties() {
    return {
      data: {
        type: Object,
        value: {}
      }
    }
  }

  submit() {
    console.log(this.data);
    if (this.$.ingform.validate()) {
      this.$.ajax.body=JSON.stringify(this.data);
      this.$.ajax.generateRequest();
    }
  }
}

window.customElements.define('my-view1', MyView1);
