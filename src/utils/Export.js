import html2canvas from "html2canvas";

const Export = async (el, imageFileName) => {
  const canvas = await html2canvas(el, {
    logging: true,
    useCORS: true, //to enable cross origin perms
  });
  const image = canvas.toDataURL("image/png", 1.0);
  downloadImage(image, imageFileName);
};

const downloadImage = (imageUrl) => {
  const imageLink = window.document.createElement("a");
  imageLink.style = "display:none;";
  imageLink.download = "meme.png";

  imageLink.href = imageUrl;

  document.body.appendChild(imageLink);
  imageLink.click();
  document.body.removeChild(imageLink);

  imageLink.remove();
};

export default Export;
