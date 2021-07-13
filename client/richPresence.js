module.exports = {
    name: "richPresence",
    execute(client){
        function startRPC() {
            client.user.setActivity(`e!help`, {type: `LISTENING`});

            setTimeout(randomRPC, 15000);
        }

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
            watchActivityGet = Math.floor (Math.random() * 2) + 1;

            if (watchActivityGet === 1){
                watchActivity = `Roman Empire`;
            } else
            if (watchActivityGet === 2){
                watchActivity = `PornHub`;
            }

            client.user.setActivity(watchActivity, {type: `WATCHING`});
            
            randomRPC();
        }

        function playingRPC() {
            playActivityGet = Math.floor (Math.random() * 2) + 1;

            if (playActivityGet === 1){
                playActivity = `with gas`;
            } else
            if (playActivityGet === 2){
                playActivity = `with your mom`;
            }

            client.user.setActivity(playActivity, {type: `PLAYING`});

            randomRPC();
        }

        function listeningRPC() {
            client.user.setActivity(`children in basement`, {type: `LISTENING`});
            
            randomRPC();
        }
        
        startRPC();
    }
}