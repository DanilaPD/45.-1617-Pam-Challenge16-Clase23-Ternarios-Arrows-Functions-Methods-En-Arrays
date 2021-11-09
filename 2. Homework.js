//! Function:

const comidas = ["hamburguesa", "papas fritas", "pizza", "fideos"];

function arrToString(a) {
  console.log(a.toString());
}

arrToString(comidas);

//*
//! Arrow:

const animales = ["canguro", "camello", "perro", "gato"];

const arrToString2 = (a) => console.log(a.toString());

arrToString2(animales);

//*
//! Return:

const helados = ["menta", "dulce de leche", "crema americana", "vainilla"];

const arrToString3 = (a) => {
  return a.toString();
};

console.log(arrToString3(helados));
