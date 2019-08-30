def braces(values)
    answer = []
    values.each do |input|
        answer.push(test_braces(input))
    end
    return answer.length
end

def test_braces(word)
    braces = {'{'=>'}', '}'=>'{', '('=> ')', ')'=>'(', '['=>']', ']'=>'['}
    p1 = 0
    p2 = word.length - 1
        p "p1, p2: ", p1, p2

    while p1 < p2
        #whle the pointers haven't yet met / crossed
        # p "p1, p2: ", p1, p2
        p "iterating over while loop"
        # p "vals: ", word[p1], word[p2]
        if braces[word[p1]] #if its a type of brace
            # p "starting with: ", word[p2]
                p "p2 is: ", p2
            if word[p2] == braces[word[p1]]
                p2 -=1
                p1 +=1
                next
            end
            while word[p2] != braces[word[p1]]
                if p1 >= p2
                    return "NO"
                end
            end
            p1 += 1
        else
            p1 +=1
        end
        if braces[word[p2]] #if its a type of brace
            if word[p1] == braces[word[p2]]
                p2 -=1
                p1 +=1
                next
            end
            while word[p1] != braces[word[p2]]
                p "bottom while: ", p1, p2
                p1 += 1
                if p1 >= p2
                    p "ending bottom p1, p2: ", p1, p2
                    return "NO"
                end
            end
            p2 -=1
        else
            p2 -= 1
        end
    end
    return "YES"
end

p test_braces( '{}[]()' )

