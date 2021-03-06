exports.reservation = function(restratuntName) {
	var db = require('db');
	
	var win = Titanium.UI.createWindow({
		backgroundColor : '#fff',
		windowSoftInputMode : Ti.UI.Android.SOFT_INPUT_ADJUST_PAN
	});

	//Custom Nav Bar
	var navBar = Titanium.UI.createView({
		left : 0,
		top : 0,
		height : 40,
		width : Ti.Platform.displayCaps.platformWidth,
		backgroundColor : "#999"
	});
	win.add(navBar);
	
	var navTitle = Ti.UI.createLabel({
		text: "Book Tabel",
		textAlign : 'center',
		top : 6,
		height : 28,
		width : 180,
		color : '#ffff',
		font : {
			fontSize : 19,
			fontWeight : 'bold',
			fontFamily : 'Helvetica Neue'
		},
	});
	navBar.add(navTitle);
	
	var container = Ti.UI.createScrollView({
		layout:"vertical",
		top:40,
		left:0
	});
	win.add(container);
	
    var infoLabel = Titanium.UI.createLabel({
    	text:"Your have selected  "+restratuntName,
    	color: '#2881BB',
    	height:25,
    	top:10,
    	//bottom:10,
    	font:{fontSize:15,fontWeight:"bold"}
    });
    container.add(infoLabel);


    var contactInfoLabel = Titanium.UI.createLabel({
    	text:"CONTACT INFO",
    	color: '#2a2a2b',
    	height:Ti.UI.SIZE,
    	top:15,
    	left:20,
    	font:{fontSize:14,fontWeight:"bold"}
    });
    container.add(contactInfoLabel);
    
    var contactFormContainer = Titanium.UI.createView({
    	layout:"vertical",
    	backgroundColor:"#fff",
    	borderRadius:9,
    	borderColor:"#ccc",
    	borderWidth:1,
    	height:Ti.UI.SIZE,
    	top:3,
    	bottom:20,
    	left:10,
    	right:10
    });
    container.add(contactFormContainer);
        
    var userNameLabel = Titanium.UI.createLabel({
    	text:"Name",
    	color: '#2a2a2b',
    	top:10,
    	left:10,
    	font:{fontSize:14,fontWeight:"bold"}
    });
    //contactFormContainer.add(userNameLabel);
    
	var userName = Ti.UI.createTextField({
		height : 35,
		top: 10,
		left : 10,
		right : 10,
		font:{fontSize:14},
		hintText:"User Name",
		borderStyle : Ti.UI.INPUT_BORDERSTYLE_ROUNDED
	});
	contactFormContainer.add(userName);

    var emailLabel = Titanium.UI.createLabel({
    	text:"Email",
    	color: '#2a2a2b',
    	top:13,
    	left:10,
    	font:{fontSize:14,fontWeight:"bold"}
    });
    //contactFormContainer.add(emailLabel);
    	
	var email = Ti.UI.createTextField({
		height : 35,
		top: 10,
		left : 10,
		right : 10,
		font:{fontSize:14},
		hintText:"Email",
		borderStyle : Ti.UI.INPUT_BORDERSTYLE_ROUNDED
	});
	contactFormContainer.add(email);

    var phoneNoLabel = Titanium.UI.createLabel({
    	text:"Phone No",
    	color: '#2a2a2b',
    	top:13,
    	left:10,
    	font:{fontSize:14,fontWeight:"bold"}
    });
    //contactFormContainer.add(phoneNoLabel);
    
	var phoneNo = Ti.UI.createTextField({
		height : 35,
		top: 10,
		left : 10,
		right : 10,
		font:{fontSize:14},
		hintText:"Phone No",
		keyboardType: Ti.UI.KEYBOARD_NUMBER_PAD,
		borderStyle : Ti.UI.INPUT_BORDERSTYLE_ROUNDED
	});
	contactFormContainer.add(phoneNo);

    var addressLabel = Titanium.UI.createLabel({
    	text:"Address",
    	color: '#2a2a2b',
    	top:13,
    	left:10,
    	font:{fontSize:14,fontWeight:"bold"}
    });
    //contactFormContainer.add(addressLabel);
    	
    var address = Ti.UI.createTextArea({
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
        color: '#000',
        textAlign: 'left',
        hintText:"Address",
		font:{fontSize:14},
        top: 10,
        left:10,
        bottom:15,
		right : 10,
        height : 70
    });
    contactFormContainer.add(address);

    var contactInfoLabel = Titanium.UI.createLabel({
    	text:"BOOKING INFO",
    	color: '#2a2a2b',
    	height:Ti.UI.SIZE,
    	top:20,
    	left:20,
    	font:{fontSize:14,fontWeight:"bold"}
    });
    container.add(contactInfoLabel);
    
    var bookingFormContainer = Titanium.UI.createView({
    	//layout:"vertical",
    	backgroundColor:"#fff",
    	borderRadius:9,
    	borderColor:"#ccc",
    	borderWidth:1,
    	height:Ti.UI.SIZE,
    	top:3,
    	height:110,
    	bottom:20,
    	left:10,
    	right:10
    });
    container.add(bookingFormContainer);

    var guestNoLabel = Titanium.UI.createLabel({
    	text:"No of Guest",
    	color: '#2a2a2b',
    	top:13,
    	left:10,
    	font:{fontSize:14,fontWeight:"bold"}
    });
    //bookingFormContainer.add(guestNoLabel);
    
	var guestNo = Ti.UI.createTextField({
		height : 35,
		top : 10,
		left : 10,
		width:120,
		font:{fontSize:14},
		hintText:"No of Guest",
		keyboardType: Ti.UI.KEYBOARD_NUMBER_PAD,
		borderStyle : Ti.UI.INPUT_BORDERSTYLE_ROUNDED
	});
	bookingFormContainer.add(guestNo);


		
		var bookingTypePickerData = [];
		var bookingType = ["Breakfast","Lunch", "Dinner"]
		for(var i=0; i<bookingType.length; i++){
		  var row = Ti.UI.createPickerRow({
		    title: bookingType[i]
		  });
		  bookingTypePickerData.push(row);
		}
		
		var bookingTypePicker = Ti.UI.createPicker({
			height : 40,
			top : 10,
			right : 10,
			width:140,
			selectionIndicator:true
		});
		bookingFormContainer.add(bookingTypePicker);
		bookingTypePicker.add(bookingTypePickerData);
		bookingTypePicker.setSelectedRow(0, 2, false);
		
		//alert("bookingTypePickerData = "+JSON.stringify(bookingTypePickerData));
		/*
	var bookingType = Ti.UI.createTextField({
		height : 35,
		top : 10,
		right : 10,
		width:120,
		font:{fontSize:14},
		hintText:"Booking Type",
		keyboardType: Ti.UI.KEYBOARD_NUMBER_PAD,
		borderStyle : Ti.UI.INPUT_BORDERSTYLE_ROUNDED
	});
	//bookingFormContainer.add(bookingType);
	*/
	var datePickerValue = new Date();
	var bookingDate = Ti.UI.createTextField({
		height : 35,
		top : 55,
		left : 10,
		width:120,
		font:{fontSize:14},
		hintText:"Booking Date",
		value:datePickerValue,
		softKeyboardOnFocus:Ti.UI.Android.SOFT_KEYBOARD_HIDE_ON_FOCUS
	});
	bookingFormContainer.add(bookingDate);
	
	bookingDate.addEventListener('focus', function(e) {
		//alert("hi "+datePickerValue);
		bookingDate.blur();
		var datePicker = Ti.UI.createPicker({
		    type: Ti.UI.PICKER_TYPE_DATE
		});
		 

		datePicker.showDatePickerDialog({
		   value: datePickerValue,
		   callback: function(e) {
			   if (e.cancel) {
			       Ti.API.info('User canceled dialog');
			    } else { 
			 		datePickerValue = e.value;  
			 		//var tdate = new Date(timePickerValue);
			 		//var hh = tdate.getHours();
					//var mm = tdate.getMinutes();
					bookingDate.value = e.value;
			    }
		   }
		});
	
	});

		
	var bookingTime = Ti.UI.createTextField({
		height : 35,
		top : 55,
		right : 10,
		width:120,
		font:{fontSize:14},
		//hintText:"Booking Time",
		value:"08:00 PM",
        softKeyboardOnFocus:Ti.UI.Android.SOFT_KEYBOARD_HIDE_ON_FOCUS
	});
	bookingFormContainer.add(bookingTime);
	var timePickerValue = new Date();
	
	/*
	//var timePickerValue = new Date(2014,11,31, 20, 00);
	var timePickerValue = new Date();
    var timePicker = Ti.UI.createPicker({
	    type:Ti.UI.PICKER_TYPE_TIME,
	    //minDate:new Date(),
	    minuteInterval:10,
	    format24:true,
	    value:timePickerValue,
	    top:40
    });
   
    timePicker.addEventListener("change", function(e){
        timePickerValue = e.value;
        Ti.API.info("timePickerValue = "+timePickerValue);
    });
	*/    
	bookingTime.addEventListener('focus', function(e) {
		//alert("hi "+timePickerValue);
		bookingTime.blur();
		var timePicker = Ti.UI.createPicker({
		    type: Ti.UI.PICKER_TYPE_TIME,
		    minuteInterval:30,
		    format24:true
		});
		 

		timePicker.showTimePickerDialog({
		   value: timePickerValue,
		   callback: function(e) {
			   if (e.cancel) {
			       Ti.API.info('User canceled dialog');
			    } else { 
			 		timePickerValue = e.value;  
			 		var tdate = new Date(timePickerValue);
			 		var hh = tdate.getHours();
					var mm = tdate.getMinutes();
					bookingTime.text = hh +":"+ mm;
			    }
		   }
		});
	
	});
/*
		timePicker.showTimePickerDialog({
		   value: timePickerValue,
		   callback: function(e) {
			   if (e.cancel) {
			       Ti.API.info('User canceled dialog');
			    } else { 
			 		timePickerValue = e.value;  
			 		//var tdate = new Date(timePickerValue);
			 		//var hh = tdate.getHours();
					//var mm = tdate.getMinutes();
					//bookingTime.value = hh +" - "+ mm;
			    }
		   }
		});
*/



    
    var submitBtn = Ti.UI.createButton({
    	title:"Submit",
    	top:10,
    	bottom:20,
    	width:100,
    	height:35
    });
	container.add(submitBtn);

	submitBtn.addEventListener('click', function(e) {
		if(userName.value == ""){
			alert("Please enter valid user name");
			return false;
		}else if(email.value == ""){
			alert("Please enter valid email");
			return false;	
		}else if(phoneNo.value == ""){
			alert("Please enter valid phone no");
			return false;
		}else if(address.value == ""){
			alert("Please enter valid address");
			return false;
		}
		
		//var userId = db.addUser({name:userName.value, email:email.value, phone:phoneNo.value, address:address.value});
		//alert("userId == "+userId);
		
		alert("Your reservation has been submitted successfully");
	});
	return win;
}