let handler = async (m, { conn, text }) => {
  let who;
  if (m.isGroup) {
    who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text;
  } else {
    who = m.chat;
  }
  
  if (!who) throw 'Tag the person you want to make a co Owner!';
  
  let name = await conn.getName(who);
  if (global.owner.some(owner => owner[0] === who.split('@')[0])) throw 'This person is already a co owner!';
  
  global.owner.push([who.split('@')[0], name, true]);
  
  const caption = `Now @${who.split('@')[0]} has been made a co Owner!`;
  await conn.reply(m.chat, caption, m, {
    mentions: conn.parseMention(caption),
  });
};

handler.help = ['addowner @user'];
handler.tags = ['owner'];
handler.command = /^(add|give|-)(owner|sudo)$/i;
handler.owner = true;

export default handler;