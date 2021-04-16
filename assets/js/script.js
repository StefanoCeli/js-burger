//dichiaro le variabili "references"
var name_burger=document.getElementById('name');
var price=document.getElementById('price');
var button=document.getElementById('button');
var lista_ingredienti=document.getElementsByClassName('ingredient-checkbox');
var coupon_inserito=document.getElementById('coupon');

//qui dichiaro le variabili "settings"
var default_price=50;
var lista_coupon=['sconto2021','sconto-bool'];
var discount= 0.2;

//creo gli eventi
scriviPrezzo(default_price,price)

button.addEventListener('click',function(){
  var burger_inserito=name_burger.value.trim();

  if(burger_inserito.length === 0){
    alert('Inserisci il nome per il tuo hamburger');
  }else{
    var prezzo_ingrediente=0;
    for(var i=0; i<lista_ingredienti.length; i++){
      var ingrediente=lista_ingredienti[i];
      if(ingrediente.checked){
        prezzo_ingrediente += parseInt(ingrediente.value);
        console.log(default_price)
      }  
    }
    var prezzo_totale= default_price + prezzo_ingrediente;

    if(lista_coupon.includes(coupon_inserito.value)){
      prezzo_totale -= prezzo_totale * discount;
    }

    scriviPrezzo(prezzo_totale,price)
    
  }
  
})

function scriviPrezzo(value,target){
  target.innerHTML=value.toFixed(2);
}