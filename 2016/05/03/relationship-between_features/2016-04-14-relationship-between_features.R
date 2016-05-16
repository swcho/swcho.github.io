
temp = read.table("2015.edu.elementary.csv", sep=',', header = TRUE)
elementary <- unique(temp[complete.cases(temp),])
elementary$Province = as.numeric(elementary$Province)
elementary$Gov = as.numeric(elementary$교육지원청)
elementary$Students = as.numeric(elementary$Students)

cor(elementary[13:15])

dim(t(elementary[13:15]))

cc <- cor(t(elementary[13:15]))
cc[1:50, 1:50]
library("seriation") # for pimage
pimage(cc[1:100, 1:100], main = "Correlation between objects")
dim(cc)

pimage(cor(elementary[13:15]))

d <- as.dist(1-abs(cc))
pimage(d, main = "Dissimilaries between objects")

# Rank relation

elementary_ord <- data.frame(
  cut(elementary[,13], 3, labels=c("short", "medium", "long"), ordered=T),
  cut(elementary[,14], 3, labels=c("short", "medium", "long"), ordered=T),
  cut(elementary[,15], 3, labels=c("short", "medium", "long"), ordered=T))
colnames(elementary_ord) <- colnames(elementary[13:15])
summary(elementary_ord)


cor(sapply(elementary_ord, xtfrm), method="kendall")
cor(sapply(elementary_ord, xtfrm), method="spearman")

# Relationship between nominal and ordinal features

elementary_ord <- data.frame(
  elementary$교육지원청,
  cut(elementary[,13], 3, labels=c("short", "medium", "long"), ordered=T),
  cut(elementary[,14], 3, labels=c("short", "medium", "long"), ordered=T),
  cut(elementary[,15], 3, labels=c("short", "medium", "long"), ordered=T))
colnames(elementary_ord) <- c('Gov', 'Rooms', 'Students', 'Teachers')
head(elementary_ord)

tbl <- table(Students=elementary_ord$Students, elementary_ord$Gov)
tbl
head(tbl)

chisq.test(tbl)

chisq.test(table(Students=elementary_ord$Rooms, elementary_ord$Gov))
chisq.test(table(Students=elementary_ord$Teachers, elementary_ord$Gov))

table(elementary_ord$Teachers, elementary_ord$Rooms)

chisq.test(table(elementary_ord$Teachers, elementary_ord$Rooms))

chisq.test(table(elementary_ord$Students, elementary_ord$Rooms))

chisq.test(table(elementary_ord$Students, elementary_ord$Teachers))
