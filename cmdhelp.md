# ATR
Gives attributes to the file
## Syntax
atr [filepath], [everyone] [owner] [system]
## Structure of the numbers
Example: atr /filesystem/file.txt 1110 1111 1111
### Values
We have 4 numbers from 0 to 1.

0 = false

1 = true



Structure of every four-number group of numbers is like this:

Read, Write, Overwrite properties

Setting all numbers to 0 the file will be automatically regenerated
# ADD
Add a properties to file
## Syntax
add [filepath] [properties] [value]
## Properties
There are:
* FILE_APPERANCE_ICON
* FILE_CONFIGURATION_OPENWITH
* FILE_OPEN_IN
* FILE_READ_ONLY
* FILE_HIDDEN
* FILE_SYSTEMFILE
* FILE_ADMIN_ACCESS
* SCRIPT_LOOPS_COUNT
* SCRIPT_LOOPS_DELAY
* SCRIPT_LOOPS_ALLOW
* SCRIPT_STOP_AFTER
* SCRIPT_RUN_AS_ADMIN
* FOLDER_APPERANCE_ICON
* FOLDER_APPERANCE_TYPE
* FOLDER_HIDDEN
* IMAGE_FRAME_SIZE
* IMAGE_AUTHOR
* IMAGE_RATING
* IMAGE_ISO
* IMAGE_CAPTURED_BY
* IMAGE_CREATE_TIME
* IMAGE_CREATE_DATE
