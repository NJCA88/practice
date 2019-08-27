require 'pry'

class Strings_hash
    attr_accessor :words
    def initialize(words)
        self.words = words
    end
end

my_hash = Strings_hash.new(['cat', 'dog', 'kangaroo'])

# p 'hash is: ', my_hash
# p my_hash.words
# descending_length = (a, b) {a.length <=> b.length})

arr = ['cat', 'ca', 'bate', 'ratel', 'a']

# p "sorted: ",  arr.sort( & descending_length)
# p arr.sort_by { |a| !a.length }
# p arr

def peak_index_in_mountain_array(a)
    # a.each_with_index do |el, idx|
    #     return idx if el> a[idx+1]
    # end
    # return arr.length /2
    p "array is: ", a
    mid = a.length / 2 

    if (a[mid] > a[mid-1]) && (a[mid] > a[mid+1] )
        return mid
    end
    if a[mid] < a[mid-1]
        return peak_index_in_mountain_array( a.slice(0, mid + 1))
    elsif a[mid] < a[mid+1]
        return peak_index_in_mountain_array(a.slice(mid, a.length)) + mid
    end
end

p peak_index_in_mountain_array([0,2, 1,0])