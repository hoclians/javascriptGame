	var currentLocal;
	var score=0;//keeps track of total score
	var currentItem=0;
	var inventory=[];
	var locations=[];
	//button movement for northern movement
	
	function init(){
			var item0=new Item();
			var item1=new Item();
			var item2=new Item();
			var item3=new Item();
			item0.id="0";
			item0.description="food found on the floor";
			item0.name="food";
			
			item1.id="1";
			item1.description="staff found on the floor";
			item1.name="staff";
			
			item2.id="2";
			item2.description="bolt gun found on the floor";
			item2.name="bolt gun";
			
			item3.id="3";
			item3.description="scraps found on the floor";
			item3.name="scraps";
			
			inventory[0]=item0;
			inventory[1]=item1;
			inventory[2]=item2;
			inventory[3]=item3;
			
			var room0=new Location();
			var room1=new Location();
			var room2=new Location();
			var room3=new Location();
			var room4=new Location();
			var room5=new Location();
			var room6=new Location();
			var room7=new Location();
			var room8=new Location();
			var room9=new Location();
			room0.name="PlaceOfOrigin";
			room0.message="You wake up to find yourself in a dimly lit room with only a wrench and a moldy old book in your bag. You hear something in the next room.";
			room0.canGoNorth="false";
			room0.canGoSouth="true";
			room0.canGoEast="true";
			room0.canGoWest="true";
			room0.id="0";
			room0.item="0";
			room0.check=false;
			
			room1.name="VoiceRoom";
			room1.message="The whispers are becoming clearer now. There appears to be two voices. One from the East speaking of magics unknown, and one from the West whispering of blasphemous science.";
			room1.canGoNorth="false";
			room1.canGoSouth="true";
			room1.canGoEast="true";
			room1.canGoWest="true";
			room1.id="1";
			room1.item="0";
			room1.check=false;
		
			room2.name="MachineRoom";
			room2.message="You arrive in the western room where you find the source of the noise. A mysterious machine sits in the center of the room. its gears turning slowly. what could it do?";
			room2.canGoNorth="false";
			room2.canGoSouth="true";
			room2.canGoEast="false";
			room2.canGoWest="true";
			room2.id="2";
			room2.item="0";
			room2.check=false;
		
			room3.name="Library";
			room3.message="You have arrived in what appears to be a library of old tomes. One tome catches your eye. It appears so mesmerizing one could just touch it...";
			room3.canGoNorth="true";
			room3.canGoSouth="false";
			room3.canGoEast="false";
			room3.canGoWest="false";
			room3.id="3";
			room3.item="0";
			room3.check=false;
		
			room4.name="BrokenMachineRoom";
			room4.message="You find yourself faced with a broken machine of unknown purpose. There is a clearly broken piece jutting out of the machine, and a locked door to the east. Being the handsome smart person you are you realize that to proceed you must fix the machine with your tools.";
			room4.canGoNorth="true";
			room4.canGoSouth="false";
			room4.canGoEast="false";
			room4.canGoWest="false";
			room4.id="4";
			room4.item="0";
			room4.check=false;
		
			room5.name="VaultRoom";
			room5.message="You find yourself in a dusty old room containing nothing but a massive locked vault to the North. There doesnt appear to be any way to unlock the door. Your magic Tome may be able to open it.";
			room5.canGoNorth="true";
			room5.canGoSouth="false";
			room5.canGoEast="false";
			room5.canGoWest="false";
			room5.id="5";
			room5.item="0";
			room5.check=false;
		
			room6.name="DeadRoomMachine";
			room6.message="After fixing the machine, you entered a new room containing countless skeletons and a highpowered bolt gun. It could be a good idea to take this tool.";
			room6.canGoNorth="true";
			room6.canGoSouth="false";
			room6.canGoEast="false";
			room6.canGoWest="false";
			room6.id="6";
			room6.item="bolt gun";
			room6.check=false;
		
			room7.name="DeadRoom";
			room7.message="After magically unlocking the door, you enter a new room containing hundreds of skeletons. Among the dead you find a staff which could prove usefull if taken with you.";
			room7.canGoNorth="true";
			room7.canGoSouth="false";
			room7.canGoEast="false";
			room7.canGoWest="false";
			room7.id="7";
			room7.item="staff";
			room7.check=false;
		
			room8.name="pantry";
			room8.message="You arrive in a pantry filled with food. It could be best to take some for later";
			room8.canGoNorth="true";
			room8.canGoSouth="false";
			room8.canGoEast="false";
			room8.canGoWest="false";
			room8.id="8";
			room8.item="food";
			room8.check=false;
		
			room9.name="pantryEmpty";
			room9.message="You arrive in a pantry but all the food is missing. All except for a tiny scrap left on the floor. Might as well take it anyway right?";
			room9.canGoNorth="true";
			room9.canGoSouth="false";
			room9.canGoEast="false";
			room9.canGoWest="false";
			room9.id="9";
			room9.item="scrap";
			room9.check=false;
		locations[0]=room0;
		locations[1]=room1;
		locations[2]=room2;
		locations[3]=room3;
		locations[4]=room4;
		locations[5]=room5;
		locations[6]=room6;
		locations[7]=room7;
		locations[8]=room8;
		locations[9]=room9;
		currentL=locations[0].id;
		updateDisplay(room0.message);
	}
	function Location(){
		this.name="none";
		this.message="none";
		this.canGoNorth="none";
		this.canGoSouth="none";
		this.canGoEast="none";
		this.canGoWest="none";
		this.id="none";
		this.check=false;
		this.item="0";
	}
	function adjustRoom(){
		if(!currentL.check){
			currentL.check=true;
			score+=5;
		}
		document.getElementById("North").disabled=currentL.canGoNorth;
		document.getElementById("West").disabled=currentL.canGoWest;
		document.getElementById("South").disabled=currentL.canGoSouth;
		document.getElementById("East").disabled=currentL.canGoEast;
		updateDisplay(locations[currentL].message);
	}
	function goNorth(){
		switch(currentL=parseInt(currentL)){
			case 0: currentL=locations[1].id;
				break;
			case 2: currentL=locations[4].id;
				break;
			case 3: currentL=locations[5].id;
				break;
			case 4: currentL=locations[6].id;
					currentItem=1;
				break;
			case 5: currentL=locations[7].id;
					currentItem=2;
				break;
			default: 
					//sets and displays error message for wrong movement
					updateDisplay("You can't go that way");
				break;
		}
		adjustRoom();
		return;
	}
	//button movement for southern movement
	function goSouth(){
		switch(currentL=parseInt(currentL)){
			case 1: currentL=locations[0].id;
				break;
			case 5: currentL=locations[3].id;
				break;
			case 4: currentL=locations[2].id;
				break;
			case 6: currentL=locations[4].id;
				break;
			case 7: currentL=locations[5].id;
				break;
			default: 
					//sets and displays error message for wrong movement
					updateDisplay("you can't go that way.");
				break;
		}
		adjustRoom();
		return;
	}
	//button function for eastern movement
	function goEast(){
		switch(currentL){
			case 1: //checks if movement to room 3 is possible
					currentL=locations[3].id;
				break;
			case 2: //checks if movement to room 1 is possible
					currentL=locations[1].id;
				break;
			case 6: //checks if movement to room 8 is possible
					currentL=locations[8].id;
					currentItem=3;
				break;
			case 9: //checks if movement to room 7 is possible
					currentL=locations[7].id;
				break;
			default: //sets and displays error message for wrong movement
					updateDisplay("You can't go that way.");
				break;
		}
		adjustRoom();
		return;
	}
	//button function for western movement
	function goWest(){
		var message;
		switch(currentL){
			case 1: //checks if movement to room 2 is possible
					currentL=locations[2].id;
				break;
			case 3: //checks if movement to room 1 is possible
					currentL=locations[1].id;
				break;
			case 7: //checks if movement to room 9 is possible
					currentL=locations[9].id;
					currentItem=4;
				break;
			case 8: currentL=locations[6].id;
				break;
			default: //sets and displays error message for wrong movement
					updateDisplay("You can't go that way.");
				break;
		}
		adjustRoom();
		return;
	}
	//uses text input to trigger movement functions
	function Item(){
		this.id=""
		this.description="";
		this.name="";
	}
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
