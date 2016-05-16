temp = read.table("2015.edu.elementary.csv", sep=',', header = TRUE)
edu.elementary <- unique(temp[complete.cases(temp),])
edu.elementary$Students = as.numeric(edu.elementary$Students)

length(edu.elementary$Students)
summary_all = summary(edu.elementary$Students)
samples = sample(edu.elementary$Students, 600)
mean(edu.elementary$Students) - mean(samples)

mean(edu.elementary$Students)

y <- rnorm(1000, 10)
plot(y)
hist(y)

(18/745) * 100

library(sampling)
byCenter = aggregate(cbind(Students,Teachers,Rooms)~교육지원청, data=edu.elementary, FUN=mean)
byCenter
length(byCenter$교육지원청)

rep(5, 161)

s = strata(edu.elementary, stratanames = "교육지원청", size=rep(5, 161), method="srswor")
head(s)

s2 <- edu.elementary[s$ID_unit,]
s2
plot(s2, col=edu.elementary$교육지원청)
