import type { LeetCodeStats } from '../types';

export const leetcodeData: LeetCodeStats = {
  username: 'adarshh025',
  profileUrl: 'https://leetcode.com/u/adarshh025',
  repoUrl: 'https://github.com/adarshh025/leetcode-solves',
  verifiedSolved: 102,
  easySolved: 43,
  mediumSolved: 32,
  hardSolved: 27,
  totalSubmissions: 163,
  globalRanking: 1647346,
  repoTotalSolves: 89,
  topicBreakdown: [
    {
      topic: 'Dynamic Programming & Memoization',
      verifiedCount: 24,
      representativeProblem: 'Stone Game II (#1140) & Number of Paths with Max Score (#1301)'
    },
    {
      topic: 'Graph Theory & State Space BFS',
      verifiedCount: 16,
      representativeProblem: 'Sliding Puzzle (#773) & Jump Game IV (#1345)'
    },
    {
      topic: 'Game Theory & Minimax Decisions',
      verifiedCount: 8,
      representativeProblem: 'Predict the Winner (#486) & Stone Game (#877)'
    },
    {
      topic: 'Monotonic Stacks & Greedy Optimization',
      verifiedCount: 12,
      representativeProblem: 'Smallest Subsequence of Distinct Characters (#1081)'
    },
    {
      topic: 'Binary Search & Divide and Conquer',
      verifiedCount: 14,
      representativeProblem: 'Median of Two Sorted Arrays (#4) & Find Min in Rotated Array II (#154)'
    },
    {
      topic: 'Strings, Sliding Window & Hash Maps',
      verifiedCount: 18,
      representativeProblem: 'Longest Substring Without Repeating Characters (#3)'
    },
    {
      topic: 'Trees, Recursion & Binary Serialization',
      verifiedCount: 10,
      representativeProblem: 'Sum of Root-to-Leaf Binary Numbers (#1022)'
    }
  ],
  curatedSolutions: [
    {
      number: '0773',
      title: 'Sliding Puzzle',
      difficulty: 'Hard',
      topics: ['Breadth-First Search', 'State Space Graph', 'Bitmasking'],
      timeComplexity: 'O((R * C)! * (R * C))',
      spaceComplexity: 'O((R * C)!)',
      repoDirectory: '0773-sliding-puzzle'
    },
    {
      number: '0004',
      title: 'Median of Two Sorted Arrays',
      difficulty: 'Hard',
      topics: ['Binary Search', 'Divide and Conquer', 'Arrays'],
      timeComplexity: 'O(log(min(m, n)))',
      spaceComplexity: 'O(1)',
      repoDirectory: '0004-median-of-two-sorted-arrays'
    },
    {
      number: '1140',
      title: 'Stone Game II',
      difficulty: 'Medium',
      topics: ['Dynamic Programming', 'Game Theory', 'Memoization'],
      timeComplexity: 'O(N^3)',
      spaceComplexity: 'O(N^2)',
      repoDirectory: '1140-stone-game-ii'
    },
    {
      number: '1081',
      title: 'Smallest Subsequence of Distinct Characters',
      difficulty: 'Medium',
      topics: ['Monotonic Stack', 'Greedy', 'String'],
      timeComplexity: 'O(N)',
      spaceComplexity: 'O(1) [bounded by alphabet size]',
      repoDirectory: '1081-smallest-subsequence-of-distinct-characters'
    },
    {
      number: '1345',
      title: 'Jump Game IV',
      difficulty: 'Hard',
      topics: ['Breadth-First Search', 'Graph Traversal', 'Hash Table'],
      timeComplexity: 'O(N)',
      spaceComplexity: 'O(N)',
      repoDirectory: '1345-jump-game-iv'
    },
    {
      number: '0486',
      title: 'Predict the Winner',
      difficulty: 'Medium',
      topics: ['Minimax', 'Dynamic Programming', 'Recursion'],
      timeComplexity: 'O(N^2)',
      spaceComplexity: 'O(N)',
      repoDirectory: '0486-predict-the-winner'
    },
    {
      number: '0003',
      title: 'Longest Substring Without Repeating Characters',
      difficulty: 'Medium',
      topics: ['Sliding Window', 'Hash Table', 'Two Pointers'],
      timeComplexity: 'O(N)',
      spaceComplexity: 'O(min(N, M))',
      repoDirectory: '0003-longest-substring-without-repeating-characters'
    },
    {
      number: '1301',
      title: 'Number of Paths with Max Score',
      difficulty: 'Hard',
      topics: ['Dynamic Programming', '2D Matrix Transitions'],
      timeComplexity: 'O(N^2)',
      spaceComplexity: 'O(N^2)',
      repoDirectory: '1301-number-of-paths-with-max-score'
    }
  ]
};
