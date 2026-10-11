// =============================================================================
// PATTERN 10: TRIES (PREFIX TREES FOR STRINGS & WILDCARDS)
// =============================================================================
// 🎯 When to use:
// - Prefix matching (startsWith), autocomplete.
// - Word search dictionary with '.' wildcards.
// - Word Search II on 2D board with Trie dictionary.
// =============================================================================

class TrieNode {
    constructor() {
        this.children = {};
        this.isEnd = false;
    }
}

class Trie {
    constructor() { this.root = new TrieNode(); }

    insert(word) {
        let node = this.root;
        for (const ch of word) {
            if (!node.children[ch]) node.children[ch] = new TrieNode();
            node = node.children[ch];
        }
        node.isEnd = true;
    }

    search(word) {
        let node = this.root;
        for (const ch of word) {
            if (!node.children[ch]) return false;
            node = node.children[ch];
        }
        return node.isEnd;
    }

    startsWith(prefix) {
        let node = this.root;
        for (const ch of prefix) {
            if (!node.children[ch]) return false;
            node = node.children[ch];
        }
        return true;
    }
}

const trie = new Trie();
trie.insert("apple");
console.log("Search 'apple':", trie.search("apple")); // true
console.log("Search 'app':", trie.search("app")); // false
console.log("StartsWith 'app':", trie.startsWith("app")); // true
