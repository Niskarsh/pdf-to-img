const { promises: fs } = require("node:fs");
// const { pdf } = await import("pdf-to-img");

async function main() {
    const { pdf } = await import("pdf-to-img");
  let counter = 1;
  const document = await pdf("data.pdf", { scale: 3 });
  const page12buffer = await document.getPage(1);
  await fs.writeFile(`aadhaar.jpeg`, page12buffer);
}
main();