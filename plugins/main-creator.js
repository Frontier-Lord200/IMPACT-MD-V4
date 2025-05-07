let handler = async (m, { conn, usedPrefix, isOwner }) => {
  let vcard = `BEGIN:VCARD
VERSION:3.0
N:;Tohid;;;
FN:Frontier 
ORG:XdKing2 
TITLE:Owner
item1.TEL;waid=263788521064:263784672753 
item1.X-ABLabel:Owner
X-WA-BIZ-DESCRIPTION:Developer of the Bot
X-WA-BIZ-NAME:Frontier 
END:VCARD`;

  await conn.sendMessage(m.chat, {
    contacts: {
      displayName: 'Tohid Khan',
      contacts: [{ vcard }]
    }
  }, { quoted: m });
}

handler.help = ['owner'];
handler.tags = ['main'];
handler.command = ['creator', 'creador', 'dueño'];

export default handler;
