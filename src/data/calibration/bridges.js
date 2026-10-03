// Explicit teaching support for new models; a level sort cannot teach a method.
export const bridges = [
  { book: 'prealgebra', chapter: 7, groups: ['challenge', 'worksheet'], sections: ['7.5', '7.6'], note: 'Before mixed rate problems, work through delayed starts, reverse average speed, and changing work teams.' },
  { book: 'prealgebra', chapter: 13, groups: ['worksheet'], sections: ['13.2'], note: 'Before building your own data set, try the four-number example, then the six-number example. Keep the numbers sorted while checking the total, middle, and range.' },
  { book: 'intro-counting', chapter: 1, groups: ['challenge'], sections: ['1.4'], note: 'First try the worked example with a restricted final digit: choose that digit, then count the remaining choices.' },
  { book: 'intro-counting', chapter: 3, groups: ['3.2', 'challenge', 'worksheet'], sections: ['3.2', '3.4'], note: 'Review gaps between repeated letters and overlapping forbidden cases. The symmetry examples build from a triangle to optional repeated-color necklaces.' },
  { book: 'intro-counting', chapter: 5, groups: ['5.4'], sections: ['5.4'], note: 'Try distributing objects to two labeled boxes first. Count all assignments, then subtract the two empty-box cases before handling more restrictions.' },
  { book: 'intro-counting', chapter: 12, groups: ['12.3'], sections: ['12.3'], note: 'First connect a single endpoint in Pascal’s triangle to the number of right steps. Then combine or restrict the possible endpoints.' },
  { book: 'intro-geometry', chapter: 7, groups: ['7.2'], sections: ['7.2'], note: 'Try the worked circumcenter equation before the optional coordinate challenge. Ordinary right-triangle centers are enough to continue on the main path.' },
]

export function bridgesFor(book, chapter, group) {
  return bridges.filter(b => b.book === book && b.chapter === chapter && (!group || b.groups.includes(group)))
}
