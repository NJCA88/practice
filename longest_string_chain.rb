require 'pry'

class Strings_hash
    attr_accessor :words
    def initialize(words)
        self.words = words
    end
end

my_hash = Strings_hash.new(['cat', 'dog', 'kangaroo'])


arr = ['cat', 'ca', 'bate', 'ratel', 'a']



def peak_index_in_mountain_array(a)
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