//RECODE BY MHANKBARBAR
//SELF BOT BY Vid
//YANG PASTI DISINI BANYAK YANG GUA COPAS
//TAMBAHIN NICK GUA LAH "DAVID"
//JANGAN CUMA PAKE DOANG
const sotoy = [
		'🍊 : 🍒 : 🍐',
		'🍒 : 🔔 : 🍊',
		'🍇 : 🍇 : 🍇',
		'🍊 : 🍋 : 🔔',
		'🔔 : 🍒 : 🍐',
		'🔔 : 🍒 : 🍊',
        '🍊 : 🍋 : 🔔',		
		'🍐 : 🍒 : 🍋',
		'🍐 : 🍐 : 🍐',
		'🍊 : 🍒 : 🍒',
		'🔔 : 🔔 : 🍇',
		'🍌 : 🍒 : 🔔',
		'🍐 : 🔔 : 🔔',
		'🍊 : 🍋 : 🍒',
		'🍋 : 🍋 : 🍌',
		'🔔 : 🔔 : 🍇',
		'🔔 : 🍐 : 🍇',
		'🔔 : 🔔 : 🔔',
		'🍒 : 🍒 : 🍒',
		'🍌 : 🍌 : 🍌',
		]
const {
    WAConnection,
  MessageType,
  Presence, 
  MessageOptions,
  Mimetype,
  WALocationMessage,
  WA_MESSAGE_STUB_TYPES,
  ReconnectMode,
  ProxyAgent,
  GroupSettingChange,
  ChatModification,
  waChatKey,
  WA_DEFAULT_EPHEMERAL,
  mentionedJid,
  processTime
} = require('@adiwajshing/baileys')
const fs = require('fs')
const axios = require("axios")
const speed = require('performance-now')
const crypto = require('crypto')
const request = require('request')
const imgbb = require('imgbb-uploader')
const toMs = require('ms')
const ms = require('parse-ms')
const moment = require('moment-timezone')
const fetch = require('node-fetch')
const phoneNum = require('awesome-phonenumber')
const ffmpeg = require('fluent-ffmpeg')
const imageToBase64 = require('image-to-base64')
const lolis = require('lolis.life')
const loli = new lolis()
const Exif = require('./lib/exif');
const exif = new Exif();

//********** FUNCTIONS **********//
const { removeBackgroundFromImageFile } = require('remove.bg')
const { color, bgcolor } = require('./lib/color')
const { help } = require('./src/help')
const { wait, simih, getBuffer, h2k, generateMessageID, getGroupAdmins, getRandom, banner, start, info, success, close } = require('./lib/functions')
const { fetchJson, fetchText } = require('./lib/fetcher')
const { recognize } = require('./lib/ocr')
const { exec } = require('child_process')
const { uploadimg } = require('./lib/uploadimg')
const { ind } = require('./akira')

//********** DATABASE **********//
const welkom = JSON.parse(fs.readFileSync('./src/welkom.json'))
const nsfw = JSON.parse(fs.readFileSync('./src/nsfw.json'))
const _registered = JSON.parse(fs.readFileSync('./database/bot/registered.json'))
const samih = JSON.parse(fs.readFileSync('./src/simi.json'))
const setting = JSON.parse(fs.readFileSync('./src/settings.json'))
const setiker = JSON.parse(fs.readFileSync('./temp/stik.json'))
const audionye = JSON.parse(fs.readFileSync('./temp/vn.json'))
const imagenye = JSON.parse(fs.readFileSync('./temp/image.json'))
const videonye = JSON.parse(fs.readFileSync('./temp/video.json'))

const sleep = async (ms) => {
    return new Promise(resolve => setTimeout(resolve, ms));
}
//***********SETING DULU BANG KALO MAU MAH ASAL JAN HAPUS TQTONYA ASU**********//
prefix = ''
f = '*'
blocked = []
namabot = 'DREAM'
fake = 'Hai ${pushname2}'
fakeimage = fs.readFileSync(`./media/zitsraa.jpeg`)
cr = 'NOT NAME'
ft = 'NAM KAMU'
numbernye = '0'
public = false

//*********** NO OWNER***********//
const vcard = 'BEGIN:VCARD\n'
            + 'VERSION:3.0\n'
            + 'FN:KEVIN GNZ\n' //Ganti Pakek Nama Lu
            + 'ORG:David (Dream Bot);\n' //Ganti Nama Bot Lu
            + 'TEL;type=CELL;type=VOICE;waid=6283184450788:+6283184450788\n' //Ganti Pakek Nomer Lu
            + 'END:VCARD' //JANGAN DI GANTI NTAR EROR
const vcard2 = 'BEGIN:VCARD\n'
            + 'VERSION:3.0\n'
            + 'FN:KEVIN GNZ\n' //Ganti Pakek Nama Lu
            + 'ORG:David (Dream Bot);\n' //Ganti Nama Bot Lu
            + 'TEL;type=CELL;type=VOICE;waid=6283184450788:+6283184450788\n' //Ganti Pakek Nomer Lu
            + 'END:VCARD' //JANGAN DI GANTI NTAR EROR

//*********** 𝗔𝗣𝗜𝗞𝗘𝗬 ***********//
const BarBarKey = 'IDxO1TFYnKADlX4pxcHa' //Kalo Abiss Beli Sendiri
const VhtearKey = '1BlnApiIkyPake' //Kalo dah Abis.Tinggal Cek Di Web Nya Aee Mumpung Ge Gratis
const XteamKey = 'AbilGanss'
const TobzApi = 'Bidmzz1sJ2L1TKyqaMEU'
const ZeksApi = 'apivinz'
const PencariCode = 'pais' //Free Apikey
const Lolhuman = 'BandNao71' // Beli.Sendiri.tod
//*FUCIONT**//
         const getRegisteredRandomId = () => {
            return _registered[Math.floor(Math.random() * _registered.length)].id
        }

        const addRegisteredUser = (userid, sender, age, time, serials) => {
            const obj = { id: userid, name: sender, age: age, time: time, serial: serials }
            _registered.push(obj)
            fs.writeFileSync('./database/bot/registered.json', JSON.stringify(_registered))
        }

        const createSerial = (size) => {
            return crypto.randomBytes(size).toString('hex').slice(0, size)
        }

        const checkRegisteredUser = (sender) => {
            let status = false
            Object.keys(_registered).forEach((i) => {
                if (_registered[i].id === sender) {
                    status = true
                }
            })
            return status
        }
        

function kyun(seconds){
  function pad(s){
    return (s < 10 ? '0' : '') + s;
  }
  var hours = Math.floor(seconds / (60*60));
  var minutes = Math.floor(seconds % (60*60) / 60);
  var seconds = Math.floor(seconds % 60);

  //return pad(hours) + ':' + pad(minutes) + ':' + pad(seconds)
  return `${pad(hours)} Jam ${pad(minutes)} Menit ${pad(seconds)} Detik`
}
function tanggal(){
myMonths = ["Januari","Februari","Maret","April","Mei","Juni","Juli","Agustus","September","Oktober","November","Desember"];
			myDays = ['Minggu','Senin','Selasa','Rabu','Kamis','Jum at','Sabtu'];
			var tgl = new Date();
			var day = tgl.getDate()
			bulan = tgl.getMonth()
			var thisDay = tgl.getDay(),
			thisDay = myDays[thisDay];
			var yy = tgl.getYear()
			var year = (yy < 1000) ? yy + 1900 : yy;
			return `${thisDay}, ${day} - ${myMonths[bulan]} - ${year}`
}

function monospace(string) {
return '```' + string + '```'
}


async function starts() {
	const Vid = new WAConnection()
	Vid.logger.level = 'warn'
	console.log(banner.string)
	Vid.on('qr', () => {
		console.log(color('[','white'), color('!','red'), color(']','white'), color(' Scan the qr code above'))
	})

	fs.existsSync('./David.json') && Vid.loadAuthInfo('./David.json')
	Vid.on('connecting', () => {
		start('2', 'Tunggu Sebentar Kak🐦...')
	})
	Vid.on('open', () => {
		success('2', 'Sudah Connect Kak👌..')
	})
	await Vid.connect({timeoutMs: 30*1000})
        fs.writeFileSync('./Zitsraa.json', JSON.stringify(Vid.base64EncodedAuthInfo(), null, '\t'))

	Vid.on('group-participants-update', async (anu) => {
		if (!welkom.includes(anu.jid)) return
		try {
			const mdata = await Vid.groupMetadata(anu.jid)
			console.log(anu)
			if (anu.action == 'add') {
				num = anu.participants[0]
				try {
					ppimg = await Vid.getProfilePicture(`${anu.participants[0].split('@')[0]}@c.us`)
				} catch {
					ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
				}
				teks =  `
ʜᴀʟʟᴏ
@${num.split('@')[0]}
👋\nꜱᴇʟᴀᴍᴀᴛ ᴅᴀᴛᴀɴɢ ᴅɪ ɢʀᴏᴜᴘ 
*${mdata.subject}*
┏━━━━━━━━━━━━━━━
┃────「 *_ɪɴᴛʀᴏ_* 」─────
┃━━━━━━━━━━━━━━━
┠⊷️ *ɴᴀᴍᴀ* :
┠⊷️ *ᴜᴍᴜʀ* :
┠⊷️ *ɴᴀᴍᴀ ᴘᴀᴄᴀʀ* :
┠⊷️ *ʜᴏʙʙʏ* :
┠⊷️ *ɢᴇɴᴅᴇʀ* :
┠⊷️ *ᴀꜱᴀʟ ᴋᴏᴛᴀ* :
┗━━━━━━━━━━━━━━━
Silah Kan Ketik *!Rules* Sebelum Menggunakan Bot`
				let buff = await getBuffer(ppimg)
				Vid.sendMessage(mdata.id, buff, MessageType.image, {caption: teks, contextInfo: {"mentionedJid": [num]}})
			} else if (anu.action == 'remove') {
				num = anu.participants[0]
				try {
					ppimg = await Vid.getProfilePicture(`${num.split('@')[0]}@c.us`)
				} catch {
					ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
				}
				teks = `sᴇʟᴀᴍᴀᴛ ᴛɪɴɢɢᴀʟ 
@${num.split('@')[0]}👋🍻
sᴇᴍᴏɢᴀ ᴊᴀsᴀᴅᴍᴜ ʙᴀɪᴋ ʙᴀɪᴋ sᴀᴊᴀ ᴅᴀɴ sᴇʟᴀʟᴜ ᴅɪᴋᴇɴᴀɴɢ ᴏʟᴇʜ ᴏʀᴀɴɢ ʏɢ ʙᴇʀᴀᴅᴀ ᴅɪsɪɴɪ🚮`
				let buff = await getBuffer(ppimg)
				Vid.sendMessage(mdata.id, buff, MessageType.image, {caption: teks, contextInfo: {"mentionedJid": [num]}})
			} else if (anu.action == 'promote') {
			const mdata = await Vid.groupMetadata(anu.jid)
			num = anu.participants[0]
			try {
					ppimg = await Vid.getProfilePicture(`${anu.participants[0].split('@')[0]}@c.us`)
				} catch {
					ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
				}
			let buff = await getBuffer(ppimg)
			teks = `*Selamat Brohh Anda Menjadi Admin Di Grup  *${mdata.subject}*`
			Vid.sendMessage(mdata.id, buff, MessageType.image, {caption : teks, contextInfo: {mentionedJid: [num]}, quoted: { "key": { "participant": `${numbernye}`, "remoteJid": `Kntl`, "fromMe": false, "id": "B391837A58338BA8186C47E51FFDFD4A" }, "message": { "documentMessage": { "jpegThumbnail": buff, "mimetype": "application/octet-stream", "title": `PROMOTE`, "fileLength": "36", "pageCount": 0, "fileName": `_Welcome_` }}, "messageTimestamp": "1614069378", "status": "PENDING"}})
		} else if (anu.action == 'demote') {
			num = anu.participants[0]
			const mdata = await Vid.groupMetadata(anu.jid)
			try {
					ppimg = await Vid.getProfilePicture(`${anu.participants[0].split('@')[0]}@c.us`)
				} catch {
					ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
				}
			let buff = await getBuffer(ppimg)
			teks = `*Yahaha Whyu Kasian Di demote  Di Grup ${mdata.subject}*`
			Vid.sendMessage(mdata.id, teks, MessageType.text, {contextInfo: {mentionedJid: [num]}, quoted: { "key": { "participant": `${numbernye}`, "remoteJid": `Ktl`, "fromMe": false, "id": "B391837A58338BA8186C47E51FFDFD4A" }, "message": { "documentMessage": { "jpegThumbnail": buff, "mimetype": "application/octet-stream", "title": `DEMOTE`, "fileLength": "36", "pageCount": 0, "fileName": `_Welcome_` }}, "messageTimestamp": "1614069378", "status": "PENDING"}})
		}
		} catch (e) {
			console.log('Error : %s', color(e, 'red'))
		}
})

Vid.on('CB:action,,call', async json => {
    const callerId = json[2][0][1].from;
    console.log("call dari "+ callerId)
        Vid.sendMessage(callerId, "Auto block system, don't call please", MessageType.text)
        await sleep(4000)
        await Vid.blockUser(callerId, "add") // Block user
})
	Vid.on('CB:Blocklist', json => {
            if (blocked.length > 2) return
	    for (let i of json[1].blocklist) {
	    	blocked.push(i.replace('c.us','s.whatsapp.net'))
	    }
	})

	Vid.on('chat-update', async (mek) => {
		try {
            if (!mek.hasNewMessage) return
            mek = mek.messages.all()[0]
			if (!mek.message) return
			if (mek.key && mek.key.remoteJid == 'status@broadcast') return
	//		if (!mek.key.fromMe) return
		global.prefix
			global.blocked
			const content = JSON.stringify(mek.message)
			const from = mek.key.remoteJid
			const type = Object.keys(mek.message)[0]
			const apiKey = setting.apiKey 
			const { text, extendedText, contact, caption, location, liveLocation, image, video, sticker, document, audio, product } = MessageType
			const time = moment.tz('Asia/Jakarta').format('DD/MM HH:mm:ss')
			const date = new Date().toLocaleDateString()
			const jam = moment.tz('Asia/Jakarta').format('HH:mm')
      const wita = moment.tz('Asia/Makassar').format('HH:mm:ss')
      const wit = moment.tz('Asia/Jayapura').format('HH:mm:ss')
        
			body = (type === 'conversation' && mek.message.conversation.startsWith(prefix)) ? mek.message.conversation : (type == 'imageMessage') && mek.message.imageMessage.caption.startsWith(prefix) ? mek.message.imageMessage.caption : (type == 'videoMessage') && mek.message.videoMessage.caption.startsWith(prefix) ? mek.message.videoMessage.caption : (type == 'extendedTextMessage') && mek.message.extendedTextMessage.text.startsWith(prefix) ? mek.message.extendedTextMessage.text : ''
			budy = (type === 'conversation') ? mek.message.conversation : (type === 'extendedTextMessage') ? mek.message.extendedTextMessage.text : ''
				const command = body.trim().split(/ +/).shift().toLowerCase()
			const args = body.trim().split(/ +/).slice(1)
			const isCmd = body.startsWith(prefix)
			chats = (type === 'conversation') ? mek.message.conversation : (type === 'extendedTextMessage') ? mek.message.extendedTextMessage.text : ''
		const arg = chats.slice(command.length + 2, chats.length)
			
			

			mess = {
				wait: '*[ ! ] Proses..*',
				success: '*[ ! ] Succes Kak*️',
				error: {
					stick: '*Maaf Kak Fitur Sedang Eror Silahkan Hubungi Owner Untuk Memperbaiki Fitur*',
					Iv: '*Link Nya Kek Nya Salah*'
				},
				only: {
					group: '*[ ! ]* Perintah ini Hanya Bisa Digunakan Di Grup',
					ownerG: '*[ ! ]* Perintah ini Hanya Bisa Digunakan Oleh Admin Grup',
					ownerB: '*[ ! ]*  Hanya Bisa Digunakan Oleh CEO *DREAM BOT*',
					admin: '*[ ! ]* Perintah ini Hanya Bisa Digunakan Oleh Admin Grup',
					Badmin: '*[ ! ]* Perintah ini Bisa Digunkaan Ketik bot Menjadi Admin'
				}
			}
      const totalchat = await Vid.chats.all()
			const botNumber = Vid.user.jid
			const ownerNumber = [`${setting.ownerNumber}@s.whatsapp.net`] // replace this with your number
			const isGroup = from.endsWith('@g.us')
			const sender = isGroup ? mek.participant : mek.key.remoteJid
			const groupMetadata = isGroup ? await Vid.groupMetadata(from) : ''
			const groupName = isGroup ? groupMetadata.subject : ''
			const groupId = isGroup ? groupMetadata.jid : ''
			const groupMembers = isGroup ? groupMetadata.participants : ''
			const groupAdmins = isGroup ? getGroupAdmins(groupMembers) : ''
			const isBotGroupAdmins = groupAdmins.includes(botNumber) || false
			const isGroupAdmins = groupAdmins.includes(sender) || false
			const isAntiLink = isGroup ? antilink.includes(from) : false
			const itsMe = sender == botNumber ? true : false
		    const insom = from.endsWith('@g.us')
			const Botdream = insom ? mek.participant : mek.key.remoteJid
            pushname2 = Vid.contacts[Botdream] != undefined ? Vid.contacts[Botdream].vname || Vid.contacts[Botdream].notify : undefined

			var tas = (type === 'conversation' && mek.message.conversation) ? mek.message.conversation : (type == 'imageMessage') && mek.message.imageMessage.caption ? mek.message.imageMessage.caption : (type == 'videoMessage') && mek.message.videoMessage.caption ? mek.message.videoMessage.caption : (type == 'extendedTextMessage') && mek.message.extendedTextMessage.text ? mek.message.extendedTextMessage.text : ''
			const mesejAnti = tas.slice(0).trim().split(/ +/).shift().toLowerCase()
			var Link = (type === 'conversation' && mek.message.conversation) ? mek.message.conversation : (type == 'imageMessage') && mek.message.imageMessage.caption ? mek.message.imageMessage.caption : (type == 'videoMessage') && mek.message.videoMessage.caption ? mek.message.videoMessage.caption : (type == 'extendedTextMessage') && mek.message.extendedTextMessage.text ? mek.message.extendedTextMessage.text : ''
			const messagesLink = Link.slice(0).trim().split(/ +/).shift().toLowerCase()
			const isWelkom = isGroup ? welkom.includes(from) : false
			const isNsfw = isGroup ? nsfw.includes(from) : false
			const isSimi = isGroup ? samih.includes(from) : false
			const isOwner = ownerNumber.includes(sender)
			const q = args.join(' ')
			const isRegistered = checkRegisteredUser(sender)
			const isUrl = (url) => {
			    return url.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&/=]*)/, 'gi'))
			}
			const reply = (teks) => {
				Vid.sendMessage(from, teks, text, {quoted:freply})
			}
			const sendMess = (hehe, teks) => {
				Vid.sendMessage(hehe, teks, text)
			}
			const mentions = (teks, memberr, id) => {
				(id == null || id == undefined || id == false) ? Vid.sendMessage(from, teks.trim(), extendedText, {contextInfo: {"mentionedJid": memberr}}) : Vid.sendMessage(from, teks.trim(), extendedText, {quoted: mek, contextInfo: {"mentionedJid": memberr}})
			}

const fakegroup = (teks) => {
			Vid.sendMessage(from, teks, text, {
				quoted: {
					key: {
						fromMe: false,
						participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "6281226770537-1604595598@g.us" } : {})
					},
					message: {
						conversation: fake
					}
				}
			})
		}


const fdocu = { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "documentMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "title": ` SELAMAT ${ucapan.data.result}\n${pushname2}`, "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('temp/foto/VD.jpeg')}}}
            


const freply = { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": ` SELAMAT ${ucapan.data.result}\n${pushname2}`, "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync(`temp/foto/VD.jpeg`)} } }
const freluk = { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": `HAI KAK${pushname2}\nJANGAN TAG OWNER GWA YE`, "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync(`temp/foto/VD.jpeg`)} } }

