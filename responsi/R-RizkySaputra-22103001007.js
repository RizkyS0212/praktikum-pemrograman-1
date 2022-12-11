const oddArray = [1,3,5,7,9];
const evenArray = [0,2,4,6,];
if(isOdd(oddArray.Length)){
    var result = sequentialSearch(oddArray,2);
    console.log("hasil pencaria:{result}");
}
else{
    var result = bubbleSort(evenArray);
    console.log("hasil pengurutan:{string.join"(",",result))}
{
    return number % 2 !=0;
    {
        function sequentialSearch(array, data){
            for(let i = 0; i<array.Length; i++){
                if(array[i] == data){
                    return i;{

                    }
                }
                return -1
            }
        } 
    }
}{
    function bubbleSort(array){
        for(let i = 0;i<array.Length -1;i++){
            for(let j = 0;j<array.Length -i-1;j++){
                if(array[j]>array[j + 1]){
                    var temp = array[j];
                    array[j] = array[j + 1];
                    array[j + 1] = temp;
                }
            }
        }
        return array;
    }
}
