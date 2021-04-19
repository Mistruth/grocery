export function rob(nums: number[]): number {

    const dp: number[] = []
    const another: number[] = [0]

    for(let i = 0; i < nums.length; i++) {
      if(i === nums.length - 1) {
        dp[i] = Math.max(dp[i - 1], another[i - 2] + nums[i])
        continue
      }

      if(i - 2 >= 0) {

        dp[i] = Math.max(dp[i - 2] + nums[i], dp[i - 1])
        another[i] = Math.max(another[i - 2] + nums[i], another[i - 1])

      } else {
        dp[i] = Math.max(...dp, nums[i])
        if(i > 0) {
          another[i] = Math.max(...another, nums[i])
        }
      }
    }

    return dp[dp.length - 1]
};