const fdavid = {
key: {
			fromMe: false,
			participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {})
		},
		message: {
			"productMessage": {
				"product": {
					"productImage":{
						"mimetype": "image/jpeg",
						"jpegThumbnail": fs.readFileSync(`./temp/foto/VD.jpeg`)
					},
					"title": ` SELAMAT ${ucapan.data.result}\n${pushname2}`,
					"description": "SELF BOT",
					"currencyCode": "IDR",
					"priceAmount1000": "0",
					"retailerId": "Self Bot",
					"productImageCount": 0
				},
				"businessOwnerJid": `0@s.whatsapp.net`
		}
	}
}

const ftoko = {
key: {
			fromMe: false,
			participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {})
		},
		message: {
			"productMessage": {
				"product": {
					"productImage":{
						"mimetype": "image/jpeg",
						"jpegThumbnail": fs.readFileSync(`./media/zitsraa.jpeg`)
					},
					"title": ` SELAMAT ${ucapan.data.result}\n ${pushname2}`,
					"description": "SELF BOT",
					"currencyCode": "IDR",
					"priceAmount1000": "0",
					"retailerId": "Self Bot",
					"productImageCount": 0
				},
				"businessOwnerJid": `0@s.whatsapp.net`
		}
	}
}
const uploadImages = (buffData, type) => {
    // eslint-disable-next-line no-async-promise-executor
    return new Promise(async (resolve, reject) => {
        const { ext } = await fromBuffer(buffData)
        const cmd = text.toLowerCase()
        const filePath = 'utils/tmp.' + ext
        const _buffData = type ? await resizeImage(buffData, false) : buffData
        fs.writeFile(filePath, _buffData, { encoding: 'base64' }, (err) => {
            if (err) return reject(err)
            console.log('Uploading image to telegra.ph server...')
            const fileData = fs.readFileSync(filePath)
            const form = new FormData()
            form.append('file', fileData, 'tmp.' + ext)
            fetch('https://telegra.ph/upload', {
                method: 'POST',
                body: form
            })
                .then(res => res.json())
                .then(res => {
                    if (res.error) return reject(res.error)
                    resolve('https://telegra.ph' + res[0].src)
                })
                .then(() => fs.unlinkSync(filePath))
                .catch(err => reject(err))
        })
    })
}

// ANTI LINK 
  if (messagesLink.includes("://wa.online/")){
		        if (!isGroup) return
		        if (!isAntiLink) return
		        if (isGroupAdmins) return reply('Admin Grup Mah Bebas:D')
		        Vid.updatePresence(from, Presence.composing)
		        if (mesejAnti.includes(",izinkak")) return reply("LIHAT ATURAN GRUP KAGA ")
		        var kic = `${sender.split("@")[0]}@s.whatsapp.net`
		        reply(`Maaf kak ${sender.split("@")[0]} Grup ini anti link, siap siap kamu di kick`)
		        setTimeout( () => {
			        Vid.groupRemove(from, [kic]).catch((e)=>{reply(`*ZXBOT~ HARUS JADI ADMINâ—*`)})
		        }, 2000)
		        setTimeout( () => {
			        Vid.updatePresence(from, Presence.composing)
			        reply("Bismillah")
		        }, 1000)
		        setTimeout( () => {
			        Vid.updatePresence(from, Presence.composing)
			        reply("Nice Shot")
			        }, 0)
		  }
		  
		  if (messagesLink.includes("://kuotainternet.online/")){
		        if (!isGroup) return
		        if (!isAntiLink) return
		        if (isGroupAdmins) return reply('Admin Grup Mah Bebas:D')
		        Vid.updatePresence(from, Presence.composing)
		        if (mesejAnti.includes(",izinkak")) return reply("LIHAT ATURAN GRUP KAGA ")
		        var kic = `${sender.split("@")[0]}@s.whatsapp.net`
		        reply(`Maaf kak ${sender.split("@")[0]} Grup ini anti link, siap siap kamu di kick`)
		        setTimeout( () => {
			        Vid.groupRemove(from, [kic]).catch((e)=>{reply(`*ZXBOT~ HARUS JADI ADMINâ—*`)})
		        }, 2000)
		        setTimeout( () => {
			        Vid.updatePresence(from, Presence.composing)
			        reply("Bismillah")
		        }, 1000)
		        setTimeout( () => {
			        Vid.updatePresence(from, Presence.composing)
			        reply("Nice Shot")
			        }, 0)
		  }

			colors = ['red','white','black','blue','yellow','green']
			const isMedia = (type === 'imageMessage' || type === 'videoMessage')
			const isQuotedImage = type === 'extendedTextMessage' && content.includes('imageMessage')
			const isQuotedAudio = type === 'extendedTextMessage' && content.includes('audioMessage')
			const isQuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage')
			const isQuotedSticker = type === 'extendedTextMessage' && content.includes('stickerMessage') 


   if (itsMe){
     if(chats.toLowerCase() == `${prefix}self`){
       public = false
       Vid.sendMessage(from, `Success`, `*MODE : SELF*`)
     }
     if (chats.toLowerCase() == 'status'){
       Vid.sendMessage(from, `STATUS : ${public ? 'PUBLIC' : 'SELF'}`)
     }
   }
   
  if (!public){
    if (!mek.key.fromMe) return
  }


			if (!isGroup && !isCmd) console.log(color(time, "white"), color("[ PRIVATE ]", "aqua"), color(budy, "white"), "from", color(sender.split('@')[0], "yellow"))
            if (isGroup && !isCmd) console.log(color(time, "white"), color("[  GROUP  ]", "aqua"), color(budy, "white"), "from", color(sender.split('@')[0], "yellow"), "in", color(groupName, "yellow"))
            if (!isGroup && isCmd) console.log(color(time, "white"), color("[ COMMAND ]", "aqua"), color(budy, "white"), "from", color(sender.split('@')[0], "yellow"))
            if (isGroup && isCmd) console.log(color(time, "white"), color("[ COMMAND ]", "aqua"), color(budy, "white"), "from", color(sender.split('@')[0], "yellow"), "in", color(groupName, "yellow"))
			let authorname = Vid.contacts[from] != undefined ? Vid.contacts[from].vname || Vid.contacts[from].notify : undefined	
			if (authorname != undefined) { } else { authorname = groupName }	
			
			function addMetadata(packname, author) {	
				if (!packname) packname = 'WABot'; if (!author) author = 'Bot';	
				author = author.replace(/[^a-zA-Z0-9]/g, '');	
				let name = `${author}_${packname}`
				if (fs.existsSync(`./src/stickers/${name}.exif`)) return `./src/stickers/${name}.exif`
				const json = {	
					"sticker-pack-name": packname,
					"sticker-pack-publisher": author,
				}
				const littleEndian = Buffer.from([0x49, 0x49, 0x2A, 0x00, 0x08, 0x00, 0x00, 0x00, 0x01, 0x00, 0x41, 0x57, 0x07, 0x00])	
				const bytes = [0x00, 0x00, 0x16, 0x00, 0x00, 0x00]	

				let len = JSON.stringify(json).length	
				let last	

				if (len > 256) {	
					len = len - 256	
					bytes.unshift(0x01)	
				} else {	
					bytes.unshift(0x00)	
				}	

				if (len < 16) {	
					last = len.toString(16)	
					last = "0" + len	
				} else {	
					last = len.toString(16)	
				}	

				const buf2 = Buffer.from(last, "hex")	
				const buf3 = Buffer.from(bytes)	
				const buf4 = Buffer.from(JSON.stringify(json))	

				const buffer = Buffer.concat([littleEndian, buf2, buf3, buf4])	

				fs.writeFile(`./src/stickers/${name}.exif`, buffer, (err) => {	
					return `./src/stickers/${name}.exif`	
				})	

			}
			
			switch(command) {
			  
			case '!help':  
          case '!menu':
          reply ('*Sabar Bang Ge Loading , Bagi Bg Sultan Donasi Lah Buat Beli Ampikey*')
         wew = fs.readFileSync(`./temp/foto/David.jpeg`)
         menu =`

┏━━━━━━━━━━━━━━━
┃❒   *INFO*
┃┝  *Author* : *David(Dream Bot)*
┃┝  *Name Bot* : *Dream Bot*
┃┝  *Server* : *Baileys*
┃┝  *Prefix*  : *「 ! 」*
┃┝  *Total Hit* : *289*
┃┝  *Merk Hp* : *Realme* 
┃┝  *Versi Hp* : *5i*
┃┝  *Rest Api* : https://dream-apikey.herokuapp.com/ 
┃┝  *Total Chat* : *${totalchat.length}*
┃┝  *Ram* : *${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / 4095 ] RAM*
┃┝  *Wa Version* : *${Vid.user.phone.wa_version}*
┕━━━━━━━━━━━━━━━

┏━━━━━━━━━━━━━━━
┃❒      「 *GROUP MENU* 」
┃╭───────────────────
┃❏│⊱❥ ${f}${prefix}!hidetag Text${f}
┃❏│⊱❥ ${f}${prefix}!stctag Tag Stc${f}
┃❏│⊱❥ ${f}${prefix}!imgtag Tag Img${f}
┃❏│⊱❥ ${f}${prefix}!kontag Text${f}
┃❏│⊱❥ ${f}${prefix}!kontak 6281xxx Nama${f}
┃❏│⊱❥ ${f}${prefix}!lapor${f}
┃❏│⊱❥ ${f}${prefix}!getpic @tag${f}
┃❏│⊱❥ ${f}${prefix}!getbio @tag${f}
┃❏│⊱❥ ${f}${prefix}!welcome 1/0${f}
┃❏│⊱❥ ${f}${prefix}!linkgroup${f}
┃❏│⊱❥ ${f}${prefix}!group tutup/buka${f}
┃❏│⊱❥ ${f}${prefix}!add 6281xxx${f}
┃❏│⊱❥ ${f}${prefix}!kick @tag${f}
┃❏│⊱❥ ${f}${prefix}!promote @tag${f}
┃❏│⊱❥ ${f}${prefix}!demote @tagadmin${f}
┃❏│⊱❥ ${f}${prefix}!demoteall${f}
┃❏│⊱❥ ${f}${prefix}!edotensei @tag${f}
┃❏│⊱❥ ${f}${prefix}!listadmin${f}
┃❏│⊱❥ ${f}${prefix}!online${f}
┃❏│⊱❥ ${f}${prefix}!infoall${f}
┃❏│⊱❥ ${f}${prefix}!notif${f}
┃❏│⊱❥ ${f}${prefix}!leave${f}
┕━━━━━━━━━━━━━
┏━━━━━━━━━━━━━━━
┃❒  「 *FUN MENU* 」
┃╭───────────────────
┃❏│⊱❥ ${f}${prefix}!tebakgambar${f}
┃❏│⊱❥ ${f}${prefix}!caklontong${f}
┃❏│⊱❥ ${f}${prefix}!tebakbendera${f}
┃❏│⊱❥ ${f}${prefix}!slot${f}
┃❏│⊱❥ ${f}${prefix}!slot2${f}
┃❏│⊱❥ ${f}${prefix}!suit${f}
┃❏│⊱❥ ${f}${prefix}!gantengcek
┃❏│⊱❥ ${f}${prefix}!cantikcek
┕━━━━━━━━━━━━━━━
┏━━━━━━━━━━━━━━━
┃❒ 「 *DETEKSI MENU* 」
┃╭───────────────────
┃❏│⊱❥ *!deteksiwajah*
┃❏│⊱❥  *!deteksigender*
┃❏│⊱❥  *!deteksiumur*
┕━━━━━━━━━━━━━━
┏━━━━━━━━━━━━━━
┃❒ 「 *OWNER MENU* 」
┃╭───────────────────
┃❏│⊱❥ ${f}${prefix}!self${f}
┃❏│⊱❥ ${f}${prefix}!public${f}
┃❏│⊱❥ ${f}${prefix}!mute${f}
┃❏│⊱❥ ${f}${prefix}!unmute${f}
┃❏│⊱❥ ${f}${prefix}!runtime${f}
┃❏│⊱❥ ${f}${prefix}!ping${f}
┃❏│⊱❥ ${f}${prefix}!term${f}
┃❏│⊱❥ ${f}${prefix}!blocklist${f}
┃❏│⊱❥ ${f}${prefix}!run${f}
┃❏│⊱❥ ${f}${prefix}!chatlist${f}
┃❏│⊱❥ ${f}${prefix}!owner${f}
┃❏│⊱❥ ${f}${prefix}!join Linkgroup${f}
┃❏│⊱❥ ${f}${prefix}!getpic @tag${f}
┃❏│⊱❥ ${f}${prefix}!getbio @tag${f}
┃❏│⊱❥ ${f}${prefix}!unpin${f}
┃❏│⊱❥ ${f}${prefix}!archive${f}
┃❏│⊱❥ ${f}${prefix}!unarchiveall${f}
┃❏│⊱❥ ${f}${prefix}!readall${f}
┃❏│⊱❥ ${f}${prefix}!delthischat${f}
┃❏│⊱❥ ${f}${prefix}!shutdown${f}
┃❏│⊱❥ ${f}${prefix}!upswtext${f}
┃❏│⊱❥ ${f}${prefix}!upswimg${f}
┃❏│⊱❥ ${f}${prefix}!upswvideo${f}
┕━━━━━━━━━━━━━━━━━━━━━━
┏━━━━━━━━━━━━━━━
┃❒  「 *MAKERMENU* 」
┃╭───────────────────
┃❏│⊱❥ ${f}${prefix}!sticker Reply img${f}
┃❏│⊱❥ ${f}${prefix}!rsticker Reply img${f}
┃❏│⊱❥ ${f}${prefix}!stickergif Reply video${f}
┃❏│⊱❥ ${f}${prefix}!stickerwa Query${f}a      
┃❏│⊱❥ ${f}${prefix}!stickerwm Nama|Author${f}
┃❏│⊱❥ ${f}${prefix}!nobg Reply img${f}
┃❏│⊱❥ ${f}${prefix}!textmaker teks atas|teks bawah${f}
┃❏│⊱❥ ${f}${prefix}!attp Text${f}
┃❏│⊱❥ ${f}${prefix}!ttp Text${f}
┃❏│⊱❥ ${f}${prefix}!take Nama|Author${f}
┃❏│⊱❥ ${f}${prefix}!exif Nama|Author${f}
┃❏│⊱❥ ${f}${prefix}!colong${f}
┃❏│⊱❥ ${f}${prefix}!fdeface Url|title|desk${f}
┃❏│⊱❥ ${f}${prefix}!togif Reply stickergif${f}
┃❏│⊱❥ ${f}${prefix}!tovideo Reply sticker${f}
┃❏│⊱❥ ${f}${prefix}!toimg Reply sticker${f}
┃❏│⊱❥ ${f}${prefix}!nulis1${f}
┃❏│⊱❥ ${f}${prefix}!tulis2${f}
┃╰──────────────────
┗══════════════════⊷❍
┏━━━━━━━━━━━━━━━
┃❒   「 *RANDOM IMAGE* 」
┃╭───────────────────
┃❏│⊱❥ ${prefix}!freefireimg
┃❏│⊱❥ ${prefix}!ww2
┃❏│⊱❥ ${prefix}!anjing
┃❏│⊱❥ ${prefix}!kucing
┃❏│⊱❥ ${prefix}!doraemon
┃❏│⊱❥ ${prefix}!hamster
┃❏│⊱❥ ${prefix}!kelinci
┃❏│⊱❥ ${prefix}!art
┃❏│⊱❥ ${prefix}!bts
┃❏│⊱❥ ${prefix}!exo
┃❏│⊱❥ ${prefix}!elf
┃❏│⊱❥ ${prefix}!loli
┃❏│⊱❥ ${prefix}!neko
┃❏│⊱❥ ${prefix}!waifu
┃❏│⊱❥ ${prefix}!shota
┃❏│⊱❥ ${prefix}!husbu
┃❏│⊱❥ ${prefix}!sagiri
┃❏│⊱❥ ${prefix}!shinobu
┃❏│⊱❥ ${prefix}!megumin
┃❏│⊱❥ ${prefix}!wallnime
┃╰───────────────────
┗══════════════════⊷❍
┏━━━━━━━━━━━━━━━
┃❒ 「 DOWNLOADER 」
┃╭───────────────────
┃❏│⊱❥ ${f}${prefix}!play Query${f}
┃❏│⊱❥ ${f}${prefix}!play2 Query${f}
┃❏│⊱❥ ${f}${prefix}!ig Url${f}
┃❏│⊱❥ ${f}${prefix}!fb Url${f}
┃❏│⊱❥ ${f}${prefix}!tiktok Url${f}
┃❏│⊱❥ ${f}${prefix}!ytmp3 Url${f}
┃❏│⊱❥ ${f}${prefix}!ytmp4 Url${f}
┃❏│⊱❥ ${f}${prefix}!tiktok${f}
┃❏│⊱❥ ${f}${prefix}!tiktoknowm${f}
┃╰───────────────────
┗══════════════════⊷❍

┏━━━━━━━━━━━━━━━
┃❒  *PARA MASTAH* 
┣━━━━━━━━━━━━━━━
┃┝  *AriffiRazzaq (Guruku)*
┃┝  *Beny(Guruku)*
┃┝  *David(Dream Bot)*
┃┝  *DappaUhuy(Mastah)*
┃┝  *YogiPw (Mastah)*
┃┝  *Arga*
┃┝  *Memans(Mastah)*
┃┝ *Iky(Mastah)*
┃┕  *DLL ALL CREATOR BOT WA*
┕━━━━━━━━━━━━━━━.`
Vid.sendMessage(from, wew, image,{ quoted: freply, caption: menu})
Teks =`Update Menu? Ketik !new`
Vid.sendMessage(from, Teks, teks,{ quoted: freply})
break
//*************INFO NEWS********************//
                case '!wikipedia':
                if (!isRegistered) return reply( ind.noregis())
				reply('Wait...')
                    if (args.length == 0) return reply(`Example: ${prefix + command} Tahu`)
                    query = args.join(" ")
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/wiki?apikey=${lolhumankey}&query=${query}`)
                    get_result = get_result.result
                    reply(get_result)
                    break
                case '!translate':
                if (!isRegistered) return reply( ind.noregis())
				reply('Wait...')
                    if (args.length == 0) return reply(`Example: ${prefix + command} en Tahu Bacem`)
                    kode_negara = args[0]
                    args.shift()
                    ini_txt = args.join(" ")
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/translate/auto/${kode_negara}?apikey=${lolhumankey}&text=${ini_txt}`)
                    get_result = get_result.result
                    init_txt = `From : ${get_result.from}\n`
                    init_txt += `To : ${get_result.to}\n`
                    init_txt += `Original : ${get_result.original}\n`
                    init_txt += `Translated : ${get_result.translated}\n`
                    init_txt += `Pronunciation : ${get_result.pronunciation}\n`
                    reply(init_txt)
                    break
                case '!brainly':
                if (!isRegistered) return reply( ind.noregis())
				reply('Wait...')
                    if (args.length == 0) return reply(`Example: ${prefix + command} Soekarno adalah`)
                    query = args.join(" ")
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/brainly?apikey=${lolhumankey}&query=${query}`)
                    get_result = get_result.result
                    ini_txt = "Result : \n"
                    for (var x of get_result) {
                        ini_txt += `${x.title}\n`
                        ini_txt += `${x.url}\n\n`
                    }
                    reply(ini_txt)
                    break
                    case 'infogrup':
				Vid.updatePresence(from, Presence.composing)
				if (!isGroup) return reply(mess.only.group)
				try {
					ppUrl = await client.getProfilePicture(from)
					} catch {
					ppUrl = 'https://i.ibb.co/Gp4H47k/7dba54f7e250.jpg'
					}
					reply(mess.wait)
					buffer = await getBuffer(ppUrl)
					Vid.sendMessage(from, buffer, image, {quoted: mek, caption: `NAME : *${groupName}*\nMODE WELCOME: ${Welcomee}\nMODE ANIME: ${ModeAnime}\nMODE NSFW: ${Nsfww}\nMEMBER : *${groupMembers.length}*\nADMIN : *${groupAdmins.length}*\nDESK : ${groupDesc}`})
					break
                case '!jadwaltv':
                if (!isRegistered) return reply( ind.noregis())
				reply('Wait...')
                    if (args.length == 0) return reply(`Example: ${prefix + command} RCTI`)
                    channel = args[0]
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/jadwaltv/${channel}?apikey=${lolhumankey}`)
                    get_result = get_result.result
                    ini_txt = `Jadwal TV ${channel.toUpperCase()}\n`
                    for (var x in get_result) {
                        ini_txt += `${x} - ${get_result[x]}\n`
                    }
                    reply(ini_txt)
                    break
                case '!jadwaltvnow':
                if (!isRegistered) return reply( ind.noregis())
				reply('Wait')
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/jadwaltv/now?apikey=${lolhumankey}`)
                    get_result = get_result.result
                    ini_txt = `Jadwal TV Now :\n`
                    for (var x in get_result) {
                        ini_txt += `${x.toUpperCase()}${get_result[x]}\n\n`
                    }
                    reply(ini_txt)
                    break
                case '!newsinfo':
                if (!isRegistered) return reply( ind.noregis())
				reply('Wait...')
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/newsinfo?apikey=${lolhumankey}`)
                    get_result = get_result.result
                    ini_txt = "Result :\n"
                    for (var x of get_result) {
                        ini_txt += `Title : ${x.title}\n`
                        ini_txt += `Author : ${x.author}\n`
                        ini_txt += `Source : ${x.source.name}\n`
                        ini_txt += `Url : ${x.url}\n`
                        ini_txt += `Published : ${x.publishedAt}\n`
                        ini_txt += `Description : ${x.description}\n\n`
                    }
                    reply(ini_txt)
                    break
                case '!cnnindonesia':
                if (!isRegistered) return reply( ind.noregis())
				reply('Wait...')
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/cnnindonesia?apikey=${lolhumankey}`)
                    get_result = get_result.result
                    ini_txt = "Result :\n"
                    for (var x of get_result) {
                        ini_txt += `Judul : ${x.judul}\n`
                        ini_txt += `Link : ${x.link}\n`
                        ini_txt += `Tipe : ${x.tipe}\n`
                        ini_txt += `Published : ${x.waktu}\n\n`
                    }
                    reply(ini_txt)
                    break
                case '!cnnnasional':
                if (!isRegistered) return reply( ind.noregis())
				reply('Wait...')
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/cnnindonesia/nasional?apikey=${lolhumankey}`)
                    get_result = get_result.result
                    ini_txt = "Result :\n"
                    for (var x of get_result) {
                        ini_txt += `Judul : ${x.judul}\n`
                        ini_txt += `Link : ${x.link}\n`
                        ini_txt += `Tipe : ${x.tipe}\n`
                        ini_txt += `Published : ${x.waktu}\n\n`
                    }
                    reply(ini_txt)
                    break
                case '!cnninternasional':
                if (!isRegistered) return reply( ind.noregis())
				reply('Wait...')
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/cnnindonesia/internasional?apikey=${lolhumankey}`)
                    get_result = get_result.result
                    ini_txt = "Result :\n"
                    for (var x of get_result) {
                        ini_txt += `Judul : ${x.judul}\n`
                        ini_txt += `Link : ${x.link}\n`
                        ini_txt += `Tipe : ${x.tipe}\n`
                        ini_txt += `Published : ${x.waktu}\n\n`
                    }
                    reply(ini_txt)
                    break
                case '!infogempa':
                if (!isRegistered) return reply( ind.noregis())
				reply('Wait...')
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/infogempa?apikey=${lolhumankey}`)
                    get_result = get_result.result
                    ini_txt = `Lokasi : ${get_result.lokasi}\n`
                    ini_txt += `Waktu : ${get_result.waktu}\n`
                    ini_txt += `Potensi : ${get_result.potensi}\n`
                    ini_txt += `Magnitude : ${get_result.magnitude}\n`
                    ini_txt += `Kedalaman : ${get_result.kedalaman}\n`
                    ini_txt += `Koordinat : ${get_result.koordinat}`
                    get_buffer = await getBuffer(get_result.map)
                    Vid.sendMessage(from, get_buffer, image, { quoted: mek, caption: ini_txt })
                    break
                case '!lirik':
                if (!isRegistered) return reply( ind.noregis())
				reply('Wait...')
                    if (args.length == 0) return reply(`Example: ${prefix + command} Melukis Senja`)
                    query = args.join(" ")
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/lirik?apikey=${lolhumankey}&query=${query}`)
                    reply(get_result.result)
                    break
                case '!cuaca':
                if (!isRegistered) return reply( ind.noregis())
				reply('Wait...')
                    if (args.length == 0) return reply(`Example: ${prefix + command} Yogyakarta`)
                    daerah = args[0]
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/cuaca/${daerah}?apikey=${lolhumankey}`)
                    get_result = get_result.result
                    ini_txt = `Tempat : ${get_result.tempat}\n`
                    ini_txt += `Cuaca : ${get_result.cuaca}\n`
                    ini_txt += `Angin : ${get_result.angin}\n`
                    ini_txt += `Description : ${get_result.description}\n`
                    ini_txt += `Kelembapan : ${get_result.kelembapan}\n`
                    ini_txt += `Suhu : ${get_result.suhu}\n`
                    ini_txt += `Udara : ${get_result.udara}\n`
                    ini_txt += `Permukaan laut : ${get_result.permukaan_laut}\n`
                    Vid.sendMessage(from, { degreesLatitude: get_result.latitude, degreesLongitude: get_result.longitude }, location, { quoted: mek })
                    reply(ini_txt)
                    break
                case '!covidindo':
                if (!isRegistered) return reply( ind.noregis())
				reply('Wait...')
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/corona/indonesia?apikey=${lolhumankey}`)
                    get_result = get_result.result
                    ini_txt = `Positif : ${get_result.positif}\n`
                    ini_txt += `Sembuh : ${get_result.sembuh}\n`
                    ini_txt += `Dirawat : ${get_result.dirawat}\n`
                    ini_txt += `Meninggal : ${get_result.meninggal}`
                    reply(ini_txt)
                    break
                case '!covidglobal':
                if (!isRegistered) return reply( ind.noregis())
				reply('wait....')
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/corona/global?apikey=${lolhumankey}`)
                    get_result = get_result.result
                    ini_txt = `Positif : ${get_result.positif}\n`
                    ini_txt += `Sembuh : ${get_result.sembuh}\n`
                    ini_txt += `Dirawat : ${get_result.dirawat}\n`
                    ini_txt += `Meninggal : ${get_result.meninggal}`
                    reply(ini_txt)
                    break
                case '!kodepos':
                if (!isRegistered) return reply( ind.noregis())
				reply('Wait...')
                    if (args.length == 0) return reply(`Example: ${prefix + command} Slemanan or ${prefix + command} 66154`)
                    daerah = args.join(" ")
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/kodepos?apikey=${lolhumankey}&query=${daerah}`)
                    get_result = get_result.result[0]
                    ini_txt = `Provinsi : ${get_result.province}\n`
                    ini_txt += `Kabupaten : ${get_result.city}\n`
                    ini_txt += `Kecamatan : ${get_result.subdistrict}\n`
                    ini_txt += `Kelurahan : ${get_result.urban}\n`
                    ini_txt += `Kode Pos : ${get_result.postalcode}`
                    reply(ini_txt)
                    break
                case '!jadwalbola':
                if (!isRegistered) return reply( ind.noregis())
				reply('Wait...')
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/jadwalbola?apikey=${lolhumankey}`)
                    get_result = get_result.result
                    ini_txt = "Jadwal Bola :\n"
                    for (var x of get_result) {
                        ini_txt += `Hari : ${x.hari}\n`
                        ini_txt += `Jam : ${x.jam}\n`
                        ini_txt += `Event : ${x.event}\n`
                        ini_txt += `Match : ${x.match}\n`
                        ini_txt += `TV : ${x.tv}\n\n`
                    }
                    reply(ini_txt)
                    break
                case '!indbeasiswa':
                if (!isRegistered) return reply( ind.noregis())
				reply('wait...')
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/indbeasiswa?apikey=${lolhumankey}`)
                    get_result = get_result.result
                    ini_txt = 'Info Beasiswa :\n'
                    for (var x of get_result) {
                        ini_txt += `Title : ${x.title}\n`
                        ini_txt += `Link : ${x.link}\n\n`
                    }
                    reply(ini_txt)
                    break
                case '!hoax':
                if (!isRegistered) return reply( ind.noregis())
				reply('Tunggu Sebentar Kak...')
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/turnbackhoax?apikey=${lolhumankey}`)
                    get_result = get_result.result
                    ini_txt = 'Info Hoax :\n'
                    for (var x of get_result) {
                        ini_txt += `Title : ${x.title}\n`
                        ini_txt += `Link : ${x.link}\n`
                        ini_txt += `Posted : ${x.posted}\n`
                        ini_txt += `Description : ${x.desc}\n\n`
                    }
                    reply(ini_txt)
                    break
