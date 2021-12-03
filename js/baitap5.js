/**
 * Khối 1: Input
 * num (số nguyên dương có 2 chữ số)
 * 
 * Khối 2:
 * B1: tạo biến và gán giá trị
 * ten  (hàng chục)
 * unit (hàng đơn vị)
 * B2: lấy hàng chục và đơn vị
 *     ten = Math.floor(num/10)
 *     unit = num%10
 * B3: tính tổng các chữ số của num
 *     tong = ten + unit
 * 
 * Khối 3: Output
 * tổng các chữ số của số num
 * 
 */

// B1:
var num = 94;

// B2:
var ten = Math.floor(num/10);
var unit = num%10;

// B3:
var tong = ten + unit;
console.log('Số 94 có tổng 2 chữ số là: ' + tong);