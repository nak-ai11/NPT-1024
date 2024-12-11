def calculate_complexity(N):
    # 初期化: 複雑度を十分大きい値で初期化
    dp = [float('inf')] * (N + 1)
    dp[1] = 1  # 1の複雑度は1

    # 1からNまで計算
    for x in range(2, N + 1):
        # 和での生成
        for i in range(1, x):
            dp[x] = min(dp[x], dp[i] + dp[x - i])
        
        # 積での生成
        for i in range(1, int(x**0.5) + 1):
            if x % i == 0:
                j = x // i
                dp[x] = min(dp[x], dp[i] + dp[j])
    
    return dp[N]

# 標準入力からNを読み取る
if __name__ == "__main__":
    print("Enter the value of N (1 ≤ N ≤ 10000):")
    N = int(input().strip())
    print("Complexity C(N):", calculate_complexity(N))
