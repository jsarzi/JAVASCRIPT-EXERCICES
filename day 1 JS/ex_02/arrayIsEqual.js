function arrayIsEqual(arr1, arr2) {

   
    for (var i = 0; i < arr1.length; i++){
        if (arr1[i] !== arr2[i]) {
            return false;
        }
    }
    return true;

}
