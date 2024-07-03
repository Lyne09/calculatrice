function testCalculate() {
    document.getElementById('display').value = '2+2';
    calculate();
    console.assert(document.getElementById('display').value == '4', 'Test Failed: 2+2 should equal 4');

    document.getElementById('display').value = '2*3';
    calculate();
    console.assert(document.getElementById('display').value == '6', 'Test Failed: 2*3 should equal 6');

    document.getElementById('display').value = '10/2';
    calculate();
    console.assert(document.getElementById('display').value == '5', 'Test Failed: 10/2 should equal 5');

    document.getElementById('display').value = '5-3';
    calculate();
    console.assert(document.getElementById('display').value == '2', 'Test Failed: 5-3 should equal 2');
}

testCalculate();
