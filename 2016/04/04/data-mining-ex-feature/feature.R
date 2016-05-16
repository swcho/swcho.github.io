
library(scatterplot3d)
scatterplot3d(iris[,1:3], color=as.integer(iris$Species))

temp = read.table("2015.edu.elementary.csv", sep=',', header = TRUE)
edu.elementary <- unique(temp[complete.cases(temp),])
edu.elementary$Students = as.numeric(edu.elementary$Students)

#data = cbind(edu.elementary$시도, edu.elementary$Students, edu.elementary$Rooms, edu.elementary$Teachers)
data_for_plot = data.frame(edu.elementary$Students, edu.elementary$Rooms, edu.elementary$Teachers, edu.elementary$시도)
colnames(data_for_plot) <- c("Students", "Rooms", "Teachers", "Province")
head(data_for_plot)
scatterplot3d(data_for_plot[,1:3], color=as.integer(data_for_plot$Province))

summary(data_for_plot$Province)

subset(data_for_plot, Province == "서울")
data_by_city = data_for_plot[data_for_plot$Province %in% c("서울", "인천", "대전", "대구", "세종", "광주", "부산"), ]
scatterplot3d(data_by_city[,1:3], color=as.integer(data_by_city$Province))

plot(data_by_city$Students, data_by_city$Teachers, color=as.integer(data_by_city$Province))
?plot

library(rgl)
plot3d(data_by_city[,1:3], col=as.integer(data_by_city$Province), size=2)

library(plotly)
plot_ly(iris, x = Sepal.Length, y= Petal.Length, z = Sepal.Width,  size = Petal.Width, color = Species, type="scatter3d", mode="markers")

library(plotly)
plot_ly(data_by_city, x = Students, y= Rooms, z = Teachers, color = Province, type="scatter3d", mode="markers")
?plot_ly

##
pc <- prcomp(as.matrix(data_by_city[,1:3]))
pc
plot(pc)
plot(pc$x, col=data_by_city$Province)


##

data(ruspini, package="cluster")
ruspini
ruspini <- ruspini[sample(1:nrow(ruspini)),]
plot(ruspini)
ruspini_scaled <- scale(ruspini)
plot(ruspini_scaled)

km <- kmeans(ruspini_scaled, centers=4, nstart=10)
km
plot(ruspini_scaled, col=km$cluster)

##
library(cluster)
library(fpc)

data_for_plot = data.frame(edu.elementary$Students, edu.elementary$Rooms, edu.elementary$Teachers, edu.elementary$교육지원청, edu.elementary$학교명)
colnames(data_for_plot) <- c("Students", "Rooms", "Teachers", "Province", "Name")
head(data_for_plot)

summary(data_for_plot$Province)


data_by_city = data_for_plot[data_for_plot$Province %in% c("용인"), ]
data_by_city
data_by_city_scaled <- scale(data_by_city[,1:3])
km <- kmeans(data_by_city_scaled, centers=3, nstart=10)
?kmeans
str(km)
plot(data_by_city_scaled, col=km$cluster)
text(km$centers, labels=1:4, pos=2) # this adds the cluster ID
km$cluster

data_by_city_clustered = data_by_city
data_by_city_clustered$cluster = km$cluster

data_by_city_clustered
data_by_city_clustered_2 = data_by_city_clustered[data_by_city_clustered$cluster == 2,]

data_by_city_clustered_2
