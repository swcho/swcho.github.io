temp = read.table("2015.edu.elementary.csv", sep=',', header = TRUE)
edu.elementary <- unique(temp[complete.cases(temp),])
edu.elementary$Students = as.numeric(edu.elementary$Students)

pc <- prcomp(as.matrix(iris[,1:4]))
pc
plot(pc)

pc_edu = prcomp(as.matrix(edu.elementary[,13:15]))
pc_edu
summary(pc_edu)

head(scale(edu.elementary$Students))

plot(data.frame(edu.elementary$Students, edu.elementary$Rooms, edu.elementary$Teachers))

data_for_plot = data.frame(edu.elementary$Students, edu.elementary$Rooms, edu.elementary$Teachers)
data_for_plot = scale(data_for_plot)
colnames(data_for_plot) <- c("Students", "Rooms", "Teachers")
head(data_for_plot)

plot(data_for_plot)

pc_edu_std = prcomp(data_for_plot)
pc_edu_std
summary(pc_edu_std)

plot(pc_edu_std)
plot(pc_edu_std$x)
biplot(pc_edu_std, col = c("grey", "red"))
