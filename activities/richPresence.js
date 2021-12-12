module.exports = {
    name: "richPresence",
    execute(client){
        const activities = [
            {
                type: "WATCHING",
                name: [
                    `Roman Empire`,
                    `PornHub`
                ]
            },
            {
                type: "LISTENING",
                name: [
                    `children in basement`,
                    `Baka Prase`
                ]
            },
            {
                type: "PLAYING",
                name: [
                    `with gas`,
                    `with your mom`
                ]
            }
        ]

        setInterval(() => {
            const random = Math.floor(Math.random() * (activities.length + 1));
    
            if(random > 0){
                const random2 = Math.floor(Math.random() * (activities[random - 1].name.length + 1));
    
                if(random2 > 0) client.user.setActivity(activities[random - 1].name[random2 - 1], {type: activities[random - 1].type});
            }
        }, 7000)
    }
}