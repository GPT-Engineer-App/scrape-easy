const cheerio = require("cheerio");
const axios = require("axios");

export default async function handler(req, res) {
  const { url } = req.query;

  try {
    const response = await axios.get(url);
    const $ = cheerio.load(response.data);

    const title = $("title").text();
    const description = $('meta[name="description"]').attr("content");
    const image = $("img").first().attr("src");
    const links = [];
    $("a").each((index, element) => {
      links.push({
        text: $(element).text(),
        url: $(element).attr("href"),
      });
    });

    res.status(200).json({ title, description, image, links });
  } catch (error) {
    res.status(500).json({ error: "Failed to scrape the URL" });
  }
}
