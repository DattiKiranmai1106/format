sap.ui.define([], () => {
	"use strict";

	return {
		formatCurrencyText(sValue) {
			   let code="INR"
				return this.formatt.commonCurrency(sValue,code);
		},
				// x = sValue.toString();
                // var pattern = /(-?\d+)(\d{3})/;
                // while (pattern.test(x))
                //     x = x.replace(pattern, "$1,$2");
                // return x + ".00"  +" " +  "INR";

				//let a=sValue.length;
				//if(a>=4){
				// switch(a){
				// 	case 4:
				// 	    var sum=""; 
				//         for(let i=0;i<sValue.length;i++){
				// 	    if(i==0){
		     	// 	        sum=sum+sValue.charAt(i)+",";
				// 	    }
				// 	    else{
				// 	        sum=sum+sValue.charAt(i);
				// 	    }
				// 	    } 
				// 	  return sum+".00" + " INR"; 
				// 	case 5:
				// 		sum=" "
				// 		for(let i=0;i<sValue.length;i++){
				// 			if(i==1){
				// 				 sum=sum+sValue.charAt(i)+",";
				// 			}
				// 			else{
				// 				sum=sum+sValue.charAt(i);
				// 			}
				// 			}
				// 			return sum+".00"+ " INR";
				// 	case 6:
				// 		sum=" "
				// 		for(let i=0;i<sValue.length;i++){
				// 			if(i==3){
				// 				 sum=sum+sValue.charAt(i)+",";
				// 			}
				// 			else{
				// 				sum=sum+sValue.charAt(i);
				// 			}
				// 			}
				// 			return sum+".00" + " INR";
				// 	case 7:
				// 		sum=" "
				// 		for(let i=0;i<sValue.length;i++){
				// 			if(i==0 || i==3){
				// 				 sum=sum+sValue.charAt(i)+",";
				// 			}
				// 			else{
				// 				sum=sum+sValue.charAt(i);
				// 			}
				// 			}
				// 			return sum+".00" + " INR";     
				// }
			 // }
			 
		formatCurrencyInUSDText(sValue) {
			sValue=sValue*0.012
			if(sValue) { 
				let code="USD"
				return this.formatt.commonCurrency(sValue,code);
			}
		},
		formatCurrencyInEuroText(sValue) {
            sValue=sValue*0.0112 
			if(sValue) {
				let code="EUR"
				return this.formatt.commonCurrency(sValue,code);
			}
		},
		formatDataOblject(sValue){
			
           switch(sValue){
			case "Approved":
				return "Success";
			case "Rejected":
				return "Error";
			case "Pending":
				return "Information";
			case "Hold":
				return "Warning";
			default:
				return "Indication08"
		   }
		},
		commoncal(value){
			var oFormatOptions = {
				minIntegerDigits: 2,
				maxIntegerDigits: 10,
				minFractionDigits: 2,
				maxFractionDigits: 2
			};
			var oFloatFormat = sap.ui.core.format.NumberFormat.getFloatInstance(oFormatOptions);
			return oFloatFormat.format(value);
		},
		commonCurrency(value,code){
			var oCurrencyFormat = sap.ui.core.format.NumberFormat.getCurrencyInstance({
				currencyCode: false
			});
			return oCurrencyFormat.format(value,code)
		}
		// commonCurrency1(value){
		// 	var oCurrencyFormat=sap.ui.core.format.NumberFormat.getCurrencyInstance(
		// 	{
		// 	currencyCode: false,
        //     customCurrencies: {
        //     "MyEuro": {
        //     decimals: 2,
        //     isoCode: "EUR"
        //      },
        //     }
		// 	});
		// 	return oCurrencyFormat.format(value,"MyEuro");
		// },
		// commonCurrency2(value){
		// 	var oCurrencyFormat=sap.ui.core.format.NumberFormat.getCurrencyInstance(
		// 	{
		// 	currencyCode: false,
        //     customCurrencies: {
        //     "MyEuro": {
        //     decimals: 2,
        //     isoCode: "USD"
        //      },
        //     }
		// 	});
		// 	return oCurrencyFormat.format(value,"MyEuro");
		// }
	};
});