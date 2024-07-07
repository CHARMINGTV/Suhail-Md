const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2349038608039";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_19_35_07_07_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODAsXG4gICAgICAgIDIyMixcbiAgICAgICAgNDgsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMjIyLFxuICAgICAgICAxNixcbiAgICAgICAgMTEzLFxuICAgICAgICAyNDAsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMTU0LFxuICAgICAgICA4MSxcbiAgICAgICAgMTc2LFxuICAgICAgICA3MyxcbiAgICAgICAgMjcsXG4gICAgICAgIDUyLFxuICAgICAgICAxODcsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMTk1LFxuICAgICAgICAyMDQsXG4gICAgICAgIDUzLFxuICAgICAgICAxODUsXG4gICAgICAgIDExMSxcbiAgICAgICAgMzcsXG4gICAgICAgIDMyLFxuICAgICAgICAxNyxcbiAgICAgICAgMTU2LFxuICAgICAgICAxODAsXG4gICAgICAgIDEwMixcbiAgICAgICAgMTQ4LFxuICAgICAgICAyMzcsXG4gICAgICAgIDEyNSxcbiAgICAgICAgNzlcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNjMsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMzksXG4gICAgICAgIDQ4LFxuICAgICAgICAxNzAsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMTkzLFxuICAgICAgICAyNTEsXG4gICAgICAgIDk3LFxuICAgICAgICAxMyxcbiAgICAgICAgMTU2LFxuICAgICAgICAyNDUsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMjUsXG4gICAgICAgIDQyLFxuICAgICAgICAyLFxuICAgICAgICAxNDcsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMTQ0LFxuICAgICAgICAxNzEsXG4gICAgICAgIDcwLFxuICAgICAgICAxMDMsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMjIsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMjMyLFxuICAgICAgICA2MCxcbiAgICAgICAgMjIsXG4gICAgICAgIDEyLFxuICAgICAgICAxNjgsXG4gICAgICAgIDQsXG4gICAgICAgIDMyXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAwLFxuICAgICAgICAyMTUsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMTE1LFxuICAgICAgICAxNjYsXG4gICAgICAgIDI1MyxcbiAgICAgICAgNzMsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMTg0LFxuICAgICAgICAyNyxcbiAgICAgICAgMTEyLFxuICAgICAgICAxMTQsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMTYyLFxuICAgICAgICAyNCxcbiAgICAgICAgMjQ0LFxuICAgICAgICAxOTYsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMjE2LFxuICAgICAgICAxOTYsXG4gICAgICAgIDgsXG4gICAgICAgIDExNSxcbiAgICAgICAgOCxcbiAgICAgICAgMjcsXG4gICAgICAgIDE3NixcbiAgICAgICAgNTksXG4gICAgICAgIDE1MyxcbiAgICAgICAgOTAsXG4gICAgICAgIDYwLFxuICAgICAgICAzMCxcbiAgICAgICAgODQsXG4gICAgICAgIDExM1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMTMsXG4gICAgICAgIDE1MixcbiAgICAgICAgMzcsXG4gICAgICAgIDk1LFxuICAgICAgICAxMDgsXG4gICAgICAgIDk3LFxuICAgICAgICAyMDQsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMTMyLFxuICAgICAgICAzMSxcbiAgICAgICAgMTAsXG4gICAgICAgIDQ2LFxuICAgICAgICA5OSxcbiAgICAgICAgMTksXG4gICAgICAgIDYyLFxuICAgICAgICAyMzYsXG4gICAgICAgIDEyNixcbiAgICAgICAgMjEzLFxuICAgICAgICAyMDcsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMTMwLFxuICAgICAgICAxNTMsXG4gICAgICAgIDIzNixcbiAgICAgICAgMTQ2LFxuICAgICAgICAxMTgsXG4gICAgICAgIDExMixcbiAgICAgICAgMjAwLFxuICAgICAgICAzMSxcbiAgICAgICAgNjEsXG4gICAgICAgIDk1LFxuICAgICAgICAxMTcsXG4gICAgICAgIDMxXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA4MCxcbiAgICAgICAgMjgsXG4gICAgICAgIDI0LFxuICAgICAgICAzOSxcbiAgICAgICAgMjA2LFxuICAgICAgICA5NCxcbiAgICAgICAgNjMsXG4gICAgICAgIDE1MixcbiAgICAgICAgNTYsXG4gICAgICAgIDMzLFxuICAgICAgICAxODEsXG4gICAgICAgIDIsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMTA2LFxuICAgICAgICAxNTIsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMjM0LFxuICAgICAgICAzMixcbiAgICAgICAgNTAsXG4gICAgICAgIDQzLFxuICAgICAgICAxMTMsXG4gICAgICAgIDE0LFxuICAgICAgICAxMjAsXG4gICAgICAgIDgzLFxuICAgICAgICA1NyxcbiAgICAgICAgMjE4LFxuICAgICAgICAxNDQsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMTQxLFxuICAgICAgICAxMzEsXG4gICAgICAgIDE2MyxcbiAgICAgICAgNzJcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjA1LFxuICAgICAgICAyNTQsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMTYyLFxuICAgICAgICA0OSxcbiAgICAgICAgNjEsXG4gICAgICAgIDIwMSxcbiAgICAgICAgNSxcbiAgICAgICAgOTQsXG4gICAgICAgIDIzOSxcbiAgICAgICAgNjUsXG4gICAgICAgIDIyNixcbiAgICAgICAgMjE4LFxuICAgICAgICAxNTgsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMTY5LFxuICAgICAgICA1MixcbiAgICAgICAgNzcsXG4gICAgICAgIDIyNixcbiAgICAgICAgMTAsXG4gICAgICAgIDUyLFxuICAgICAgICAxMTksXG4gICAgICAgIDI2LFxuICAgICAgICAxNTgsXG4gICAgICAgIDIzNCxcbiAgICAgICAgNDMsXG4gICAgICAgIDE0LFxuICAgICAgICAzMSxcbiAgICAgICAgNzUsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMTk3LFxuICAgICAgICA5MFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyMjQsXG4gICAgICAgICAgMTY5LFxuICAgICAgICAgIDE1MCxcbiAgICAgICAgICAyNCxcbiAgICAgICAgICAyMixcbiAgICAgICAgICAxNDgsXG4gICAgICAgICAgNzksXG4gICAgICAgICAgMjQsXG4gICAgICAgICAgMTY4LFxuICAgICAgICAgIDIyMixcbiAgICAgICAgICAyMTMsXG4gICAgICAgICAgMTcwLFxuICAgICAgICAgIDE3MyxcbiAgICAgICAgICAxMzMsXG4gICAgICAgICAgMCxcbiAgICAgICAgICAxODQsXG4gICAgICAgICAgMTM3LFxuICAgICAgICAgIDIzLFxuICAgICAgICAgIDEzMCxcbiAgICAgICAgICAzOCxcbiAgICAgICAgICA2MixcbiAgICAgICAgICAxODIsXG4gICAgICAgICAgNCxcbiAgICAgICAgICA3MyxcbiAgICAgICAgICAxODksXG4gICAgICAgICAgMjI0LFxuICAgICAgICAgIDE3MyxcbiAgICAgICAgICAyMTEsXG4gICAgICAgICAgNTEsXG4gICAgICAgICAgMjUwLFxuICAgICAgICAgIDg5LFxuICAgICAgICAgIDEwOFxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyMDIsXG4gICAgICAgICAgMTI1LFxuICAgICAgICAgIDIwNixcbiAgICAgICAgICAxODMsXG4gICAgICAgICAgNDgsXG4gICAgICAgICAgODMsXG4gICAgICAgICAgMjM0LFxuICAgICAgICAgIDIxNixcbiAgICAgICAgICAxNjgsXG4gICAgICAgICAgMTksXG4gICAgICAgICAgMTMxLFxuICAgICAgICAgIDIzNSxcbiAgICAgICAgICA1OSxcbiAgICAgICAgICAyMjAsXG4gICAgICAgICAgMTA1LFxuICAgICAgICAgIDY5LFxuICAgICAgICAgIDEwMSxcbiAgICAgICAgICA1OSxcbiAgICAgICAgICAyMTgsXG4gICAgICAgICAgMzYsXG4gICAgICAgICAgMTMxLFxuICAgICAgICAgIDExNyxcbiAgICAgICAgICAyNDYsXG4gICAgICAgICAgMTI2LFxuICAgICAgICAgIDIwLFxuICAgICAgICAgIDE5MyxcbiAgICAgICAgICA0MCxcbiAgICAgICAgICA1NCxcbiAgICAgICAgICA4NSxcbiAgICAgICAgICA1NixcbiAgICAgICAgICAwLFxuICAgICAgICAgIDk4XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjUwLFxuICAgICAgICAyMjcsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMTM4LFxuICAgICAgICAxMyxcbiAgICAgICAgNDMsXG4gICAgICAgIDExNSxcbiAgICAgICAgMTgsXG4gICAgICAgIDIwLFxuICAgICAgICAxMTUsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMTYwLFxuICAgICAgICA3LFxuICAgICAgICA3MyxcbiAgICAgICAgMyxcbiAgICAgICAgMTI4LFxuICAgICAgICAyMzgsXG4gICAgICAgIDE0OCxcbiAgICAgICAgNzMsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMTUzLFxuICAgICAgICA5OCxcbiAgICAgICAgMjQzLFxuICAgICAgICAxNjQsXG4gICAgICAgIDk0LFxuICAgICAgICA3NCxcbiAgICAgICAgMTY4LFxuICAgICAgICAyMzgsXG4gICAgICAgIDE4NixcbiAgICAgICAgMTA1LFxuICAgICAgICA3MyxcbiAgICAgICAgMjE1LFxuICAgICAgICAzMixcbiAgICAgICAgMjQ0LFxuICAgICAgICA4NyxcbiAgICAgICAgMjI0LFxuICAgICAgICAyNCxcbiAgICAgICAgMjQ3LFxuICAgICAgICAyNTAsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMjI1LFxuICAgICAgICA1LFxuICAgICAgICAxNzEsXG4gICAgICAgIDU0LFxuICAgICAgICA0MSxcbiAgICAgICAgNTcsXG4gICAgICAgIDgxLFxuICAgICAgICAyMDMsXG4gICAgICAgIDE3LFxuICAgICAgICAyMjIsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMTQ1LFxuICAgICAgICAzNSxcbiAgICAgICAgMjM2LFxuICAgICAgICAxMjIsXG4gICAgICAgIDIyNixcbiAgICAgICAgMTc1LFxuICAgICAgICAyMzUsXG4gICAgICAgIDE2MixcbiAgICAgICAgMTI3LFxuICAgICAgICAxOTQsXG4gICAgICAgIDI1LFxuICAgICAgICA0NSxcbiAgICAgICAgMTQxXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiA2LFxuICBcImFkdlNlY3JldEtleVwiOiBcIlRWekRWUGMvSXd5d1lkZjE5YjB2WGo2dXFSMmJCQWlRejhqRVpnVkxWeGs9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIk1MQl9hU0FXVExxWXVvdGs3cHVWSFFcIixcbiAgXCJwaG9uZUlkXCI6IFwiNGM0MTA2NGItZjQ3NS00MWU3LTk2OWMtMmNkYjk0ZDY5MDAxXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDUyLFxuICAgICAgMjMyLFxuICAgICAgNjAsXG4gICAgICAyMTIsXG4gICAgICAxNDYsXG4gICAgICA5NixcbiAgICAgIDIwNSxcbiAgICAgIDE3NixcbiAgICAgIDkwLFxuICAgICAgMjAwLFxuICAgICAgNjAsXG4gICAgICA1MyxcbiAgICAgIDE1NixcbiAgICAgIDEyOSxcbiAgICAgIDIyMCxcbiAgICAgIDIxNixcbiAgICAgIDI1NCxcbiAgICAgIDkwLFxuICAgICAgMixcbiAgICAgIDE5NlxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IGZhbHNlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTc0LFxuICAgICAgMTE3LFxuICAgICAgMTYwLFxuICAgICAgMTY5LFxuICAgICAgNjEsXG4gICAgICAyMzQsXG4gICAgICA5NCxcbiAgICAgIDIyMyxcbiAgICAgIDQ0LFxuICAgICAgMTI0LFxuICAgICAgMTYwLFxuICAgICAgNzcsXG4gICAgICAzNCxcbiAgICAgIDE5NixcbiAgICAgIDIxNCxcbiAgICAgIDQwLFxuICAgICAgODksXG4gICAgICAxMDcsXG4gICAgICAyNTAsXG4gICAgICAyMDZcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNPYS93ZVVFRVBEYnE3UUdHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcInY3NGgxOEZpR3FmN1ZvMDJYWTgrbUJCUkVudDZ5OWYyZ0RrbjNHSDVKeGc9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiWlcrUFFyOWJrUkc1Y1k1VEpDNnNZMXRoYmxPb2pXMGwzMlpPT1hiVHhUdDVwRi9TcFZSSVZjUXFmU2Q1K21pcnVUT1BhZGROQnduRTNxYUFLUkI0Q2c9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiS0wrWnoyWnJBYWRhRkVQamFZOFRjTlByaDVIN2tmR3NBRW5EZHBVL2ZsdExqM2hicHB2M2h5R3plUFA0ODJ2aXpPL3A1bW1ZNzNBeStXd3cvKzlaaWc9PVwiXG4gIH0sXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMzQ5MDM4NjA4MDM5OjgxQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIyMDMyNTA4MDQ0ODYyNDI6ODFAbGlkXCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMzQ5MDM4NjA4MDM5OjgxQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMTkxLFxuICAgICAgICAgIDE5MCxcbiAgICAgICAgICAzMyxcbiAgICAgICAgICAyMTUsXG4gICAgICAgICAgMTkzLFxuICAgICAgICAgIDk4LFxuICAgICAgICAgIDI2LFxuICAgICAgICAgIDE2NyxcbiAgICAgICAgICAyNTEsXG4gICAgICAgICAgODYsXG4gICAgICAgICAgMTQxLFxuICAgICAgICAgIDU0LFxuICAgICAgICAgIDkzLFxuICAgICAgICAgIDE0MyxcbiAgICAgICAgICA2MixcbiAgICAgICAgICAxNTIsXG4gICAgICAgICAgMTYsXG4gICAgICAgICAgODEsXG4gICAgICAgICAgMTgsXG4gICAgICAgICAgMTIzLFxuICAgICAgICAgIDEyMixcbiAgICAgICAgICAyMDMsXG4gICAgICAgICAgMjE1LFxuICAgICAgICAgIDI0NixcbiAgICAgICAgICAxMjgsXG4gICAgICAgICAgNTcsXG4gICAgICAgICAgMzksXG4gICAgICAgICAgMjIwLFxuICAgICAgICAgIDk3LFxuICAgICAgICAgIDI0OSxcbiAgICAgICAgICAzOSxcbiAgICAgICAgICAyNFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiaXBob25lXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjAzODA5MTVcbn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
