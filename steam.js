if (location.hostname == 'steamcommunity.com' && window.location.pathname.includes('wishlist')) {
  symbol = prompt('Please enter your currency symbol', '£');
  total = 0;
  prices = document.getElementsByClassName('price');
  discounted = document.getElementsByClassName('discount_final_price');

  for (var i = 0; i < prices.length; i++) {
    if (prices[i].innerHTML.charAt(0) == symbol) {
      total = (total + parseFloat(prices[i].innerHTML.replace(symbol, '')));
      // console.log(total);
    }
  }

  for (var i = 0; i < discounted.length; i++) {
    if (discounted[i].innerHTML.charAt(0) == symbol) {
      total = (total + parseFloat(discounted[i].innerHTML.replace(symbol, '')));
      // console.log(total);
    }
  }

  alert('Total: ' + symbol + total.toFixed(2) + '\nAverage price: ' + symbol + (total.toFixed(2) / (prices.length + discounted.length)).toFixed(2) + '\n\nTotal Items: ' + (prices.length + discounted.length) + '\nDiscounted: ' + discounted.length);
} else {
  alert('Not a Steam wishlist!');
}
