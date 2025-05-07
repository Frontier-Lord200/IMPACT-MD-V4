
import fetch from 'node-fetch'

let handler = m => m
handler.all = async function (m) {
	
	let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? this.user.jid : m.sender
	let pp = await this.profilePictureUrl(who, 'image').catch(_ => 'https://i.ibb.co/1tVSRqfv/268.jpg')
	
	//reply link wa
   global.rpgc = { contextInfo: { externalAdReply: { mediaUrl: 'https://i.ibb.co/1tVSRqfv/268.jpg', mediaType: 'VIDEO', description: 'support group', title: 'JOIN GROUP', body: 'support group', thumbnailUrl: 'https://i.ibb.co/1tVSRqfv/268.jpg', sourceUrl: 'https://whatsapp.com/channel/0029VbABN6947Xe9PIApgG47' }}} 
	
	//reply link Instagram 
    global.rpig = { contextInfo: { externalAdReply: { mediaUrl: 'https://i.ibb.co/1tVSRqfv/268.jpg', mediaType: 'VIDEO', description: 'FOLLOW DEVELOPER', title: 'INSTAGRAM', body: 'Keep bot alive', thumbnailUrl: 'https://i.ibb.co/1tVSRqfv/268.jpg', sourceUrl: 'https://instagram.com/Techlord01' }}}
	
	//reply link yt
    global.rpyt = { contextInfo: { externalAdReply: { showAdAttribution: true, mediaUrl: 'https://i.ibb.co/1tVSRqfv/268.jpg', mediaType: 'VIDEO', description: 'SUBSCRIBE : YT CHANNEL', title: 'YouTube', body: 'learn to create your own bots', thumbnailUrl: 'https://i.ibb.co/1tVSRqfv/268.jpg', sourceUrl: 'https://youtube.com/@impactmd-w6q?si=2VrF4WmyYY31vpeh' }}}

//reply link WhatsApp Channel
    global.rpwp = { contextInfo: { externalAdReply: { showAdAttribution: true, mediaUrl: 'https://i.ibb.co/1tVSRqfv/268.jpg', mediaType: 'VIDEO', description: 'Follow Channel', title: 'FOLLOW CHANNEL', body: '© TOHID TECH', thumbnailUrl: 'https://i.ibb.co/1tVSRqfv/268.jpg', sourceUrl: 'https://whatsapp.com/channel/0029VbABN6947Xe9PIApgG47' }}}
    
} 
export default handler
