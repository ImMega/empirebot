module.exports = {
    name: "richPresence",
    execute(client){
        function randomRPC() {
            getTime = Math.floor (Math.random() * 3) + 1;
            otherRPC = 3;
            getRPC = Math.floor (Math.random() * (otherRPC - 1 + 1)) + 1;

            if (getTime === 1){
                timeout = 10000;
            } else
            if (getTime === 2){
                timeout = 15000;
            } else
            if (getTime === 3){
                timeout = 20000;
            }

            if (getRPC === 1){
                setRPC = watchingRPC;
            } else
            if (getRPC === 2){
                setRPC = playingRPC;
            } else
            if (getRPC === 3){
                setRPC = listeningRPC;
            }

            setTimeout(setRPC, timeout);
        }

        function watchingRPC() {
            client.user.setActivity(`Roman Empire`, {type: `WATCHING`});
            
            randomRPC();
        }

        function playingRPC() {
            client.user.setActivity(`with gas`, {type: `PLAYING`});

            randomRPC();
        }

        function listeningRPC() {
            client.user.setActivity(`children in basement`, {type: `LISTENING`});
            
            randomRPC();
        }
        
        watchingRPC();
    }
}