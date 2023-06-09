
function borrar() {
    document.getElementById("n1").value = "";
    document.getElementById("n2").value = "";
    document.getElementById("n0").value = "";
    document.getElementById("resultado").innerHTML = "";
}
  
function auto(){
  var nom1=document.getElementById("n1").value;
  var asientos=document.getElementById("n2").value;
  var anio=document.getElementById("n0").value;
  
  var mensaje;
  
  anio=parseInt(anio);
  asientos=parseInt(asientos);
  
  
  
  if(anio>=2010 & asientos<=6 ){
  
  mensaje=" ultimos 3 modelos disponibles !!";
  }
  
  
  if(anio>=2010 & asientos>6 ){
  
    mensaje=" hay solo 2 disponibles con más de 6 asientos !!";
  }
  if (anio<2010){
  
    mensaje=" no hay modelos de esa antiguedad";
  
  }
  
  
  document.getElementById("resultado").innerHTML=mensaje;
  
  
}