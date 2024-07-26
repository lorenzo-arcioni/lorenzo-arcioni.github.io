#!/bin/bash

# TOC Generator
# This script generates a table of contents (TOC) for the Blog section.

# Usage: ./TOC_generator.sh

# Define constant

path=/home/lorenzo/Documenti/GitHub/lorenzo-arcioni.github.io/blog/blog.html
write_toc () {
    local dir=$1
    local depth=$2
    echo From $(pwd)
    cd "$(echo $dir | rev | cut -d'/' -f 1 | rev)" || return

    # Creare una stringa di indentazione basata sulla profondità
    local indent=""
    local back=""
    for ((i=0; i<depth; i++)); do
        indent+="    "
        back+="../"
    done

    # Aggiungi un margine per l'indentazione nel CSS inline
    local margin=$((depth * 20))

    echo "${indent}<ul style=\"margin-left:${margin}px;\">" >> "${path}"

    for file in $(ls); do
        # Sezione è una sottodirectory
        if [ -d "${file}" ]; then
            echo "${indent}    <li style=\"padding-bottom: 20px; font-weight: bold; font-size: 20px;\">$(echo ${file:3 } | tr '_' ' ')</li>" >> "${path}"
            # Chiamata ricorsiva con profondità incrementata
            write_toc "${dir}/${file}" $((depth + 1))
        else if [ -f "${file}" ] && [[ $file != *.txt ]] && [[ $file != "blog.html" ]] && [[ $file != *.sh ]]; then
            echo "${indent}    <li style=\"padding-bottom: 20px; font-size: 18px;\"><a href=\"" $dir/$file "\">$(echo ${file:3: -5} | tr '_' ' ')</a></li>" >> "${path}"
            fi
        fi
    done

    echo "${indent}</ul>" >> "${path}"
    cd .. || return
}


cat header.txt > ${path}

echo "<ul>" >> ${path}

write_toc . 0

cd ./blog

echo "</ul>" >> ${path}

cat footer.txt >> ${path}