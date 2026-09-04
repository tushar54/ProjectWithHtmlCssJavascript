
const GetDataButton = document.getElementById("fetchData");

GetDataButton.addEventListener("click", async () => {

    const ShowDataDiv = document.getElementById("ShowData");
    // যদি আগে থেকেই data থাকে, তাহলে data মুছে ফেলবে
    if (ShowDataDiv.innerHTML!== "") {
        ShowDataDiv.innerHTML = "";
        console.log("Data cleared");
        return;
    }

    // যদি data না থাকে, তাহলে API থেকে data আনবে
    try {

        const response = await fetch(
            "https://jsonplaceholder.typicode.com/posts"
        );

        if (!response.ok) {
            throw new Error("Network response was not ok");
        }

        const data = await response.json();

        data.forEach(post => {

            const postElement = document.createElement("div");

            postElement.style.border = "1px solid #000";
            postElement.style.margin = "10px";
            postElement.style.padding = "10px";

            postElement.innerHTML = `
                <h3>${post.title}</h3>
                <p>${post.body}</p>
            `;

            ShowDataDiv.appendChild(postElement);
        });

    } catch (error) {

        console.error("Error fetching data:", error);

    }
});
