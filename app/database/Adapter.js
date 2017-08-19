var Q = require("q")

function Adapter() {
  if (this instanceof Adapter) {
    // this.db = mysql.createPool(options);
    
  } else {
    return new Adapter();
  }
}