//************DETEKSI MENU****************//
    case '!deteksiwajah':
	if (!isRegistered) return reply( ind.noregis())
	var imgbb = require('imgbb-uploader')
	if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
	  ted = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: mek
	  reply('Tunggu Sebentar Kak...')
	  owgi = await Vid.downloadAndSaveMediaMessage(ted)
	  anu = await imgbb("3ea1465ef91578a90ee81f7d41c59a1f", owgi)
	  hehe = await getBuffer(`http://lolhuman.herokuapp.com/api/facedetect?apikey=${lolhumankey}&img=${anu.display_url}`)
	 Vid.sendMessage(from, hehe, image, {quoted:mek})
	} else {
	  reply('Jangan tambah kan apapun pada command')
	}
	break
	case '!deteksigender':
	if (!isRegistered) return reply( ind.noregis())
	var imgbb = require('imgbb-uploader')
	if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
	  ted = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: mek
	  reply('Tunggu Sebentar Kak....')
	  owgi = await Vid.downloadAndSaveMediaMessage(ted)
	  anu = await imgbb("3ea1465ef91578a90ee81f7d41c59a1f", owgi)
	  hehe = await fetchJson(`http://lolhuman.herokuapp.com/api/genderdetect?apikey=${lolhumankey}&img=${anu.display_url}`)
	  gender = `[ DETEKSI GENDER ] \nMenurut bot.. seseorang di gambar bergender = *${hehe.result}*\n\nFEMALE = PEREMPUAN\nMALE = LAKI-LAKI`
	 Vid.sendMessage(from, gender, text, {quoted:mek})
	} else {
	  reply('Jangan tambah kan apapun pada command')
	}
	break
	case '!deteksiumur':
	if (!isRegistered) return reply( ind.noregis())
	var imgbb = require('imgbb-uploader')
	if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
	  ted = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: mek
	  reply('Tunggu Sebentar Kak.....')
	  owgi = await Vid.downloadAndSaveMediaMessage(ted)
	  anu = await imgbb("3ea1465ef91578a90ee81f7d41c59a1f", owgi)
	  hehe = await fetchJson(`http://lolhuman.herokuapp.com/api/agedetect?apikey=${lolhumankey}&img=${anu.display_url}`)
	  gender = `[ DETEKSI UMUR ] \nMenurut bot.. seseorang di gambar tersebut berumur = *${hehe.result}*`
	 Vid.sendMessage(from, gender, text, {quoted:mek})
	} else {
	  reply('Jangan tambah kan apapun pada command')
	}
	break
//***BATAS OM***//
break
case '@6285865829368':
Sag = fs.readFile(`./temp/stick/Tag.webp`)
Vid.sendMessage(from, Sag, sticker,{ quoted: freluk})
break
case '!ppcouple':
                Vid.updatePresence(from, Presence.composing) 
				reply(`[❕] Loading`)
				asu = await fetchJson(`https://lindow-api.herokuapp.com/api/ppcouple?apikey=LindowApi`, {method: 'get'}) 
				buffer1 = await getBuffer(asu.result.male) 
				buffer2 = await getBuffer(asu.result.female)
                Vid.sendMessage(from, buffer1, MessageType.image, { quoted: freply, caption: '*COUPLE*'} ) 
                Vid.sendMessage(from, buffer2, MessageType.image, { quoted: freply, caption: '*COUPLE*'} )
			    break
		    case '!memeindo': 
				gatauda = body.slice(8)
				reply('Wait Kak')
				anu = await fetchJson(`https://api.zeks.xyz/api/memeindo?apikey=apivinz`, {method: 'get'})
				buffer = await getBuffer(anu.result)
				Vid.sendMessage(from, buffer, image, {quoted: freply})
				break
			case '!listdaerah':
			reply('*SABAR KAK LAGE NYARI DAERAH*')
			Sh =`Ambarawa,Ambon,Amlapura,Amuntai,Argamakmur,Atambua,Babo,Bagan Siapiapi,Bajawa,Balige,Balik Papan,Banda Aceh,Bandarlampung,Bandung,Bangkalan,Bangkinang,Bangko,Bangli,Banjar,Banjar Baru,Banjarmasin,Banjarnegara,Bantaeng,Banten,Bantul,Banyuwangi,Barabai,Barito,Barru,Batam,Batang,Batu,Baturaja,Batusangkar,Baubau,Bekasi,Bengkalis,Bengkulu,Benteng,Biak,Bima,Binjai,Bireuen,Bitung,Blitar,Blora,Bogor,Bojonegoro,Bondowoso,Bontang,Boyolali,Brebes,Bukit Tinggi,Bulukumba,Buntok,Cepu,Ciamis,Cianjur,Cibinong,Cilacap,Cilegon,Cimahi,Cirebon,Curup,Demak,Denpasar,Depok,Dili,Dompu,Donggala,Dumai,Ende,Enggano,Enrekang,Fakfak,Garut,Gianyar,Gombong,Gorontalo,Gresik,Gunung Sitoli,Indramayu,Jakarta,Jambi,Jayapura,Jember,Jeneponto,Jepara,Jombang,Kabanjahe,Kalabahi,Kalianda,Kandangan,Karanganyar,Karawang,Kasungan,Kayuagung,Kebumen,Kediri,Kefamenanu,Kendal,Kendari,Kertosono,Ketapang,Kisaran,Klaten,Kolaka,Kota Baru Pulau Laut,Kota Bumi,Kota Jantho,Kota Mobagu,Kuala Kapuas,Kuala Kurun,Kuala Pembuang,Kuala Tungkal,Kudus,Kuningan,Kupang,Kutacane,Kutoarjo,Labuhan,Lahat,Lamongan,Langsa,Larantuka,Lawang,Lhoseumawe,Limboto,Lubuk Basung,Lubuk Linggau,Lubuk Pakam,Lubuk Sikaping,Lumajang,Luwuk,Madiun,Magelang,Magetan,Majalengka,Majene,Makale,Makassar,Malang,Mamuju,Manna,Manokwari,Marabahan,Maros,Martapura,Masohi,Mataram,Maumere,Medan,Mempawah,Menado,Mentok,Merauke,Metro,Meulaboh,Mojokerto,Muara Bulian,Muara Bungo,Muara Enim,Muara Teweh,Muaro Sijunjung,Muntilan,Nabire,Negara,Nganjuk,Ngawi,Nunukan,Pacitan,Padang,Padang Panjang,Padang Sidempuan,Pagaralam,Painan,Palangkaraya,Palembang,Palopo,Palu,Pamekasan,Pandeglang,Pangkajene,Pangkajene Sidenreng,Pangkalanbun,Pangkalpinang,Panyabungan,Pare,Parepare,Pariaman,Pasuruan,Pati,Payakumbuh,Pekalongan,Pekan Baru,Pemalang,Pematangsiantar,Pendopo,Pinrang,Pleihari,Polewali,Pondok Gede,Ponorogo,Pontianak,Poso,Prabumulih,Praya,Probolinggo,Purbalingga,Purukcahu,Purwakarta,Purwodadigrobogan,Purwokerto,Purworejo,Putussibau,Raha,Rangkasbitung,Rantau,Rantauprapat,Rantepao,Rembang,Rengat,Ruteng,Sabang,Salatiga,Samarinda,Sampang,Sampit,Sanggau,Sawahlunto,Sekayu,Selong,Semarang,Sengkang,Serang,Serui,Sibolga,Sidikalang,Sidoarjo,Sigli,Singaparna,Singaraja,Singkawang,Sinjai,Sintang,Situbondo,Slawi,Sleman,Soasiu,Soe,Solo,Solok,Soreang,Sorong,Sragen,Stabat,Subang,Sukabumi,Sukoharjo,Sumbawa Besar,Sumedang,Sumenep,Sungai Liat,Sungai Penuh,Sungguminasa,Surabaya,Surakarta,Tabanan,Tahuna,Takalar,Takengon,Tamiang Layang,Tanah Grogot,Tangerang,Tanjung Balai,Tanjung Enim,Tanjung Pandan,Tanjung Pinang,Tanjung Redep,Tanjung Selor,Tapak Tuan,Tarakan,Tarutung,Tasikmalaya,Tebing Tinggi,Tegal,Temanggung,Tembilahan,Tenggarong,Ternate,Tolitoli,Tondano,Trenggalek,Tual,Tuban,Tulung Agung,Ujung Berung,Ungaran,Waikabubak,Waingapu,Wamena,Watampone,Watansoppeng,Wates,Wonogiri,Wonosari,Wonosobo,Yogyakarta`
			Vid.sendMessage(from, Sh, text,{ quoted: ftoko})
			break
			case '!pacarowner':
			  wew = fs.readFileSync(`./temp/foto/David.jpeg`)
			Say =`*NIH DOI OWNER GWA😼*`
			Vid.sendMessage(from, wew, image,{ quoted: freply, caption: Say})
			break
			case '!nekonime':
			Fah = await getBuffer(`https://videfikri.com/api/anime/neko`)
			Vid.sendMessage(from, Fah, image,{ quoted: ftoko})
			break
			case '!setprefix':
					if (args.length < 1) return
					if (!isOwner) return reply(ind.ownerb())
					prefix = args[0]
					reply(`Prefix berhasil di ubah menjadi : ${prefix}`)
					break 

			case '!shoppe':
			Dah = await fetchJson(`https://pencarikode.xyz/api/shopee?search=${body.slice(9)}&apikey=pais`)
			teks = '*SHOPPE*'
			for (let i of Dah.result) 
           tks = `*NAMA PRODUK* = ${i.nama}
 *HARGA* : ${i.harga}
*TERJUAL* : ${i.terjual}
*LOKASI*   : ${i.lokasi}
*LINK*        : ${i.link_produk}`
reply(tks)
break
			case '!kisahnabi':
                    if (args.length == 0) return reply(`Example: ${prefix + command} Muhammad`)
                    query = args.join(" ")
                    get_result = await fetchJson(`https://videfikri.com/api/religi/kisahnabi/?nabi=${query}`)
                    get_result = get_result.result
                    ini_txt = `Name : ${get_result.name}\n`
                    ini_txt += `Lahir : ${get_result.thn_kelahiran}\n`
                    ini_txt += `Umur : ${get_result.age}\n`
                    ini_txt += `Tempat : ${get_result.place}\n`
                    ini_txt += `Story : \n${get_result.story}`
                    reply(ini_txt)
                    break
				         case '!artinama':
                    if (args.length == 0) return reply(`Example: ${prefix + command} LoL Human`)
                    Nye = await fetchJson(`https://videfikri.com/api/primbon/artinama/?nama=${body.slice(10)}`)
                    Vid.sendMessage(from, Nye, text,{ quoted: freply})
                    break
        // Random Image //
                case '!art':
                case '!bts':
                case '!exo':
                case '!elf':
                case '!loli':
                case '!neko':
                case '!waifu':
                case '!shota':
                case '!husbu':
                case '!sagiri':
                case '!shinobu':
                case '!megumin':
                case '!wallnime':
				reply('Wait Kak Proses')
                    ini_buffer = await getBuffer(`http://api.lolhuman.xyz/api/random/${command}?apikey=dae6f5f8c38ec6366194e03d`)
                    Vid.sendMessage(from, ini_buffer, image, { quoted: mek })
                    break
