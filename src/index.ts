import { basename, dirname, join } from 'node:path'
import { exec } from 'node:child_process'
import { performance } from 'node:perf_hooks'
import type { UnpluginFactory } from 'unplugin'
import { createUnplugin } from 'unplugin'
import notifier from 'node-notifier'
import type { Options } from './types'

const dirPath = dirname(__dirname)

export function startdir() {
  exec(`start "" "${__dirname}"`, (error, stdout, stderr) => {
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
    title: `✨ ${basename(dirPath)}`,
    message: `${message}\n${dirPath}`,
    icon: iconPath || join(__dirname, './icon/SpongeBob.jpg'),
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
