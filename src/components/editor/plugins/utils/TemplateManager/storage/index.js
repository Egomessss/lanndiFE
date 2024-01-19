import indexeddb from './indexeddb.js';
import remote from './remote.js';
import firestore from './firestore.js';

export default (editor, opts = {}) => {
    // Load indexeddb storage
    indexeddb(editor, opts);

    // Load remote storage
    remote(editor, opts);

    // Load firestore storage
    firestore(editor, opts);
}