	var currentL=0;
	var score=0;//keeps track of total score
	var inventory=[];
	var locations=[];
    var NORTH = 0;
    var SOUTH = 1;
    var EAST  = 2;
    var WEST  = 3;
    var nav = [ // N   S   E   W 
      /* 0 */ [1,-1,-1,-1],
      /* 1 */ [-1,0,3,2],
      /* 2 */ [4,-1,-1,1],
      /* 3 */ [5,-1,-1,1], 
      /* 4 */ [6,2,-1,-1],
	  /* 5 */ [7,3,-1,-1],
	  /* 6 */ [-1,4,8,-1],
      /* 7 */ [-1,5,-1,9],
      /* 8 */ [-1,-1,10,6],
      /* 9 */ [-1,-1,7,10],
	  /* 10*/ [-1,-1,9,8]
	  
	  ];
	
	function init(){
			var item0=new Item();
			var item1=new Item();
			var item2=new Item();
			var item3=new Item();
			item0.id=1;
			item0.description="food found on the floor";
			item0.name="food";
			
			item1.id=2;
			item1.description="staff found on the floor";
			item1.name="staff";
			
			item2.id=3;
			item2.description="bolt gun found on the floor";
			item2.name="bolt gun";
			
			item3.id=4;
			item3.description="scraps found on the floor";
			item3.name="scraps";
			
			//inventory[0]=item0.id;
			//inventory[1]=item1.id;
			//inventory[2]=item2.id;
			//inventory[3]=item3.id;
			
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
			var room10=new Location();
			
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
			room6.currentItem=3;
			room6.check=false;
		
			room7.name="DeadRoom";
			room7.message="After magically unlocking the door, you enter a new room containing hundreds of skeletons. Among the dead you find a staff which could prove usefull if taken with you.";
			room7.canGoNorth="true";
			room7.canGoSouth="false";
			room7.canGoEast="false";
			room7.canGoWest="false";
			room7.id="7";
			room7.item="staff";
			room7.currentItem=2;
			room7.check=false;
		
			room8.name="pantry";
			room8.message="You arrive in a pantry filled with food. It could be best to take some for later";
			room8.canGoNorth="true";
			room8.canGoSouth="false";
			room8.canGoEast="false";
			room8.canGoWest="false";
			room8.id="8";
			room8.item="food";
			room8.currentItem=1;
			room8.check=false;
		
			room9.name="pantryEmpty";
			room9.message="You arrive in a pantry but all the food is missing. All except for a tiny scrap left on the floor. Might as well take it anyway right?";
			room9.canGoNorth="true";
			room9.canGoSouth="false";
			room9.canGoEast="false";
			room9.canGoWest="false";
			room9.id="9";
			room9.item="scrap";
			room9.currentItem=4;
			room9.check=false;
			
			room10.name="finalBoss";
			room10.message="A massive beast stands before you guarding the exit what should you do?";
			room10.canGoNorth="true";
			room10.canGoSouth="true";
			room10.canGoEast="false";
			room10.canGoWest="false";
			room10.id="10";
			room10.item="none";
			room10.check=false;
			
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
			locations[10]=room10;
			
			updateDisplay(room0.message);
	}
	//sets the location you are moving to
	function nextLoc(dir){
		var d=1;
		switch(dir){
			case 0: d=0;break;
			case 1: d=1;break;
			case 2: d=2;break;
			case 3: d=3;break;
			default: "no invalid";
		}
		var newLocal=nav[currentL][d];
		if(newLocal>=0){
			currentL=newLocal;
		}else{
			updateDisplay("cannot go that way");
		}
	}
	//all rooms are created from this Class
	function Location(){
		this.name="none";
		this.message="none";
		this.canGoNorth="none";
		this.canGoSouth="none";
		this.canGoEast="none";
		this.canGoWest="none";
		this.id="none";
		this.check=false;
		this.currentItem;
		this.item="0";
	}
	//set message for current room
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
	//northern button movement
	function goNorth(){
		nextLoc(NORTH);
		adjustRoom();
		return;
	}
	//southern button movement
	function goSouth(){
		nextLoc(SOUTH);
		adjustRoom();
		return;
	}
	//eastern button movement
	function goEast(){
		nextLoc(EAST);
		adjustRoom();
		return;
	}
	//western button movement
	function goWest(){
		nextLoc(WEST);
		adjustRoom();
		return;
	}
	//uses text input to trigger movement functions
	function Item(){
		this.id;
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
			updateDisplay("Valid Commands are: n,s,e,w,N,S,E,W,take,Take,help,Help,inventory,Inventory,slay,Slay");
		}
		else if(input=="inventory"||input=="Inventory"){
			dispInventory();
		}
		else if(input=="slay"||input=="Slay"){
			if(inventory[1]==2||inventory[2]==3){
				updateDisplay("THE BEAST HAS BEEN SLAIN DUE TO YOUR KLEPTOMANIA!");
			} else{
				updateDisplay("YOU DONT HAVE THE REQUIRED ITEM! THE BEAST THROWS YOU OUT OF THE ROOM.");
			}
		}
		else if(input=="take"||input=="Take"){
			switch(locations[currentL].currentItem){
				case 1: inventory[0]=locations[currentL].currentItem;
					break;
				case 2: inventory[1]=locations[currentL].currentItem;
					break;
				case 3: inventory[2]=locations[currentL].currentItem;
					break;
				case 4: inventory[3]=locations[currentL].currentItem;
					break;
			}
		}else{
			//Error Message for invalid input
			updateDisplay("Invalid Command. Valid Commands are: n,s,e,w,N,S,E,W,take,Take,help,Help,inventory,Inventory,slay,Slay");
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
			i1="food";
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
