var isIsomorphic = function (s, t) {

    if (new Set(s).size !== new Set(t).size) return false;
    let map = new Map()
    for (let i = 0; i < s.length; i++) {
        if (map.has(s[i]) && map.get(s[i]) !== t[i]) {
            console.log(false)
            return false
        }
        map.set(s[i], t[i])

    }
    console.log(map)
    return true
};

isIsomorphic('egg', 'add')
isIsomorphic('ab', 'aa')
isIsomorphic('aa', 'ab')
isIsomorphic('ab', 'ca')

