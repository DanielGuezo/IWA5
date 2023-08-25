const FREE_WARNING = 'Free shipping only applies to single customer orders'
const BANNED_WARNIN = 'Unfortunately we do not ship to your country of residence'
const NONE_SELECTED = '0'

const customers = 1;
let location = 'RSA';
let currency = '$';
let shipping = 800;

const shoes = 300 * 1
const toys = 100 * 5
const shirts = 150 * 'NONE_SELECTED'
const batteries= 35 * 2
const pens = 5 * 'NONE_SELECTED'
const total = shoes + toys + shirts + batteries + pens

if (location === "RSA") { shipping = 400 && currency == 'R' }

if (location === "NAM"){

}else{ shipping = 600}


shipping = null
currency = '$'

if (total => 1000 && currency === 'R' || total > 60 && currency ==='$'){ shipping =0 }

if (shipping === 0  && customers !== 1) { console.log(FREE_WARNING) }

 if (location === 'NK') {console.log(BANNED_WARNIN)
 } else { console.log('price', currency,total)}

