---
title: Static Site Generator (SSG)
author: Anubhab Patnaik
date: May 29, 2022
---
Static Site generator takes in files written in markdown and render htmls files. This blog, for example, has been written using this generator.  
Libraries used:

- [MarkdownIt](https://www.npmjs.com/package/markdown-it) *Markdown parser done right.*
- [MarkdownItAnchor](https://www.npmjs.com/package/markdown-it-anchor) *Header anchors for markdown-it.*
- [Glob](https://www.npmjs.com/package/glob) *"Globs" are the patterns you type when you do stuff like ls .js on the command line, or put build/ in a .gitignore file.*
- [Gray-Matter](https://www.npmjs.com/package/gray-matter) *Parse front-matter from a string or file.*
- [Mkdirp](https://npmjs.com/package/mkdirp) *Create Dirs if they do not exist.*
This is the code for the generator.js file that I have created.
The code works in the following way:

1. `fs.readfile()` from fs reads all the files from the said directory and stores then in `filename` using `glob`.
1. `gray-matter` helps extracting text from the parsed files.
1. The `main()` function then takes in one `filename` at a time and then parses it through `markdownit( ,{markdownitanchor})`.
1. The converted html files are stored in the specified directories then using `mkdirp`.

```js
import fs from 'fs'
import glob from 'glob'
import matter from 'gray-matter'
import mkdirp from 'mkdirp'
import path from 'path'
import hljs from 'highlight.js';
import MarkdownIt from 'markdown-it'
import markdownItAnchor from 'markdown-it-anchor'
import string from 'string'

const slugify = s => string(s).slugify().toString()

const md = MarkdownIt({
    html: true,
    linkify: true,
    typographer: true,
    highlight(str, language) {
        if (language && hljs.getLanguage(language)) {
            try {

                return hljs.highlight(str, { language: language }).value;
            } catch (err) {
                console.log(err)
            }
        }

        return null;
    }
}).use(markdownItAnchor, { slugify });


const readFile = (filename) => {
    const rawFile = fs.readFileSync(filename, 'utf8')
    const parsed = matter(rawFile)
    const html = md.render(parsed.content)
        // const html = marked(parsed.content)


    return {...parsed, html }
}

const templatize = (template, { date, title, content, author }) =>
    template
    .replace(/<!-- PUBLISH_DATE -->/g, date)
    .replace(/<!-- TITLE -->/g, title)
    .replace(/<!-- CONTENT -->/g, content)
    .replace(/<!-- AUTHOR -->/g, author)

const saveFile = (filename, contents) => {
    const dir = path.dirname(filename)
    mkdirp.sync(dir)
    fs.writeFileSync(filename, contents)
}

const getOutputFilename = (filename, outPath) => {
    const basename = path.basename(filename)
    const newfilename = basename.substring(0, basename.length - 3) + '.html'
    const outfile = path.join(outPath, newfilename)
    return outfile
}

const processFile = (filename, template, outPath) => {
    const file = readFile(filename)
    const outfilename = getOutputFilename(filename, outPath)

    const templatized = templatize(template, {
        date: file.data.date,
        title: file.data.title,
        content: file.html,
        author: file.data.author,
    })

    saveFile(outfilename, templatized)
    console.log(`📝 ${outfilename}`)
}

const main = () => {
    const srcPath = path.resolve('src')
    const outPath = path.resolve('public')
    const template = fs.readFileSync(path.join(srcPath, 'template.html'), 'utf8')
    const filenames = glob.sync(srcPath + '/pages/**/*.md')

    filenames.forEach((filename) => {
        processFile(filename, template, outPath)
    })
}

main()
```
