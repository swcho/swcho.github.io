
plot(iris$Petal.Width)
plot(iris$Petal.Width, 1:150, ylab="index")
hist(iris$Petal.Width)
?plot
cut_result = cut(iris$Sepal.Width, breaks=3)
plot(cut_result)

temp = read.table("2015.edu.elementary.csv", sep=',', header = TRUE)
edu.elementary <- unique(temp[complete.cases(temp),])
edu.elementary$Students = as.numeric(edu.elementary$Students)
nrow(edu.elementary)
plot(edu.elementary$Students, 1:6253, ylan="index")
summary(edu.elementary$Students)
hist(edu.elementary$Students)
cut_result = cut(edu.elementary$Students, breaks=3)
cut_result
summary(cut_result)
plot(cut_result)

sum(cut_result[2,])
?cut

discretize(edu.elementary$Students, method="interval",categories=3)
?discretize

library(arules)
hist(edu.elementary$Students)
abline(v=discretize(edu.elementary$Students, method="interval",categories=3,onlycuts=TRUE), col="blue")
abline(v=discretize(edu.elementary$Students, method="frequency",categories=3,onlycuts=TRUE), col="red")
abline(v=discretize(edu.elementary$Students, method="cluster",categories=3,onlycuts=TRUE), col="yellow")

head(edu.elementary[13:15])

head(edu.elementary[13:15])
head(scale(edu.elementary[13:15]))

