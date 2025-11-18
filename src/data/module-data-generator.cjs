const fs = require("fs");
const path = require("path");

const count = Number(process.argv[2]) || 5; // ile osób wygenerować
const namesPath = path.join(__dirname, "names.txt");

fs.readFile(namesPath, "utf8", (err, data) => {
  if (err) {
    console.error("❌ Błąd odczytu names.txt:", err);
    return;
  }

  const names = data
    .split(/\s+/) // akceptuje spacje i entery
    .map((s) => s.trim())
    .filter(Boolean);

  if (names.length === 0) {
    console.error("⚠️ Plik names.txt jest pusty!");
    return;
  }

  // generowanie danych
  const people = Array.from({ length: count }, (_, i) => {
    const name = names[Math.floor(Math.random() * names.length)];
    const year = 1970 + Math.floor(Math.random() * 35); // 1970–2005
    const month = String(Math.floor(Math.random() * 12) + 1).padStart(2, "0");
    const day = String(Math.floor(Math.random() * 28) + 1).padStart(2, "0");
    const birthDate = `${year}-${month}-${day}`;
    const email = `${name.toLowerCase()}@wsei.edu.pl`;
    const phone = `234-${Math.floor(100 + Math.random() * 900)}-${Math.floor(
      100 + Math.random() * 900
    )}`;

    return {
      id: i + 1,
      name,
      birthDate,
      email,
      phone,
    };
  });

  // składamy eksport
  const content = `export const people = ${JSON.stringify(people, null, 4)};`;

  fs.writeFile("./src/module-data.js", content, (err) => {
    if (err) {
      console.error("❌ Błąd zapisu:", err);
    } else {
      console.log(`✅ Wygenerowano module-data.js z ${count} osobami!`);
    }
  });
});
