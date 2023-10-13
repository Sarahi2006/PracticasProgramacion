//Bubble sort (ordenamiento por burbujas)
/*
function bubbleSort(arr){
    let len = arr.length;
    for(let i = 0; i < len; i++){
        for(let j = 0; j < len -1; j++){
            if(arr[j] > arr[j + 1]){

                let temp = arr[j];

                arr[j] = arr[j+1];

                arr[j+1] = temp;

            }
        }
    }
    return arr
}

let arr = [64, 34, 25, 12, 22, 11, 90]
console.log(bubbleSort(arr));
*/



//ejercicio2
/*
function blubleSort(arr, prop){
    let len = arr.length;
    for(let i = 0; i < len; i++){
        for(let j = 0; j < len - 1; j++){
            if(arr[j][prop] > arr[j+1][prop]){
                let temp = arr[j];
                arr[j] = arr[j+1];
                arr[j + 1] = temp;
            }
        }
    }
    return arr;
}

let arr = [
    {name:'John', age: 25},
    {name:'Mary', age: 30},
    {name:'Bob', age: 20},

];

console.log(blubleSort(arr,"age"));*/

//ejercicio 3

/*function selectionSort(arr){
    let len = arr.length

    for(let i = 0; i < len - 1; i++){
        let min = i;

        for(let j = i + 1;j < len; j++){
            if(arr[j] < arr[min]){
                min = j;
            }
        }

        if(min !== i){
            var temp = arr[i];
            arr[i] = arr[min];
            arr[min] = temp;
        }
    }
    return arr; 
}

let arr = [64, 34, 25, 22, 11, 90]
console.log(selectionSort(arr)); */

//ejercicio 4
/*function selectionSort(arr, prop){
    let len = arr.length;
    for(let i = 0; i < len -1; i++){
        let min = i;

        for(j = i + 1; j < len; j++){
            if(arr[j][prop] < arr[min][prop]){
                min = j;
            }
        }
        if(min !== i){
            let temp = arr[i];
            arr[i] = arr[min];
            arr[min] = temp;
        }
    }
    return arr;
}

var arr = [
    {name:'John', age: 25},
    {name:'Mary', age: 30},
    {name:'Bob', age: 20},

];

console.log(selectionSort(arr,"age"));*/

//
/*function insertionSort(arr){
    var len = arr.length;
    for(var i = 1; i < len; i++){
        var key = arr[i];
        var j = i - 1;
        while (j >= 0 && arr[j] > key){
            arr[j + 1] = arr[j];
            j = j - 1
        }
        arr[j + 1] = key;
    }
    return arr;
}

var arr = [64, 34, 25, 12, 22, 11, 90];
console.log(insertionSort(arr));*/

/*function insertionSort(arr, prop){
    var len = arr.length;
    for(var i = 1; i < len; i++){
        var key = arr[i];
        var j = i - 1;
        while(j >= 0 && arr[j][prop] > key[prop]){
            arr[j + 1] = arr[j];
            j = j - 1;
        }
        arr[j + 1]= key;
    }
    return arr;
}


let arr = [
        {name:'John', age: 25},
        {name:'Mary', age: 30},
        {name:'Bob', age: 20},
    
];
    
console.log(insertionSort(arr,"age"));*/
