const net = require('os').networkInterfaces()
let localIp;

for (let key in net){
    if (net.hasOwnProperty(key)) {
        let details = net[key];
        if (details && details.length) {
            for (let i = 0, len = details.length; i < len; i++){
                const ip = String(details[i].address).trim();
                if(ip && /^\d+(?:\.\d+){3}$/.test(ip) && ip !== '127.0.0.1'){
                    localIp = ip;
                    break;
                }
            }
        }
    }
}

module.exports = localIp;
