const os= require('os');

console.log(os.arch()) // architecture
console.log(os.availableParallelism())//amount of parallelism (integer)
console.log(os.cpus())//logical cpu  cores
console.log(os.freemem())//returns amount of free system memory in bytes as an integer
console.log(os.homedir())//user's home directory
console.log(os.hostname())//host name of os
console.log(os.machine())//machine type x86_64
console.log(os.platform())// os platform win32
console.log(os.release())// os release
console.log(os.tmpdir())//path of os temporary files
console.log(os.totalmem())// system momery/ram in bytes
console.log(os.type())//os name windows_NT
console.log(os.version())// kernel version - win 10 home single langauge






