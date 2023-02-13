function maxe(arr) {

    var maxValue = arr[0];

    for (var i = 1; i < arr.length; i++) {

        maxValue = Math.max(maxValue, arr[i]);

    }

    return maxValue;

    alert(maxValue);

    console.log(maxe.name);//Print maxe

    console.log(maxe.length);//Print 1

}
