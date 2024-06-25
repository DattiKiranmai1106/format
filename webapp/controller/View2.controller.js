sap.ui.define([
    "sap/ui/core/mvc/Controller"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller) {
        "use strict";

        return Controller.extend("com.sap.kt.form.formate.controller.View2", {
            onInit: function () {

            },
            onPressNavgateView1:function(){
                var  oRouter=this.getOwnerComponent().getRouter();
                oRouter.navTo("RouteView1");
            }
        });
    });