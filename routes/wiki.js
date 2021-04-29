const express = require("express");
const router = express.Router();
const { addPage, wikiPage, editPage } = require("../views");
const { Page } = require("../models");

// parses url-encoded bodies
router.use(express.urlencoded({ extended: false }));
// parses json bodies
router.use(express.json());

// GET /wiki/
router.get("/", (req, res) => {
  res.send("get all wiki pages");
});

// POST /wiki/
router.post("/", async (req, res, next) => {
  try {
    const formSub = await req.body;
    console.log(formSub);
    const attachSlug = async (formSub) => {
      if (!formSub.title) {
        const charset = "abcdefghijklmnopqrstuvwxyz0123456789"; //from where to create
        let result = "";
        for (var i = 0; i < 10; i++)
          result += charset[Math.floor(Math.random() * charset.length)];
        return result;
      } else {
        return formSub.title.replace(/ /, "_").replace(/\W/g, "");
      }
    };
    const page = await Page.create({
      title: formSub.title,
      content: formSub.content,
      slug: await attachSlug(formSub),
    });
    res.redirect("/");
  } catch (error) {
    // make sure we only redirect *after* our save is complete! Don't forget to `await` the previous step. `create` returns a Promise.

    next(error);
  }
});

// GET /wiki/
router.get("/add", (req, res) => {
  res.send(addPage());
});

module.exports = router;
