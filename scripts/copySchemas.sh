#!/usr/bin/env bash

for D in `pwd`/src/*; do
    if [[ -d "${D}" ]]; then
        for f in ${D}/*.graphql; do
            if [[ -e "${f}" ]]; then
                cp ${f} ${f/src/dist}
            fi
        done
    fi
done
