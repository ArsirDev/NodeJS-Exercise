function samplePromise() {
  return Promise.resolve("Arfan")
}

async function run() {
  const name = await samplePromise();
  console.table(name);
}

run();

