function setImage(imageRef: string) {
  let sprite = new Image();
  sprite.src = imageRef;
  return sprite;
}

export default setImage;
