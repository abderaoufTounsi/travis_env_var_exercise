
function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function main() {
  while(true) {
    console.log("Microservices rock!");
    console.log(process.env.JAVA_HOME);
    await sleep(5000);
  }
}

main();
