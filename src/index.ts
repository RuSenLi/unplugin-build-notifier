import { basename, dirname, join, sep } from 'node:path'
import { exec } from 'node:child_process'
import { performance } from 'node:perf_hooks'
import { fileURLToPath } from 'node:url'
import { platform } from 'node:os'
import type { UnpluginFactory } from 'unplugin'
import { createUnplugin } from 'unplugin'
import notifier from 'node-notifier'
import type { Options } from './types'

const __dirname = dirname(fileURLToPath(import.meta.url))
const rootPath = findNodeModules(__dirname)

function findNodeModules(dir: string): string {
  const pathArr = dir.split(sep)
  const pnpmIndex = pathArr.lastIndexOf('.pnpm')
  const nodeModuleIndex = pathArr.lastIndexOf('node_modules', pnpmIndex)
  return join(...pathArr.slice(0, nodeModuleIndex))
}

function getOpenCommand() {
  switch (platform()) {
    case 'darwin':
      return 'open'
    case 'win32':
      return 'start'
    default:
      return 'xdg-open'
  }
}

function startdir() {
  exec(`${getOpenCommand()} "" "${rootPath}"`, (error, stdout, stderr) => {
    if (error) {
      console.error(
        `exec error: ${error}\nstdout: ${stdout}\nstderr: ${stderr}`,
      )
    }
  })
}

function nodeNotifier({
  message = '',
  iconPath = '',
  click = startdir,
  timeout = startdir,
}: Options = {}) {
  notifier.notify({
    title: `✨ ${basename(rootPath)}`,
    message: `${message}\n${rootPath}`,
    icon: iconPath || join(__dirname, './SpongeBob.jpg'),
  })
  notifier.on('click', click)

  notifier.on('timeout', timeout)
}

export const unpluginFactory: UnpluginFactory<Options | undefined> = (
  options,
) => {
  let buildStart: number

  return {
    name: 'unplugin-build-notifier',
    buildStart() {
      buildStart = performance.now()
    },
    writeBundle() {
      const buildTime = ((performance.now() - buildStart) / 1000).toFixed(2)
      nodeNotifier({
        message: `🎉 build success!\n🚀 built in ${buildTime}s`,
        ...options,
      })
    },
  }
}

export const unplugin = /* #__PURE__ */ createUnplugin(unpluginFactory)

export default unplugin
