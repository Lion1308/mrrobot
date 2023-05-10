const youTubeVideo = `
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/mLQiYoy8Dug" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                 `
                 
const container = document.getElementById("elliot");
                 
const options = {
    threshold: 1.0
}
                 
const callback = (entries, observer) => {
        if (entries[0].isIntersecting) {
        observer.disconnect();
        container.innerHTML = youTubeVideo;
    }
}
                 
const observer = new IntersectionObserver(callback, options);
                 
observer.observe(container);