function cookingMasterclass(arr) {

    let budget = arr[0];
    let studentsCount = arr[1];
    let floarPrice = arr[2];
    let eggPrice = arr[3];
    let apronPrice = arr[4];

    let floarNeeded = studentsCount;
    if (floarNeeded >= 5) {
        let x = floarNeeded / 5;
        floarNeeded -= x;
    }
    let eggNeeded = studentsCount * 10;
    let apronNeeded = Math.ceil(studentsCount * 1.2);

    let sumForAllNeeded = (apronNeeded * apronPrice) + (eggNeeded * eggPrice) + (floarNeeded * floarPrice);

    if (budget >= sumForAllNeeded) {
        console.log(`Items purchased for ${sumForAllNeeded.toFixed(2)}$.`);
    } else {
        console.log(`${(sumForAllNeeded - budget).toFixed(2)}$ more needed.`);
    }
}
cookingMasterclass([946,
    20,
    12.05,
    0.42,
    27.89])

