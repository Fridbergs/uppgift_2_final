// 1 . Anslut till JSON filen  - fetch synch await

async function addProfileInfo() {
  const response = await fetch("index.json");

  if (response.ok) {
    const profileInfo = await response.json();
    //Get the reference to the element inside the HTML document
    const profileSlogan = document.getElementById("profileSlogan");

    // Add the content to the HHTML page
    //Home apge

    profileSlogan.textContent = profileInfo["Profile info"].profileText;
  } else {
    console.log(`HTTP error message: ${response.status}`);
  }
}

addProfileInfo();
