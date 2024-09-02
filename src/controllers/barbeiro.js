Skip to content
Navigation Menu
ReinaldMendes
/
BarbeariaCrud

Type / to search
Code
Issues
Pull requests
Actions
Projects
Security
Insights
BreadcrumbsBarbeariaCrud/src/controllers
/barbeiro.js
Go to file
t
Latest commit
ReinaldMendes
ReinaldMendes
feat: modells
7db260f
 · 
4 days ago
History
File metadata and controls

Code

Blame
42 lines (37 loc) · 771 Bytes
const db = [];
const barbearia_controller = require("./barbearia.js");
const model = require("../models/barbeiro_models.js");

const store = (body) => {
  const novo = model(body);
  if (novo) {
    db.push(novo);
    return 201;
  }
  return 400;
};

const index = () => db;

const show = (id) => db.find((el) => el.id == id);

const update = (id, body) => {
  const index = db.findIndex((el) => el.id == id);
  const novo = model(body, parseInt(id));
  if (novo && index != -1) {
    db[index] = novo;
    return 200;
  }
  return 400;
};
const destroy = (id) => {
  const index = db.findIndex((el) => el.id == id);
  if (index != -1) {
    db.splice(index, 1);
    return 200;
  }
  return 400;
};

module.exports = {
  store,
  index,
  show,
  update,
  destroy,
};
BarbeariaCrud/src/controllers/barbeiro.js at crudBarbearia · ReinaldMendes/BarbeariaCrud
 