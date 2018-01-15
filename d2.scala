val diffs = for (l <- io.Source.stdin.getLines()) yield {
  val row = l.split("\\t").map(s => s.toInt)
  row.max - row.min
}
println(diffs.sum)


