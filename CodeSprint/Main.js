const questions = [
    {
        title: "Two Sum",
        url: "https://leetcode.com/problems/two-sum/"
    },
    {
        title: "Add Two Numbers",
        url: "https://leetcode.com/problems/add-two-numbers/"
    },
    {
        title: "Longest Substring Without Repeating Characters",
        url: "https://leetcode.com/problems/longest-substring-without-repeating-characters/"
    },
    {
        title: "Median of Two Sorted Arrays",
        url: "https://leetcode.com/problems/median-of-two-sorted-arrays/"
    },
    {
        title: "Longest Palindromic Substring",
        url: "https://leetcode.com/problems/longest-palindromic-substring/"
    },
    {
        title: "Container With Most Water",
        url: "https://leetcode.com/problems/container-with-most-water/"
    },
    {
        title: "3Sum",
        url: "https://leetcode.com/problems/3sum/"
    },
    {
        title: "Valid Parentheses",
        url: "https://leetcode.com/problems/valid-parentheses/"
    },
    {
        title: "Merge Two Sorted Lists",
        url: "https://leetcode.com/problems/merge-two-sorted-lists/"
    },
    {
        title: "Best Time to Buy and Sell Stock",
        url: "https://leetcode.com/problems/best-time-to-buy-and-sell-stock/"
    }
];

const questionsList = document.getElementById('questions-list');
questions.forEach(q => {
    const li = document.createElement('li');
    const a = document.createElement('a');
    a.href = q.url;
    a.textContent = q.title;
    a.target = '_blank';
    li.appendChild(a);
    questionsList.appendChild(li);
});
