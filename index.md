## Welcome to CubeBox website for developers! 
### Let's started with files
Hardware behavior packs are so useful when you have computer hardware that is made for CubeBox. 
Behavior files are made in Arduino. They have ```.ino``` file extension. They are stored in ```/system/hardware/``` directory. The one already important files are ```HwConfig.ino```,```emergency.ino```,```int.ino``` and ```temp.tmp```.
> If that files was in your computer installed don't try to remove it. It's possible that your computer will be useless! 

Files can be modified but changes will be visible after disconnecting from power supply and from emergency battery. 
> Don't forget to save your work! 

Now I will explain why are that files so important. 

```HwConfig.ino``` contains basic instructions how HW have to behave.
```emergency.ino``` is used when electricity stop working. It's file full of instructions how to save unsaved work without power supply.
```int.ino``` is file full of very important variables.
```temp.tmp``` are informations. Running time, HW age, HW versions, names...
<br>
<br>
<br>
Now it's time to vhd and vhdx files
