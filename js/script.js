// check email
function handleSubmit() {
  const emailValue = document.getElementById("email").value.toLocaleLowerCase();
  const errorEmail = document.getElementById("error-email");
  const checkEmail =
    /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
  const check = emailValue.match(checkEmail);
  const infoHidden = document.querySelector(".info-hidden");
  console.log("check", infoHidden);
  const submitControl = document.querySelector(".submit-email");
  if (check) {
    infoHidden.style.display = "block";
    submitControl.style.display = "none";
    errorEmail.innerHTML = "";
  } else {
    errorEmail.innerHTML = "input again!";
  }
}
// HIDDEN INFO

function handleOnMouseOver(element) {
  const viewMore = element.querySelector(".control-view");
  viewMore.style.display = "inline-block";
}

function handleOnMouseOut(element) {
  const viewMore = element.querySelector(".control-view");
  if (!viewMore.classList.value.includes("less-more")) {
    viewMore.style.display = "none";
  }
}

function handleViewMore(element) {
  const faElement = element.closest(".section-container");
  const viewMore = faElement.querySelector(".control-view");
  const sectionContent = faElement.querySelectorAll(".section-content");
  if (viewMore.classList.value.includes("view-more")) {
    sectionContent.forEach((element) => {
      element.style.display = "block";
    });
    viewMore.classList.remove("view-more");
    viewMore.classList.add("view-less");
    viewMore.innerHTML = "View less";
  } else {
    sectionContent.forEach((element) => {
      element.style.display = "none";
    });
    viewMore.classList.remove("view-less");
    viewMore.classList.add("view-more");
    viewMore.innerHTML = "View more";
  }
}
