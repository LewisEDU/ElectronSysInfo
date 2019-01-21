function refresh(){
    var os = require("os");
    var cpu = os.cpus();
    var ip = require("ip");
        let output = `
            <h2 class="page-header">App version Data</h2>
            <ul class="list-group">
                <li class="list-group-item">Node: ${process.versions.node}</li>
                <li class="list-group-item">Chrome: ${process.versions.chrome}</li>
                <li class="list-group-item">Electron: ${process.versions.electron}</li>
            </ul>

            <h2 class="page-header">System Information</h2>
            <ul class="list-group">
                <li class="list-group-item">Architecture: ${process.arch}</li>
                <li class="list-group-item">Processor: ${cpu[0].model}</li>
                <li class="list-group-item">Current Speed AVG speed: ${cpu[0].speed}mhz</li>
                <li class="list-group-item">Operating System: ${os.platform() + " - " + os.release()}</li>
                
                <li class="list-group-item">Host Name: ${os.hostname()}</li>
                <li class="list-group-item">Local Ip: ${ip.address()}</li>
            </ul>

            <h2 class="page-header">System Memory (RAM)</h2>
            <ul class="list-group">
                <li class="list-group-item">Percentage Used: ${parseInt((process.getSystemMemoryInfo().total - process.getSystemMemoryInfo().free) / process.getSystemMemoryInfo().total * 100)}% (${(process.getSystemMemoryInfo().total - process.getSystemMemoryInfo().free) / 1000}MB)</li>
                <li class="list-group-item">Installed Memory: ${process.getSystemMemoryInfo().total / 1000}MB (${parseInt(process.getSystemMemoryInfo().total / 1000000)}GB)</li>
            </ul>
        `;

        document.getElementById('output').innerHTML = output;
}
refresh();
setInterval(refresh, 300);
    