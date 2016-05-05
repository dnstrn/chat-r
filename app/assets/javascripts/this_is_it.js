var cookie = {
  sugar: 10,
  flour: 10,
  calorieCount: function(){
    return this.sugar * 4 + this.flour * 3.5;
  }
}

var myMethod = function() {

  var cookie = {
    sugar: 10,
    flour: 10,
    calorieCount: function(){
      return this.sugar * 4 + this.flour * 3.5;
    }
  }
  return cookie.calorieCount();
}

var myMethod1 = function() {

  var cookie = {
    sugar: 10,
    flour: 10,
    calorieCount: function(){
      return this.sugar * 4 + this.flour * 3.5;
    }.bind({sugar: 5, flour: 5})
  }
  return cookie.calorieCount();
}


var cookie1 = {
  sugar: 10,
  flour: 10,
  info: function(){
    var nestedFunction = function() {
      console.log(this);
    }
    nestedFunction();
    return "This cookie has " + this.sugar + "g of sugar and " + this.flour + "g of flour";
  }
}
