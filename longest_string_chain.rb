class Strings_hash
    attr_accessor :words
    def initialize(words)
        self.words = words
    end
end

my_hash = Strings_hash.new(['cat', 'dog', 'kangaroo'])

p 'hash is: ', my_hash
p my_hash.words
# descending_length = (a, b) {a.length <=> b.length})

arr = ['cat', 'ca', 'bate', 'ratel', 'a']

# p "sorted: ",  arr.sort( & descending_length)
# p arr.sort_by { |a| !a.length }
# p arr