sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "com/sap/kt/form/formate/model/formatter"

],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller,formatter) {
        "use strict";

        return Controller.extend("com.sap.kt.form.formate.controller.View1", {
           formatt:formatter,
            onInit: function () {
              var jsonData=[{
                "expenseId":1,
                "expenseName":"Car",
                "expenseAmount1":"1200",
                "expenseStatus":"Approved"
              },
            {
                "expenseId":2,
                "expenseName":"Train",
                "expenseAmount1":"2000",
                "expenseStatus":"Pending"
            }]

            var oModel1= new sap.ui.model.json.JSONModel(jsonData);
            this.getView().setModel(oModel1,"expenseData")
            },
            onPress:function(){
                // var oView = this.getView();
                 var oView = this.getView();
                 if (!this.oDialog) {
                     this.oDialog = sap.ui.core.Fragment.load({
                         name: "com.sap.kt.form.formate.fragment.expen",
                         controller: this
                     }).then(function (oDialog) {
                         this.oDialog = oDialog;
                         oView.addDependent(this.oDialog);
                         this.oDialog.open();
                     }.bind(this));
                 } else {
                    this.oDialog.open();
                   }
             },

             onPressSave:function(){
                var oModel1=this.getView().getModel("expenseData").getData();
                var expenId=sap.ui.getCore().byId("idExpense").getValue();
                var expenName=sap.ui.getCore().byId("idExpensName").getValue();
                var expenAmount=sap.ui.getCore().byId("idExpenAmount").getValue();
                var expenStatus=sap.ui.getCore().byId("idExpenStatus").getValue();
                var oPayload = {
                    "expenseId":expenId,
                    "expenseName":expenName,
                    "expenseAmount1":expenAmount,
                    "expenseStatus":expenStatus
                }
                oModel1.push(oPayload);
                this.oDialog.close();
                this.byId("idStudentTable").getModel("expenseData").refresh();
                //sap.m.MessageBox.success("Expense Saved Successfully") 
             },
             onPressClose:function(){
                   this.oDialog.close();
             },
             onPressDelete:function(oEvent){
                var sSelectedPath = oEvent.getParameter("listItem").getBindingContextPath().split("/")[1];
                this.getView().getModel("expenseData").getData().splice(sSelectedPath,"1");
                this.byId("idStudentTable").getModel("expenseData").refresh();

             },
             onPressNavView:function(){
                var oRouter=this.getOwnerComponent().getRouter();
                oRouter.navTo("RouteView2");
             }
        });
    });
