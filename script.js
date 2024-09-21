//scroll sections
let sections = document.querySelectorAll("section");
let navLinks = document.querySelectorAll("header nav a");

window.onscroll = () => {
    sections.forEach(sec => {
        let top = widnow.scrollY;
        let offset = sec.offsetTop - 100;
        let height = sec.offsetHeight;
        let id = sec.getAttribute("id");

        if(top >=offset && top < offset + height ){
            //navbar
            navLinks.forEach(links => {
                links.classList.remove("active");
                document.querySelector("header nav a [href*=" + id + "]").classList.add("active");
            })
        }
    });
}


// sticky header
window.onscroll = () => {
    let header = document.querySelector("header");
    
    header.classList.toggle("sticky", window.scrollY > 100);
}