case '!buggc':
                    await dapyog.toggleDisappearingMessages(from)
                    dapyog.sendMessage(from, `[â—] *BAKAAA* Onii Chan`, text)
                    break
                case '!buggc2': 
                    await Vid.toggleDisappearingMessages(from)
                    await Vid.toggleDisappearingMessages(from)
                    Vid.sendMessage(from, `[â—] *BAKAAA* Onii Chan`, text)
                    break
                    case '!ngentod':
                    await Vid.togglemekMessages(from)
                    await Vid.togglemekMessages(from)
                    Vid.sendMessage(from, `[â—] *BAKAAA* Onii Chan`, text)
                    break
                   case '!pinterest':
                    if (args.lenght < 1) return reply(`*YANG MAU DI CARI PAAN BANG?*`)
                    Sad = await getBuffer(`https://lindow-api.herokuapp.com/api/pinterest?search=${body.slice(12)}&apikey=LindowApi`)
                    Vid.sendMessage(from, Sad, image,{ quoted: freply, caption: 'INI KAH?'})
                    break
                    case '!stickerpatrick':
                    Asu = await getBuffer(`https://lolhuman.herokuapp.com/api/sticker/patrick?apikey=dae6f5f8c38ec6366194e03d`)
                    Vid.sendMessage(from, Asu, sticker,{ quoted: freply})
                    break

                          case '!dadu':
                    Asu = await getBuffer(`https://lolhuman.herokuapp.com/api/sticker/dadu?apikey=dae6f5f8c38ec6366194e03d`)
                    Vid.sendMessage(from, Asu, sticker,{ quoted: freply})
                    break
                    case '!antijawa1':
                    sh =`*SUKSES MENGAKTIFKAN FITUR ANTI JAWA😊*`
                    Vid.sendMessage(from, sh, text,{ quoted: freply})
                    break
                    case 'daftar':
                			if (isRegistered) return  reply(ind.rediregis())
                			if (!q.includes('|')) return  reply(ind.wrongf())
                			const namaUser = q.substring(0, q.indexOf('|') - 0)
                			const umurUser = q.substring(q.lastIndexOf('|') + 1)
                			const serialUser = createSerial(20)
                			if(isNaN(umurUser)) return await reply('Umur harus berupa angka!!')
                			if (namaUser.length >= 30) return reply(`Namanya Jan Panjang Panjang Set Dah`)
                			if (umurUser > 25) return reply(`Yaelah Dah Tua Aee Masih Maenan Bot`)
                			if (umurUser < 15) return reply(`*Umur Minimal 15 Bang*`)
                					try {
								ppimg = await Vid.getProfilePicture(`${sender.split('@')[0]}@c.us`)
								} catch {
								ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
							}
                					veri = sender
                					if (isGroup) {
                    			addRegisteredUser(sender, namaUser, umurUser, time, serialUser)
                    			await Vid.sendMessage(from, ppimg, image, {quoted: mek, caption: ind.registered(namaUser, umurUser, serialUser, time, sender)})
                    			console.log(color('[REGISTER]'), color(time, 'yellow'), 'Name:', color(namaUser, 'cyan'), 'Age:', color(umurUser, 'cyan'), 'Serial:', color(serialUser, 'cyan'), 'in', color(sender || groupName))
                			} else {
                    			addRegisteredUser(sender, namaUser, umurUser, time, serialUser)
                    			await Vid.sendMessage(from, ppimg, image, {quoted: mek, caption: ind.registered(namaUser, umurUser, serialUser, time, sender)})
                    			console.log(color('[REGISTER]'), color(time, 'yellow'), 'Name:', color(namaUser, 'cyan'), 'Age:', color(umurUser, 'cyan'), 'Serial:', color(serialUser, 'cyan'))
                			}
				        break
                   case '!jawa':
                   vid =`Karena Kamu Owner Bot Kamu Tidak Akan Di Kick`
                   Vid.sendMessage(from, vid, text,{ quoted: freply})
                   break
					 case '!wetglass':
                case '!multicolor3d':
                case '!watercolor':
                case '!luxurygold':
                case '!galaxywallpaper':
                case '!lighttext':
                case '!beautifulflower':
                case '!puppycute':
                case '!royaltext':
                case '!heartshaped':
                case '!birthdaycake':
                case '!galaxystyle':
                case '!hologram3d':
                case '!glossychrome':
                case '!greenbush':
                case '!metallogo':
                case '!noeltext':
                case '!glittergold':
                case '!textcake':
                case '!starsnight':
                case '!wooden3d':
                case '!textbyname':
                case '!writegalacy':
                case '!snow3d':
                case '!birthdayday':
                case '!goldplaybutton':
                case '!silverplaybutton':
                case '!freefire':
                    if (args.length == 0) return reply('Teksnya mana um')
                    txt = args.join(" ")
                    reply('Bentar Kak Ge Di Proses')
                    buffer = await getBuffer(`http://api.lolhuman.xyz/api/ephoto1/${command}?apikey=dae6f5f8c38ec6366194e03d&text=${txt}`)
                   Vid.sendMessage(from, buffer, image, {contextInfo: {forwardingScore : 508, isForwarded: true}, quoted: freply})
					break
                    case '!?':
function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}
function troli(nomor){
Vid.sendMessage(nomor, `         

┏━━━━━━━━━━━━━━━
┃❒   *INFO*
┃┝  *Author* : *David(Dream Bot)*
┃┝  *Name Bot* : *Dream Bot*
┃┝  *Server* : *Baileys*
┃┝  *Prefix*  : *「 ! 」*
┃┝  *Total Hit* : *289*
┃┝  *Merk Hp* : *Realme* 
┃┝  *Versi Hp* : *5i*
┃┝  *Total Chat* : *${totalchat.length}*
┃┝  *Ram* : *${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / 4095 ] RAM*
┃┝  *Wa Version* : *${Vid.user.phone.wa_version}*
┕━━━━━━━━━━━━━━━

┏━━━━━━━━━━━━━━━
┃❒      「 *GROUP MENU* 」
┃╭───────────────────
┃❏│⊱❥ ${f}${prefix}!hidetag Text${f}
┃❏│⊱❥ ${f}${prefix}!stctag Tag Stc${f}
┃❏│⊱❥ ${f}${prefix}!imgtag Tag Img${f}
┃❏│⊱❥ ${f}${prefix}!kontag Text${f}
┃❏│⊱❥ ${f}${prefix}!kontak 6281xxx Nama${f}
┃❏│⊱❥ ${f}${prefix}!lapor${f}
┃❏│⊱❥ ${f}${prefix}!getpic @tag${f}
┃❏│⊱❥ ${f}${prefix}!getbio @tag${f}
┃❏│⊱❥ ${f}${prefix}!welcome 1/0${f}
┃❏│⊱❥ ${f}${prefix}!linkgroup${f}
┃❏│⊱❥ ${f}${prefix}!group tutup/buka${f}
┃❏│⊱❥ ${f}${prefix}!add 6281xxx${f}
┃❏│⊱❥ ${f}${prefix}!kick @tag${f}
┃❏│⊱❥ ${f}${prefix}!promote @tag${f}
┃❏│⊱❥ ${f}${prefix}!demote @tagadmin${f}
┃❏│⊱❥ ${f}${prefix}!demoteall${f}
┃❏│⊱❥ ${f}${prefix}!edotensei @tag${f}
┃❏│⊱❥ ${f}${prefix}!listadmin${f}
┃❏│⊱❥ ${f}${prefix}!online${f}
┃❏│⊱❥ ${f}${prefix}!infoall${f}
┃❏│⊱❥ ${f}${prefix}!notif${f}
┃❏│⊱❥ ${f}${prefix}!leave${f}
┕━━━━━━━━━━━━━
┏━━━━━━━━━━━━━━━
┃❒  「 *FUN MENU* 」
┃╭───────────────────
┃❏│⊱❥ ${f}${prefix}!tebakgambar${f}
┃❏│⊱❥ ${f}${prefix}!caklontong${f}
┃❏│⊱❥ ${f}${prefix}!tebakbendera${f}
┃❏│⊱❥ ${f}${prefix}!slot${f}
┃❏│⊱❥ ${f}${prefix}!slot2${f}
┃❏│⊱❥ ${f}${prefix}!suit${f}
┃❏│⊱❥ ${f}${prefix}!gantengcek
┃❏│⊱❥ ${f}${prefix}!cantikcek
┕━━━━━━━━━━━━━━━
┏━━━━━━━━━━━━━━━
┃❒ 「 *OWNER MENU* 」
┃╭───────────────────
┃❏│⊱❥ ${f}${prefix}!self${f}
┃❏│⊱❥ ${f}${prefix}!public${f}
┃❏│⊱❥ ${f}${prefix}!mute${f}
┃❏│⊱❥ ${f}${prefix}!unmute${f}
┃❏│⊱❥ ${f}${prefix}!runtime${f}
┃❏│⊱❥ ${f}${prefix}!ping${f}
┃❏│⊱❥ ${f}${prefix}!term${f}
┃❏│⊱❥ ${f}${prefix}!blocklist${f}
┃❏│⊱❥ ${f}${prefix}!run${f}
┃❏│⊱❥ ${f}${prefix}!chatlist${f}
┃❏│⊱❥ ${f}${prefix}!owner${f}
┃❏│⊱❥ ${f}${prefix}!join Linkgroup${f}
┃❏│⊱❥ ${f}${prefix}!getpic @tag${f}
┃❏│⊱❥ ${f}${prefix}!getbio @tag${f}
┃❏│⊱❥ ${f}${prefix}!unpin${f}
┃❏│⊱❥ ${f}${prefix}!archive${f}
┃❏│⊱❥ ${f}${prefix}!unarchiveall${f}
┃❏│⊱❥ ${f}${prefix}!readall${f}
┃❏│⊱❥ ${f}${prefix}!delthischat${f}
┃❏│⊱❥ ${f}${prefix}!shutdown${f}
┃❏│⊱❥ ${f}${prefix}!upswtext${f}
┃❏│⊱❥ ${f}${prefix}!upswimg${f}
┃❏│⊱❥ ${f}${prefix}!upswvideo${f}
┕━━━━━━━━━━━━━━━━━━━━━━
┏━━━━━━━━━━━━━━━
┃❒  「 *MAKERMENU* 」
┃╭───────────────────
┃❏│⊱❥ ${f}${prefix}!sticker Reply img${f}
┃❏│⊱❥ ${f}${prefix}!rsticker Reply img${f}
┃❏│⊱❥ ${f}${prefix}!stickergif Reply video${f}
┃❏│⊱❥ ${f}${prefix}!stickerwa Query${f}a      
┃❏│⊱❥ ${f}${prefix}!stickerwm Nama|Author${f}
┃❏│⊱❥ ${f}${prefix}!nobg Reply img${f}
┃❏│⊱❥ ${f}${prefix}!textmaker teks atas|teks bawah${f}
┃❏│⊱❥ ${f}${prefix}!attp Text${f}
┃❏│⊱❥ ${f}${prefix}!ttp Text${f}
┃❏│⊱❥ ${f}${prefix}!take Nama|Author${f}
┃❏│⊱❥ ${f}${prefix}!exif Nama|Author${f}
┃❏│⊱❥ ${f}${prefix}!colong${f}
┃❏│⊱❥ ${f}${prefix}!fdeface Url|title|desk${f}
┃❏│⊱❥ ${f}${prefix}!togif Reply stickergif${f}
┃❏│⊱❥ ${f}${prefix}!tovideo Reply sticker${f}
┃❏│⊱❥ ${f}${prefix}!toimg Reply sticker${f}
┃❏│⊱❥ ${f}${prefix}!nulis1${f}
┃❏│⊱❥ ${f}${prefix}!tulis2${f}
┃╰──────────────────
┗══════════════════⊷❍
┏━━━━━━━━━━━━━━━
┃❒   「 *RANDOM IMAGE* 」
┃╭───────────────────
┃❏│⊱❥ ${prefix}!freefireimg
┃❏│⊱❥ ${prefix}!ww2
┃❏│⊱❥ ${prefix}!anjing
┃❏│⊱❥ ${prefix}!kucing
┃❏│⊱❥ ${prefix}!doraemon
┃❏│⊱❥ ${prefix}!hamster
┃❏│⊱❥ ${prefix}!kelinci
┃❏│⊱❥ ${prefix}!art
┃❏│⊱❥ ${prefix}!bts
┃❏│⊱❥ ${prefix}!exo
┃❏│⊱❥ ${prefix}!elf
┃❏│⊱❥ ${prefix}!loli
┃❏│⊱❥ ${prefix}!neko
┃❏│⊱❥ ${prefix}!waifu
┃❏│⊱❥ ${prefix}!shota
┃❏│⊱❥ ${prefix}!husbu
┃❏│⊱❥ ${prefix}!sagiri
┃❏│⊱❥ ${prefix}!shinobu
┃❏│⊱❥ ${prefix}!megumin
┃❏│⊱❥ ${prefix}!wallnime
┃╰───────────────────
┗══════════════════⊷❍
┏━━━━━━━━━━━━━━━
┃❒ 「 DOWNLOADER 」
┃╭───────────────────
┃❏│⊱❥ ${f}${prefix}!play Query${f}
┃❏│⊱❥ ${f}${prefix}!play2 Query${f}
┃❏│⊱❥ ${f}${prefix}!ig Url${f}
┃❏│⊱❥ ${f}${prefix}!fb Url${f}
┃❏│⊱❥ ${f}${prefix}!tiktok Url${f}
┃❏│⊱❥ ${f}${prefix}!ytmp3 Url${f}
┃❏│⊱❥ ${f}${prefix}!ytmp4 Url${f}
┃❏│⊱❥ ${f}${prefix}!tiktok${f}
┃❏│⊱❥ ${f}${prefix}!tiktoknowm${f}
┃╰───────────────────
┗══════════════════⊷❍

┏━━━━━━━━━━━━━━━
┃❒  *PARA MASTAH* 
┣━━━━━━━━━━━━━━━
┃┝  *AriffiRazzaq (Guruku)*
┃┝  *Beny(Guruku)*
┃┝  *David(Dream Bot)*
┃┝  *DappaUhuy(Mastah)*
┃┝  *YogiPw (Mastah)*
┃┝  *Arga*
┃┝  *Memans(Mastah)*
┃┝ *Iky(Mastah)*
┃┕  *DLL ALL CREATOR BOT WA*
┕━━━━━━━━━━━━━━━`, MessageType.extendedText,{
 quoted: {
  key: {
   participant: '0@s.whatsapp.net' // Fake sender Jid
  },
  message: {
    orderMessage: {
    thumbnail: fakeimage,
    itemCount: 0, // Bug
    status: 1,
    surface: 1,
    message: 'DREAM BOT',
    orderTitle: 'DREAM BOT', // Idk what this does
    sellerJid: '0@s.whatsapp.net' // Seller
   }
  }
 }
})
}
function bug(jid){
for(let i=0;i < 1;i++){
var
WA_DEFAULT_EPHEMERAL = require('@adiwajshing/baileys')
Vid.toggleDisappearingMessages(jid, WA_DEFAULT_EPHEMERAL)
}}
async function attack(targett){
bug(targett)
await sleep(3000)
troli(targett)
await sleep(3000)
bug(targett)
}

