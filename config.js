import { fileURLToPath } from 'url'
import fs from 'fs'
import chalk from 'chalk'
import 'dotenv/config'

global.ownerName = 'EliteProTech'
global.botName = 'ELITE-PRO-V2'
global.repo = 'https://github.com/EliteProTech/ELITE-PRO-V2'

global.botMessage = {
    owner: 'This feature is for the Owner only.',
    admin: 'This feature is for group Admins only.',
    group: 'This command can only be used in a group.',
    private: 'This command can only be used in a private chat.',
    isBotAdmin: 'I need to be an admin in this group to do that.'
}
global.stickerPack = {
    packname: 'ELITE-PRO-V2',
    author: 'EliteProTech'
}

const file = fileURLToPath(import.meta.url)
global.session = process.env.SESSION_ID || '{"noiseKey":{"private":{"type":"Buffer","data":"0NHKBULZu8bzdPEEKKlE1KZ1Cy+U3+TBxMut86ps5no="},"public":{"type":"Buffer","data":"6f55aJxT/qvczdmd5g+yoFcFIaYaQIJHkXvbq9bqP1k="}},"pairingEphemeralKeyPair":{"private":{"type":"Buffer","data":"CAXb9Md9QBGgXnEERTF68Q7Jfp8oAIhS5mLvWgiMPk0="},"public":{"type":"Buffer","data":"ShPI72oDCapm8jg5Qbf5Z0HUYJQCvUu88n811P58wzg="}},"signedIdentityKey":{"private":{"type":"Buffer","data":"CNleM7Ol/w/HEbY4KWgBdPOnqaqSy1hA0QC3zn0Rx2A="},"public":{"type":"Buffer","data":"6S+0720w1qtEqvuXupydgHiL5WUcJC3Cwh05Uwl7nFI="}},"signedPreKey":{"keyPair":{"private":{"type":"Buffer","data":"cJjl/gm1eU2d+PuYh+omlL67BOmwcmT3pT80kWby0Us="},"public":{"type":"Buffer","data":"s+UPZcWYve6CmbkS/ZrdMoM9KrAtJ0bp+rSQe6q9Vl8="}},"signature":{"type":"Buffer","data":"O+R0YCXSawatCnXHT3VQ2tctiKhf5KKfspi8X4UYRE6JsIPEdoabJ40H3FkSi2VYhIVR/1Zhkr96ub77omBbhg=="},"keyId":1},"registrationId":51,"advSecretKey":"A5C0lvp6qsWW9buM3kkcVYOcV2FbELW+UTkn56kx4rA=","processedHistoryMessages":[],"nextPreKeyId":31,"firstUnuploadedPreKeyId":31,"accountSyncCounter":0,"accountSettings":{"unarchiveChats":false},"registered":true,"pairingCode":"AP2SJIJ9","me":{"id":"263776144156:57@s.whatsapp.net","lid":"56474877354127:57@lid","name":"LIL-ETSO"},"account":{"details":"CKP+lB8QjMf71gYYASAAKAA=","accountSignatureKey":"MM9A3QptHw5mvDgJGOnOcG3gNVH/jisDc1WacjpvEhg=","accountSignature":"RVFwFv6yAOa4iPsjSOUzqVuyifqhzmlZRi1CdujDoS6S/jpqDaTtdqbdL7vr2O2ZGMo3q7r6SDPKTG8wy3M3Cg==","deviceSignature":"amFAgM+msnOWJ4vZFLoosow1tPPKeX9+7SRnLnx7nU4PkO1E2sIeUetlL4pF/DlrFBmMSEGHAIoONi4aypZIgw=="},"signalIdentities":[{"identifier":{"name":"263776144156:57@s.whatsapp.net","deviceId":0},"identifierKey":{"type":"Buffer","data":"BTDPQN0KbR8OZrw4CRjpznBt4DVR/44rA3NVmnI6bxIY"}}],"platform":"android","routingInfo":{"type":"Buffer","data":"CAkIAggI"},"lastAccountSyncTimestamp":1792992151,"myAppStateKeyId":"AAAAAPVO"}'
fs.watchFile(file, () => {
    fs.unwatchFile(file)
    console.log(chalk.redBright(`Update 'config.js'`))
    import(`${file}?update=${Date.now()}`)
})
