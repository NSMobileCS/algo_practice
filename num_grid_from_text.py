import sys
# tools for finding diagonals etc in grids.


def mk_grid(txt):
    return tuple([tuple([int(ch) for ch in row.split()]) for row in txt.split('\n') if row])

def get_top_diags(grid, min_length=4):
    """
    gets diagonals that touch top row
    """
    diags = []
    for cdx in range(len(grid[0])):
        a, b = 0, cdx
        r = [grid[a][b]]
        c, d = a + 1, b + 1
        while (c < len(grid)) and (d < len(grid[0])):
            r.append(grid[c][d])
            a, b = c, d
            c += 1
            d += 1
        if len(r) > min_length:
            diags.append(tuple(r))
        l = [grid[a][b]]
        a, b = 0, cdx
        c, d = a - 1, b - 1
        while (c > -1) and (d > -1):
            l.append(grid[c][d])
            a, b = c, d
            c += 1
            d += 1
        if len(l) > min_length:
            diags.append(tuple(l))
    return tuple(diags)

def get_bottom_diags(grid, min_length=4):
    diags = []
    for cdx in range(len(grid[0])): # or len(grid[-1]), it's the same
        a, b = len(grid) - 1, cdx
        r = [grid[a][b]]
        a -= 1
        b += 1
        while (a > -1) and (b < len(grid[0])):
            r.append(grid[a][b])
            a -= 1
            b += 1
        if len(r) >= min_length:
            diags.append(tuple(r))
        a, b = len(grid) - 1, cdx
        l = [grid[a][b]]
        a -= 1
        b -= 1
        while (a > -1) and (b > -1):
            l.append(grid[a][b])
            a -= 1
            b -= 1
        if len(l) >= min_length:
            diags.append(tuple(l))
    return tuple(diags)

def get_cols(grid):
    return tuple([tuple([grid[cdx][rdx] for rdx in range(len(grid))]) for cdx in range(len(grid[0]))])



def greatest_adj_prod(subseqs):
    def X_up(nums):
        res = 1
        for n in nums:
            res *= n
        return res
    max_prod = 0
    max_prod_tup = (0, 0, 0)
    for subseq in subseqs:
        for idx in range(len(subseq)-4):
            S = X_up(subseq[idx:idx+4])
            if S > max_prod:
                max_prod = S
                max_prod_tup = (subseq[idx], subseq[idx+1], subseq[idx+2], subseq[idx+3])
    print(f'MAX (len 4): {max_prod_tup}, {max_prod}')
    return max_prod

if __name__ == '__main__':
    if len(sys.argv) > 1:
        with open(sys.argv[1], 'r') as gridfile:
            txtgrid = gridfile.read()
        grid1 = mk_grid(txtgrid)
        diagonals = get_bottom_diags(grid1) + get_top_diags(grid1)
        columns = get_cols(grid1)
        seq = grid1 + diagonals + columns
        greatest_adj_prod(seq)
    else:
        print("pass in file location of text grid as cmd parameter")