attack(mek.key.remoteJid)
break
					case '!mltourserti3': 
				if (args.length < 1) return reply(`Textnya Mana Cuy?\n*Contoh ${prefix}mltourserti3 databaseaUhuy`)
				reply(ind.wait())
				ct = body.slice(13)
				anu = await getBuffer(`https://onlydevcity.xyz/MLTourSerti3/img.php?nama=${ct}`)
				Vid.sendMessage(from, anu, image, {quoted: ftoko})
				break
				case '!darkjokes':
				Sad = await getBuffer(`https://zenzapi.xyz/api/random/darkjoke?apikey=zenz`)
				Vid.sendMessage(from, Sad, image,{ quoted: freply, caption: '*DARKJOKES*'})
				break
				case '!tes':
				Vid =`Iyh Kak`
				Vid.sendMessage(from, Vid, text,{ quoted: mek})
				break
				case '!nulis':
				if (args.lenght < 1) return reply(`*YangvMau Di Tulis Apaan Om*`)
				anu = await getBuffer(`https://api.zeks.xyz/api/magernulis?nama=SAMSUDIN AWOKAWOM&kelas=KAGAK SEKOLAH DIA&text=${body.slice(7)}&tinta=1&apikey=apivinz`)
				Vid.sendMessage(from, anu, image,{ quoted: freply, caption: 'Nih Kak Dah Jadi'})
				break
				case '!kodenuklir':
				Sayu =`
*Kode NUKLIR*
BY: KEPIN

©asuna chan
319893
316198
322874

©nami chan
310024
305080

©miku chan
311007 
306088

©nino chan
305216 
302152

©ichika chan
 305062
 273182

©hinata chan
310481
304204
304212

©sakura chan
306443
309406
308515

©tosaka chan
320669
314130

©wiz
301377
293855

©yunna chan  
317969
272578

©khusina chan
318537
265876

©yotsuba chan
281722

©itsuki chan
298064 
264779

©erina chan
183270
172228
190509

©alice chan
180663
203497
237556

©megumi chan
117327
147676
166412

©aqua chan
173911 218917 195287 316277 306950 323026

©uzaki chan
297346
276023
304002

©rem chan
314259 312354 300508 288873 189632 289276 178283

©mitsuha can
256038
185333
191532
186151

©sagiri chan
240912
239436
193941

©nezuko chan
319115
306954
283001

©kanroji chan
310502
321881
303578

©fujiwara chika chan
276478
267858
270370
278513

©kaguya sinomiya chan
270251
267979
265175

©zero two
260606
308637

©levi
339298  339341  326108  326107  321745  365304  265300  247998  197127 
161595  247998  216277  176152  116042  108534

©karma
206695  218080 239849 172305 172604 154328 179335 207706

©annie
132039  157669  230438  110051 197313 123758  127431  193413  110051  197473  9968 188250

©mikasa 
101796. 
98150. 
338510. 

©tanjirou
298173
321773
294167

©momo yaoyoroz
178992 283793 315869 173101
261917 172753 266019 171387
202525 222077
179056 194941
310741 293189
212917 194943 314925 304397 179870 339989 168607 248688 150917 330051 304764

©historia
240873 246504 290089 99744 319670 99352 94515 178447 315429 215374 70891 319805 162343 197473 158469 98832 197313 99473 98563 289642 310976 101948

©ymir 
250230 103045 215374 141152 104464 120578 101948

©oikawa 
338786 274750 254938 254930 237263 162041

©yaoi
175434 191557 222195 237223 237222 237221 152148 151272 153909 302818 175972 274623  274762  225099  316472  241211  175972   25133  249405  251441 8266713  131087  14975  316471  327423  274616 305446 137077  157918  254927 237263 135956 195844 162041 161326 130252 160665 207706 
309415 331672 129887 161325 158714 151448 149795 134292 129887 84088 139068 84087 84088 129887 134292 139068 149795 151448 158714 161326 182354
178138 176030 175937 175868 175323 175432 175277 175208 16305 274659

©Yuri
333339 333282  333195 333374 333214  333249 332450
331739 331891 331939 331387 331035 330642 330477 329805 331209 332484 214991 323026 234638 333339 333282 333195 333374 333214 333249 332450  331739 331891 331939 331387 331473 331035 330642 331209 332484 332347 332206 332167 332034 331935 331901 306064 306249 307036 318303 308233 308373 315706 314881 312755 313254 314392 314637 315519 312175 312221 280194 282654 284846 333339 333282 333195 333374 333214 333249 332450 331739 331891 331939 331387 331473 331035 330642 330477 329805 331209 332484 338087 338091 331939 331387 331473 331035 330642 332347 332206

©Boruto
228450
243916
294322

©charlotte
151360 152868 152868 152869 310356 152888 141707 152870

©jean
145412 112272 234279 136405
100505 182429 136879 104205 103179 182422 104203 97998
98847

©Kurumi
321542 309847 303072 243984
312396

©IwaOikawa
327578 327331  271119 244087
237020 235171 184659 183448 182311 175994 175779 153136
152148 151272 153909 302818
218563 178137 175937 218562
195777 183950 176020 175291
171342

©Sasuke
332345 332344
331416 331413 328836 327228
325041 321936 321934
319801 317305  317304 315986 314397 313695

©Ino
236079
219647
211806
4262

©Kushina
344423
334319
323497
255867

©Temari
339098
311063
251457
176022

©Sarada
300899
291558
243916
207366

©random
148726,333680 228626 80841 25133 249405 251441 8266713 131087 14975 316471, 327423, 274616, 305446 327423 305446 327418 327420 327416 324715 323519 316473, 327423 305446 327418 327420 327416 324715 323519 316473 287892 274762 274661 274659 274616 292746 285694 316471 333223, 327423, 327422, 32742 

©akhaasi
182354 

178138 

176030 

175937 

175868 

257892 226942 236297 216039 221711 

245304 166174 175220 244327 191049 

220882 244859 227446 259322 259862 

259758 259555 242505 255388 262042 

146718 202230 

259420 

259668 

259848 259542 

188717 259727 257889 259904 

258136 259906 259986 

216926 197648 

232854 156069 122984 260026 259634 

259610 259348 258669 256097 118282 

260028 260058 259557 

259497 122220 

260111 260088 259880 258977 260097 

259765 259359 260138 259617 107965 

197255 260276 260209 260210 260203 

191360 191390 248933 257567 227913 211648 210240 260626 259622 257991 

213966 260623 149112 257168 198203 

114783 220958 244387 243734 223315 

118069 136188 260686 241777 260912 

142154 119798 

261174 258301 256808 

169134 220354 260271 261725 261378 

252174 261928 114427 187003 147577 

249458 157767 

224316 175294 

258450 

233864 236128 261162 174036 187205 

210873 

220376 

193318 

193814 

110232 

199310 193816 

193815 219068 

220386 

177642 188269 181837 220377 119293 

257528 258926 

208174 249229 

216845 

261811 

149212 

261650 

250327 192327 

262384 

245644 

134442 

105951 259904 

262538 234818 

135927 262447 

261225 261226 

167801 

150309 

260761 

123554

©ayoi pt2
304106 302337 302336 302299 298513 308231 308352 308338 308461 165820 165325 164330 169738 113999 115176 171898 172193 246422 238357 234344 234343 234342 234341 325367 325363 325358 325337 298173 321773 294167 302337 274750 254932 254931 254930 254928 137077 157918 254927 237263 135956 195844 162041 161326 130252 160665 207706 239849 309415 981150 290089 315429 251489 253091 253104 229144 239749 251974 230185 230566 219847 239842 265855 254351 266177 233245 307499 306854 297031 296041 176030 175937 175868 175323 175432 163057 161327 160701 158239 182354 178138 175277 175208 16305 207405 270424 270975 257888 118840 247134 193759 176367 155415 246232 198315 122697 308637 289060 286129 281415 280662 275327 260111 260088 323820 321438 320987 320173 317222 313479 299893 297346 28922 277548 267613 252227 269653 272390 272512 271245 270809 266088 264980 262215 260433 260146 256738 272425 272045 272352 272015 271993 271924 152148 151272 153909 302818 218563 178137 175937 218562 195777 183950 176020 175291 171342 152658 158722 161181 175554


©daisuga
271811.271030.193118.165404.271286 200674.184163.161177.271122.197284 192980.161175.271120.197291.185163 144037.271039.197135.183072 

©oikawa
274750 254932 254931 254930 254928 

137077 157918 329642 271286 271811 305446 327423 331684 309415 239849 207706 207706 160665 130252 

308352 [ todobaku ] 

308338 [ kiribaku ] 

308461 [todobaku ] 

274750.254932.254931.154930.254928 

254928.137077.157918.254927.237263 135956.195844.162041 

180373.182132.224742.224882.189442 197364.224882.189442.197364.257001 262342.268991.172361.334369 152234.148373.140122.130818.130505 271123.183716 

146499 258212 

163532 255244 269825 235914 247103 138365 124624 219718


243725 233770 250704 262819 

261830 215658 256404 260028 261789 241254 268580 262407 262252 201814 250193 236036 262889 243933 245697 239750 128983 

95364 223815 225080 110332 225767 97247 231139 266116 217037 160657 182439 205089 176495 199121 199425 184068 186615 224644 129479 251524 153374 

229144 253687 238577 236509 227675 229085 233245 266177 254351 265855 239842 219847 239749 230566 253014 230185 251974 253091 251489 238030 260614 

245023 232887 233547 262158 262870 239312 255129 244530 246963 256050 215459 243725 233770 250704 262819 261830 215658 256404 260028 261789 241254


324715 323519 316473 

274750 254932 254931 254930 254928 137077 157918 254927 237263 135956 195844 162041 161326 130252 160665 207706 239849 309415 

239749 230566 253104 230185 251974 253091`
Vid.sendMessage(from, Sayu, text,{ quoted: freply})
break
					case '!mltourserti4': 	
				if (args.length < 1) return reply(`Textnya Mana Cuy?\n*Contoh ${prefix}mltourserti4 databaseaUhuy`)
				reply(ind.wait())
				ct = body.slice(13)
				anu = await getBuffer(`https://onlydevcity.xyz/MLTourSerti4/img.php?nama=${ct}`)
				Vid.sendMessage(from, anu, image, {quoted: ftoko})
				break
				case '!pantun':
                anu = await fetchJson(`https://lindow-api.herokuapp.com/api/pantun?apikey=LindowApi`, { method: 'get' })
                kata = anu.result
                Vid.sendMessage(from, kata, text, { quoted: ftoko })
                break
			 case '!katakevin':
               case '!katadavid':
                anu = await fetchJson(`https://lindow-api.herokuapp.com/api/katailham?apikey=LindowApi`, { method: 'get' })
                kata = anu.result
                Vid.sendMessage(from, kata, text, { quoted: ftoko })
                break
				case '!triggered':
                    ini_url = args[0]
                    ranp = getRandom('.gif')
                    rano = getRandom('.webp')
                    buffer = `https://api-self.herokuapp.com/api/triggered?url=https://api-self.herokuapp.com/media/example.jpg`
                    exec(`wget "${buffer}" -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
                        fs.unlinkSync(ranp)
                        buff = fs.readFileSync(rano)
                        Vid.sendMessage(from, buff, sticker, { quoted: ftoko })
                        fs.unlinkSync(rano)
                    })
                    break
         case '!hentai':
         Dah = await getBuffer(`https://pencarikode.xyz/api/hentai?apikey=pais`)
         Vid.sendMessage(from, Dah, image,{ quoted: freply, caption: '*Tobat Anjingg*'})
         break
					    case '!artinama':
					if (args.length < 1) return reply('Apa yang mau dicari um?')
					anu = await fetchJson(`https://mnazria.herokuapp.com/api/arti?nama=${body.slice(10)}`, {method: 'get'})
					reply('Menurut nama:\n\n'+anu.result)
					break
					case '!namaowner':
					  if (isRegistered) return  reply(ind.rediregis())
					vid =`*NAMA OWNER KU ADALAH :DAVID*`
					Vid.sendMessage(from, vid, text,{ quoted: freply})
					break
					//creator benny

case '!pastegg':
pe = body.slice(8)
pa = pe.split("|")[0];
gg = pe.split("|")[1];
anu = await fetchJson(`https://api-self.herokuapp.com/api/pastegg?teks=${pa}&nama=${gg}`)
pasgg = `${anu.result.url}`
reply(pasgg)
break
case '!pornhub':
pe = body.slice(7)
pa = pe.split(".")[0]
gg = pe.split(".")[0]
anu = await fetchJson(`https://pencarikode.xyz/api/textpro/phub?text=${pa}&text2=${gg}&apikey=pais`)
Vid.sendMessage(from, anu, image,{ quoted: freply, caption: '*Nih Kak..*'})
break
			case '!rules':
			case '!Rules':
		    Dh =`
*「 PERATURAN BOT 」*

1. DILARANG TELFON BOT!!
2. DILARANG SPAM BOT
3. DILARANG BERKATA KASAR
4. DILARANG SPAM VIRTEX
5. DILARANG TELEFON OWNER
6. DILARANG SPAM GROUP
7. DILARANG SPAM ADMIN
8. DILARANG BERKATA KASAR DI GC

⚠️JIKA KALIAN MELANGGAR.. AKAN DI BLOCK + BANNED!!
Jika Sudah Paham Silahkan Ketik  _*Menu*_  Untuk MenjalanKan Bot`
Vid.sendMessage(from, Dh, text,{ quoted: freply})
break
case '!restapi':
                    tu1h = fs.readFileSync(`./temp/foto/David.jpeg`)
		pskr = `*SPESIAL THX REST API :*
➻ lolhuman
➻ onlydev
➻ api-self
➻ lindow
➻ xteam
➻ rull
➻ xinzbot
➻ anu-team
➻ alpin
➻ some-random-api
➻ zeks
➻ videfikri
➻ jojo`
Vid.sendMessage(from, tu1h, image, { quoted: freply, caption: pskr, contextInfo: { forwardingScore: 1000, isForwarded: true }}) 
                    break
case '!emojistik': 
case '!semoji':
                try {
                    if (args.length == 0) return reply(`Example: ${prefix + command} 😭`) 
                    emoji = args[0]
                    try {
                        emoji = encodeURI(emoji[0])
                    } catch {
                        emoji = encodeURI(emoji)
                    }
                    ini_url = await fetchJson(`https://api.lolhuman.xyz/api/smoji3/${emoji}?apikey=b170074ac846042f35937286`) 
                    ini_buffer = await getBuffer(`https://api.lolhuman.xyz/api/convert/towebpauthor?apikey=b170074ac846042f35937286&img=${ini_url.result.emoji.joypixels}&package=Hoshi Bot&author=hoshi Bot`)
                    Vid.sendMessage(from, ini_buffer, sticker, { quoted: mek }) 
                    } catch (e) {
						console.log(`Error :`, color(e,'red'))
						reply('❌ *ERROR* ❌')
					}
                    break
                   case '!setname':
				if (!arg) return reply(from, 'masukkan nama', mek)
				Vid.setName(arg)
				.then((res) => Vid.sendFakeStatus(from, JSON.stringify(res), fake))
				.catch((e) => Vid.sendFakeStatus(from, JSON.stringify(e), fake))
				break
				case '!apivhtear':
				Video =`1BlnApiIkyPake`
				Vid.sendMessage(from, Video, text,{ quoted: freply})
				break
               case '!terganteng':
					castlepur = []
					const gatn = groupMembers
					const te = groupMembers
					const ng = gatn[Math.floor(Math.random() * gatn.length)]
					teks = `Yang terganteng di grub ini adalah @${ng.jid.split('@')[0]}`
					castlepur.push(ng.jid)
					mentions(teks, castlepur, true)
					await limitAdd(sender)
					break	
//*****************ISLAM MENU************//
  case '!listsurah':
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/quran?apikey=${lolhumankey}`)
                    get_result = get_result.result
                    ini_txt = 'List Surah:\n'
                    for (var x in get_result) {
                        ini_txt += `${x}. ${get_result[x]}\n`
                    }
                    reply(ini_txt)
                    break
                case '!alquran':
                    if (args.length < 1) return reply(`Example: ${prefix + command} 18 or ${prefix + command} 18/10 or ${prefix + command} 18/1-10`)
                    urls = `http://api.lolhuman.xyz/api/quran/${args[0]}?apikey=${lolhumankey}`
                    quran = await fetchJson(urls)
                    result = quran.result
                    ayat = result.ayat
                    ini_txt = `QS. ${result.surah} : 1-${ayat.length}\n\n`
                    for (var x of ayat) {
                        arab = x.arab
                        nomor = x.ayat
                        latin = x.latin
                        indo = x.indonesia
                        ini_txt += `${arab}\n${nomor}. ${latin}\n${indo}\n\n`
                    }
                    ini_txt = ini_txt.replace(/<u>/g, "").replace(/<\/u>/g, "")
                    ini_txt = ini_txt.replace(/<strong>/g, "").replace(/<\/strong>/g, "")
                    ini_txt = ini_txt.replace(/<u>/g, "").replace(/<\/u>/g, "")
                    reply(ini_txt)
                    break
                                        case '!kepin2':
                    case '!pin1':
                    Su = fs.readFileSync(`./temp/foto/Kepin.jpeg`)
                    Fuck =`*Mo Top Up? Di Kevin Aee\n100%Amanah Kok*`
               Vid.sendMessage(from, Su, image, {contextInfo: {forwardingScore : 508, isForwarded: true}, quoted: fdavid, caption: Fuck})
					break
                case '!alquranaudio':
                    if (args.length == 0) return reply(`Example: ${prefix + command} 18 or ${prefix + command} 18/10`)
                    surah = args[0]
                    ini_buffer = await getBuffer(`http://api.lolhuman.xyz/api/quran/audio/${surah}?apikey=${lolhumankey}`)
                    Vid.sendMessage(from, ini_buffer, audio, { quoted: mek, mimetype: Mimetype.mp4Audio })
                    break
                case '!asmaulhusna':
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/asmaulhusna?apikey=${lolhumankey}`)
                    get_result = get_result.result
                    ini_txt = `No : ${get_result.index}\n`
                    ini_txt += `Latin: ${get_result.latin}\n`
                    ini_txt += `Arab : ${get_result.ar}\n`
                    ini_txt += `Indonesia : ${get_result.id}\n`
                    ini_txt += `English : ${get_result.en}`
                    reply(ini_txt)
                    break
                case '!kisahnabi':
                    if (args.length == 0) return reply(`Example: ${prefix + command} Muhammad`)
                    query = args.join(" ")
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/kisahnabi/${query}?apikey=${lolhumankey}`)
                    get_result = get_result.result
                    ini_txt = `Name : ${get_result.name}\n`
                    ini_txt += `Lahir : ${get_result.thn_kelahiran}\n`
                    ini_txt += `Umur : ${get_result.age}\n`
                    ini_txt += `Tempat : ${get_result.place}\n`
                    ini_txt += `Story : \n${get_result.story}`
                    reply(ini_txt)
                    break
                case '!jadwalsholat':
                    if (args.length == 0) return reply(`Example: ${prefix + command} Yogyakarta`)
                    daerah = args.join(" ")
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/sholat/${daerah}?apikey=${lolhumankey}`)
                    get_result = get_result.result
                    ini_txt = `Wilayah : ${get_result.wilayah}\n`
                    ini_txt += `Tanggal : ${get_result.tanggal}\n`
                    ini_txt += `Sahur : ${get_result.sahur}\n`
                    ini_txt += `Imsak : ${get_result.imsak}\n`
                    ini_txt += `Subuh : ${get_result.subuh}\n`
                    ini_txt += `Terbit : ${get_result.terbit}\n`
                    ini_txt += `Dhuha : ${get_result.dhuha}\n`
                    ini_txt += `Dzuhur : ${get_result.dzuhur}\n`
                    ini_txt += `Ashar : ${get_result.ashar}\n`
                    ini_txt += `Maghrib : ${get_result.imsak}\n`
                    ini_txt += `Isya : ${get_result.isya}`
                    reply(ini_txt)
                    break
			case '!kepin':
			case '!kevin':
			case '!Kevin':
			case '!Kepin':
			Sad2 = fs.readFileSync('temp/audio/Asek.mp3')
  Vid.sendMessage(from, Sad2, MessageType.audio, {quoted: freply, mimetype: 'audio/mp4', ptt:true})
break 
case '!David':
case '!vid':
case '!david':
 sad2 = fs.readFileSync('temp/audio/Asek.mp3')
Vid.sendMessage(from, sad2, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
					case '!map':
                anu = await fetchJson(`https://mnazria.herokuapp.com/api/maps?search=${body.slice(5)}`, {method: 'get'})
                buffer = await getBuffer(anu.gambar)
                Vid.sendMessage(from, buffer, image, {quoted: mek, caption: `${body.slice(5)}`})
					break
					    case '!text3d':
              	    if (args.length < 1) return reply('teksnya mana Tod?')
                    teks = `${body.slice(8)}`
                    if (teks.length > 10) return Vid.sendMessage(from, 'Teksnya kepanjangan Bambank', text, {quoted: mek})
                    buff = await getBuffer(`https://docs-jojo.herokuapp.com/api/text3d?text=${teks}`, {method: 'get'})
                    Vid.sendMessage(from, buff, image, {quoted: mek, caption: `${teks}`})
					break
					    case '!fototiktok': 
                    gatauda = body.slice(12)
                    anu = await fetchJson(`https://docs-jojo.herokuapp.com/api/tiktokpp?user=${gatauda}` , {method: 'get'})
			        buff = await getBuffer(anu.result)
                    reply(buff)
					break
					case '!sticker1':
					if (args.lenght < 1) return reply('Text Nya Mana Om')
					anu = await getBuffer(`https://visatrio.herokuapp.com/api/flamingtext/blackbird?text=${body.slice(10)}`)
					Vid.sendMessage(from, anu, sticker, {quoted: ftoko})
					break
					case '!ssweb':
					case '!sswebfull':
                    if (args.length < 1) return reply(`urlnya mana bruh?\ncontoh ${prefix + command} https://dapuhy-api.herokuapp.com`)
                    dap = args.join(" ")
                    reply('*Loading.....*\n*Sambil Nunggu Mending Minum Dulu*')
                    dapuhy = await getBuffer(`https://api.lolhuman.xyz/api/${command}?apikey=${LolHuman}&url=${dap}`)
                    Vid.sendMessage(from, dapuhy, image, {quoted: freply})
                    break
					case '!ssweb2':
					if (args.length < 1) return reply('Lah? Url nya Mana ?')
					teks = `${body.slice(8)}`
					anu = await fetchJson(`https://lolhuman.herokuapp.com/api/sswebfull?apikey=f6b8c949cd8101f16712507b&url=${teks}`)
					ssweb = await getBuffer(anu.gambar)
					Vid.sendMessage(from, ssweb, image, {quoted: freply})
					break 
					
			  
			  //********** SELF&PUBLIC **********//
			  case 'self':
			  if (!mek.key.fromMe) return reply('*Siapa Lu?*')
			    public = false
			    Vid.sendMessage(from, `\`\`\`Status : SELF\`\`\``, text,{quoted :freply})
			    break
			    
			  case 'public':
			    if (!mek.key.fromMe) return reply('*Siapa Lu?😼*')
			    public = true
			    Vid.sendMessage(from, `\`\`\`STATUS : MODE PUBLIC\`\`\``, text,{quoted :freply})
			    break
			    
			    case '!mute':
                if (!mek.key.fromMe) return reply('*Kamu Owner?*')
                Vid.modifyChat(from, ChatModification.mute, 24*60*60*1000)
                reply('*succes mute this chat*')
                console.log('succes mute chat = ' + from)
                break
                case '!Thanks':
				case '!thanks':
				case '!Tq':
				case '!tq':
				case '!Makasih':
				case '!makasih':
				case '!terimakasih':
				Wew =`*Sama-Sama Bangsat🙂*`
				Vid.sendMessage(from, Wew, text,{quoted : ftoko})
				break
            case '!unmute':
                if (!mek.key.fromMe) return reply('*Kamu Owner?*')
                Vid.modifyChat(from, ChatModification.unmute)
                reply('*succes unmute this chat*')
                console.log('succes unmute chat = ' + from)
                break
case '!tqtomenu':
wew = fs.readFileSync(`./temp/foto/Akira.jpeg`)
				Aw =`
┃❏╭─────────────────
┃❏│⊱❥ ALLAH SWT
┃❏│⊱❥ ORANG TUA
┃❏│⊱❥ ITSMAZGH
┃❏│⊱❥ BUILDTHECRAFT
┃❏│⊱❥ MEMANS
┃❏│⊱❥ YOGI PW
┃❏│⊱❥ DappaUhuy;
┃❏│⊱❥  BenyHidayat
┃❏│⊱❥ COGNITA VINZ
┃❏│⊱❥ KOTSUY
┃❏│⊱❥ IRWANS
┃❏│⊱❥ NABILA
┃❏│⊱❥ RAMLAN ID
┃❏│⊱❥ MIKU
┃❏│⊱❥ ANGGA
┃❏│⊱❥ MEIKY（ Guruku ）
┃❏│⊱❥ AFFIS（ Guruku ）
┃❏│⊱❥ ALL CREATOR BOT
┃❏╰─────────────────
╰══════════════════⊷❍`
                    Vid.sendMessage(from, wew, image, {contextInfo: {forwardingScore : 508, isForwarded: true}, quoted: freply, caption: Aw})
					break
                case '!slot2':
                    result = await fetchJson(`https://api.xteam.xyz/game/virtualslot?APIKEY=AkiraBotWa`)
                        txt = `*🎰Slot didapatkan🎰* \n\n${result.map}\n`
                        txt += `\n🔖Hasil : ${result.hasil}\n`
                        txt += `🕹️Score : ${result.score}\n`
                        reply(txt)
			    case '!unpin':
                if (!mek.key.fromMe) return reply('*Kamu Owner?*')
                Vid.modifyChat(from, ChatModification.unpin)
                reply('*succes unpin this chat*')
                console.log('unpin chat = ' + from)
                break
                case '!anime':
                wew = fs.readFileSync(`./media/zitsraa.jpeg`)
               Dream =`Hayu Bro`
               Vid.sendMessage(from, wew, image,{ quoted: ftoko, caption: Dream})
               break
                               case '!apikey':
                Vid =`╔═══[ *APIKEY BOT* ]
LolhumKey = save123 Kalo Abiss Beli Su
BarbarKey = IDxO1TFYnKADlX4pxcHa   
ZeksApi     = apivinz            
TobzKey    = Bidmzz1sJ2L1TKyqaMEU 
XteamKey  = AbilGanss`
               Vid.sendMessage(from, Vid, text,{ quoted: ftoko})
               break
                case '!bakarnama': 				
				if (args.length < 1) return reply(`Textnya Mana Cuy?\n*Contoh ${prefix}bakarnama DavidGanz*`)
				ct = body.slice(11)
				dapuhy = await getBuffer(`http://zekais-api.herokuapp.com/sbburn?text=${ct}`)
				Vid.sendMessage(from, dapuhy, image, { quoted: freply, caption: 'Nih Ngab' })
				break
