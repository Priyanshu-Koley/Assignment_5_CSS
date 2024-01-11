// function to toggle the nav and butons
toggleNav=()=>
{
  const navLinks = document.getElementById("nav-links");
  const openBtn = document.getElementById("show-menu");
  const closeBtn = document.getElementById("close-menu");
  if (navLinks.style.display === "flex") 
  {
    navLinks.style.display = "none";
    openBtn.style.display = "block";
    closeBtn.style.display = "none";
  }
  else 
  {
    navLinks.style.display = "flex";
    openBtn.style.display = "none";
    closeBtn.style.display = "block";
  }
} 
