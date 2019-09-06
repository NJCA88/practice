def addStrings(string1, string2)
    # Write your code here

    #first add the decimals, then use that carry to the nums
    with_dec1 = string1.split(".")
    with_dec2 = string2.split(".")
    p "groups : ", with_dec1, with_dec2

    if string1.to_f < 1 
        with_dec1.unshift('0')
    end
    if string2.to_f < 1
        with_dec2.unshift('0')
    end
    if with_dec1.length == 1
        with_dec1.push('0')
    end
    if with_dec2.length == 1
        with_dec2.push('0')
    end

    res = add_nums(with_dec1[1], with_dec2[1], 0)
    dec = res[0]
    carry = res[1]
    
    res2 = add_nums(with_dec1[0], with_dec2[0], carry)
    value = res2[1].to_i + res2[0].to_i
    # p 'num, dec: ', value, dec
    answer = [value, dec].join('.')
    p "answer is: ", answer
    
    return


end

def  add_nums(string1, string2, carry_in)
    # returns a number and a carry
    s1 = string1
    s2 = string2
    while s1.length != s2.length
        if s1.length < s2.length
            s1 = "0" + s1
        else
            s2 = "0" + s2
        end
    end
    arr1 = s1.split("")
    arr2 = s2.split("")
    
    answer = []
    carry = carry_in
    while arr1.length > 0
        num1 = arr1.pop.to_i
        num2 = arr2.pop.to_i

        num = num1 + num2 + carry
        if num > 9
            carry = num /10
        end
        digit = num % 10
        p "carry, digit", carry, digit
        answer.unshift(digit)
        p 'answer is: ', answer 
    end
    # if carry != 0
    #     answer.unshift(carry)
    # end
    p "answer is: ", answer.join("")
    return [answer.join(""), carry]
end

addStrings('1.3', '1')