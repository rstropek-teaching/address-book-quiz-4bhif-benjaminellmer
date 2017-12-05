import {createServer, plugins} from 'restify';
import {deleteSingle} from './delete-single';
import {getAll} from './get-all';
import {getSingle} from './get-single';
import {post} from './post';

var server = createServer();

// Add bodyParser plugin for parsing JSON in request body
server.use(plugins.bodyParser());

// Add routes
server.get('/api/contacts', getAll);
server.post('/api/contacts', post);
server.get('/api/contacts/:id', getSingle);
server.del('/api/contacts/:id', deleteSingle);

server.listen(8010, () => console.log('API is listening'));