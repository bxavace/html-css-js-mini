const testimonialsContainer = document.querySelector(".testimonials-container");
const testimonial = document.querySelector(".testimonial");
const userImage = document.querySelector(".user-image");
const username = document.querySelector(".username");
const role = document.querySelector(".role");

const testimonials = [
  {
    name: "Alice",
    position: "Manager",
    photo: "https://randomuser.me/api/portraits/women/62.jpg",
    text: "Alice is an excellent manager. She is organized, efficient, and always goes above and beyond to help her team succeed. I have learned a lot from working with her and highly recommend her to anyone looking for a capable leader.",
  },
  {
    name: "Bob",
    position: "Developer",
    photo: "https://randomuser.me/api/portraits/men/49.jpg",
    text: "Bob is a talented developer and a pleasure to work with. He is always willing to help out and has a great attention to detail. His code is clean, well-organized, and easy to maintain. I highly recommend him to any team looking for a top-notch developer.",
  },
  {
    name: "Charlie",
    position: "Designer",
    photo: "https://randomuser.me/api/portraits/men/23.jpg",
    text: "Charlie is an amazing designer. His sense of aesthetics is unparalleled, and he always manages to come up with creative solutions to even the most challenging design problems. He is a true asset to any design team, and I highly recommend him.",
  },
  {
    name: "Diana",
    position: "Marketing Manager",
    photo: "https://randomuser.me/api/portraits/women/25.jpg",
    text: "Diana is an excellent marketing manager. She is innovative, proactive, and always thinks outside the box. She has a great sense of what works and what doesn't, and she is always willing to take risks to achieve success. I highly recommend her to any company looking for a top-notch marketing manager.",
  },
  {
    name: "Eve",
    position: "Content Writer",
    photo: "https://randomuser.me/api/portraits/women/34.jpg",
    text: "Eve is a fantastic content writer. She has a way with words that is truly special, and she always manages to convey complex ideas in a clear and concise manner. She is a pleasure to work with and I highly recommend her to anyone in need of high-quality content.",
  },
  {
    name: "Frank",
    position: "Customer Support Representative",
    photo: "https://randomuser.me/api/portraits/men/50.jpg",
    text: "Frank is an excellent customer support representative. He is patient, friendly, and always goes above and beyond to help our customers. He has a great way of making people feel heard and valued, and I highly recommend him to anyone looking for top-notch customer support.",
  },
  {
    name: "Greta",
    position: "Data Scientist",
    photo: "https://randomuser.me/api/portraits/women/19.jpg",
    text: "Greta is a top-notch data scientist. She has a great understanding of data and is always able to come up with creative solutions to complex problems. She is a valuable member of our team and I highly recommend her to anyone looking for a skilled data scientist.",
  },
  {
    name: "Henry",
    position: "Project Manager",
    photo: "https://randomuser.me/api/portraits/men/20.jpg",
    text: "Henry is an excellent project manager. He is organized, efficient, and always manages to keep things running smoothly.",
  },
];

let idx = 0;

function updateTestimonial() {
  const { name, position, photo, text } = testimonials[idx];

  testimonial.innerHTML = text;
  userImage.src = photo;
  username.innerHTML = name;
  role.innerHTML = position;

  idx++;
  if (idx > testimonials.length - 1) {
    idx = 0;
  }
}

setInterval(updateTestimonial, 10000);
