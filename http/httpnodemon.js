/* import http from 'http'
import fs from 'fs'
import path from 'path' */
const http = require('http')
const fs = require('fs')
const path = require('path')

let server = http.createServer((req, resp) => {
    //console.log(`${path.join(__dirname)}`)
    let url = req.url
    console.log(url)
    if (url === "/index.html"|| "/index") {
        fs.readFile(path.join(__dirname,"htmlstatic" , "index.html"), 'utf-8', (err, data) => {
            if (err) throw err
            resp.end(data)
            
        })
    }
    if (url === "/about.html") {
        fs.readFile(path.join(__dirname,"htmlstatic" , "about.html"), 'utf-8', (err, data) => {
            if (err) throw err
             resp.end(data)
             
        })
    }
    if (url === "/contact.html") {
        fs.readFile(path.join(__dirname,"htmlstatic" , "contact.html"), 'utf-8', (err, data) => {
            if (err) throw err
             resp.end(data)
            
        })
    }
    if (url === "/employee.html") {
        fs.readFile(path.join(__dirname,"htmlstatic" , "employee.html"), 'utf-8', (err, data) => {
            if (err) throw err
             resp.end(data)
             
        })
    }
    if (url === "/services.html") {
        fs.readFile(path.join(__dirname,"htmlstatic" , "services.html"), 'utf-8', (err, data) => {
            if (err) throw err
            resp.end(data)
            
        })
    }

   
})

server.listen(8080, (err) => {
    if (err) throw err
   // console.log(`Server Running: ${8080}`)
   console.log("server running: "+8080)
})