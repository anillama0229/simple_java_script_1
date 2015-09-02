function validateQ1(){
	var number = document.getElementById("num").value;
		
	if(number>100){
		alert("The number you entered is greater than 100.");
	}
	else{
		alert("The number you entered is not greater than 100.");
	}
}

function validateQ2(){		
	var temp = document.getElementById("temp").value;
	var option = document.getElementById("choose").checked;
	var result;
		
	if(option  == true){			
		result = (temp - 32) * 5/9;			
		alert("Result is "+result+ "°C");
	}
	else if(option == false){
		result = temp *9/5 + 32;			
		alert("Result is "+result+ "°F");
	}
}

function validateQ3(){		
	var num1 = document.getElementById("num1").value;
	var num2 = document.getElementById("num2").value;
	var choice = document.getElementById("choice").checked;
	var final;
	
	if(choice  == true){			
		final = num1*num2;
	}
	else if(choice == false){
		final = num1/num2;
	}		
	alert("Result is "+final);
}

function validateQ4(){		
	var mark1 = Number(document.getElementById("mark1").value);
	var mark2 = Number(document.getElementById("mark2").value);
	var mark3 = Number(document.getElementById("mark3").value);
	var totalMarks = mark1+mark2+mark3;
	
	var percent = totalMarks/3;
	
	if(percent>=80){			
		alert("Percentage is "+percent+"%.\nYou scored distinction.");
	}
	else if(percent>=60 && percent<80){			
		alert("Percentage is "+percent+"%.\nYou scored First Division.");
	}
	else if(percent>=40 && percent<60){			
		alert("Percentage is "+percent+"%.\nYou scored Second Division.");
	}
	else if(percent<40){			
		alert("Percentage is "+percent+"%.\nYou scored Failed.");
	}
}

function validateQ5(){
	var b = 0;
	var g = 0;
	var gender = Number(prompt("Enter 1 for boy and 2 for girl: "));
	
	if(gender === 1){
		
		do{
			var char = prompt("Enter character: ");
			if(char === 'b'){
				b++;
			}
		}while(char!='x');
	}
	else if(gender === 2){
		
		do{
			var char = prompt("Enter character: ");
			if(char === 'g'){
				g++;
			}
		}while(char!='x');
	}		
	
	document.write("Number of b is "+b+".<br>");
	document.write("Number of g is "+g+".");
}