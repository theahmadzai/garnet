import { isDigit, isLetter, isNewline } from './chartypes'
import * as charCodes from './charcodes'


export default class Tokenizer {
  constructor(input) {
    this.input = input.valueOf()
    this.length = this.input.length

    this.line = 1
    this.pos = 0
  }

  end() {
    return this.pos >= this.length
  }

  nextToken() {
    let charCode = this.input.charCodeAt(this.pos)
    let buffer = []
    let token = []

    switch(charCode) {
    case charCodes.LF:
    case charCodes.FF:
      this.line++

    case charCodes.SPACE:
    case charCodes.TAB:
    case charCodes.CR:
      do {
        this.pos++
        buffer.push(charCode)
        charCode = this.input.charCodeAt(this.pos)

        if(charCode === charCodes.LF ||
          charCode === charCodes.FF) {
          this.line++
        }

      } while (
        charCode === charCodes.SPACE ||
        charCode === charCodes.TAB ||
        charCode === charCodes.LF ||
        charCode === charCodes.FF ||
        charCode === charCodes.CR
      )
      token = [ null, String.fromCharCode(...buffer) ]
      break

    case charCodes.OPEN_CURLY:
    case charCodes.CLOSE_CURLY:
    case charCodes.OPEN_SQUARE:
    case charCodes.CLOSE_SQUARE:
    case charCodes.COLON:
    case charCodes.SEMICOLON:
      this.pos++
      token = [ charCode, String.fromCharCode(charCode), this.line, this.pos ]
      break

    default:
      this.pos++
      token = [ 'other', String.fromCharCode(charCode), this.pos, this.line ]
    }

    return token
  }
}
