var fs = require("fs");
var text = fs.readFileSync("./doc.txt", "utf8");
console.log(text)

const Automerge = require('automerge')
let doc1 = Automerge.from({ myfiletext: text })
console.log(doc1)

doc1 = Automerge.change(doc1, 'Add another update', doc => {
    doc.myfiletext += ' not much';
  })

console.log(doc1)

let doc2 = Automerge.init()
doc2 = Automerge.merge(doc2, doc1)
console.log(doc2)

fs.writeFileSync("./doc3.txt", doc2.myfiletext)