//*****************BATAS BANG*************//
//****************AWAS************//
            case '!cantikcek':
					cantik = body.slice(1)
					const can =['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
					const tik = can[Math.floor(Math.random() * can.length)]
					Vid.sendMessage(from, 'Pertanyaan : *'+cantik+'*\n\nJawaban : '+ tik+'%', text, { quoted: freply })
					break
					       case '!gantengcek':
					ganteng = body.slice(1)
					const gan =['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
					const teng = gan[Math.floor(Math.random() * gan.length)]
					Vid.sendMessage(from, 'Pertanyaan : *'+ganteng+'*\n\nJawaban : '+ teng+'%', text, { quoted: mek })
					break
//************AWAS*************//
            case '!pin':
                if (!mek.key.fromMe) return reply('*Kamu Owner?*')
                Vid.modifyChat(from, ChatModification.pin)
                reply('*succes pin this chat*')
                console.log('pinned chat = ' + from)
                break
            case '!unreadall':
                if (!mek.key.fromMe) return reply('*Kamu Owner?*')
                var chats = await Vid.chats.all()
                chats.map( async ({ jid }) => {
                await Vid.chatRead(jid, 'unread')
                    })
		    var teks = `\`\`\`Successfully unread ${chats.length} chats !\`\`\``
		    await Vid.sendMessage(from, teks, text, {quoted: freply})
		    console.log(chats.length)
	        break
            case '!readall':
                if (!mek.key.fromMe) return reply('*Kamu Owner?*')
                var chats = await Vid.chats.all()
                chats.map( async ({ jid }) => {
                await Vid.chatRead(jid)
                })
		var teks = `\`\`\`Successfully read ${chats.length} chats !\`\`\``
	        await Vid.sendMessage(from, teks, text, {quoted: freply})
		console.log(chats.length)
		break
            case '!unarchiveall':
                if (!mek.key.fromMe) return reply('*Kamu Owner?*')
                reply('*succes unarchive all chat*')
                console.log('succes unarchive chat = ' + from)
                anu = await Vid.chats.all()
                for (let _ of anu) {
                Vid.modifyChat(_.jid, ChatModification.unarchive)
                }
                break
           case '!slot':
            const somtoy = sotoy[Math.floor(Math.random() * sotoy.length)]
            Vid.sendMessage(from, `[  🎰 | SLOTS ]\n-----------------\n🍋 : 🍌 : 🍍\n${somtoy}<=====\n🍋 : 🍌 : 🍍\n[  🎰 | SLOTS ]\n\nKeterangan : Jika anda Mendapatkan 3Buah Sama Berarti Kamu Win\n\nContoh : 🍌 : 🍌 : 🍌<=====`, text, { quoted: freply })
            break
            case '!spamsms':
                    if (args.length == 0) return reply(`Contoh: ${prefix + command} 62XXXXXXXXXXX`)
                    nomor = args[0]
                    await fetchJson(`http://api.lolhuman.xyz/api/sms/spam1?apikey=${lolhuman}&nomor=${nomor}`)
                    await fetchJson(`http://api.lolhuman.xyz/api/sms/spam2?apikey=${lolhuman}&nomor=${nomor}`)
                    await fetchJson(`http://api.lolhuman.xyz/api/sms/spam3?apikey=${lolhuman}&nomor=${nomor}`)
                    await fetchJson(`http://api.lolhuman.xyz/api/sms/spam4?apikey=${lolhuman}&nomor=${nomor}`)
                    await fetchJson(`http://api.lolhuman.xyz/api/sms/spam5?apikey=${lolhuman}&nomor=${nomor}`)
                    await fetchJson(`http://api.lolhuman.xyz/api/sms/spam6?apikey=${lolhuman}&nomor=${nomor}`)
                    await fetchJson(`http://api.lolhuman.xyz/api/sms/spam7?apikey=${lolhuman}&nomor=${nomor}`)
                    await fetchJson(`http://api.lolhuman.xyz/api/sms/spam8?apikey=${lolhuman}&nomor=${nomor}`)
                    reply("Success")
                    break
                    case '!kepin1':
                    wew = fs.readFile(`./temp/foto/Kepin.jpeg`)
                    Dah =`
Mo Top Up? Di Kepin Aee 
100% Amanah Kok`
Vid.sendMessage(from, wew, image,{ quoted: freply, caption: Dah})
break
            
            case '!archive':
                if (!mek.key.fromMe) return reply('*Kamu Owner?*')
                reply('*okey wait..*')
                console.log('succes archive chat = ' + from)
                await sleep(3000)
                Vid.modifyChat(from, ChatModification.archive)
                break
            case '!delthischat':
                if (!mek.key.fromMe) return reply('*Kamu Owner?*')
                reply('*succes delete this chat*')
                console.log('succes delete chat = ' + from)
                await sleep(4000)
                Vid.modifyChat(from, ChatModification.delete)
                break
                
                case '!shutdown':
                if (!mek.key.fromMe) return reply('*Kamu Owner?*')
	        await Vid.sendMessage(from, `Bye...\n_Rival off dulu yaa.._`, text,{quoted : freply})
		await sleep(3000)
                Vid.close()
		break
		
		case '!demoteall':
                members_id = []
		for (let mem of groupMembers) {
	   	members_id.push(mem.jid)
	  	}
                Vid.groupDemoteAdmin(from, members_id)
                break
                
           
			  //********** SETTING BOT **********//
			  case '!setleave':
			    if (args.length < 1) return reply('*Teks nya mana gan?*')
                    Vid.updatePresence(from, Presence.composing) 
					if (args.length < 1) return
					leave = body.slice(10)
					Vid.sendMessage(from,`\`\`\`Leave berhasil di ubah menjadi : ${body.slice(10)}\`\`\``, text,{quoted : freply})
				break 
				
				case '!setpromote':
				  if (args.length < 1) return reply('*Teks nya mana gan?*')
                    Vid.updatePresence(from, Presence.composing) 
					if (args.length < 1) return
					promote = body.slice(11)
					Vid.sendMessage(from,`\`\`\`Promote berhasil di ubah menjadi : ${body.slice(11)}\`\`\``, text,{quoted : freply})
				break 
				
					case '!setdemote':
					  if (args.length < 1) return reply('*Teks nya mana gan?*')
                    Vid.updatePresence(from, Presence.composing) 
					if (args.length < 1) return
					demote = body.slice(11)
					Vid.sendMessage(from ,`\`\`\`Demote berhasil di ubah menjadi : ${body.slice(11)}\`\`\``, text,{quoted : freply})
				break 
				
				case '!setbodymenu':
				  if (args.length < 1) return reply('*_CONTOH :_*\n\n  *   : *menu*\n  ~   : ~menu~\n  _ : _menu_\n ```   : ```menu```\n\n\n\n Contoh penggunaan : .setbodymenu *')
                    Vid.updatePresence(from, Presence.composing) 
					if (args.length < 1) return
					f = body.slice(13)
					Vid.sendMessage(from ,`\`\`\`Body menu berhasil di ubah menjadi : ${body.slice(13)}\`\`\``, text,{quoted : freply})
				break 
				
					case '!setwelcome':
					  if (args.length < 1) return reply('*Teks nya mana gan?*')
                    Vid.updatePresence(from, Presence.composing) 
					if (args.length < 1) return
					join = body.slice(11)
					Vid.sendMessage(from ,`\`\`\`Welcome berhasil di ubah menjadi : ${body.slice(11)}\`\`\``, text,{quoted : freply})
				break 
				
			  case '!setreply':
			    if (args.length < 1) return reply('*Teks nya mana gan?*')
                    Vid.updatePresence(from, Presence.composing) 
					if (args.length < 1) return
					fake = body.slice(10)
					Vid.sendMessage(from, `reply berhasil di ubah menjadi : ${fake}`,text,{quoted : freply})
				break 
				case '!setthumb':
				if (!isQuotedImage) return reply('Reply imagenya')
				svst = body.slice(8)
				boij = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
				delb = await Vid.downloadMediaMessage(boij)
				imagenye.push(`${svst}`)
				fs.writeFileSync(`./media/zitsraa.jpeg`, delb)
				fs.writeFileSync('./media/img.json', JSON.stringify(imagenye))
				Vid.sendMessage(from, `\`\`\`Sukses Mengganti Thumbnail\`\`\``, MessageType.text, { quoted: freply })
				break
				
				case '!getbio':
                var yy = mek.message.extendedTextMessage.contextInfo.mentionedJid[0]
                var p = await Vid.getStatus(`${yy}`, MessageType.text)
                reply(p.status)
                if (p.status == 401) {
                reply("Kagak Ada Bio Nya Om🐕")
                }
                break
				
				case '!getpic':
				if (mek.message.extendedTextMessage != undefined){
					mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
					try {
						pic = await Vid.getProfilePicture(mentioned[0])
					} catch {
						pic = 'https://i.ibb.co/Tq7d7TZ/age-hananta-495-photo.png'
					}
					thumb = await getBuffer(pic)
					Vid.sendMessage(from, thumb, MessageType.image)
				{quoted : freply}}
				break
				
				  case '!join':
                           if (!q) return reply('Masukan link group')
                           var codeInvite = body.slice(6).split('https://chat.whatsapp.com/')[1]
                           if (!codeInvite) return fakegroup ('pastikan link sudah benar!')
                           var response = await Vid.acceptInvite(codeInvite);
                           console.log(response);
                           break
                           
        //********** SYSTEM **********//
        case '!return':
                                case '!run':
                                        return fakegroup(JSON.stringify(eval(args.join(''))))
                                        break
			     case '.':
                        let code = args.join(" ")
                    try {
    
                    if (!code) return Vid.reply(from, 'No JavaScript Code', id)
                    let evaled;
    
                    if (code.includes("--silent") && code.includes("--async")) {
                    code = code.replace("--async", "").replace("--silent", "");
    
                    return await eval(`(async () => { ${code} })()`)
                    } else if (code.includes("--async")) {
                    code = code.replace("--async", "");
            
                    evaled = await eval(`(async () => { ${code} })()`);
                    } else if (code.includes("--silent")) {
                    code = code.replace("--silent", "");
            
                    return await eval(code);
                    } else evaled = await eval(code);
    
                  if (typeof evaled !== "string")
                evaled = require("util").inspect(evaled, { depth: 0 });
      
                let output = clean(evaled);
                var options = {
                    contextInfo: {
                        participant: '0@s.whatsapp.net',
                        quotedMessage: {
                            extendedTextMessage: {
                                text: "𝐄𝐗𝐄𝐂𝐔𝐓𝐎𝐑"
                            }
                        }
                    }
                }
                Vid.sendMessage(from, `${output}`, text, options)
                } catch(err) {
                console.error(err)
                reply(err)
                }
                function clean(text) {
                if (typeof text === "string")
                  return text
                    .replace(/`/g, `\`${String.fromCharCode(8203)}`)
                    .replace(/@/g, `@${String.fromCharCode(8203)}`);
                // eslint-disable-line prefer-template
                else return text;
                }
                break
                
             
				
				case '!blocklist':
				  case '!listblock':
					teks = 'This is list of blocked number :\n'
					for (let block of blocked) {
						teks += `┣❥  @${block.split('@')[0]}\n`
					}
					teks += `Total : ${blocked.length}`
					Vid.sendMessage(from, teks.trim(), extendedText, {quoted: mek, contextInfo: {"mentionedJid": blocked}})
					break
					
					//********** CONVERT **********//
					case '!exif':
	        if (!mek.key.fromMe) return reply('*Kamu Owner?*')
	        if (args.length < 1) return reply(`Penggunaan ${prefix}exif nama|autho`)
		if (!arg.split('|')) return reply(`Penggunaan ${prefix}exif nama|author`)
		    exif.create(arg.split('|')[0], arg.split('|')[1])
		    reply('sukses')
	        break
	        
	        case '!colong':
		if (!isQuotedSticker) return reply(`Reply sticker dengan caption *${prefix}colong*`)
		const encmediia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
	        const meidia = await Vid.downloadAndSaveMediaMessage(encmediia, `./sticker/${sender}`)
		    exec(`webpmux -set exif ./sticker/data.exif ./sticker/${sender}.webp -o ./sticker/${sender}.webp`, async (error) => {
		    if (error) return reply('error')
		    Vid.sendMessage(from, fs.readFileSync(`./sticker/${sender}.webp`), MessageType.sticker, {quoted: freply})
					fs.unlinkSync(media)
					fs.unlinkSync(`./sticker/takestick_${sender}.exif`)
				})
				break
	        
					case '!take':
					if (!isQuotedSticker) return reply(`Reply sticker dengan caption *${prefix}takestick nama|author*`)
					var pembawm = body.slice(6)
					var encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					var media = await Vid.downloadAndSaveMediaMessage(encmedia, `./sticker/${sender}`)
					var packname = pembawm.split('|')[0]
					var author = pembawm.split('|')[1]
					exif.create(packname, author, `takestick_${sender}`)
					exec(`webpmux -set exif ./sticker/takestick_${sender}.exif ./sticker/${sender}.webp -o ./sticker/${sender}.webp`, async (error) => {
					if (error) return reply('Error')
					Vid.sendMessage(from, fs.readFileSync(`./sticker/${sender}.webp`), MessageType.sticker, {quoted: freply})
					fs.unlinkSync(media)
					fs.unlinkSync(`./sticker/takestick_${sender}.exif`)
				})
				break
				
				case '!togif':
                                        if (!isQuotedSticker) return reply('Reply stiker nya')
                                        reply(mess.wait)
                                        if (mek.message.extendedTextMessage.contextInfo.quotedMessage.stickerMessage.isAnimated === true){
                                        const encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
                                        const media = await Vid.downloadAndSaveMediaMessage(encmedia)
                                        const upload = await uploadimg(media, Date.now() + '.webp')
                                        const rume = await axios.get(`http://nzcha-apii.herokuapp.com/webp-to-mp4?url=${upload.result.image}`)
                                        const buff = await getBuffer(rume.data.result)
                                        Vid.sendMessage(from, buff, video, { mimetype: Mimetype.gif, caption: 'Nih', quoted: freply})
                                }
                                break
				
				case '!tovideo':
                    if ((isMedia && !mek.message.videoMessage || isQuotedSticker)) {
                        const encmedia = isQuotedSticker ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
                        filePath = await Vid.downloadAndSaveMediaMessage(encmedia, filename = getRandom());
                        file_name = getRandom(".gif")
                        ini_txt = args.join(" ").split("|")
                        request({
                            url: `https://api.lolhuman.xyz/api/convert/togif?apikey=${Lolhuman}`,
                            method: 'POST',
                            formData: {
                                "img": fs.createReadStream(filePath),
                            },
                            encoding: "binary"
                        }, function(error, response, body) {
                            fs.unlinkSync(filePath)
                            fs.writeFileSync(file_name, body, "binary")
                            ini_buff = fs.readFileSync(file_name)
                            Vid.sendMessage(from, ini_buff, video, { quoted: freply, mimetype: "video/gif", filename: file_name }).then(() => {
                                fs.unlinkSync(file_name)
                            })
                        });
                    } else {
                        reply(`Kirim gambar dengan caption ${prefix + command} atau tag gambar yang sudah dikirim`)
                    }
                    break
					
					case '!fdeface':
					var nn = body.slice(9)
					var urlnye = nn.split("|")[0];
					var titlenye = nn.split("|")[1];
					var descnye = nn.split("|")[2];
					//imgbbb = require('imgbb-uploader')
					//run = getRandom('.jpeg')
					//encmedia = isQuotedImage ? JSON.parse(JSON.stringify(lol).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : lol
					//media = await lolteam.downloadAndSaveMediaMessage(encmedia)
					ddatae = await imageToBase64(JSON.stringify('./media/zitsraa.jpeg').replace(/\"/gi, ''))

					Vid.sendMessage(from, {

						text: `${urlnye}`,

						matchedText: `${urlnye}`,

						canonicalUrl: `${urlnye}`,

						description: `${descnye}`,

						title: `${titlenye}`,

						jpegThumbnail: ddatae
					}, 'extendedTextMessage', { detectLinks: false })
					break
					
					case '!nobg':
if ((isMedia && !mek.videoMessage || isQuotedImage)) {
    reply(mess.wait)
var encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace("quotedM", "m")).message.extendedTextMessage.contextInfo : mek
var media = await Vid.downloadAndSaveMediaMessage(encmedia)
anu = await imgbb("3ea1465ef91578a90ee81f7d41c59a1f", media)
getUrl = `${anu.display_url}`
buff = await getBuffer(`https://api.zeks.xyz/api/removebg?apikey=apivinz&url=${getUrl}`)
Vid.sendMessage(from, buff, image, {quoted: freply})
}
break
					
					case '!textmaker':
if ((isMedia && !mek.videoMessage || isQuotedImage)) {
var tex1 = body.slice(11).split('|')[0]
var tex2 = body.slice(11).split('|')[1]
if (!tex2) return reply('Format salah!')
    reply(mess.wait)
var encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace("quotedM", "m")).message.extendedTextMessage.contextInfo : mek
var media = await Vid.downloadAndSaveMediaMessage(encmedia)
anu = await imgbb("3ea1465ef91578a90ee81f7d41c59a1f", media)
getUrl = `${anu.display_url}`
buff = await getBuffer(`http://lolhuman.herokuapp.com/api/memegen?apikey=${Lolhuman}&texttop=${tex1}&textbottom=${tex2}&img=${getUrl}`)
Vid.sendMessage(from, buff, image, {quoted: freply})
}
break
					
case '!attp':
				if (args.length < 1) return reply(`_Teksnya Mana Boss_\n*Contoh ${prefix}attp Vid Ganteng*`)
				attp2 = await getBuffer(`https://api.xteam.xyz/attp?file&text=${body.slice(6)}`)
				Vid.sendMessage(from, attp2, sticker, {quoted: freply})
				break
				
		case '!ttp':
				if (args.length < 1) return reply(`_Teksnya Mana Boss_\n*Contoh ${prefix}ttp Vid Ganteng*`)
				ttp = await getBuffer(`https://api.xteam.xyz/ttp?file&text=${body.slice(5)}`)
				Vid.sendMessage(from, ttp, sticker, {quoted: freply})
				break
					case '!tiktoknowm':
                if (args.length < 1) return reply('Urlnya mana sayang?')
                if (!isUrl(args[0]) && !args[0].includes('tiktok.com')) return reply(mess.error.lv)
                ige = body.slice(12)
                anu = await fetchJson(`http://lolhuman.herokuapp.com/api/tiktok?apikey=${lolhuman}&url=${args[0]}`, { method: 'get' })
                reply('*Proses Dulu Sabar*')
                if (anu.error) return reply(anu.error)
                buffer = await getBuffer(anu.result.link)
                Vid.sendMessage(from, buffer, video, {quoted: freply, caption: 'Nih cuk, Sewa Bot Asu'})
                break
            case '!tiktod':
            case '!tiktok':
                if (args.length < 1) return reply('Urlnya mana um?')
                if (!isUrl(args[0]) && !args[0].includes('youtu')) return reply('URL NYA TIDAK VALID KAK')
                anu = await fetchJson(`https://api.xteam.xyz/dl/tiktok?url=${args[0]}&APIKEY=${XteamKey}`, )
                reply('[WAIT] Proses Dumlu Yakan')
                buffer = await getBuffer(anu.result.video)
                Vid.sendMessage(from, buffer, video, { mimetype: 'video/mp4', quoted: freply })
                break
                case '!nulis2':
            case '!tulis2':
                if (args.length < 1) return reply('Teksnya mana kak? Contoh : ${prefix}nulis2 IKY baik hati')
                laysha = body.slice(8)
                reply('WAIT BRO GUE NULIS DUMLU YAKAN')
                buff = await getBuffer(`https://api.xteam.xyz/magernulis3?text=${laysha}&APIKEY=${XteamKey}`)
                Vid.sendMessage(from, buff, image, { quoted: freply, caption: 'Lebih baik nulis sendiri ya kak :*' })
                break
            case '!nulis1':
            case '!tulis1':
                if (args.length < 1) return reply('Teksnya mana kak? Contoh : ${prefix}nulis2 ITS baik hati')
                laysha = body.slice(8)
                reply('WAIT BRO GUE NULIS DUMLU YAKAN')
                buff = await getBuffer(`https://api.xteam.xyz/magernulis6?text=${laysha}&APIKEY=${XteamKey}`)
                Vid.sendMessage(from, buff, image, { quoted: freply, caption: 'Lebih baik nulis sendiri ya kak :*' })
                break
                case '!tebakbendera':
					anu = await fetchJson(`http://lolhuman.herokuapp.com/api/tebak/bendera?apikey=${Lolhuman}`, {method: 'get'})
					tebakbender = `*bendera apa ini?*\n${anu.result}`
					setTimeout( () => {
					Vid.sendMessage(from, '*Jawaban :* '+anu.result.name, text, {quoted: freply}) // ur cods
					}, 30000) // 1000 = 1s,
					setTimeout( () => {
					Vid.sendMessage(from, '_10 Detik lagi_', text) // ur cods
					}, 20000) // 1000 = 1s,
					setTimeout( () => {
					Vid.sendMessage(from, '_20 Detik lagi_', text) // ur cods
					}, 10000) // 1000 = 1s,
					setTimeout( () => {
					Vid.sendMessage(from, '_30 Detik lagi_', text) // ur cods
					}, 2500) // 1000 = 1s,
					setTimeout( () => {
					Vid.sendMessage(from, tebakbender, text, {quoted: freply}) // ur cods
					}, 0) // 1000 = 1s,
					break 
				
					case '!jalantikus':
				anu = await fetchJson(`https://pencarikode.xyz/news/jalantikus?apikey=pais`)
				buffer = await getBuffer(anu.result[0].thumb)
              teks = '*JALAN TIKUS*\n'
				for (let i of anu.result) 
			teks += `*JUDUL* : ${i.title}\n
 🔗 Link : ${i.link}\n`
Vid.sendMessage(from, buffer, image,{quoted: freply, caption: teks.trim()})
break
case '!stalkgithub':
case '!githubstalk':
anu = await fetchJson(`https://pencarikode.xyz/stalk/github?q=${body.slice(12)}&apikey=pais`)
tks = '*GITHUB STALK*'
for (let i of anu.result)
tks += `*USERNAME :* ${i.username}\n
*ID* : ${i.id}\n
*URL* : ${i.url}\n
*TYPE* : ${i.type}\n
*SITE ADMIN* : ${i.site_admin}\n
*BLOG* : ${i.blog}\n
*BIO* : ${i.bio}\n`
Vid.sendMessage(from, tks, teks,{ quoted: freply})
break
                case '!tebakgambar':
					anu = await fetchJson(`https://api.zeks.xyz/api/tebakgambar?apikey=apivinz`)
					bufferkkk = await getBuffer(anu.result.image)
					setTimeout( () => {
					Vid.sendMessage(from, '*Jawaban :* '+anu.result.answer, text, {quoted: freply}) // ur cods
					}, 30000) // 1000 = 1s,
					setTimeout( () => {
					Vid.sendMessage(from, '_10 Detik lagi_', text) // ur cods
					}, 20000) // 1000 = 1s,
					setTimeout( () => {
					Vid.sendMessage(from, '_20 Detik lagi_', text) // ur cods
					}, 10000) // 1000 = 1s,
					setTimeout( () => {
					Vid.sendMessage(from, '_30 Detik lagi_', text) // ur cods
					}, 2500) // 1000 = 1s,
					setTimeout( () => {
					Vid.sendMessage(from, bufferkkk, image, { caption: '_Jelaskan Apa Maksud Gambar Ini_', quoted: freply}) // ur cods
					}, 0) // 1000 = 1s,
					break  
				case 'family100':
					anu = await fetchJson(`http://api.lolhuman.xyz/api/tebak/family100?apikey=${Lolhuman}`, {method: 'get'})
					family = `*${anu.result.question}*`
					setTimeout( () => {
					Vid.sendMessage(from, '*Jawaban :* '+anu.result.aswer, text, {quoted: freply}) // ur cods
					}, 30000) // 1000 = 1s,
					setTimeout( () => {
					Vid.sendMessage(from, '_10 Detik lagi_', text) // ur cods
					}, 20000) // 1000 = 1s,
					setTimeout( () => {
					Vid.sendMessage(from, '_20 Detik lagi_', text) // ur cods
					}, 10000) // 1000 = 1s,
					setTimeout( () => {
					Vid.sendMessage(from, '_30 Detik lagi_', text) // ur cods
					}, 2500) // 1000 = 1s,
					setTimeout( () => {
					Vid.sendMessage(from, family, text, {quoted: lol}) // ur cods
					}, 0) // 1000 = 1s,
					break
					case '!caklontong':
					anu = await fetchJson(`http://api.lolhuman.xyz/api/tebak/caklontong?apikey=${Lolhuman}`, {method: 'get'})
					caklontong = `*${anu.result.question}*`
					setTimeout( () => {
					Vid.sendMessage(from, '*Jawaban :* '+anu.result.answer, text, {quoted: freply}) // ur cods
					}, 30000) // 1000 = 1s,
					setTimeout( () => {
					Vid.sendMessage(from, '_10 Detik lagi_', text) // ur cods
					}, 20000) // 1000 = 1s,
					setTimeout( () => {
					Vid.sendMessage(from, '_20 Detik lagi_', text) // ur cods
					}, 10000) // 1000 = 1s,
					setTimeout( () => {
					Vid.sendMessage(from, '_30 Detik lagi_', text) // ur cods
					}, 2500) // 1000 = 1s,
					setTimeout( () => {
					Vid.sendMessage(from, caklontong, text, {quoted: freply}) // ur cods
					}, 0) // 1000 = 1s,
					break 
					case '!asupan':
                    buffer = await getBuffer(`https://pencarikode.xyz/api/asupan?apikey=pais`)
                    Vid.sendMessage(from, buffer, video, { quoted: mek, mimetype: Mimetype.mp4, filename: "asupan.mp4" }) 
                    break
					case '!meme': 
				buffer = await getBuffer(`http://lolhuman.herokuapp.com/api/random/meme?apikey=${Lolhuman}`, {method: 'get'})
				Vid.sendMessage(from, buffer, image, {quoted: ftoko})
                break
                                case '!darkneon':
                case '!candlemug':
                case '!lovemsg':
                case '!mugflower':
                case '!narutobanner':
                case '!paperonglass':
                case '!romancetext':
                case '!shadowtext':
                case '!coffeecup':
                case '!coffeecup2':
                case '!glowingneon':
                case '!underwater':
                case '!hpotter':
                case '!woodblock':
                    if (args.length == 0) return reply(`Format Salah ${prefix + command} text\nKek Gini Bambang: ${prefix + command}David/Dream Bot`)
                    txt = args.join(" ")
                    buffer = await getBuffer(`https://videfikri.com/api/textmaker/${command}/?text=${txt}`)
                    Vid.sendMessage(from, buffer, image, {caption: 'Nih kak.. Jan Lupa Puasa*', quoted: freply})
                break
                
                    case '!stickerwa':
                    if (args.length == 0) return reply(`Example: ${prefix + command} Koceng Imot`)
                    query = args.join(" ")
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/stickerwa?apikey=${Lolhuman}&query=${query}`)
                    get_result = get_result.result[0].stickers
                    for (var x of get_result) {
                        ini_buffer = await getBuffer(`http://api.lolhuman.xyz/api/convert/towebp?apikey=${Lolhuman}&img=${x}`)
                        Vid.sendMessage(from, ini_buffer, sticker)
                    }
                    break
                    
                    case '!rs':
                      case '!rsticker':
                    if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
                        const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : lol
                        filePath = await Vid.downloadAndSaveMediaMessage(encmedia)
                        file_name = getRandom('.webp')
                        request({
                            url: `https://api.lolhuman.xyz/api/convert/towebpwround?apikey=${Lolhuman}`,
                            method: 'POST',
                            formData: {
                                "img": fs.createReadStream(filePath)
                            },
                            encoding: "binary"
                        }, function(error, response, body) {
                            fs.unlinkSync(filePath)
                            fs.writeFileSync(file_name, body, "binary")
                            ini_buff = fs.readFileSync(file_name)
                            Vid.sendMessage(from, ini_buff, sticker, { quoted: freply}).then(() => {
                                fs.unlinkSync(file_name)
                            })
                        });
                    } else {
                        reply(`Kirim gambar dengan caption ${prefix}sticker atau tag gambar yang sudah dikirim`)
                    }
                    break
                    
                    case '!swm':
                    case '!stickerwm':
                    if ((isMedia && !mek.message.videoMessage || isQuotedImage)) {
                        if (args.length == 0) return reply(`Example: ${prefix + command} Vid|Rapayee`)
                        const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : lol
                        filePath = await Vid.downloadAndSaveMediaMessage(encmedia, filename = getRandom());
                        file_name = getRandom(".webp")
                        ini_txt = args.join(" ").split("|")
                        request({
                            url: `https://api.lolhuman.xyz/api/convert/towebpauthor?apikey=${Lolhuman}`,
                            method: 'POST',
                            formData: {
                                "img": fs.createReadStream(filePath),
                                "package": ini_txt[0],
                                "author": ini_txt[1]
                            },
                            encoding: "binary"
                        }, function(error, response, body) {
                            fs.unlinkSync(filePath)
                            fs.writeFileSync(file_name, body, "binary")
                            ini_buff = fs.readFileSync(file_name)
                            Vid.sendMessage(from, ini_buff, sticker, { quoted: freply }).then(() => {
                                fs.unlinkSync(file_name)
                            })
                        });
                    } else {
                        reply(`Kirim gambar dengan caption ${prefix + command} atau tag gambar yang sudah dikirim`)
                    }
                    break
                    
		             case 'stickergif':
			case 'stikergif':
			case 'sgif':
			case 'stiker': 
			case 'sticker':
			case 's':
                 if (!isRegistered) return reply( ind.noregis())
				reply('*Loading.. Sedang membuat sticker*')
					await limitAdd(sender)
					if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						const media = await Vid.downloadAndSaveMediaMessage(encmedia)
						ran = getRandom('.webp')
						await ffmpeg(`./${media}`)
							.input(media)
							.on('start', function (cmd) {
								console.log(`Started : ${cmd}`)
							})
							.on('error', function (err) {
								console.log(`Error : ${err}`)
								fs.unlinkSync(media)
								reply(ind.stikga())
							})
							.on('end', function () {
								console.log('Finish')
								buffer = fs.readFileSync(ran)
								Vid.sendMessage(from, buffer, sticker, {quoted: mek})
								fs.unlinkSync(media)
								fs.unlinkSync(ran)
							})
							.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
							.toFormat('webp')
							.save(ran)
					} else if ((isMedia && mek.message.videoMessage.seconds < 11 || isQuotedVideo && mek.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.seconds < 11) && args.length == 0) {
						const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						const media = await Vid.downloadAndSaveMediaMessage(encmedia)
						ran = getRandom('.webp')
						reply(ind.wait())
						await ffmpeg(`./${media}`)
							.inputFormat(media.split('.')[1])
							.on('start', function (cmd) {
								console.log(`Started : ${cmd}`)
							})
							.on('error', function (err) {
								console.log(`Error : ${err}`)
								fs.unlinkSync(media)
								tipe = media.endsWith('.mp4') ? 'video' : 'gif'
								reply(ind.stikga())
							})
							.on('end', function () {
								console.log('Finish')
								buffer = fs.readFileSync(ran)
								Vid.sendMessage(from, buffer, sticker, {quoted: freply})
								fs.unlinkSync(media)
								fs.unlinkSync(ran)
							})
							.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
							.toFormat('webp')
							.save(ran)
							} else {
						reply(`Kirim gambar dengan caption ${prefix}!sticker atau reply/tag gambar`)
					}
			    break
					
					case '!toimg':
					if (!isQuotedSticker) return reply(' reply stickernya gan')
					encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await Vid.downloadAndSaveMediaMessage(encmedia)
					ran= getRandom('.png')
					exec(`ffmpeg -i ${media} ${ran}`, (err) => {
						fs.unlinkSync(media)
						if (err) return reply(' Gagal, pada saat mengkonversi sticker ke gambar ')
						buffer = fs.readFileSync(ran)
						Vid.sendMessage(from, buffer, image, {quoted: freply, caption: fake})
						fs.unlinkSync(ran)
					})
					
					case '!ram':
					  const chatsIds = await Vid.chats.all()
                const timestamp = speed();
                const latensi = speed() - timestamp 
                p0 =` \`\`\`Loaded Message\`\`\`
                
\`\`\` - [ ${totalchat.length} ]  Total Chat\`\`\`
\`\`\` - [ REALME 5i ] HANDPHONE\`\`\`
\`\`\` - [ ${Vid.user.phone.wa_version} ] WA Version\`\`\`
\`\`\` - [ Baileys ] Server\`\`\`
\`\`\` - [ SELF ] MODE\`\`\`
\`\`\` - [ ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / 4095 ] RAM\`\`\`

\`\`\`Speed : ${latensi.toFixed(4)} Second\`\`\``
                Vid.sendMessage(from, p0, text, { quoted: freply})
                    break
                    
					case '!runtime':
