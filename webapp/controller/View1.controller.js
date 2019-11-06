sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function (Controller) {
	"use strict";

	return Controller.extend("demofragment.demofragment.controller.View1", {
		onInit: function () {
			var oData = {
				names: [
					{
					Name: "Elephant",
					Place: "Forest"	
					},			
					{
					Name: "Dinosaur",
					Place: "Mountain"
					
				     },
					{
					Name: "Whale",
					Place: "Sea"	
					},
				{
					Name: "Monkey",
					Place: "Trees"	
					
				}]
			};
			
			var oModel = new sap.ui.model.json.JSONModel();
			oModel.setData(oData);
			sap.ui.getCore().setModel(oModel,"list");
			
			
		

		},
		
		
		openFragment : function (oEvt){
			
			if(this.oFragment === undefined)
			{
			this.oFragment = sap.ui.jsfragment("demofragment.demofragment.controller.demo",this);
			this.oFragment.open();	
			}
			else{
			this.oFragment.open();	
			}
			},
			

		liveChange : function(oEvt){
				
		
		
			var sVal = oEvt.getParameter("value");
			var oFilter = new sap.ui.model.Filter("Name",sap.ui.model.FilterOperator.Contains,sVal);
			var oBinding = oEvt.getSource().getBinding("items");
			oBinding.filter(oFilter);
		
			
			
			
			
		},
			handleValueHelpClose : function (evt) {
			var oSelectedItem = evt.getParameter("selectedItem");
			if (oSelectedItem) {
				var inputId1 = this.byId(this.inputId);
				inputId1.setValue(oSelectedItem.getTitle());
			}
		    evt.getSource().getBinding("items").filter([]);
		}
	});
});