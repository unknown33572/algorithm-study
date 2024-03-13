

class TrieNode:
  def __init__(self):
    self.children = {}
    self.isEnd = False
    
class Trie:
  def __init__(self):
    self.root = TrieNode()
    
  def insert(self, word):
    currentNode = self.root
    for char in word:
      if char not in currentNode.children:
        currentNode.children[char] = TrieNode()
      currentNode = currentNode.children[char]
    currentNode.isEnd = True
    
  def search(self, word):
    currentNode = self.root
    for char in word:
      if char not in currentNode.children:
        return False
      currentNode = currentNode.children[char]
    return currentNode.isEnd
  
  def startsWith(self, prefix):
    currentNode = self.root
    for char in prefix:
      if char not in currentNode.children:
        return False
      currentNode = currentNode.children[char]
    return True

def collectAllWord(self, node = None, word = '', words = []):
  currentNode = node or self.root
  
  for key, childNode in currentNode.children.items():
    if key == '*':
      words.append(word)
    else:
      self.collectAllWord(childNode, word + key, words)
  return words

def test_collectAllWord():
  trie = Trie()
  trie.insert('hello')
  trie.insert('world')
  assert trie.collectAllWord() == ['hello', 'world']
  print('test_collectAllWord passed')
  
test_collectAllWord()