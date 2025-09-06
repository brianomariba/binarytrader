const { createRsbuild } = require('@rsbuild/core');

async function main() {
    const rsbuildConfig = require('./rsbuild.config.js');
    const rsbuild = await createRsbuild({
        cwd: process.cwd(),
        rsbuildConfig,
    });

    await rsbuild.build();
}

main().catch(err => {
    console.error(err);
    process.exit(1);
});
