function add_site() {
    var site = document.getElementById("site_name").value
    var a = document.createElement('a');
    var br = document.createElement("br");
    var linktext = document.createTextNode(site);
    console.log("sitename is " + site);
    console.log("Link Text is" + linktext.nodeValue);
    a.appendChild(linktext);
        //setting the href for anchor link
    a.href = "https://" + linktext.nodeValue;
    a.target = "_blank";
    //document.getElementById("plist").innerHTML=a.href
    document.getElementById("plist").appendChild(a);
    document.getElementById("plist").appendChild(br);
}