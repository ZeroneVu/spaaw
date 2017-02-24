require("application.css");
require("bootstrap/dist/css/bootstrap.css");
var coreJS = require('core-js');
var zoneJS = require('zone.js');
var reflectMetadata = require('reflect-metadata');


var ng = {
    core: require("@angular/core"),
    common: require("@angular/common"),
    compiler: require("@angular/compiler"),
    forms: require("@angular/forms"),
    platformBrowser: require("@angular/platform-browser"),
    platformBrowserDynamic: require("@angular/platform-browser-dynamic"),
    router: require("@angular/router")
};


var TestAngularComponent = ng.core.Component({
    selector: "test-app",
    template: require('template/post.component.html')
}).Class({
    constructor: function () {
        this.name = null;
    }
});

var TestAngularAppModule = ng.core.NgModule({
    imports: [ng.platformBrowser.BrowserModule, ng.forms.FormsModule],
    declarations: [TestAngularComponent],
    bootstrap: [TestAngularComponent]
}).Class({
    constructor: function () {
    }
});


document.addEventListener('DOMContentLoaded', function () {
    var shouldBootstrap = document.getElementById("test-angular");
    if (shouldBootstrap) {
        ng.platformBrowserDynamic.platformBrowserDynamic().bootstrapModule(TestAngularAppModule);
    }
});

console.log("Hello world!");