uptime = process.uptime()
const timestampi = speed();
const latensip = speed() - timestampi
			             anjink =`◪ *RUNTIME*𝘁𝗶𝗺𝗲
║┣➻ *Nama bot : DREAM BOT*
┃│❍➣ Author : David
║┣➻ *Server :* _*Baileys*_
║┣➻ *Runtime :*
║┣➻   \`\`\`${kyun(uptime)}\`\`\`
║┣➻ *Speed :*
║┣➻   \`\`\`${latensip.toFixed(4)} Second\`\`\`
╚════════════════`
			             Vid.sendMessage(from, anjink, text,{quoted : freply})
			           break
			           
			           case '!term': 
case 'exec':
const cmyd = body.slice(6)
var itsme = `0@s.whatsapp.net`
var split = `*EXECUTOR SELF BOT*`
const term = {
contextInfo: {
participant: itsme,
quotedMessage: {
extendedTextMessage: {
text: split,
}
}
}
}
exec(cmyd, (err, stdout) => {
if (err) return Vid.sendMessage(from, ` ${err}`, text, { quoted: mek })
if (stdout) {
Vid.sendMessage(from, stdout, text, term)
}
})
break

					  //********** Funny COMMAND **********//
					  
					  case '!kontak':
                        entah = args[0]
                        disname = args[1]
                        if (isNaN(entah)) return reply('Invalid phone number'.toUpperCase());
                        vcard = 'BEGIN:VCARD\n'
                                  + 'VERSION:3.0\n'
                                  + `FN:${disname}\n`
                                  + `TEL;type=CELL;type=VOICE;waid=${entah}:${phoneNum('+' + entah).getNumber('internasional')}\n`
                                  + 'END:VCARD'.trim()
                            Vid.sendMessage(from, {displayName: disname, vcard: vcard}, contact)
                            break
                            
			     case '!kontag':
					var bv = body.slice(8)
					var jl = `${bv}`
					if (args[0] === '') {
					var jl = `*CONTACT TAG*`
					}
					var group = await Vid.groupMetadata(from)
					   var member = group['participants']
					   var mem = []
					   member.map(async adm => {
					   mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
					   })
					const vcardtag = 'BEGIN:VCARD\n'
					            + 'VERSION:3.0\n'
					            + `FN:${body.slice(8)}\n`
					            + 'ORG:Creator SELF BOT;\n'
					            + `TEL;type=CELL;type=VOICE;waid=${Vid.user.jid.split('@')[0]}:${Vid.user.jid.split('@')[0]}\n`
					            + 'END:VCARD'
            				Vid.sendMessage(from, {displayname: mem, vcard: vcardtag}, MessageType.contact, { quoted: mek, contextInfo: {mentionedJid: mem}, quoted: {
					key: {
						participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {})
					},
					message: {
						"imageMessage": {
							"url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc",
							"mimetype": "image/jpeg",
							"caption": jl,
							"fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=",
							"fileLength": "28777",
							"height": 1080,
							"width": 1079,
							"mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=",
							"fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=",
							"directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69",
							"mediaKeyTimestamp": "1610993486",
							"jpegThumbnail": fs.readFileSync('./media/zitsraa.jpeg'),
							"scansSidecar": "1W0XhfaAcDwc7xh1R8lca6Qg/1bB4naFCSngM2LKO2NoP5RI7K+zLw=="
							}
							}
							}
							})
        break
        
        case '!hidetag':
					if (!isGroup) return reply(mess.only.group)
					var value = body.slice(9)
					var group = await Vid.groupMetadata(from)
					var member = group['participants']
					var mem = []
					member.map( async adm => {
					mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
					})
					var options = {
					text: value,
					contextInfo: { mentionedJid: mem },
					quoted: freply
					}
					Vid.sendMessage(from, options, text,{quoted : freply})
					break
					
					  
					
			           case '!stctag':
                                        if (!isQuotedSticker) return reply('Ini sticker?')
                                        boij = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
                                        delb = await Vid.downloadMediaMessage(boij)
                                        await fs.writeFileSync(`stctagg.webp`, delb)
                                        var group = await Vid.groupMetadata(from)
                                        var member = group['participants']
                                        var mem = []
                                        member.map(async adm => {
                                                mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
                                        })
					var itsme = `0@s.whatsapp.net`
					var split = `${body.slice(8)}`
					var selepbot = {
						contextInfo: {
							mentionedJid: mem,
                                                        participant: itsme,                                                                                                                          quotedMessage: {
                                                                extendedTextMessage: {
                                                                text: split,
							   }
					      	      }
					       }
					}
					result = fs.readFileSync(`stctagg.webp`)
                                        Vid.sendMessage(from, result, sticker, selepbot)
					await fs.unlinkSync(`stctagg.webp`)
					break
					
					case '!imgtag':
                    if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
                        const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : lol
                        filePath = await Vid.downloadAndSaveMediaMessage(encmedia, filename = getRandom())
                        var value = args.join(" ")
                        var group = await Vid.groupMetadata(from)
                        var member = group['participants']
                        var mem = []
                        member.map(async adm => {
                            mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
                        })
                        var options = {
                            contextInfo: { mentionedJid: mem },
                            quoted: freply
                        }
                        ini_buffer = fs.readFileSync(filePath)
                        Vid.sendMessage(from, ini_buffer, image, options)
                        fs.unlinkSync(filePath)
                    } else {
                        reply(`Tag image yang sudah dikirim`)
                    }
                    break
                    
                    case '!owner':
                 Vid.sendMessage(from, {displayname: "jeff", vcard: vcard}, MessageType.contact, { quoted: freply})
                  Vid.sendMessage(from, {displayname: "jeff", vcard: vcard2}, MessageType.contact, { quoted: freply})
                 Vid.sendMessage(from, 'Tuh Nomer Owner Ku. Kalo Suka Bilang Aja :)',text, { quoted: mek} )
                 break
 
        
    			  //********** ONLY GROUP **********//
        case '!linkgroup':
				case '!linkgrup':
				case '!linkgc':
				    if (!isGroup) return reply(mess.only.group)
				    if (!isBotGroupAdmins) return reply(mess.only.Badmin)
				    linkgc = await Vid.groupInviteCode (from)
				    yeh = `https://chat.whatsapp.com/${linkgc}\n\nlink Group *${groupName}*`
				    Vid.sendMessage(from, yeh, text, {quoted: freply})
			        break
			        
        case '!grup':
					case '!gc':
					case '!group':
					if (!isGroup) return reply(mess.only.group)
					if (!isBotGroupAdmins) return reply(mess.only.Badmin)
					if (args[0] === 'buka') {
					    reply(`\`\`\`✓Sukses Membuka Group\`\`\` *${groupMetadata.subject}*`)
						Vid.groupSettingChange(from, GroupSettingChange.messageSend, false)
					} else if (args[0] === 'tutup') {
						reply(`\`\`\`✓Sukses Menutup Group\`\`\` *${groupMetadata.subject}*`)
						Vid.groupSettingChange(from, GroupSettingChange.messageSend, true)
					}
					break
					
					case '!chatlist':
				case '!cekchat':
					Vid.updatePresence(from, Presence.composing)
					Vid.sendMessage(from, `Total : ${totalchat.length} Chat`, text, {quoted  : freply})
					break
					
					case '!demote':
			      case '!dm' : 
			    if (!isGroup) return reply(mess.only.group)
					if (!isBotGroupAdmins) return reply(mess.only.Badmin)
					if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('Tag target yang ingin di tidak jadi admin!')
					mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
					if (mentioned.length > 1) {
						teks = 'Perintah di terima, anda tidak menjadi admin :\n'
						for (let _ of mentioned) {
							teks += `@${_.split('@')[0]}\n`
						}
						mentions(teks, mentioned, true)
						Vid.groupDemoteAdmin(from, mentioned)
					} else {
						mentions(`Perintah di terima, Menurunkan : @${mentioned[0].split('@')[0]} Menjadi Member`, mentioned, true)
						Vid.groupDemoteAdmin(from, mentioned)
					}
					break
					
				case '!listadmins':
				case '!listadmin':
				case '!adminlist':
				case '!adminslist':
					if (!isGroup) return reply(mess.only.group)
					teks = `List admin of group *${groupMetadata.subject}*\nTotal : ${groupAdmins.length}\n\n`
					no = 0
					for (let admon of groupAdmins) {
						no += 1
						teks += `[${no.toString()}] @${admon.split('@')[0]}\n`
					}
					mentions(teks, groupAdmins, true)
					break
					
					case '!promote':
				case '!pm':
					if (!isGroup) return reply(mess.only.group)
					if (!isBotGroupAdmins) return reply(mess.only.Badmin)
					if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('Tag target yang ingin di jadi admin!')
					mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
					if (mentioned.length > 1) {
						teks = 'Perintah di terima, anda menjdi admin :\n'
						for (let _ of mentioned) {
							teks += `@${_.split('@')[0]}\n`
						}
						mentions(teks, mentioned, true)
						Vid.groupMakeAdmin(from, mentioned)
					} else {
						mentions(`Perintah di terima, @${mentioned[0].split('@')[0]} Kamu Menjadi Admin Di Group *${groupMetadata.subject}*`, mentioned, true)
						Vid.groupMakeAdmin(from, mentioned)
					}
					break
					
					case '!welcome':
					if (!isGroup) return reply(mess.only.group)
					if (args.length < 1) return reply('Hmmmm')
					if (Number(args[0]) === 1) {
						if (isWelkom) return reply('Udah aktif um')
						welkom.push(from)
						fs.writeFileSync('./src/welkom.json', JSON.stringify(welkom))
						reply('*Sukses mengaktifkan fitur welcome di group ini*😊️')
					} else if (Number(args[0]) === 0) {
						welkom.splice(from, 1)
						fs.writeFileSync('./src/welkom.json', JSON.stringify(welkom))
						reply('Sukses menonaktifkan fitur welcome di group ini ✔')
					} else {
						reply('1 untuk mengaktifkan, 0 untuk menonaktifkan')
					}
                    break
                    
					case '!add':
					if (!isGroup) return reply(mess.only.group)
					if (!isBotGroupAdmins) return reply(mess.only.Badmin)
					if (args.length < 1) return reply('Yang mau di add siapa??')
					if (args[0].startsWith('08')) return reply('Gunakan kode negara Gan')
					try {
						num = `${args[0].replace(/ /g, '')}@s.whatsapp.net`
						Vid.groupAdd(from, [num])
					} catch (e) {
						console.log('Error :', e)
						reply('Gagal menambahkan target, mungkin karena di private')
					}
					break
				case '!edotensei':
			    case '!kick':
					if (!isGroup) return reply(mess.only.group)
					if (!isBotGroupAdmins) return reply(mess.only.Badmin)
					if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('Tag target yang ingin di tendang!')
					mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
					if (mentioned.length > 1) {
						teks = '*PERINTAH DI TERIMA, BOT AKAN KICK BEBAN GC* :\n'
						for (let _ of mentioned) {
							teks += `@${_.split('@')[0]}\n`
						}
						mentions(teks, mentioned, true)
						Vid.groupRemove(from, mentioned)
					} else {
						mentions(`Perintah di terima, mengeluarkan : @${mentioned[0].split('@')[0]}`, mentioned, true)
						Vid.groupRemove(from, mentioned)
					}
					break 
					
										case '!online':
										  case '!listonline':
                if (!isGroup) return reply(`Only group`)
                let ido = args && /\d+\-\d+@g.us/.test(args[0]) ? args[0] : from
                let online = [...Object.keys(Vid.chats.get(ido).presences), Vid.user.jid]
                Vid.sendMessage(from, 'List Online:\n' + online.map(v => '- @' + v.replace(/@.+/, '')).join `\n`, text, {
                    quoted: freply,
                    contextInfo: { mentionedJid: online }
                })
                break
                
                case '!infoall':
					if (!isGroup) return reply(mess.only.group)
					var nom = mek.participant
					members_id = []
					teks = '\n'
					for (let mem of groupMembers) {
						teks += `┣❥   @${mem.jid.split('@')[0]}\n`
						members_id.push(mem.jid)
					}
					mentions(`*From :* - [ 𝙎𝙀??𝙁 𝘽𝙊𝙏 ] -\n*Info :*  ${body.slice(9)}\n*Total Member :* ${groupMembers.length} \n\n┏━━━⟪ *INFORMATION* ⟫━━━┓`+teks+'╚═ *「 DREAM BOT 」* ', members_id, true)
					break
					
					case '!edotensei':
					  case '!edotense':
					if (!isBotGroupAdmins) return reply(mess.only.Badmin)
					if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('Tag target yang ingin di edotense!')
					mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
					if (mentioned.length > 1) {
						teks = 'Perintah di terima, edotense :\n'
						for (let _ of mentioned) {
							teks += `@${_.split('@')[0]}\n`
						}
						mentions(teks, mentioned, true)
						Vid.groupRemove(from, mentioned)
					} else {
						mentions(`Perintah di terima, edotense : @${mentioned[0].split('@')[0]}`, mentioned, true)
						Vid.groupRemove(from, mentioned)
					}
					break
					
					case '!notif':
