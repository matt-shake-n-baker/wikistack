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
    const formSub = req.body;
    const attachSlug = async (formSub) => {
        if (!formSub.title) {
            return 'hi'
        } else {
            return formSub.title.replace(/ /,'_')
            
        }
    }

    const page = await Page.create({
      title: formSub.title,
      content: formSub.content,
      slug: attachSlug(formSub)
    });
    res.redirect('/');
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
