# euclid.py
# CS 1501
# Andrew Levandoski
# 2017

# Basic iterative GCD calculation
def gcd(a, b):
    while b:
        a, b = b, a % b

    return a

# Recursive implementation of previous method
def gcd_recursive(a, b):
    if b == 0:
        return a
    else:
        return gcd_recursive(b, a % b)

# Extended implementation
def gcd_extended(a, b):
    prev_x, x = 1, 0
    prev_y, y = 0, 1

    while b:
        q = a / b
        x, prev_x = prev_x - q * x, x
        y, prev_y = prev_y - q * y, y
        a, b = b, a % b

    return  a, prev_x, prev_y

def main():
    my_gcd = gcd(99, 78)
    print "iterative gcd: ", my_gcd

    my_gcd = gcd_recursive(99, 78)
    print "recursive gcd: ", my_gcd

    my_gcd, s, t = gcd_extended(99, 78)
    print "extended gcd: ", my_gcd, s, t

    return

if __name__ == "__main__":
    main()
