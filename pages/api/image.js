import { Configuration, OpenAIApi } from 'openai';

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);

const generateImage = async (req, res) => {
let reqBody = req.body;
  const response = await openai.createImage({
    prompt: `a ${reqBody.charAge} yers old ${reqBody.type} character which is wearing ${reqBody.cloths}  wide shot`,
    n: 1,
    size: "512x512",
    // response_format:"b64_json",
  });
  const image_url = response.data.data[0].url;
  // const image_url = response.data.data[0].b64_json;

  res.status(200).json({ outputImage: image_url });
};

export default generateImage;