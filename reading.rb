# read = File.open('data.txt').read
read = File.readlines('data.txt')
p 'read: ', read

result = []
read.each do |line|
    result.push(line)
end
p 'result is: ', result
p 'eachline: '
File.foreach('data.txt').with_index do |line, line_num|
   puts "#{line_num}: #{line}"
end