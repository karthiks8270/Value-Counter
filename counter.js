const a = document.getElementById('bt-1');
a.addEventListener('click',decrementFun)
let x =0;
function decrementFun(){
  x--;
  // console.log(x);
  document.getElementsByTagName('b')[0].innerHTML=`${x}`;
  if(x<0){
      document.getElementsByTagName('b')[0].setAttribute('style','color:red');
  }
  if(x==0){
    document.getElementsByTagName('b')[0].setAttribute('style','color:black');
}
}
const b = document.getElementById('bt-2');
b.addEventListener('click',neutarlFun)
function neutarlFun(){
  x=0;
  document.getElementsByTagName('b')[0].innerHTML=`${x}`;
  document.getElementsByTagName('b')[0].setAttribute('style','color:black');
}
const c = document.getElementById('bt-3');
c.addEventListener('click',incrementFun)

function incrementFun(){
  x++;
  document.getElementsByTagName('b')[0].innerHTML=`${x}`;
  if(x>0){
       document.getElementsByTagName('b')[0].setAttribute('style','color:green'); 
  }
  if(x==0){
    document.getElementsByTagName('b')[0].setAttribute('style','color:black');
}
}


