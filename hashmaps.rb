# https://www.hackerrank.com/challenges/sherlock-and-anagrams/problem?h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=dictionaries-hashmaps
#Sherlock and Anagrams
#Anagrammatic pairs of substrings in a string.

#no buckets appraoch

require 'byebug'

def sherlockAndAnagrams(s)
    sub_hashes = []
    (0..s.length).each do |idx1|
        (idx1 + 1 ...s.length).each do |idx2|
            sub = s.slice(idx1, idx2-idx1)
            hash = Hash.new(0)
            sub.each_char do |letter|
                hash[letter] +=1
            end
            sub_hashes.push(hash)
        end
    end
    counter = 0
    (0..sub_hashes.length).each do | idx1|
        (idx1 + 1  ...sub_hashes.length).each do | idx2|
            counter += 1 if sub_hashes[idx1] == sub_hashes[idx2]
        end
    end 
    counter 
end

#buckets approach
def sherlockAndAnagrams(s)
    sub_hashes = []
    buckets = []
    s.length.times do |time|
        buckets.push( [] )
    end
    (0..s.length).each do |idx1|
        (idx1 + 1 ...s.length).each do |idx2|
            sub = s.slice(idx1, idx2-idx1)
            hash = Hash.new(0)
            sub.each_char do |letter|
                hash[letter] +=1
            end
            buckets[hash.length].push(hash)
        end
    end
    counter = 0

    buckets.each do |bucket|
        debugger
        #each bucket is an array
        (0..bucket.length).each do | idx1|
            (idx1 + 1  ..bucket.length).each do | idx2|
                counter += 1 if bucket[idx1] == bucket[idx2]
            end
        end 
    end
    counter 
end

#Bobby solution

def factorial(n)
    (1..n).reduce(:*)
end

def sherlockAndAnagrams(s)
    counter = Hash.new(0)

    (1..s.length).each do |window_size|
        (0..(s.length - window_size)).each do |window_start|
            substring = s.slice(window_start, window_size)
            counter[substring.chars.sort.join] += 1
        end
    end

    total = 0

    counter.each do |substring, count|
        if count == 2
            total += 1
        elsif count > 2
            total += factorial(count) / (factorial(count - 2) * 2)
        end
    end

    total
end
#end Bobby solution

sherlockAndAnagrams('abba')