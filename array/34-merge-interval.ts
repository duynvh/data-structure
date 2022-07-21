// Intervals: [[1,4], [2,5], [7,9]]
// Output: [[1,5], [7,9]]
// Explanation: Since the first two intervals [1,4] and [2,5] overlap, we merged them into 
// one [1,5]

// Intervals: [[6,7], [2,4], [5,9]]
// Output: [[2,4], [5,9]]
// Explanation: Since the intervals [6,7] and [5,9] overlap, we merged them into one [5,9].

// Intervals: [[1,4], [2,6], [3,5]]
// Output: [[1,6]]
// Explanation: Since all the given intervals overlap, we merged them into one.

class Interval {
    start: number;
    end: number;
   
    constructor(start: number, end: number) {
      this.start = start;
      this.end = end;
    }
}

function mergeInterval(intervals: Interval[]): Interval[] {
    const sortedIntervals: Interval[] = intervals.sort((n1, n2) => {
        return n1.start - n2.start;
    });

    if (sortedIntervals.length < 2) return sortedIntervals;
    
    const result: Interval[] = [sortedIntervals[0]];

    for (let i = 1; i < sortedIntervals.length; i++) {
        const lastInterval = result[result.length - 1];
        const currentInterval = sortedIntervals[i];

        if (currentInterval.start <= lastInterval.end) {
            result.pop();
            const maxEnd = Math.max(lastInterval.end, currentInterval.end);
            result.push(new Interval(lastInterval.start, maxEnd));
        } else {
            result.push(currentInterval);
        }
    }

    return result;
}

let input: Interval[] = [];
input.push(new Interval(6, 7));
input.push(new Interval(2, 4));
input.push(new Interval(5, 9));

console.log(mergeInterval(input));

input = [];
input.push(new Interval(1, 4));
input.push(new Interval(2, 5));
input.push(new Interval(7, 9));

console.log(mergeInterval(input));

input = [];
input.push(new Interval(1, 4));
input.push(new Interval(2, 6));
input.push(new Interval(3, 5));

console.log(mergeInterval(input));