import sharp from "sharp";

export const imgResize = async (base64Image) => {
    const maxHeight = 220;
    const maxWidth = 295;
    const destructImage = base64Image.split(";");
    const mimType = destructImage[0].split(":")[1];
    const imageData = destructImage[1].split(",")[1];

  
    try {
      let resizedImage = Buffer.from(imageData, "base64")
      resizedImage = await sharp(resizedImage).resize(maxHeight, maxWidth, {fit:sharp.fit.outside}).toBuffer()
      
      return `data:${mimType};base64,${resizedImage.toString("base64")}`
    } catch (error) {
      throwError({ error })
    }
  };