if (!isGroup) return reply(mess.only.group)
teks = `Notif dari @${sender.split("@")[0]}\n*Pesan : ${body.slice(7)}*`
group = await Vid.groupMetadata(from);
member = group['participants']
jids = [];
member.map(async adm => {
  jids.push(adm.id.replace('c.us', 's.whatsapp.net'));
})
options = {
  text: teks,
  contextInfo: {
mentionedJid: jids
  },
  quoted: freply
}
await Vid.sendMessage(from, options, text)
break
      case '!leave': 
				    if (!isGroup) return reply(mess.only.group)
			    	anu = await Vid.groupLeave(from, `Bye All Member *${groupMetadata.subject}*`, groupId)
	                break



				
					  //********** STORAGE **********//
case '!addstik':
				if (!isQuotedSticker) return reply('Reply stiker nya')
				svst = body.slice(9)
				if (!svst) return reply('Nama sticker nya apa?')
				boij = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
				delb = await Vid.downloadMediaMessage(boij)
				setiker.push(`${svst}`)
				fs.writeFileSync(`./temp/stick/${svst}.webp`, delb)
				fs.writeFileSync('./temp/stik.json', JSON.stringify(setiker))
				Vid.sendMessage(from, `Sukses Menambahkan Sticker\nCek dengan cara ${prefix}liststik`, MessageType.text, { quoted: freply })
				break
				
case '!getstik':
				namastc = body.slice(9)
				try {
				result = fs.readFileSync(`./temp/stick/${namastc}.webp`)
				Vid.sendMessage(from, result, sticker,{quoted:freply})
				} catch {
				  reply('Pack tidak terdaftar')
				}
				break
			
			case '!liststik':
				teks = '*Sticker list :*\n\n'
				for (let awokwkwk of setiker) {
					teks += `- ${awokwkwk}\n`
				}
				teks += `\n*Total : ${setiker.length}*`
				Vid.sendMessage(from, teks.trim(), extendedText, { quoted: freply, contextInfo: { "mentionedJid": setiker } })
				break
				
				case '!addimg':
				if (!isQuotedImage) return reply('Reply imagenya')
				svst = body.slice(8)
				if (!svst) return reply('Nama imagenya apa')
				boij = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
				delb = await Vid.downloadMediaMessage(boij)
				imagenye.push(`${svst}`)
				fs.writeFileSync(`./temp/foto/${svst}.jpeg`, delb)
				fs.writeFileSync('./temp/image.json', JSON.stringify(imagenye))
				Vid.sendMessage(from, `Sukses Menambahkan image\nCek dengan cara ${prefix}listimg`, MessageType.text, { quoted: freply })
				break

			case '!getimg':
				namastc = body.slice(8)
				try {
				buffer = fs.readFileSync(`./temp/foto/${namastc}.jpeg`)
				Vid.sendMessage(from, buffer, image, { quoted: freply, caption: `Result From Database : ${namastc}.jpeg` })
				} catch {
				  reply('Pack tidak terdaftar')
				}
				break
				case '!listimg':
				teks = '*Image list :*\n\n'
				for (let awokwkwk of imagenye) {
					teks += `- ${awokwkwk}\n`
				}
				teks += `\n*Total : ${imagenye.length}*`
				Vid.sendMessage(from, teks.trim(), extendedText, { quoted: freply, contextInfo: { "mentionedJid": setiker } })
				break
				case '!addvid':
				if (!isQuotedVideo) return reply('Reply vidionya')
				svst = body.slice(8)
				if (!svst) return reply('Nama vidionya apa')
				boij = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
				delb = await Vid.downloadMediaMessage(boij)
				imagenye.push(`${svst}`)
				fs.writeFileSync(`./temp/video/${svst}.mp4`, delb)
				fs.writeFileSync('./temp/video.json', JSON.stringify(imagenye))
				Vid.sendMessage(from, `Sukses Menambahkan video\nCek dengan cara ${prefix}listvideo`, MessageType.text, { quoted: freply })
				break
case '!listvid':
				teks = '*List Video :*\n\n'
				for (let awokwkwk of videonye) {
					teks += `- ${awokwkwk}\n`
				}
				teks += `\n*Total : ${videonye.length}* `
				Vid.sendMessage(from, teks.trim(), extendedText, { quoted: freply, contextInfo: { "mentionedJid": imagenye } })
				break
			case '!getvid':
				namastc = body.slice(8)
				try {
				buffer = fs.readFileSync(`./temp/video/${namastc}.mp4`)
				Vid.sendMessage(from, buffer, video, { quoted: freply, caption: `Result From Database : ${namastc}.mp4` })
				} catch {
				  reply('Pack tidak terdaftar')
				}
				break
				case '!addvn':
				if (!isQuotedAudio) return reply('Reply vnnya')
				svst = body.slice(7)
				if (!svst) return reply('Nama audionya apa')
				boij = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
				delb = await Vid.downloadMediaMessage(boij)
				audionye.push(`${svst}`)
				fs.writeFileSync(`./temp/audio/${svst}.mp3`, delb)
				fs.writeFileSync('./temp/vn.json', JSON.stringify(audionye))
				Vid.sendMessage(from, `Sukses Menambahkan Audio\nCek dengan cara ${prefix}listvn`, MessageType.text, { quoted: freply })
				break
case '!getvn':
				namastc = body.slice(7)
				try {
				buffer = fs.readFileSync(`./temp/audio/${namastc}.mp3`)
				Vid.sendMessage(from, buffer, audio, { mimetype: 'audio/mp4', quoted: freply, ptt: true })
				} catch {
				  reply('Pack tidak terdaftar')
				}
				break
				case '!listvn':
			case '!vnlist':
				teks = '*List Vn:*\n\n'
				for (let awokwkwk of audionye) {
					teks += `- ${awokwkwk}\n`
				}
				teks += `\n*Total : ${audionye.length}*`
				Vid.sendMessage(from, teks.trim(), extendedText, { quoted: freply, contextInfo: { "mentionedJid": audionye } })
				break
				//********** DOWNLOAD **********//
				
				
				
				case '!play':   
				  if (args.length < 1) return reply('*Masukan judul lagu nya?*')
                Vid.sendMessage(from, mess.wait, text,{quoted : freply})
				play = args.join(" ")
				anu = await fetchJson(`https://api.xteam.xyz/dl/play?lagu=${play}&APIKEY=${XteamKey}`)
				if (anu.error) return reply(anu.error)
				infomp3   =`*「 Play To Mp3 」*
				
Judul : ${anu.judul}
Size : ${anu.size}
Source : ${anu.source}
				
*_Tunggu Sebentar.._* `
				buffer = await getBuffer(anu.thumbnail)
				Vid.sendMessage(from, buffer, image, {quoted: freply, caption: infomp3})
        lagu = await getBuffer(anu.url)
				Vid.sendMessage(from, lagu, audio, {mimetype: 'audio/mp4', filename: `${anu.url}.mp3`, quoted: freply})
				break
				
				case '!play2':   
				  if (args.length < 1) return reply('*Masukan judul nya?*')
                Vid.sendMessage(from, mess.wait, text,{quoted : freply})
				play = args.join(" ")
				anu = await fetchJson(`https://api.zeks.xyz/api/ytplaymp4?q=${play}&apikey=apivinz`)
				if (anu.error) return reply(anu.error)
				infomp3 = ` *Video Ditemukan!!!*
				
Judul : ${anu.result.title}
Source : ${anu.result.source}
				
*_Tunggu Sebentar.._*`
				buffer = await getBuffer(anu.result.thumbnail)
				buffer1 = await getBuffer(anu.result.url_video)
				Vid.sendMessage(from, buffer, image, {quoted: freply, caption: infomp3})
				Vid.sendMessage(from, buffer1, video, {mimetype: 'video/mp4', filename: `${anu.result.video}.mp4`, quoted:freply, caption: 'Nih Gan'})
					break 
				
        case '!ig':
          if (args.length < 1) return reply('*Masukan Url nya?*')
          query = args.join(" ")
					anu = await fetchJson(`https://api.zeks.xyz/api/ig?url=${query}&apikey=apivinz`, {method: 'get'})
					tods = ` Instagram DOWNLOADER

Username : ${anu.owner}
Caption : ${anu.caption}
`
					Vid.sendMessage(from, mess.wait, text,{quoted : freply})
					buffer = await getBuffer(anu.result[0].url)
					Vid.sendMessage(from, buffer, video, {mimetype: 'video/mp4', filename: `${anu.result[0].url}.mp4`, quoted: freply, caption : tods})
					break 
					
case '!fb':
  if (args.length < 1) return reply('*Masukan Url nya?*')
  query = args.join(" ")
					anu = await fetchJson(`https://videfikri.com/api/fbdl/?urlfb=${query}`, {method: 'get'})
					wing = ` *F A C E B O O K DOWNLOADER*
					
*Judul :* ${anu.result.judul}`
					
					Vid.sendMessage(from, mess.wait, text,{quoted : freply})
					buffer = await getBuffer(anu.result.url)
					Vid.sendMessage(from, buffer, video, {mimetype: 'video/mp4', filename: `${anu.result.url}.mp4`, quoted: freply, caption: wing})
					break 
					
case '!tiktok':
  if (args.length < 1) return reply('*Masukan Url nya?*')
					query = args.join(" ")
					anu = await fetchJson(`https://api.zeks.xyz/api/tiktok?url=${query}&apikey=apivinz`, {method: 'get'})
					
					Vid.sendMessage(from, mess.wait, text,{quoted : freply})
					pyu = `*TIKTOK DOWNLOADER*
					
Author : ${anu.author}
Title : ${anu.title}	`
					buffer = await getBuffer(anu.no_watermark)
					buff = await getBuffer(anu.audio)
					Vid.sendMessage(from, buffer, video, {mimetype: 'video/mp4', filename: `${anu.no_watermark}.mp4`, quoted: freply, caption: pyu})
					Vid.sendMessage(from, buff, audio, {quoted : freply})
					break
				
				case '!ytmp4':
				  if (args.length < 1) return reply('*Masukan Url nya?*')
ini_link = args[0]
					anu = await fetchJson(`https://api.xteam.xyz/dl/ytmp4?url=${ini_link}&APIKEY=${XteamKey}`, {method: 'get'})
					if (anu.error) return reply(anu.error)
					ytt = `「 *YOUTUBE MP4* 」
					
*Judul:* ${anu.judul}
*Size:* ${anu.size}
					 
 Tunggu Sebentar kak...`
					 buff = await getBuffer(anu.thumbnail)
					Vid.sendMessage(from, mess.wait, text,{quoted : freply})
					buffer = await getBuffer(anu.url)
					Vid.sendMessage(from, buff, image, {quoted: freply, caption: ytt})
					Vid.sendMessage(from, buffer, video, {mimetype: 'video/mp4', filename: `${anu.url}.mp4`, quoted: freply, caption: 'Nih Gan'})
					break 

				case '!ytmp3':
				  if (args.length < 1) return reply('*Masukan Url nya?*')
                    ini_link = args[0]
                    anu = await fetchJson(`https://api.xteam.xyz/dl/ytmp3?url=${ini_link}&APIKEY=${XteamKey}`)
                    					ytt = `「 *YOUTUBE MP3* 」
					
*Judul:* ${anu.judul}
*Size:* ${anu.size}
					 
 Tunggu Sebentar kak...`
					 buff = await getBuffer(anu.thumbnail)
					Vid.sendMessage(from, mess.wait, text,{quoted : freply})
					buffer = await getBuffer(anu.url)
					Vid.sendMessage(from, buff, image, {quoted: freply, caption: ytt})
					Vid.sendMessage(from, buffer, audio, {mimetype: 'audio/mp4', filename: `${anu.url}.mp3`, quoted: freply})
				break

//********** UPLOAD **********
case '!upswtext':
					Vid.updatePresence(from, Presence.composing)
					Vid.sendMessage('status@broadcast', `${q}`, extendedText)
					Vid.sendMessage(from, `Sukses Up story wea teks ${q}`, text,{quoted : freply})
					break
					
				case '!upswimg':
					Vid.updatePresence(from, Presence.composing)
					if (isQuotedImage) {
						const swsw = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
						cihcih = await Vid.downloadMediaMessage(swsw)
						Vid.sendMessage('status@broadcast', cihcih, image, { caption: `${q}` })
					}
					bur = `Sukses Upload Story Image dengan Caption: ${q}`
					Vid.sendMessage(from, bur, text, { quoted: mek })
					break
					
				case '!upswvideo':
					Vid.updatePresence(from, Presence.composing)
					if (isQuotedVideo) {
						const swsw = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
						cihcih = await Vid.downloadMediaMessage(swsw)
						Vid.sendMessage('status@broadcast', cihcih, video, { caption: `${q}` })
					}
					bur = `Sukses Upload Story Video dengan Caption: ${q}`
					Vid.sendMessage(from, bur, text, { quoted: mek })
					break
					
					default:
					if (body.startsWith(`${prefix}${command}`)) {
                  reply(`Maaf to Sorry *${pushname2}*, Command *!${command}* Nggk Ada Di Dalam *Menu*  Bot *${namabot}* 🙂`)
              }
              if (isGroup && isSimi && budy != undefined) {
						console.log(budy)
						muehe = await simih(budy)
						console.log(muehe)
						reply(muehe)
					} else {
						return //console.log(color('[WARN]','red'), 'Unregistered Command from', color(sender.split('@')[0]))
					}
                           }
		} catch (e) {
			console.log('Ge Eror : %s', color(e, 'red'))
		}
	})
}
starts()
