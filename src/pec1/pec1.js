export function ex1(value) {
    if(value >= 0 && value <= 17) {
        return true;

    } else {
        return false;
    }
    
}
 
export function ex2(price, tax) { 
    let ivaPercentage = parseInt(tax) * 0.01;
    let priceWithIva = price + (price * ivaPercentage);
    
    return priceWithIva;
} 

 