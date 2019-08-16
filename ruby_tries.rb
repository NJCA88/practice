
class Node
    attr_accessor :keys, :val,  :end
    def initialize( val = nil)
      self.keys = {}
      self.end = false
      self.val = val
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
      node.keys[input[0]] = Node.new(input[0])
      return self.add(input[1..-1], node.keys[input[0]])
    else
      return self.add(input[1..-1], node.keys[input[0]])
    end
  end

  def is_word(word)
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


My_trie = Trie.new
My_trie.add('cat')
My_trie.add('car')
My_trie.add('banana')
# p "trie is: ", my_trie



def get_prefixed_words(prefix)
    # FILL ME IN
    # return [@trie.is_word(prefix)]
    prefix_copy = prefix
    answer = []
    current_node = My_trie.root
    # p "val is: "
    # p My_trie.root.val
    # return ['alphabet']

    while prefix.length > 0
      # p "node is: ", current_node.keys
      node = current_node.keys[prefix[0]]
      prefix = prefix[1..-1]
      if node
        current_node = node
      else
        return "Sorry, we can't find any words with that prefix"
      end
    end
    #we now have the final letter of the prefix as the current node, I hope.
    # p "CURRENT NODE.VAL: ", current_node.val
    answer = dfs(current_node, prefix_copy[0...-1])
    return answer
  end


  def dfs(node, prefix)
    # p node
    # p "PREFIX IS: ", prefix
    # p "final node is: ", node
    # return prefix if !node
    prefix = prefix + node.val
    p "prefix is: ", prefix
    p "node is: ", node
    # return prefix if !node.keys
    if node.keys.length == 0
      p 'returning: ', prefix
      return prefix
    end
    # now we have the full prefix, ready to start looking at keys
    # ~~~~~
     node.keys
    p  node.keys.map{ |key, value|
     prefix + node.keys[key].val
  }
    # p "doing a thing"
    # ~~~
    # return 
    return node.keys.map {|key, value|
    dfs(node.keys[key], prefix)
   }

  end

  # p   get_prefixed_words('cat')

  # p 'done'

    def get_word_ladder(start_word, end_word)
    # FILL ME IN
    return ['dog', 'cat']
  end
  def neighbors?(word1, word2)
    # compares 2 words to see if they are neighbors
    #can only be neighbors if same length
    (0.. word1.length - 1).each do |idx|
      if (word1[0...idx] + '*' + word1[idx+1..-1]) == (word2[0...idx] + '*' + word2[idx+1..-1])
        return true
      end
    end
    return false
  end

  p neighbors?('cat', 'car')