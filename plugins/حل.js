// كود تم نشره بواسطه zoro
// تابع لقناه https://whatsapp.com/channel/0029VaYMyqu4CrfgGRLXfv3c
import fetch from 'node-fetch'
import uploader from '../lib/uploadImage.js'

var handler = async (m, { conn, text, command, usedPrefix }) => {

let q = m.quoted ? m.quoted : m
let mime = (q.msg || q).mimetype || q.mediaType || ''
if (/image/g.test(mime) && !/webp/g.test(mime)) {
let buffer = await q.download()

await m.reply(wait)

let media = await (uploader)(buffer)
let zoro = await (await fetch(`https://aemt.me/bardimg?url=${media}&text=${text}`)).json()

conn.sendMessage(m.chat, { text: zoro.result }, { quoted: m })

} else throw `*الرجاء الرد علي صوره\n\n*مثال*\n${usedPrefix + command} اخبرني بالمعلومات`
  
}
handler.help = ['ZORO']
handler.tags = ['ZORO']
handler.command = /^(حل|شوف)$/i

export default handler