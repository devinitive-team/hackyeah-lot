#!/usr/bin/env bash

for D in `pwd`/src/*; do
    if [[ -d "${D}" ]]; then
        for f in ${D}/*.graphql; do
            cp ${f} ${f/src/dist}
        done
    fi
done
