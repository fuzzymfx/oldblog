const fs = require('fs')
const glob = require('glob')
const matter = require('gray-matter')
const mkdirp = require('mkdirp')
const path = require('path')
const hljs = require('highlight.js');
const MarkdownIt = require('markdown-it')
const markdownItAnchor = require('markdown-it-anchor')
const string = require('string')



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
const JSONify = (arr, filename, jsonpath) => {
    const file = readFile(filename)
    const outfilename = getOutputFilename(filename, '')
    console.log(outfilename)
    file.data.link = "https://anubhavp.dev/blog/" + outfilename
    file.data.content = file.html
    arr.push(file.data)
    var json = JSON.stringify(arr);
    fs.writeFileSync(path.resolve(jsonpath, 'search.json'), json, 'utf8');

}


const main = () => {
    const srcPath = path.resolve('src')
    const outPath = path.resolve('public')
    const template = fs.readFileSync(path.join(srcPath, 'template.html'), 'utf8')
    const filenames = glob.sync(srcPath + '/pages/**/*.md')
    const jsonpath = path.resolve('src/assets/')
    const arr = []

    filenames.forEach((filename) => {
        processFile(filename, template, outPath)
        JSONify(arr, filename, jsonpath)

    })
}

main()