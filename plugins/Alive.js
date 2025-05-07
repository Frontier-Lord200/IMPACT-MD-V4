let handler = async (m, { conn, text, usedPrefix, command }) => {
  // Sound
  let name = m.pushName || conn.getName(m.sender);
  let img = 'https://i.ibb.co/1tVSRqfv/268.jpg';
  let con = {
    key: {
      fromMe: false,
      participant: `${m.sender.split`@`[0]}@s.whatsapp.net`,
      ...(m.chat ? { remoteJid: '263780166288@s.whatsapp.net' } : {}),
    },
    message: {
      contactMessage: {
        displayName: `${name}`,
        vcard: `BEGIN:VCARD\nVERSION:3.0\nN:;a,;;;\nFN:${name}\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`,
      },
    },
  };

  let messageContent = {
    text: 'IMPACT-V𝟺 IS RUNNING', // Text content in case a message body is needed
    contextInfo: {
      mentionedJid: [m.sender],
      externalAdReply: {
        title: '© IMPACT-V𝟺',
        body: '© FRONTIER-X-45H',
        thumbnailUrl: img,
        sourceUrl: 'https://whatsapp.com/channel/0029VbABN6947Xe9PIApgG47',
        mediaType: 1,
        renderLargerThumbnail: true,
      },
    },
  };

  // Send the message with the external ad reply
  await conn.sendMessage(m.chat, messageContent, { quoted: con });
};

handler.help = ['alive'];
handler.tags = ['main'];
handler.command = /^(alive)$/i;

export default handler;
