export default function createIterator(arreglo) {
    var siguienteIndice = 0;
  
    return {
      next: function () {
        return siguienteIndice < arreglo.length
          ? { value: arreglo[siguienteIndice++], done: false }
          : { done: true };
      },
    };
}