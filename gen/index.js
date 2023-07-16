var temp = require('./template')
var pkg = require('./pkg')
var fs = require('fs')

const team = {
    ravindu : {
        name : 'Ravindu Manoj',
        github : 'ravindu01manoj'
    },
    amda : {
        name : 'BlackAmda',
        github : 'blackamda'
    },
    thisal : {
        name : 'Thisal Sanujaya',
        github : 'sanuwaofficial'
    },
    sisula : {
        name : 'Sisula Welgamage',
        github : 'ravindu01manoj'
    }
}

var index = ''
var rd = ''

for (const pk of pkg) {
   const npm = pk[2] || pk[1].toLowerCase()
   const github = pk[1]
   const author = team[pk[0]]
   const title = pk[3] || pk[1].replace(/-/g,' ')
   const key = npm.replace(/-/g,'_')
   index += `module.exports.${key} = require('@sl-code-lords/${npm}');\n`
   rd += `## ${title}\n\`\`\`ts\nvar ${key} = sl_codes.${key}\n\`\`\`\n- By [${author.name}](https://github.com/${author.github})\n- NPM [@sl-code-lords/${npm}](https://www.npmjs.com/package/@sl-code-lords/${npm})\n- GITHUB [${github}](https://github.com/SL-CODE-LORDS/${github}.git)\n\n`
}

fs.writeFileSync('../index.js',index.trim())
fs.writeFileSync('../README.md',temp.replace('--pkg--',rd))