
  class Node
    attr_accessor :keys, :end
    def initialize
      self.keys = {}
      self.end = false
    end
    def set_end
      self.end = true
    end
    def is_end?
      self.end
    end
  end

  class Trie
    attr_accessor :root

    def initialize
      self.root = Node.new
    end
    
    def add(input, node = self.root)
      if input.length == 0
        node.set_end
        return
      elsif !node.keys[input[0]]
        node.keys[input[0]] = Node.new()
        return self.add(input[1..-1], node.keys[input[0]])
      else
        return self.add(input[1..-1], node.keys[input[0]])
      end
    end
  
    def isWord(word)
      node = root
      while word.length > 1
        if (!node.keys[word[0]])
          return false
        else
          node = node.keys[word[0]]
          word = word[1..-1]
        end
      end
      return node.keys[word] && node.keys[word].is_end? ? true : false
    end
     
  end

  my_trie = Trie.new
  my_trie.add('car')
  puts "TEST VALUE OF ISWORD CAR", my_trie.isWord('cat')
# print 'cat'