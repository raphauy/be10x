import fs from 'fs';
import path from 'path';

const filePath = path.join(process.cwd(), 'date.json');

interface DateData {
  date: string;
}

function writeDateToFile(date: string) {
  const data: DateData = { date };

  fs.writeFileSync(filePath, JSON.stringify(data));
}

function readDateFromFile(): string | null {
  if (!fs.existsSync(filePath)) {
    return null;
  }

  const data = fs.readFileSync(filePath, 'utf8');

  try {
    const parsedData: DateData = JSON.parse(data);
    return parsedData.date;
  } catch (error) {
    console.error('Error parsing date data from file:', error);
    return null;
  }
}

export { writeDateToFile, readDateFromFile };
