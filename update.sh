#!/bin/sh

function updateApp() {
  app=${1}
  rm -rf ${app}
  git clone --quiet git@github.com:SoftwareEngineeringDaily/${app}.git
  rm -rf ${app}/.git
  diff=$(git diff ${app})
  if [[ -z ${diff} ]]; then
    echo "no diff found for ${app}"
  else
    echo "diff found"
  fi
}

updateApp sedaily-front-end
updateApp software-engineering-daily-api
