'use strict';

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

var LF = 0xa;
var FF = 0xc;
var CR = 0xd;
var TAB = 0x9;
var SPACE = 0x20;
var OPEN_SQUARE = 0x5b;
var CLOSE_SQUARE = 0x5d;
var OPEN_CURLY = 0x7b;
var CLOSE_CURLY = 0x7d;
var SEMICOLON = 0x3b;
var COLON = 0x3a;

var Tokenizer =
/*#__PURE__*/
function () {
  function Tokenizer(input) {
    _classCallCheck(this, Tokenizer);

    this.input = input.valueOf();
    this.length = this.input.length;
    this.line = 1;
    this.pos = 0;
  }

  _createClass(Tokenizer, [{
    key: "end",
    value: function end() {
      return this.pos >= this.length;
    }
  }, {
    key: "nextToken",
    value: function nextToken() {
      var charCode = this.input.charCodeAt(this.pos);
      var buffer = [];
      var token = [];

      switch (charCode) {
        case LF:
        case FF:
          this.line++;

        case SPACE:
        case TAB:
        case CR:
          do {
            this.pos++;
            buffer.push(charCode);
            charCode = this.input.charCodeAt(this.pos);

            if (charCode === LF || charCode === FF) {
              this.line++;
            }
          } while (charCode === SPACE || charCode === TAB || charCode === LF || charCode === FF || charCode === CR);

          token = [null, String.fromCharCode.apply(String, buffer)];
          break;

        case OPEN_CURLY:
        case CLOSE_CURLY:
        case OPEN_SQUARE:
        case CLOSE_SQUARE:
        case COLON:
        case SEMICOLON:
          this.pos++;
          token = [charCode, String.fromCharCode(charCode), this.line, this.pos];
          break;

        default:
          this.pos++;
          token = ['other', String.fromCharCode(charCode), this.pos, this.line];
      }

      return token;
    }
  }]);

  return Tokenizer;
}();

var Parser = (function (input) {
  var tokenizer = new Tokenizer(input);
  var token = null;

  while (!tokenizer.end()) {
    token = tokenizer.nextToken();
    console.log(token);
  }
});

var index = (function (input) {
  return Parser(input);
});

