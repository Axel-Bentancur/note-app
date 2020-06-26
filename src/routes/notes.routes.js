const { Router } = require("express");
const router = Router();
const { isAuthenticated } = require("../helpers/auth");

const {
  renderNoteForm,
  createNewNote,
  renderNotes,
  renderEditForm,
  updateNotes,
  deleteNote,
} = require("../controllers/notes.controller");

//new note
router.get("/notes/add", isAuthenticated, renderNoteForm);
router.post("/notes/new-note", isAuthenticated, createNewNote);

//get all notes
router.get("/notes", isAuthenticated, renderNotes);

//edit notes
router.get("/notes/edit/:id", isAuthenticated, renderEditForm);
router.put("/notes/edit/:id", isAuthenticated, updateNotes);

//delete notes
router.delete("/notes/delete/:id", isAuthenticated, deleteNote);

//exports
module.exports = router;
