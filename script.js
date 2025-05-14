//hamburger menu toggle
function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

//Projects Accordion
document.addEventListener("DOMContentLoaded", () => {
  //Selects whole project section after title
  const projectContainer = document.querySelector(".project-content");

  //finds the nearest clicked project
  projectContainer.addEventListener("click", (e) => {
    const groupHeader = e.target.closest(".project-group-header");

    if (!groupHeader) {
      console.log("fail");
      console.log(groupHeader);
      console.log(projectContainer);
      return;
    }

    const group = groupHeader.parentElement;
    const groupBody = group.querySelector(".project-group-body");
    const icon = groupHeader.querySelector("i");

    //Toggle Icon
    icon.classList.toggle("fa-plus");
    icon.classList.toggle("fa-minus");

    //Toggle visibility of body
    groupBody.classList.toggle("open");

    //Close other open FAQ bodies
    const otherGroups = projectContainer.querySelectorAll(".project-group");
    console.log(otherGroups);

    otherGroups.forEach((otherGroup) => {
      if (otherGroup !== group) {
        const otherGroupBody = otherGroup.querySelector(".project-group-body");
        const otherIcon = otherGroup.querySelector(".project-group-header i");

        otherGroupBody.classList.remove("open");
        otherIcon.classList.remove("fa-minus");
        otherIcon.classList.add("fa-plus");
      }
    });
  });
});
