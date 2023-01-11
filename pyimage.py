import os
from os import listdir

path = "./img/Julia1/"
dirs = sorted(os.listdir(path))

writeFile= open("./1-images.html","w+")
startImg = """<img style=\"width:100%;\" class=\"img-large\" src=\"./img/Julia1/"""
endImg = """\">"""
startH1 = "<h1>"
endH1 = "</h1>"

for file in dirs:
    writeFile.write(startH1)
    writeFile.write(file)
    writeFile.write(endH1)
    writeFile.write("\r\n")
    writeFile.write(startImg)
    writeFile.write(file)
    writeFile.write(endImg)
    writeFile.write("<br>")
    writeFile.write("\r\n")
writeFile.close()