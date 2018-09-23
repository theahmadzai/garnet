export const isNewline = (c) => (
  c === 0xA
)

export const isTab = (c) => (
  c === 0x9
)

export const isWhitespace = (c) => (
  c === 0x20
)

export const isDigit = (c) => (
  c >= 0x30 && c <= 0x39
)

export const isHex = (c) => (
  isDigit(c)
  || (c >= 0x41 && c <= 0x46)
  || (c >= 0x61 && c <= 0x66)
)

export const isUppercaseHex = (c) => (
  isDigit(c) || (c >= 0x41 && c <= 0x46)
)

export const isLowercaseHex = (c) => (
  isDigit(c) || (c >= 0x61 && c <= 0x66)
)

export const isUppercaseLetter = (c) => (
  c >= 0x41 && c <= 0x5A
)

export const isLowercaseLetter = (c) => (
  c >= 0x61 && c <= 0x7A
)

export const isLetter = (c) => (
  isUppercaseLetter(c) || isLowercaseLetter(c)
)
