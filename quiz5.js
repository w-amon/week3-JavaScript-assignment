const testScoreIs = 80;

if (testScoreIs < 30) {
    console.log('failed');
} else if (testScoreIs >= 31 && testScoreIs <= 40) {
    console.log('E');
} else if (testScoreIs >= 41 && testScoreIs <= 49) {
    console.log('D');
} else if (testScoreIs >= 50 && testScoreIs <= 59) {
    console.log('C');
} else if (testScoreIs >= 60 && testScoreIs <= 69) {
    console.log('B');
} else if (testScoreIs >= 70 && testScoreIs <= 100) {
    console.log('A');
} else if (testScoreIs > 100) {
    console.log('out of range');
} else {
    console.log('no test score');
}
