const initialMemoryUsage = process.memoryUsage().heapUsed;
const yourName = process.argv[2];
const environment = process.env.NODE_ENV;

for (let i = 0; i < 1000; i++) {

}

const currentMemoryUsage = process.memoryUsage().heapUsed;

console.log(`Hai, ${yourName}`);
console.log(`Mode Environment: ${environment}`);
console.log(`Penggunaan memori dari ${initialMemoryUsage} naik ke ${currentMemoryUsage}`);