function samplePromise() {
  return Promise.resolve("Arfan")
}

const name = await samplePromise();
  console.table(name);

// if use Javascript Modules (Mjs), it's already have default asyn, so we cannot to added async on function