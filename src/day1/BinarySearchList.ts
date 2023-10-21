export default function bs_list(haystack: number[], needle: number): boolean {
    let lowPoint = 0;
    let highPoint = haystack.length

    do {
        const midPoint = Math.floor((lowPoint + highPoint) / 2)
        
        if (haystack[midPoint] === needle) {
            return true;
        }

        if (haystack[midPoint] > needle) {
            highPoint = midPoint
        } else {
            lowPoint = midPoint + 1
        }

    } while (lowPoint < highPoint)

    return false;
}
