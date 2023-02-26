import { fileURLToPath } from 'node:url'
import fs from 'node:fs'
import path from 'node:path'
import ora from 'ora'
import chalk from 'chalk'
import { execa } from 'execa'
import TOML from '@iarna/toml'

/**
 * ESM alternative to what was `__dirname` in CommonJS.
 */
export function __dirname() {
  return path.dirname(fileURLToPath(import.meta.url))
}

/**
 * Spawn a command and wait for it to finish. 
 */
export async function runCommand({ cmd, args, path }) {
  const cmdLine = `${cmd} ${args.join(' ')}`

  const spinner = ora({
    discardStdin: false,
    text: chalk.blue(cmdLine),
    indent: 2,
  })
  spinner.start()
  await execa(cmd, args, {
    cwd: path,
  })
  spinner.succeed()
}

/**
 * Given a path to the Rust workspace root, return an array of local Rust crates.
 */
export async function getLocalRustCrates({ rustPath }) {
  const cargoRootPath = path.join(rustPath, 'Cargo.toml')
  const readStream = fs.createReadStream(path.resolve(cargoRootPath))
  const cargoRootToml = await TOML.parse.stream(readStream)
  const localRustCrates = cargoRootToml?.workspace?.members
  return localRustCrates
}

export function rustProfileToFolder(profile) {
  return profile === 'release' ? 'release' : 'debug'
}
