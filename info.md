sudo lsof -i -P -n | grep LISTEN --> See Port Use

fuser -k 3000/tcp --> close port
