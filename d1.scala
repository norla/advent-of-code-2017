val digits = io.Source.stdin.getLines().next.split("").map(s => s.toInt)

val res = digits.indices.foldLeft(0) ((sum, index) => {
  val nextIndex = (index + 1) % digits.length
  if (digits(index) == digits(nextIndex)) sum + digits(index) else sum
})

println(res)



