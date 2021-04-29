const html = require("html-template-tag");
const layout = require("./layout");

module.exports = () =>
  layout(html`
    <h3>Add a Page</h3>
    <hr />
    <form method="POST" action="/wiki/">
      <div class="form-group">
        <label for="title" class="col-sm-2 control-label">Page Title</label>
        <div class="col-sm-10">
          <input id="title" name="title" type="text" class="form-control" />
        </div>

        <label for="title" class="col-sm-2 control-label">Author</label>
        <div class="col-sm-10">
          <input id="title" name="author" type="text" class="form-control" />
        </div>

        <label for="title" class="col-sm-2 control-label">Email</label>
        <div class="col-sm-10">
          <input id="title" name="email" type="text" class="form-control" />
        </div>

        <label for="title" class="col-sm-2 control-label">Content</label>
        <div class="col-sm-10">
          <input id="title" name="content" type="text" class="form-control" />
        </div>

        <label for="title" class="col-sm-2 control-label">Status</label>

        <select id="status" name="status" class="form-control"> 
          <option value="OPEN">Open</option>
          <option value="CLOSED">Closed</option>
        </select>
      </div>

      <div class="col-sm-offset-2 col-sm-10">
        <button type="submit" class="btn btn-primary">submit</button>
      </div>
    </form>
  `);
