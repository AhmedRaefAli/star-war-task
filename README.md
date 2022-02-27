# for installation ===>> npm install

# this app run on localhost 3000

# visit this URL         localhost:3000/starWars/

# test cases
    -localhost:3000/starWars/?name=Greedo
    -localhost:3000/starWars/?name=Jabba Desil
    -localhost:3000/starWars/?name=Gre
    -localhost:3000/starWars/?name=Ben
    -localhost:3000/starWars/?name=R

# docker build -t star-wars-image:1.0 .           => create your image of the app from docker file 
# update image link in docker compose with your image link
# use docker-compose -f docker-compose.yaml up    => to run docker compose file
# use docker-compose -f docker-compose.yaml down  => to stop docker compose file