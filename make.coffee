require 'shelljs/make'

pkg = require './package.json'
config = require './tsconfig.json'
{ outDir } = config.compilerOptions

target.all = ->
  target.clean()
  target.build()

target.list = ->
  echo 'Available targets:'
  for cmd of target
    echo '-', cmd

target.prepublish = ->
  target.all()

target.build = (args = '') ->
  exec "tsc #{args}"

target.test = (args = '') ->
  exec "mocha #{args} --require ts-node/register test/**/*.spec.ts"

target['scripts:update'] = ->
  pkg.scripts = {}
  for cmd of target
    pkg.scripts[cmd] = "coffee make.coffee #{cmd}"
  echo(JSON.stringify(pkg, null, 2)).to 'package.json'

target.clean = ->
  rm '-rf', outDir
