const { Router } = require("express");
const router = Router();

const {
  renderNoteForm,
  createNewNote,
  renderNotes,
  renderEditForm,
  updateNotes,
  deleteNote,
} = require("../controllers/notes.controller");

//new note
router.get("/notes/add", renderNoteForm);
router.post("/notes/new-note", createNewNote);

//get all notes
router.get("/notes", renderNotes);

//edit notes
router.get("/notes/edit/:id", renderEditForm);
router.put("/notes/edit/:id", updateNotes);

//delete notes
router.delete("/notes/delete/:id", deleteNote);

//exports
module.exports = router;
