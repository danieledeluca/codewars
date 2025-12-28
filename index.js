import fs from 'node:fs';
import pc from 'picocolors';
import template from 'lodash.template';

const API_URL = 'https://www.codewars.com/api/v1';
const readmeTemplate = `# [<%= name %>](<%= url %>)

![<%= kyu %>](<%= kyuImageUrl %>)

## Description

<%= description %>`;
const kataId = process.argv.slice(2)[0];

async function generateKataFolder() {
    const response = await fetch(`${API_URL}/code-challenges/${kataId}`);

    if (!response.ok) {
        console.log(`${pc.red('Please provide a valid Kata ID')}\n${pc.gray('\nnpm run generate <kata-id>')}`);

        return;
    }

    const json = await response.json();
    const { name, slug, url, rank, description } = json;

    const parsedRankName = rank.name.replace(' ', '-');

    if (!fs.existsSync(parsedRankName)) {
        fs.mkdirSync(parsedRankName);
    }

    const kataFolder = `${parsedRankName}/${slug}`;

    if (!fs.existsSync(kataFolder)) {
        fs.mkdirSync(kataFolder);

        const kyuImageUrl = `https://img.shields.io/badge/${parsedRankName}-white?style=for-the-badge&labelColor=${rank.color}&color=%23212121`;
        const readmeContent = template(readmeTemplate)({ name, url, kyu: rank.name, kyuImageUrl, description });

        fs.writeFileSync(`${kataFolder}/README.md`, readmeContent);
        fs.writeFileSync(`${kataFolder}/index.js`, `\n\n// Examples\n\n\n// Tests\n\n`);

        console.log(`${pc.gray(kataFolder)} ${pc.green('folder created')}`);
    } else {
        console.log(`${pc.red('Folder already exists')}`);
    }
}

generateKataFolder();
