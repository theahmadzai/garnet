import Tokenizer from '../tokenizer'


export default (input) => {

  let tokenizer = new Tokenizer(input)
  let token = null

  while(!tokenizer.end()) {
    token = tokenizer.nextToken()

    console.log(token)
  }

}
