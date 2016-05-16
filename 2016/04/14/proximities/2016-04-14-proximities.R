
temp = read.table("2015.edu.elementary.csv", sep=',', header = TRUE)
elementary <- unique(temp[complete.cases(temp),])
elementary$Students = as.numeric(edu.elementary$Students)
elementary.scaled = scale(elementary[13:15])

elementary.scaled[1:5,]
dist(elementary.scaled[1:5,], method="euclidean")
dist(elementary.scaled[1:5,], method="manhattan")
dist(elementary.scaled[1:5,], method="maximum")

?dist

b <- rbind(
  c(0,0,0,1,1,1,1,0,0,1),
  c(0,0,1,1,1,0,0,1,0,0)
)
b
dist(b, method="binary")
dist(b, method="manhattan")

library(proxy)
data <- data.frame(
  height= c(      160,    185,    170),
  weight= c(       52,     90,     75),
  sex=    c( "female", "male", "male")
)
data
dist(data, method="Gower")
names(pr_DB$get_entries())
