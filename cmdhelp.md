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
* VIDEO_MOVIE_ISMOVIE
* VIDEO_DURATION
* VIDEO_AGE_LEVEL
* VIDEO_DESCRIPTION
* VIDEO_RATING
* VIDEO_AUTHOR
* SOUND_DURATION
* SOUND_VOLUME
* SOUND_AUTHOR
* SOUND_AUTHOR_FEATURED
* SOUND_AGE_LEVEL
* SOUND_MUSIC_ISMUSIC
* SOUND_MUSIC_RATING
* TEXT_WORDS_COUNT
* TEXT_LINES_COUNT
* TEXT_LETTERS_COUNT
* CMD_CURSOR
* CMD_CURSOR_COLOR
* CMD_BACKGROUND_COLOR
* CMD_TEXT_COLOR
* CMD_WINDOWN_OPACITY
* CSS_AUTHOR
* HTML_DOMAIN
* HTML_URL
* JS_SCRIPT
* CBINF_DEVICE_NAME
* CBINF_DEVICE_BRAND
* CBINF_DEVICE_MODEL
* CBINF_DEVICE_TYPE
* CBINF_DEVICE_STATUS
* VAR_TYPE
* BIN_TYPE
# BT
Bluetooth 
## Syntax
bt [device] [action] [subject]
## Action
We have this actions:
* connect
* disconnect
* send
* recive
* ping
* off
* on
* pair
* info
* w
## This is actions what doesn't need subject:
* disconnect
* recive
* off
* on
* w
* ping
* info
## There you need to set 'device' to '%self':
* disconnect
* off
* on
* w
## What is a SUBJECT argument?
SUBJECT is a path of any file
Etc. /filesystem/file.txt
# BAN
Ban specific other computer that's connected on same wire
## Syntax
ban [name] [true:false]
## Syntax to unban
ban [name] false