module.exports = index;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzIjpbIi4uL3NyYy90b2tlbml6ZXIvY2hhcmNvZGVzLmpzIiwiLi4vc3JjL3Rva2VuaXplci9pbmRleC5qcyIsIi4uL3NyYy9wYXJzZXIvaW5kZXguanMiLCIuLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNvbnN0IExGID0gMHhhXG5leHBvcnQgY29uc3QgRkYgPSAweGNcbmV4cG9ydCBjb25zdCBDUiA9IDB4ZFxuZXhwb3J0IGNvbnN0IFRBQiA9IDB4OVxuZXhwb3J0IGNvbnN0IFNQQUNFID0gMHgyMFxuZXhwb3J0IGNvbnN0IFNMQVNIID0gMHgyZlxuZXhwb3J0IGNvbnN0IEJBQ0tTTEFTSCA9IDB4NWNcbmV4cG9ydCBjb25zdCBTSU5HTEVfUVVPVEUgPSAweDJDXG5leHBvcnQgY29uc3QgRE9VQkxFX1FVT1RFID0gMHgyMlxuZXhwb3J0IGNvbnN0IE9QRU5fU1FVQVJFID0gMHg1YlxuZXhwb3J0IGNvbnN0IENMT1NFX1NRVUFSRSA9IDB4NWRcbmV4cG9ydCBjb25zdCBPUEVOX1BBUkVOVEhFU0VTID0gMHgyOFxuZXhwb3J0IGNvbnN0IENMT1NFX1BBUkVOVEhFU0VTID0gMHgyOVxuZXhwb3J0IGNvbnN0IE9QRU5fQ1VSTFkgPSAweDdiXG5leHBvcnQgY29uc3QgQ0xPU0VfQ1VSTFkgPSAweDdkXG5leHBvcnQgY29uc3QgQ09NTUEgPSAweDJjXG5leHBvcnQgY29uc3QgU0VNSUNPTE9OID0gMHgzYlxuZXhwb3J0IGNvbnN0IEFTVEVSSVNLID0gMHgyYVxuZXhwb3J0IGNvbnN0IENPTE9OID0gMHgzYVxuZXhwb3J0IGNvbnN0IEFUID0gMHg0MFxuIiwiaW1wb3J0IHsgaXNEaWdpdCwgaXNMZXR0ZXIsIGlzTmV3bGluZSB9IGZyb20gJy4vY2hhcnR5cGVzJ1xuaW1wb3J0ICogYXMgY2hhckNvZGVzIGZyb20gJy4vY2hhcmNvZGVzJ1xuXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRva2VuaXplciB7XG4gIGNvbnN0cnVjdG9yKGlucHV0KSB7XG4gICAgdGhpcy5pbnB1dCA9IGlucHV0LnZhbHVlT2YoKVxuICAgIHRoaXMubGVuZ3RoID0gdGhpcy5pbnB1dC5sZW5ndGhcblxuICAgIHRoaXMubGluZSA9IDFcbiAgICB0aGlzLnBvcyA9IDBcbiAgfVxuXG4gIGVuZCgpIHtcbiAgICByZXR1cm4gdGhpcy5wb3MgPj0gdGhpcy5sZW5ndGhcbiAgfVxuXG4gIG5leHRUb2tlbigpIHtcbiAgICBsZXQgY2hhckNvZGUgPSB0aGlzLmlucHV0LmNoYXJDb2RlQXQodGhpcy5wb3MpXG4gICAgbGV0IGJ1ZmZlciA9IFtdXG4gICAgbGV0IHRva2VuID0gW11cblxuICAgIHN3aXRjaChjaGFyQ29kZSkge1xuICAgIGNhc2UgY2hhckNvZGVzLkxGOlxuICAgIGNhc2UgY2hhckNvZGVzLkZGOlxuICAgICAgdGhpcy5saW5lKytcblxuICAgIGNhc2UgY2hhckNvZGVzLlNQQUNFOlxuICAgIGNhc2UgY2hhckNvZGVzLlRBQjpcbiAgICBjYXNlIGNoYXJDb2Rlcy5DUjpcbiAgICAgIGRvIHtcbiAgICAgICAgdGhpcy5wb3MrK1xuICAgICAgICBidWZmZXIucHVzaChjaGFyQ29kZSlcbiAgICAgICAgY2hhckNvZGUgPSB0aGlzLmlucHV0LmNoYXJDb2RlQXQodGhpcy5wb3MpXG5cbiAgICAgICAgaWYoY2hhckNvZGUgPT09IGNoYXJDb2Rlcy5MRiB8fFxuICAgICAgICAgIGNoYXJDb2RlID09PSBjaGFyQ29kZXMuRkYpIHtcbiAgICAgICAgICB0aGlzLmxpbmUrK1xuICAgICAgICB9XG5cbiAgICAgIH0gd2hpbGUgKFxuICAgICAgICBjaGFyQ29kZSA9PT0gY2hhckNvZGVzLlNQQUNFIHx8XG4gICAgICAgIGNoYXJDb2RlID09PSBjaGFyQ29kZXMuVEFCIHx8XG4gICAgICAgIGNoYXJDb2RlID09PSBjaGFyQ29kZXMuTEYgfHxcbiAgICAgICAgY2hhckNvZGUgPT09IGNoYXJDb2Rlcy5GRiB8fFxuICAgICAgICBjaGFyQ29kZSA9PT0gY2hhckNvZGVzLkNSXG4gICAgICApXG4gICAgICB0b2tlbiA9IFsgbnVsbCwgU3RyaW5nLmZyb21DaGFyQ29kZSguLi5idWZmZXIpIF1cbiAgICAgIGJyZWFrXG5cbiAgICBjYXNlIGNoYXJDb2Rlcy5PUEVOX0NVUkxZOlxuICAgIGNhc2UgY2hhckNvZGVzLkNMT1NFX0NVUkxZOlxuICAgIGNhc2UgY2hhckNvZGVzLk9QRU5fU1FVQVJFOlxuICAgIGNhc2UgY2hhckNvZGVzLkNMT1NFX1NRVUFSRTpcbiAgICBjYXNlIGNoYXJDb2Rlcy5DT0xPTjpcbiAgICBjYXNlIGNoYXJDb2Rlcy5TRU1JQ09MT046XG4gICAgICB0aGlzLnBvcysrXG4gICAgICB0b2tlbiA9IFsgY2hhckNvZGUsIFN0cmluZy5mcm9tQ2hhckNvZGUoY2hhckNvZGUpLCB0aGlzLmxpbmUsIHRoaXMucG9zIF1cbiAgICAgIGJyZWFrXG5cbiAgICBkZWZhdWx0OlxuICAgICAgdGhpcy5wb3MrK1xuICAgICAgdG9rZW4gPSBbICdvdGhlcicsIFN0cmluZy5mcm9tQ2hhckNvZGUoY2hhckNvZGUpLCB0aGlzLnBvcywgdGhpcy5saW5lIF1cbiAgICB9XG5cbiAgICByZXR1cm4gdG9rZW5cbiAgfVxufVxuIiwiaW1wb3J0IFRva2VuaXplciBmcm9tICcuLi90b2tlbml6ZXInXG5cblxuZXhwb3J0IGRlZmF1bHQgKGlucHV0KSA9PiB7XG5cbiAgbGV0IHRva2VuaXplciA9IG5ldyBUb2tlbml6ZXIoaW5wdXQpXG4gIGxldCB0b2tlbiA9IG51bGxcblxuICB3aGlsZSghdG9rZW5pemVyLmVuZCgpKSB7XG4gICAgdG9rZW4gPSB0b2tlbml6ZXIubmV4dFRva2VuKClcblxuICAgIGNvbnNvbGUubG9nKHRva2VuKVxuICB9XG5cbn1cbiIsIi8qKlxuICogQGZsb3dcbiAqL1xuaW1wb3J0IFBhcnNlciBmcm9tICcuL3BhcnNlcidcblxuZXhwb3J0IGRlZmF1bHQgKGlucHV0KSA9PiB7XG4gIHJldHVybiBQYXJzZXIoaW5wdXQpXG59XG4iXSwibmFtZXMiOlsiTEYiLCJGRiIsIkNSIiwiVEFCIiwiU1BBQ0UiLCJPUEVOX1NRVUFSRSIsIkNMT1NFX1NRVUFSRSIsIk9QRU5fQ1VSTFkiLCJDTE9TRV9DVVJMWSIsIlNFTUlDT0xPTiIsIkNPTE9OIiwiVG9rZW5pemVyIiwiaW5wdXQiLCJ2YWx1ZU9mIiwibGVuZ3RoIiwibGluZSIsInBvcyIsImNoYXJDb2RlIiwiY2hhckNvZGVBdCIsImJ1ZmZlciIsInRva2VuIiwiY2hhckNvZGVzIiwicHVzaCIsIlN0cmluZyIsImZyb21DaGFyQ29kZSIsInRva2VuaXplciIsImVuZCIsIm5leHRUb2tlbiIsImNvbnNvbGUiLCJsb2ciLCJQYXJzZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFPLElBQU1BLEVBQUUsR0FBRyxHQUFYO0FBQ1AsQUFBTyxJQUFNQyxFQUFFLEdBQUcsR0FBWDtBQUNQLEFBQU8sSUFBTUMsRUFBRSxHQUFHLEdBQVg7QUFDUCxBQUFPLElBQU1DLEdBQUcsR0FBRyxHQUFaO0FBQ1AsQUFBTyxJQUFNQyxLQUFLLEdBQUcsSUFBZDtBQUNQLEFBSU8sSUFBTUMsV0FBVyxHQUFHLElBQXBCO0FBQ1AsQUFBTyxJQUFNQyxZQUFZLEdBQUcsSUFBckI7QUFDUCxBQUVPLElBQU1DLFVBQVUsR0FBRyxJQUFuQjtBQUNQLEFBQU8sSUFBTUMsV0FBVyxHQUFHLElBQXBCO0FBQ1AsQUFDTyxJQUFNQyxTQUFTLEdBQUcsSUFBbEI7QUFDUCxBQUNPLElBQU1DLEtBQUssR0FBRyxJQUFkOztJQ2RjQzs7O3FCQUNQQyxLQUFaLEVBQW1COzs7U0FDWkEsS0FBTCxHQUFhQSxLQUFLLENBQUNDLE9BQU4sRUFBYjtTQUNLQyxNQUFMLEdBQWMsS0FBS0YsS0FBTCxDQUFXRSxNQUF6QjtTQUVLQyxJQUFMLEdBQVksQ0FBWjtTQUNLQyxHQUFMLEdBQVcsQ0FBWDs7Ozs7MEJBR0k7YUFDRyxLQUFLQSxHQUFMLElBQVksS0FBS0YsTUFBeEI7Ozs7Z0NBR1U7VUFDTkcsUUFBUSxHQUFHLEtBQUtMLEtBQUwsQ0FBV00sVUFBWCxDQUFzQixLQUFLRixHQUEzQixDQUFmO1VBQ0lHLE1BQU0sR0FBRyxFQUFiO1VBQ0lDLEtBQUssR0FBRyxFQUFaOztjQUVPSCxRQUFQO2FBQ0tJLEVBQUw7YUFDS0EsRUFBTDtlQUNPTixJQUFMOzthQUVHTSxLQUFMO2FBQ0tBLEdBQUw7YUFDS0EsRUFBTDthQUNLO2lCQUNJTCxHQUFMO1lBQ0FHLE1BQU0sQ0FBQ0csSUFBUCxDQUFZTCxRQUFaO1lBQ0FBLFFBQVEsR0FBRyxLQUFLTCxLQUFMLENBQVdNLFVBQVgsQ0FBc0IsS0FBS0YsR0FBM0IsQ0FBWDs7Z0JBRUdDLFFBQVEsS0FBS0ksRUFBYixJQUNESixRQUFRLEtBQUtJLEVBRGYsRUFDNkI7bUJBQ3RCTixJQUFMOztXQVBKLFFBV0VFLFFBQVEsS0FBS0ksS0FBYixJQUNBSixRQUFRLEtBQUtJLEdBRGIsSUFFQUosUUFBUSxLQUFLSSxFQUZiLElBR0FKLFFBQVEsS0FBS0ksRUFIYixJQUlBSixRQUFRLEtBQUtJLEVBZmY7O1VBaUJBRCxLQUFLLEdBQUcsQ0FBRSxJQUFGLEVBQVFHLE1BQU0sQ0FBQ0MsWUFBUCxPQUFBRCxNQUFNLEVBQWlCSixNQUFqQixDQUFkLENBQVI7OzthQUdHRSxVQUFMO2FBQ0tBLFdBQUw7YUFDS0EsV0FBTDthQUNLQSxZQUFMO2FBQ0tBLEtBQUw7YUFDS0EsU0FBTDtlQUNPTCxHQUFMO1VBQ0FJLEtBQUssR0FBRyxDQUFFSCxRQUFGLEVBQVlNLE1BQU0sQ0FBQ0MsWUFBUCxDQUFvQlAsUUFBcEIsQ0FBWixFQUEyQyxLQUFLRixJQUFoRCxFQUFzRCxLQUFLQyxHQUEzRCxDQUFSOzs7O2VBSUtBLEdBQUw7VUFDQUksS0FBSyxHQUFHLENBQUUsT0FBRixFQUFXRyxNQUFNLENBQUNDLFlBQVAsQ0FBb0JQLFFBQXBCLENBQVgsRUFBMEMsS0FBS0QsR0FBL0MsRUFBb0QsS0FBS0QsSUFBekQsQ0FBUjs7O2FBR0tLLEtBQVA7Ozs7Ozs7QUM5REosY0FBZSxVQUFDUixLQUFELEVBQVc7TUFFcEJhLFNBQVMsR0FBRyxJQUFJZCxTQUFKLENBQWNDLEtBQWQsQ0FBaEI7TUFDSVEsS0FBSyxHQUFHLElBQVo7O1NBRU0sQ0FBQ0ssU0FBUyxDQUFDQyxHQUFWLEVBQVAsRUFBd0I7SUFDdEJOLEtBQUssR0FBR0ssU0FBUyxDQUFDRSxTQUFWLEVBQVI7SUFFQUMsT0FBTyxDQUFDQyxHQUFSLENBQVlULEtBQVo7O0NBUko7O0FDRUEsYUFBZSxVQUFDUixLQUFELEVBQVc7U0FDakJrQixNQUFNLENBQUNsQixLQUFELENBQWI7Q0FERjs7OzsifQ==
