sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel",
    "sap/m/MessageBox",
    "sap/ui/core/UIComponent"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller, JSONModel, MessageBox, UIComponent) {
        "use strict";
        var oRouter;
        return Controller.extend("project1.controller.View1", {
            onInit: function () {
                debugger;
                oRouter = UIComponent.getRouterFor(this);
                //declare the model
                var oModel1 = new JSONModel();

                // Prepare the data
                var oJsonDetials = [];
                var data = {}
                data.empDetails = { details: "" };
                data.empDetails.details = oJsonDetials;

                oJsonDetials.push({
                    "empId": 1,
                    "empName": "Swamy"
                })
                oJsonDetials.push({
                    "empId": 2,
                    "empName": "Dinesh"
                })

                //set the data to model
                oModel1.setData(data);

                //set the model to View
                this.getView().setModel(oModel1, "EmpModel")

                //create a model

                var formModel = new JSONModel();

                //set the data
                formModel.setData({})
                //set the model

                this.getView().setModel(formModel, "form");


            },

            onSaveForm: function () {
                debugger;

                //
                var data = this.getView().getModel('form2').getData();

                if (!data.empId) {
                    console.log("Please enter emp id")
                    MessageBox.error(
                        "Please enter the employee id"
                    );
                    return;
                } else {
                    MessageBox.success(
                        data.empId
                    );
                }
            },
            onNavPress: function () {
                //get the router
                var oRouter = UIComponent.getRouterFor(this);

                //use NavTo method to route to 2nd view

                oRouter.navTo("RouteView2", {
                    id: 1                       // pass the mandatory parameter declared inside the manifest

                })
            }




        

        });
    });
