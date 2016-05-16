setwd("~/projects/ex_r")
ex = read.csv("ex.csv")
ex
plot(ex)
plot(y~x, data=ex)
plot(x~y, data=ex)
