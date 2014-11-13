	var local=0;//keeps track of location
	var score=0;//keeps track of total score
	//checks if player has been to each location
	var check0=false;
	var check1=false;
	var check2=false;
	var check3=false;
	var check4=false;
	var check5=false;
	var check6=false;
	var check7=false;
	var check8=false;
	var check9=false;
	var check10=false;
	var currentItem=0;
	var inventory=[];
	//button movement for northern movement
	function init(){
		updateDisplay("You wake up to find yourself in a dimly lit room with only a wrench and a moldy old book in your bag. You hear something in the next room.");
	}
	function goNorth(){
		var message;
		switch(local){
			case 0: local=1;
					document.getElementById("North").disabled=true;
					document.getElementById("West").disabled=false;
					document.getElementById("South").disabled=false;
					document.getElementById("East").disabled=false;
					//checks if player has been to this room before
					if(!check1){
						check1=true;
						score+=5;
					}
					//sets and displays the message for this room
					message=room1(0);
					updateDisplay(message);
				break;
			case 2: local=4;
					document.getElementById("East").disabled=true;
					document.getElementById("West").disabled=true;
					document.getElementById("North").disabled=false;
					document.getElementById("South").disabled=false;
					if(!check4){
						check4=true;
						score+=5;
					}
					//sets and displays the message for this room
					message=room4(2);
					updateDisplay(message);
				break;
			case 3: local=5;
					document.getElementById("East").disabled=true;
					document.getElementById("West").disabled=true;
					document.getElementById("North").disabled=false;
					document.getElementById("South").disabled=false;
					if(!check5){
						check5=true;
						score+=5;
					}
					//sets and displays the message for this room
					message=room5(3);
					updateDisplay(message);
				break;
			case 4: local=6;
					document.getElementById("North").disabled=true;
					document.getElementById("West").disabled=true;
					document.getElementById("East").disabled=false;
					document.getElementById("South").disabled=false;
					if(!check6){
						check6=true;
						score+=5;
					}
					//sets and displays the message for this room
					message=room6(4);
					updateDisplay(message);
					currentItem=1;
				break;
			case 5: local=7;
					document.getElementById("North").disabled=true;
					document.getElementById("East").disabled=true;
					document.getElementById("West").disabled=false;
					document.getElementById("South").disabled=false;
					if(!check7){
						chck7=true;
						score+=5;
					}
					//sets and displays the message for this room
					message=room7(5);
					updateDisplay(message);
					currentItem=2;
				break;
			default: 
					//sets and displays error message for wrong movement
					message="You can't go that way.";
					updateDisplay(message);
				break;
		}
		return;
	}
	//button movement for southern movement
	function goSouth(){
		var message;
		//checks if movement to room 0 is possible
		switch(local){
			case 1: local=0;
					document.getElementById("East").disabled=true;
					document.getElementById("South").disabled=true;
					document.getElementById("West").disabled=true;
					document.getElementById("North").disabled=false;
					//checks if player has been to this room before
					if(check0==false){
						check0=true;
						score+=5;
					}
					//sets and displays the message for this room
					message=room0(1);
					updateDisplay(message);
				break;
			default: 
					//sets and displays error message for wrong movement
					message="You can't go that way.";
					updateDisplay(message);
				break;
		}
		return;
	}
	//button function for eastern movement
	function goEast(){
		var message;
		switch(local){
			case 1: //checks if movement to room 3 is possible
					local=3;
					document.getElementById("East").disabled=true;
					document.getElementById("South").disabled=true;
					document.getElementById("West").disabled=false;
					document.getElementById("North").disabled=false;
					//checks if player has been to this room before
					if(!check3){
						check3=true;
						score+=5;
					}
					//sets and displays the message for this room
					message=room3(1);
					updateDisplay(message);
				break;
			case 2: //checks if movement to room 1 is possible
					local=1;
					document.getElementById("North").disabled=true;
					document.getElementById("West").disabled=false;
					document.getElementById("South").disabled=false;
					document.getElementById("East").disabled=false;
					//sets and displays the message for this room
					message=room1(2);
					updateDisplay(message);
				break;
			case 6: //checks if movement to room 8 is possible
					local=8;
					document.getElementById("North").disabled=true;
					document.getElementById("South").disabled=true;
					document.getElementById("East").disabled=true;
					document.getElementById("West").disabled=false;
					//checks if player has been to this room before
					if(!check8){
						check8=true;
						score+=5;
					}
					//sets and displays the message for this room
					message=room8(6);
					updateDisplay(message);
					currentItem=3;
				break;
			default: //sets and displays error message for wrong movement
					message="You can't go that way.";
					updateDisplay(message);
				break;
		}
		return;
	}
	//button function for western movement
	function goWest(){
		var message;
		switch(local){
			case 1: //checks if movement to room 2 is possible
					local=2;
					document.getElementById("West").disabled=true;
					document.getElementById("South").disabled=true;
					document.getElementById("North").disabled=false;
					document.getElementById("East").disabled=false;
					//checks if player has been to this room before
					if(!check2){
						check2=true;
						score+=5;
					}
					//sets and displays the message for this room
					message=room2(1);
					updateDisplay(message);
				break;
			case 3: //checks if movement to room 1 is possible
					local=1;
					document.getElementById("North").disabled=true;
					document.getElementById("West").disabled=false;
					document.getElementById("South").disabled=false;
					document.getElementById("East").disabled=false;
					message=room1(3);
					updateDisplay(message);
				break;
			case 7: //checks if movement to room 9 is possible
					local=9;
					document.getElementById("North").disabled=true;
					document.getElementById("South").disabled=true;
					document.getElementById("West").disabled=true;
					document.getElementById("East").disabled=false;
					//checks if player has been to this room before
					if(!check9){
						check9=true;
						score+=5;
					}
					//sets and displays the message for this room
					message=room9(7);
					updateDisplay(message);
					currentItem=4;
				break;
			default: //sets and displays error message for wrong movement
					message="You can't go that way.";
					updateDisplay(message);
				break;
		}
		return;
	}
	//uses text input to trigger movement functions
	function goButton(){
		var input=document.getElementById("inputTxtBox").value;
		//checks for North movement
		if(input=="n"||input=="N"){
			goNorth();
		}
		//checks for South movement
		else if(input=="s"||input=="S"){
			goSouth();
		}
		//checks for East movement
		else if(input=="e"||input=="E"){
			goEast();
		}
		//checks for West movement
		else if(input=="w"||input=="W"){
			goWest();
		}
		else if(input=="help"||input=="Help"){
			updateDisplay("Valid Commands are: n,s,e,w,N,S,E,W,take,Take,help,Help");
		}
		else if(input=="take"||input=="Take"){
			switch(currentItem){
				case 1: inventory[0]=currentItem;
					break;
				case 2: inventory[1]=currentItem;
					break;
				case 3: inventory[2]=currentItem;
					break;
				case 4: inventory[3]=currentItem;
					break;
			}
		}else{
			//Error Message for invalid input
			updateDisplay("Invalid Command. Valid Commands are: n,s,e,w,N,S,E,W");
		}
	}
	function room0(cRoom){
		switch(cRoom){
			case 1: return "You seem to be back where you started. Best be careful not to get lost in this labyrinth of a place.";
				break;
		}
	}
	function room1(cRoom){
		var msg="You seem to be back in the main hall. Best be careful not to get lost in this labyrinth of a place.";
		switch(cRoom){
			case 0: return "The whispers are becoming clearer now. There appears to be two voices. One from the East speaking of magics unknown, and one from the West whispering of blasphemous science.";
				break;
			case 3: return msg;
				break;
			case 2: return msg;
				break;
		}
	}
	function room2(cRoom){
		switch(cRoom){
			case 2: return "You arrive in the western room where you find the source of the noise. A mysterious machine sits in the center of the room. its gears turning slowly. what could it do?";
				break;
		}
	}
	function room3(cRoom){
		switch(cRoom){
			case 1: return "You have arrived in what appears to be a library of old tomes. One tome catches your eye. It appears so mesmerizing one could just touch it...";
				break;
		}
	}
	function room4(cRoom){
		switch(cRoom){
			case 2: return "You find yourself faced with a broken machine of unknown purpose. There is a clearly broken piece jutting out of the machine, and a locked door to the east. Being the handsome smart person you are you realize that to proceed you must fix the machine with your tools.";
				break;
		}
	}
	function room5(cRoom){
		switch(cRoom){
			case 3: return "You find yourself in a dusty old room containing nothing but a massive locked vault to the North. There doesnt appear to be any way to unlock the door. Your magic Tome may be able to open it.";
				break;
		}
	}
	function room6(cRoom){
		switch(cRoom){
			case 4: return "After fixing the machine, you entered a new room containing countless skeletons and a highpowered bolt gun. It could be a good idea to take this tool.";
				break;
		}
	}
	function room7(cRoom){
		switch(cRoom){
			case 5: return "After magically unlocking the door, you enter a new room containing hundreds of skeletons. Among the dead you find a staff which could prove usefull if taken with you.";
				break;
		}
	}
	function room8(cRoom){
		switch(cRoom){
			case 6: return "You arrive in a pantry filled with food. It could be best to take some for later";
		}
	}
	function room9(cRoom){
		switch(cRoom){
			case 7: return "You arrive in a pantry but all the food is missing. All except for a tiny scrap left on the floor. Might as well take it anyway right?";
		}
	}
	//this function displays story messages and the score
	function updateDisplay(msg){
		//displays story
		var target=document.getElementById("OutputTxtBox");
		target.value=msg+"\n"+target.value;
		//displays score
		document.getElementById("OutputScore").value=score;
	}
	function dispInventory(){
		var i1="";
		var i2="";
		var i3="";
		var i4="";
		if(inventory[0]==1){
			i1="food"
		}
		if(inventory[1]==2){
			i2="staff";
		}
		if(inventory[2]==3){
			i3="bolt gun";
		}
		if(inventory[3]==4){
			i4="scraps";
		}
		var message=i1+" "+i2+" "+i3+" "+i4;
		updateDisplay(message);
	}
