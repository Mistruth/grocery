// 直方图的水量
// 给定一个直方图(也称柱状图)，假设有人从上面源源不断地倒水，最后直方图能存多少水量?直方图的宽度为 1。
function trap(height) {
    var left = 0;
    var right = height.length - 1;
    var sum = 0;
    var min = 0;
    while (left < right) {
        // 瓶颈在右边
        if (height[left] >= height[right]) {
            min = Math.max(height[right], min);
            sum += (min - height[right]);
            right--;
        }
        else {
            min = Math.max(height[left], min);
            sum += (min - height[left]);
            left++;
        }
    }
    return sum;
}
;
var res = trap([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]);
console.log(res);
