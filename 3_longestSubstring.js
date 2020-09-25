var lengthOfLongestSubstring = function(s) {
    let p1 = 0
    let p2 = 1
    let maxSize = 0
    let set = new Set();
    if(s.length == 0) return 0
    if(s.length == 1) return 1

    while(p2 < s.length) {
        if(!set.has(s[p2])) {
            set.add(s[p1])
            set.add(s[p2])
            p2++
            // console.log("size:" +set.size)
            if(set.size > maxSize) maxSize = set.size

        } else {
            set.clear()
            p1++
            p2 = p1+1
        }
    }
    console.log(maxSize)
};

lengthOfLongestSubstring("bbbbb")
lengthOfLongestSubstring("abcabcbb")
lengthOfLongestSubstring("aaba")
lengthOfLongestSubstring("aab")
lengthOfLongestSubstring("pwwkew")
lengthOfLongestSubstring("a")

