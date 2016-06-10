require 'shelljs/make'

pkg = require './package.json'
config = require './tsconfig.json'
{ outDir } = config.compilerOptions

target.all = ->
  target.build()

target.list = ->
  echo 'Available targets:'
  for cmd of target
    echo '-', cmd

target.build = (args = '') ->
  exec "tsc #{args}"

target['build:watch'] = ->
  target.build '-w'

target.test = (args = '') ->
  exec "mocha #{args} --require ts-node/register test/**/*.spec.ts"

target['test:watch'] = ->
  exec target.test '-w'

target['scripts:update'] = ->
  pkg.scripts = {}
  for cmd of target
    pkg.scripts[cmd] = "coffee make.coffee #{cmd}"
  echo(JSON.stringify(pkg, null, 2)).to 'package.json'

target.clean = ->
  rm '-rf', outDir
