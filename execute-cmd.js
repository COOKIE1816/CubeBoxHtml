mem = {
	//void
}

function output(string){
	alert(string);
}



function com(command,arg1,arg2,arg3,arg4,arg5,arg6){
	if (command = "print"){
		output(arg1);
	}
	if (command = "echo"){
		com("print",arg1);
	}
	if (command = "power"){
		if (arg1 = "-d"){
			if (arg2 = "-i"){
				window.location = "shishutdown.html";
			}
			
			window.location = "shshutdown.html";
		}
	}
	if (command = "memt") {
		com("restart","-d","-memt");
	}
	if (command = "mem") {
		if (arg1 = "-w") {
			mem[arg2 = arg3];
		}
	}
}
