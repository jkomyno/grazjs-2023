import * as path from 'node:path'
import chalk from 'chalk'
import { __dirname, runCommand, getLocalRustCrates, rustProfileToFolder } from './utils.mjs'

async function main() {
  // Rust workspace root path
  const rustPath = path.join(__dirname(), '..', '..', 'rust')

  // Wasm output path
  const wasmOutPath = path.join(__dirname(), '..', 'demo', 'wasm')

  // Test Rust codebase
  await testRustPipeline({ rustPath })

  // Build Wasm artifacts
  await buildWasmPipeline({ rustPath, wasmOutPath })
}

async function testRustPipeline({ rustPath }) {
  console.info(chalk.grey('Testing Rust codebase'))
  await runCommand({
    cmd: 'cargo',
    args: ['test'],
    path: rustPath,
  })
  console.info()
}

async function buildWasmPipeline({ rustPath, wasmOutPath }) {
  const profile = 'release'
  
  const localRustCrates = await getLocalRustCrates({ rustPath })
  const wasmCrates = localRustCrates.filter(crate => crate.includes('-wasm'))

  for (const wasmCrate of wasmCrates) {
    console.info(`${chalk.grey('Processing Wasm crate ')}${chalk.cyanBright.bold(wasmCrate)}`)
    await buildWasmCrate({ wasmCrate, profile, rustPath, wasmOutPath })
    console.info()
  }
}

async function buildWasmCrate({ wasmCrate, profile, rustPath, wasmOutPath }) {
  const wasmTarget = 'wasm32-unknown-unknown'

  await runCommand({
    cmd: 'cargo',
    args: ['build', '-p', wasmCrate, '--profile', profile, '--target', wasmTarget],
    path: rustPath,
  })

  // e.g., 'playground-wasm-bindgen' -> 'playground_wasm_bindgen'
  const wasmCrateName = wasmCrate.replaceAll('-', '_')

  await runCommand({
    cmd: 'wasm-bindgen',
    args: ['--target', 'nodejs', '--out-dir', wasmOutPath, path.join('target', wasmTarget, rustProfileToFolder(profile), `${wasmCrateName}.wasm`)],
    path: rustPath,
  })
}

/**
 * Entrypoint
 */
main()
  .then(() => {
    console.log('Wasm build OK!')
  })
  .catch(err => {
    console.warn('Wasm build failed!')
    console.error(err)
    process.exit(1)
  })
