#!/usr/bin/env node

let fs = require('fs')
let garnet = require('..')

let filename = process.argv[2]
if (!filename) {
  console.error('no filename specified')
  process.exit(0)
}

let css = fs.readFileSync(filename, 'utf8')

console.time('css')

let ast = garnet(css)

console.log('--AST--')
console.log(ast)

console.timeEnd('css')

console.log(JSON.stringify(ast, null, '  '))
