// =============================================================================
// TRIE (PREFIX TREE) IMPLEMENTATION IN JAVASCRIPT
// =============================================================================

class TrieNode {
    constructor() {
        this.children = {};
        this.isEndOfWord = false;
    }
}

class Trie {
    constructor() {
        this.root = new TrieNode();
    }

    // Insert word into Trie - O(L) where L is length of word
    insert(word) {
        let node = this.root;
        for (const char of word) {
            if (!node.children[char]) {
                node.children[char] = new TrieNode();
            }
            node = node.children[char];
        }
        node.isEndOfWord = true;
    }

    // Search for word in Trie - O(L)
    search(word) {
        let node = this.root;
        for (const char of word) {
            if (!node.children[char]) {
                return false;
            }
            node = node.children[char];
        }
        return node.isEndOfWord;
    }

    // Search for prefix in Trie - O(L)
    startsWith(prefix) {
        let node = this.root;
        for (const char of prefix) {
            if (!node.children[char]) {
                return false;
            }
            node = node.children[char];
        }
        return true;
    }

    // Get all words matching a prefix (Autocomplete feature)
    autoComplete(prefix) {
        let node = this.root;
        for (const char of prefix) {
            if (!node.children[char]) return [];
            node = node.children[char];
        }

        const results = [];
        function dfs(currentNode, currentPrefix) {
            if (currentNode.isEndOfWord) {
                results.push(currentPrefix);
            }
            for (const char in currentNode.children) {
                dfs(currentNode.children[char], currentPrefix + char);
            }
        }

        dfs(node, prefix);
        return results;
    }
}

// -----------------------------------------------------------------------------
// Testing Trie
// -----------------------------------------------------------------------------
const trie = new Trie();
trie.insert("apple");
trie.insert("app");
trie.insert("application");
trie.insert("aptitude");
trie.insert("bat");

console.log("Search 'app':", trie.search("app")); // true
console.log("Search 'apple':", trie.search("apple")); // true
console.log("Search 'appl':", trie.search("appl")); // false
console.log("StartsWith 'appl':", trie.startsWith("appl")); // true
console.log("Autocomplete 'ap':", trie.autoComplete("ap")); // ['app', 'apple', 'application', 'aptitude']
