def my_sqrt(x)
    return 1 if x == 1
    return 0 if x == 0
    
    return b_search_sqrt( [0, x], x)
    
end
    
def b_search_sqrt( range, target)
    p "b searching with range: ", range
    # return false if range[1] == range[0]
    check = ((range[1] - range[0]) /2) + range[0]
    p "check is: ", check
    if check*check == target
        return check
    elsif check*check > target
        #move left
        # p "going left"
        return check if check+1 > target
        new_min = range[0]
        new_max = range[1] - ((range[1] - range[0]) / 2)
        # return new_min if new_min == new_max
        if new_min == new_max || new_min + 1 == new_max
            return new_min
        end

        return b_search_sqrt([new_min, new_max], target)
    else
        #move right
        p "going right"
        p "check was: ", check
        return check if check-1 > target
        new_min = range[0] + (( range[1] - range[0]) /2)
        new_max = range[1]
        p "new range is: ", new_min, new_max

        if new_min == new_max || new_min + 1 == new_max
            return new_min
        end
        return b_search_sqrt([new_min, new_max], target)
    end
end

p my_sqrt(8)