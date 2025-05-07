import fetch from 'node-fetch';

let handler = async (m, { text, usedPrefix, command, conn }) => {
  try {
    // Fetch environment variables with defaults
    const OwnerName = process.env.OWNER_NAME || 'FRONTIER-X-45H';
    const timeZone = process.env.TIME_ZONE || 'Zimbabwe';
    const profession = process.env.OWNER_STATUS || '𝙳𝙴𝚅𝙴𝙻𝙾𝙿𝙴𝚁';
    const skills = process.env.OWNER_SKILLS || '𝙹𝙰𝚅𝙰𝚂𝙲𝚁𝙸𝙿𝚃';
    const language = process.env.LANGUAGE || '𝙴𝙽𝙶𝙻𝙸𝚂𝙷,shona';
    const project = process.env.BOTNAME || 'IMPACT ᴠ4';
    const hobbies = process.env.HOBBIES || '𝙲𝙾𝙳𝙸𝙽𝙶,𝙱𝙾𝚃𝚂';

    // Expanded intro card text with additional fields
    const introText = `
 ◈ •╭═══ ━ ━ • ━ ━ ━ ═══♡᭄
 ◈ •│       「 𝗠𝗬 𝗜𝗡𝗧𝗥𝗢 」
 ◈ •│
 ◈ •│ Name    : ${OwnerName}
 ◈ •│
 ◈ •│ Place    : ${timeZone}
 ◈ •│
 ◈ •│ Gender  : 𝙼𝙰𝙻𝙴
 ◈ •│
 ◈ •│ Age      : 19_
 ◈ •│
 ◈ •│ Status   : ${profession}
 ◈ •│
 ◈ •│ Skills    : ${skills}
 ◈ •│
 ◈ •│ Lang    : ${language}
 ◈ •│
 ◈ •│ Project  : ${project}
 ◈ •│
 ◈ •│ Hobbie  : ${hobbies}
 ◈ •│
 ◈ •│ Phone   : https://wa.me/message/4OYOT7VFW7KDP1
 ◈ •│
 ◈ •│ IG ID    : FRONTIER-X-45H
 ◈ •│
 ◈ •│ Github   : Frontier-Lord200
 ◈ •│
 ◈ •│ Connect : https://whatsapp.com/channel/0029VbABN6947Xe9PIApgG47
 ◈ •│
 ◈ •╰═══ ━ ━ • ━ ━ ━ ═══♡᭄
    `;

    let pp = 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png';

    // Try fetching the profile picture of the sender
    try {
      pp = await conn.profilePictureUrl(m.sender);
    } catch (e) {
      console.log("Error fetching profile picture:", e);
    }

    const sourceUrl = 'https://github.com/kingmalvn'; // Example source URL for the card
    const OwnerImg = 'https://github.com/kingmalvn.png';
    const contextInfo = {
      mentionedJid: [m.sender],
      externalAdReply: {
        title: 'IMPACT ᴠ4', // Title of the card
        body: '𝑇𝛩𝑈𝐶𝛨 𝛨𝛯𝑅𝛯',
        thumbnailUrl: OwnerImg, // Fixed URL syntax with quotes
        mediaUrl: pp,  // Corrected to use profile picture URL fetched
        sourceUrl: sourceUrl, // Source URL for the card
      },
    };

    // Send the message with the extended intro text and external ad reply
    await conn.sendMessage(m.chat, { text: introText, contextInfo }, { quoted: m });

  } catch (e) {
    console.error(e);
    await conn.sendMessage(m.chat, { text: `❌ Something went wrong: ${e.message}` }, { quoted: m });
  }
};

handler.help = ['intro'];
handler.tags = ['fun'];
handler.command = /^owner|intro|duction$/i;

export default handler;
