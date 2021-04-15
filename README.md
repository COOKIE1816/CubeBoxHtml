This is HTML version
# Disclaimer
Please read this:
## Lost data
It must be disconnected before any external storage can be removed. Developers are not responsible for data loss...
## Destructive software downloading from web interface in CubeBox website client.
If user downloads any destructive or annoying software, developers aren't responsible for computer or parts of computer (including external or internal hardware and software) demage.
## Destruction from the side of user
We aren't responsible for demage caused by user(including BIOS configuration demage).
# Let’s started
Here are basic tips
## Recommended BIOS configuration
### Try to check this fields 
File management, black BIOS, automatical cleanup, auto backup-repair, run as Emulator, fastboot
### Make sure this is unchecked
Disable security, Auto boot to CubeBox, ignore BSOD, ignore all errors
## Getting it to work
The file RUN may help you
# For developers of anything
Experimental features
## Virtual desktop creation
* Open start menu
* Open CubeBoxDev
* Select RUN
* Enter 'vm-login' and hit OK
* Enjoy!
### Risks
* No risks to broke computer here :)
## Command prompt
Be careful!
### Disclaimer
We aren't responsible for a hacker attack or computer demage!
### Help for commands
See. cmdhelp.md

Or just use hlp? command in command prompt
# Troubleshooting
## No enough space to shutdown
You need at least 29MB to shutdown CubeBox
### What's causing this?
It's caused because dynamic repairs are allowed and it needs at least 29MB of space to create backup.
### Troubleshooting
You can fix it following these instructions:
* Click OK
* Press spacebar
* Select cleanup
* Select automatically
* Delete
* Select manually
* Delete files that aren't needed
* Shutdown
### Troubleshooting didn't work? It's time to plan B
Remember. You're just emulating CubeBox... So use windows file explorer :)
# Hardware
> CubeBox import behavior from ```HwConfig.ino``` file that's stored in ```/system/hw/``` directory.
Hardware is coded in Arduino. Here's default code:
```
void setup() {
	pinMode(1, OUTPUT);
	pinMode(2, OUTPUT);
	pinMode(3, OUTPUT);
	pinMode(4, OUTPUT);
	pinMode(13, OUTPUT);
}
```
## Wires, wires, wires!
* 1 (fan) = out
* 2 (light decoration) = out
* 3 (identication light) = out
* 4 (motherboard lightning) = out
* 13 (buzzer) = out
