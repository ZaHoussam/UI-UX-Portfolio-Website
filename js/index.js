let menu = document.querySelector(".header .menu");
let nav_links = document.querySelector(".header .links");
let change_mode_btn = document.querySelector(".header .dark-light-btn");
let root = document.querySelector(":root");

menu.addEventListener("click", function () {
  this.classList.toggle("open-wind");
  nav_links.classList.toggle("open");
});

// * Array.from(nav_links.children)
[...nav_links.children].forEach((link) => {
  link.addEventListener("click", function () {
    link.parentElement.classList.remove("open");
    menu.classList.remove("open-wind");
  });
});

change_mode_btn.addEventListener("click", function () {
  this.classList.toggle("dark");

  if (this.classList.contains("dark")) {
    localStorage.setItem("web-mode", "dark");
    root.style.setProperty("--bg-color", "#050519");
    root.style.setProperty("--bg-section-color", "#282c34");
    root.style.setProperty("--txt-primary-color", "#fff");
    root.style.setProperty("--txt-secondary-color", "rgba(255,255,255,0.74)");
    root.style.setProperty("--bg-title-section", "#282c34");
    root.style.setProperty("--box-shadow-color", "rgba(38, 38, 38, 0.13)");
    root.style.setProperty("--tool-line-color", "#6f7279");
  } else {
    localStorage.setItem("web-mode", "light");
    root.style.setProperty("--bg-color", "#fff");
    root.style.setProperty("--bg-section-color", "#f4f6fb");
    root.style.setProperty("--txt-primary-color", "#000");
    root.style.setProperty("--txt-secondary-color", "#2c2c2e");
    root.style.setProperty("--bg-title-section", "#f2f2f7");
    root.style.setProperty("--box-shadow-color", "rgba(38, 38, 38, 0.04)");
    root.style.setProperty("--tool-line-color", "#dedede");
  }
});

if (localStorage.getItem("web-mode") === "dark") {
  change_mode_btn.classList.add("dark");
  root.style.setProperty("--bg-color", "#050519");
  root.style.setProperty("--bg-section-color", "#282c34");
  root.style.setProperty("--txt-primary-color", "#fff");
  root.style.setProperty("--txt-secondary-color", "rgba(255,255,255,0.74)");
  root.style.setProperty("--bg-title-section", "#282c34");
  root.style.setProperty("--box-shadow-color", "rgba(38, 38, 38, 0.13)");
  root.style.setProperty("--tool-line-color", "#6f7279");
} else {
  change_mode_btn.classList.remove("dark");
  root.style.setProperty("--bg-color", "#fff");
  root.style.setProperty("--bg-section-color", "#f4f6fb");
  root.style.setProperty("--txt-primary-color", "#000");
  root.style.setProperty("--txt-secondary-color", "#2c2c2e");
  root.style.setProperty("--bg-title-section", "#f2f2f7");
  root.style.setProperty("--box-shadow-color", "rgba(38, 38, 38, 0.04)");
  root.style.setProperty("--tool-line-color", "#dedede");
}

let my_works = [
  {
    image: "images/tuku-ternak.png",
    blob: {
      icon: "images/icon-marketplace.svg",
      title: "marketplace",
    },
    box_title: {
      icon: "images/marketplace-logo.svg",
      title: "tuku ternak",
    },
    box_description:
      "Tuku Ternak is an application that is engaged in animal husbandry e-commerce (selling various livestock products) that applies business concepts and empowerment of breeders and MSMEs.",
    box_language_programing: [
      "images/icon-figma.svg",
      "images/icon-whimsical.svg",
      "images/icon-invision.svg",
      "images/icon-flutter.svg",
      "images/icon-gitlab.svg",
      "images/icon-git.svg",
    ],
  },
  {
    image: "images/event-id.png",
    blob: {
      icon: "images/icon-ticketing.svg",
      title: "ticketing",
    },
    box_title: {
      icon: "images/icon-ticketing.svg",
      title: "event id",
    },
    box_description:
      "Event Id is a Ticketing Management Service (TMS) superior technology in supporting all event organizers from distribution & ticket management, to providing event analysis reports at the end of the event.",
    box_language_programing: [
      "images/icon-figma.svg",
      "images/icon-whimsical.svg",
      "images/icon-invision.svg",
    ],
  },
  {
    image: "images/medica.png",
    blob: {
      icon: "images/icon-medica.svg",
      title: "health",
    },
    box_title: {
      icon: "images/medica-logo.svg",
      title: "medica",
    },
    box_description:
      "Medica is the Web Desgin for Commercial and Residential Room Disinfection, Decontamination Services Eliminating 99.999% of bacteria, viruses,  spores using international standard products.",
    box_language_programing: [
      "images/icon-figma.svg",
      "images/icon-whimsical.svg",
      "images/icon-invision.svg",
    ],
  },
];

let about_content = document.querySelector(".about-content");

