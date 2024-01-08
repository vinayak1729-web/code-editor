
function run(){
    let htmlCode = document.getElementById("html-code").value;
    let CssCode = document.getElementById("css-code").value;
    let JsCode = document.getElementById("Js-code").value;
    let Output = document.getElementById("output");

    output.contentDocument.body.innerHTML = htmlCode+"<style>"+ CssCode +"</style>";
    Output.contentWindow.eval(JsCode);
}

 function save() {
            let htmlCode = document.getElementById("html-code").value;
            let cssCode = document.getElementById("css-code").value;
            let jsCode = document.getElementById("Js-code").value;
            const zip = new JSZip();

            zip.file("index.html", htmlCode);
            zip.file("style.css", cssCode);
            zip.file("index.js", jsCode);

            zip.generateAsync({ type: "blob" }).then(function (blob) {
                const link = document.createElement("a");
                link.href = URL.createObjectURL(blob);
                link.download = "code.zip";
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
            });
        }