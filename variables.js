const a = "piedra";
const b = "papel";
const c = "tijeras";

function game(uno, dos){
  if(uno == "papel" && dos == "piedra" || uno == "piedra" && dos == "tijeras" ||uno == "tijeras" && dos == "papel"){ 
    return "gana " + uno;
  } else {
    return "gana " + dos;
  };
};

game(a,c);