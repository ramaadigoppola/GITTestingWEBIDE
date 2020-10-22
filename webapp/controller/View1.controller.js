sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function (Controller) {
	"use strict";

	return Controller.extend("test.Testing3.controller.View1", {
		onInit: function () {
           console.log("testing");
		}
	});
});