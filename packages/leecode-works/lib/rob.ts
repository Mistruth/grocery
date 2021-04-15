export function rob(nums: number[]): number {

  const dp: number[] = []
  const dpWithoutFirst: number[] = [0]

  for(let i = 0; i < nums.length; i++) {

    if(i >= 3) {
      dpWithoutFirst[i] = Math.max(dpWithoutFirst[i - 2] + nums[i], dpWithoutFirst[i - 1])
      if(i === nums.length - 1) {
        dp[i] = Math.max(dpWithoutFirst[i - 2] + nums[i], dp[i - 3] + nums[i - 1], dp[i - 1])
      } else {
        dp[i] = Math.max(dp[i - 2] + nums[i], dp[i - 3] + nums[i - 1], dp[i - 1])
      }
    } else {
      dp[i] = Math.max(...dp, nums[i])
      if(i > 0) dpWithoutFirst[i] = Math.max(...dpWithoutFirst, nums[i])
    }
  }

  console.log('dpWithoutFirst',dpWithoutFirst)
  console.log('dp',dp)

  return dp[dp.length - 1]
};

