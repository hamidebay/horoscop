const marke = bmw;
const color = red;
const year = 2005;
const customer_old = 3;


if(customer_old >5 ){console.log("Araban tamir edilecek");}
else if(color == (red) && (marke == bmw) && ( 2010 >= year <= 2019 )) {console.log("Araban tamir edilecek");}
else if(color == (red || black) && (marke == audi) && ( (2005 >= year <= 2020 )) || (2014 >= year <= 2020 )) {console.log("Araban tamir edilecek");}
else if(color == (black) && (marke == vw) && ( 2001 >= year <= 2018 )) {console.log("Araban tamir edilecek");}
else {console.log("üzgünüm sizi kabul edemem");}
