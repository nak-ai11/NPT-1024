#素因数分解をしたとき、7であれば6+1までできる。
#ということは、これを敷き詰めるwhile分が書ければ解けるはず


a=[]
def prime_factorize(n):
    a = []
    while n % 2 == 0:
        a.append(2)
        n //= 2
    f = 3
    while f * f <= n:
        if n % f == 0:
            a.append(f)
            n //= f
        else:
            f += 2
    if n != 1:
        a.append(n)
    return a

number = int(input("数字入力→"))
prime_factorize(number)
ans = 0
for i in range(len(prime_factorize(number))):
    cnt = 1
    for i in range(2,len(prime_factorize(number))+1):
        for j in range(2,i):
            if i%j==0:
                break
            elif i%j!=0 and j==i-1:
                cnt+=1
    if cnt == 1:
        sosu= prime_factorize(number)[i] - 1
        prime_factorize(sosu)
        ans += 1
    else:
        prime_factorize(number)[i]


for i in range(len(prime_factorize(sosu))):
    ans += prime_factorize(sosu)[i]
print(prime_factorize(sosu))
print(ans)
