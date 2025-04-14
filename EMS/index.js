let data = [
    {
      name: "gaurav",
      address: "jabalpur",
      mobile: "94257856",
      dob: "1999-03-15", // Standardized to YYYY-MM-DD
      imageup: "https://thewowstyle.com/wp-content/uploads/2015/01/nature-images.jpg",
    },
    {
      name: "gausdfsdfrav",
      address: "jabalpur",
      mobile: "94257856",
      dob: "1999-03-15",
      imageup: "https://thewowstyle.com/wp-content/uploads/2015/01/nature-images.jpg",
    },
    {
      name: "gaursdeeeeefsdfav",
      address: "jabalpur",
      mobile: "94257856",
      dob: "1999-03-15",
      imageup: "https://thewowstyle.com/wp-content/uploads/2015/01/nature-images.jpg",
    },
  ];
  
  function callme() {
    // Clear previous content to avoid duplicates
    const dataOutput = document.getElementById("dataoutput");
    dataOutput.innerHTML = "";
  
    data.forEach((e, index) => {
      let box = document.createElement("div");
      box.setAttribute("id", `inbox-${index}`); // Unique ID for each box
      box.classList.add("inbox"); // Add class for styling
  
      let nameslist = document.createElement("p");
      nameslist.innerText = e.name;
      nameslist.addEventListener("click", () => {
        detail(e);
      });
  
      let btn = document.createElement("button");
      btn.innerText = "❌";
      btn.addEventListener("click", () => {
        // Remove item from data array and re-render
        data.splice(index, 1);
        callme();
      });
  
      box.append(nameslist, btn);
      dataOutput.append(box);
    });
  }
  
  function detail(values) {
    const secondScreenBox = document.getElementById("secondscreenbox");
    secondScreenBox.innerHTML = ""; // Clear previous content
  
    let img = document.createElement("img");
    img.src = values.imageup || "https://via.placeholder.com/150"; // Fallback image
    img.setAttribute("id", "image");
    img.alt = "Profile Image";
  
    let name = document.createElement("h1");
    name.innerText = values.name || "Unknown";
  
    let address = document.createElement("p");
    address.innerText = values.address || "No address provided";
  
    let mobile = document.createElement("p");
    mobile.innerText = values.mobile || "No mobile provided";
  
    let dob = document.createElement("p");
    dob.innerText = values.dob || "No DOB provided";
  
    secondScreenBox.append(img, name, address, mobile, dob);
  }
  
  // Toggle overlay for form
  document.getElementById("buttonemp").addEventListener("click", () => {
    const overlay = document.getElementById("overlay").style;
    overlay.zIndex = 1;
    overlay.opacity = 1;
  });
  
  document.getElementById("btnclose").addEventListener("click", () => {
    const overlay = document.getElementById("overlay").style;
    overlay.zIndex = -1;
    overlay.opacity = 0;
    document.querySelector("form").reset(); // Reset form on close
  });
  
  // Handle form submission
  document.querySelector("form").addEventListener("submit", (e) => {
    e.preventDefault();
  
    const imageup = document.getElementById("imageup").value || "https://via.placeholder.com/150";
    const name = document.getElementById("name").value;
    const address = document.getElementById("address").value;
    const dob = document.getElementById("dob").value; // Assumes YYYY-MM-DD
    const mobile = document.getElementById("mobile").value;
  
    // Basic validation
    if (!name || !address || !dob || !mobile) {
      alert("Please fill in all required fields!");
      return;
    }
  
    // Add new data
    data.push({ imageup, name, address, dob, mobile });
    callme(); // Re-render the list
  
    // Close overlay and reset form
    const overlay = document.getElementById("overlay").style;
    overlay.zIndex = -1;
    overlay.opacity = 0;
    e.target.reset();
  });
  
  // Initial render
  callme();