my_works.forEach((box, index) => {
  const boxDom = document.createElement("div");
  boxDom.className = "box";
  // * Box Info Start
  const box_info = document.createElement("div");
  box_info.className = "box-info";
  // ^ Box Blob Start
  const box_blob = document.createElement("div");
  box_blob.className = "box-blob";
  const blob_image = document.createElement("div");
  blob_image.className = "blob-image";
  const blob_icon = document.createElement("img");
  blob_icon.src = box.blob.icon;
  blob_icon.alt = `blob-${index}`;
  blob_image.appendChild(blob_icon);
  const blob_title = document.createElement("span");
  blob_title.className = "blob-title";
  const blob_title_txt = document.createTextNode(box.blob.title);
  blob_title.appendChild(blob_title_txt);
  box_blob.appendChild(blob_image);
  box_blob.appendChild(blob_title);
  // ^ Box Blob End
  // ^ Box Title Header Start
  const box_title_header = document.createElement("div");
  box_title_header.className = "box-title-header";
  const box_title_image = document.createElement("div");
  box_title_image.className = "box-title-image";
  const box_title_logo = document.createElement("img");
  box_title_logo.src = box.box_title.icon;
  box_title_logo.alt = `box-logo-${index}`;
  box_title_image.appendChild(box_title_logo);
  const box_title = document.createElement("h3");
  box_title.className = "box-title";
  const box_title_txt = document.createTextNode(box.box_title.title);
  box_title.appendChild(box_title_txt);
  box_title_header.appendChild(box_title_image);
  box_title_header.appendChild(box_title);
  // ^ Box Title Header End
  // ^ Box Description Start
  const box_description = document.createElement("p");
  box_description.className = "box-description";
  const box_description_txt = document.createTextNode(box.box_description);
  box_description.appendChild(box_description_txt);
  // ^ Box Description End
  // ^ Box Language Programming Start
  const box_language_programing = document.createElement("ul");
  box_language_programing.className = "box-language";
  box.box_language_programing.forEach((li, index) => {
    const liDom = document.createElement("li");
    liDom.className = "language";
    const li_image = document.createElement("img");
    li_image.src = li;
    li_image.alt = `icon-${index}`;
    liDom.appendChild(li_image);
    box_language_programing.appendChild(liDom);
  });
  // ^ Box Language Programming End
  // ^ Box Button Start
  const box_btn = document.createElement("button");
  box_btn.className = "btn box-btn";
  const box_btn_txt = document.createTextNode("say hello");
  box_btn.appendChild(box_btn_txt);
  // ^ Box Button End
  box_info.appendChild(box_blob);
  box_info.appendChild(box_title_header);
  box_info.appendChild(box_description);
  box_info.appendChild(box_language_programing);
  box_info.appendChild(box_btn);
  // * Box Info End
  // * Box Image Start
  const box_image = document.createElement("div");
  box_image.className = "box-image";
  const box_image_img = document.createElement("img");
  box_image_img.src = box.image;
  box_image_img.alt = `box-image-${index}`;
  box_image.appendChild(box_image_img);
  // * Box Image End

  boxDom.appendChild(box_info);
  boxDom.appendChild(box_image);

  about_content.appendChild(boxDom);
});

let work_tools = [
  {
    iamges: ["images/logo_figma.png"],
    title: "figma",
    description:
      "My primary design tool right now. Saya memilih mengunakan figma karena dapat bekerja dengan Tim.",
  },
  {
    iamges: ["images/icon-whimsical.svg"],
    title: "whimsical",
    description:
      "My primary design tool right now. Saya memilih mengunakan figma karena dapat bekerja dengan Tim.",
  },
  {
    iamges: ["images/icon-invision.svg"],
    title: "invision",
    description:
      "My primary design tool right now. Saya memilih mengunakan figma karena dapat bekerja dengan Tim.",
  },
  {
    iamges: ["images/logo_flutter.png"],
    title: "flutter",
    description:
      "My primary design tool right now. Saya memilih mengunakan figma karena dapat bekerja dengan Tim.",
  },
  {
    iamges: ["images/icon-vscode.png"],
    title: "vs code",
    description:
      "My primary design tool right now. Saya memilih mengunakan figma karena dapat bekerja dengan Tim.",
  },
  {
    iamges: ["images/icon-gitlab.svg", "images/icon-github.svg"],
    title: "git",
    description:
      "My primary design tool right now. Saya memilih mengunakan figma karena dapat bekerja dengan Tim.",
  },
];

let work_boxes = document.querySelector(".work-content .work-boxes");

work_tools.forEach((tool) => {
  const toolDom = document.createElement("div");
  toolDom.className = "tool";
  const tool_images = document.createElement("div");
  tool_images.className = "tool-images";
  tool.iamges.forEach((img, index) => {
    const imgDom = document.createElement("div");
    imgDom.className = `tool-img tool-img-${index + 1}`;
    const imgDom_img = document.createElement("img");
    imgDom_img.src = img;
    imgDom_img.alt = `tool-img-${index + 1}`;
    imgDom.appendChild(imgDom_img);
    tool_images.appendChild(imgDom);
  });
  const tool_title = document.createElement("h4");
  tool_title.className = "tool-title";
  const tool_title_txt = document.createTextNode(tool.title);
  tool_title.appendChild(tool_title_txt);
  const tool_description = document.createElement("p");
  tool_description.className = "tool-description";
  const tool_description_txt = document.createTextNode(tool.description);
  tool_description.appendChild(tool_description_txt);

  toolDom.appendChild(tool_images);
  toolDom.appendChild(tool_title);
  toolDom.appendChild(tool_description);

  work_boxes.appendChild(toolDom);
});
