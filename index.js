class SortedList {
  constructor() {
    this.items=[];
    this.length=0;
  }
 
  add(item) {
    this.items.push(item);
    this.length++;
    this.items.sort((a, b) => (a - b));
  }

  get(pos) {
    if(!this.items[pos]){   //para acessar indice de uma array a posicao/referencia deve estar entre chaves. 
    throw new Error('OutOfBounds');
    }else
    return this.items[pos];
  }

  max() {
  if(this.items.length === 0){
    throw new Error('EmptySortedList');
  } else{
    return Math.max(...this.items)
  }
  }

  min() {
    if(this.items.length === 0){
      throw new Error('EmptySortedList');
    } else{
      return Math.min(...this.items)
    }
  }

  sum() {
  if(this.items.length!=0){
    return this.items.reduce((a, b) => a + b)
  } else{
    return 0;
  }

}

  avg() {
    return this.items.reduce((a, b) => a + b)/this.items.length
  }
}

module.exports = SortedList;
