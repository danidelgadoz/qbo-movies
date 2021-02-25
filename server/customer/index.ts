import { Router } from 'express';
import { HttpErrorBody, HttpResponse, Authorization } from '../global';
import * as uuid from 'uuid';

const router = Router();
const httpResponse = new HttpResponse();
const auth = new Authorization();

let CUSTOMERS = require("./data");

router.get('/movie/', auth.validateSession, (req, res) => {
    res.json(CUSTOMERS);
});

router.get('/movie/:id', (req, res) => {
    const model = CUSTOMERS.find(m => m.id == req.params.id);

    if (model) {
        res.json(httpResponse.success(model));
    } else {
        res.status(404).json(httpResponse.error(null));
    }
});

router.post('/movie', (req, res) => {
    const INVALID_PHONE_NUMBER = 'INVALID_PHONE_NUMBER';
    const INVALID_EMAIL = 'INVALID_EMAIL';

    const newModel = {
        id: uuid(),
        ...req.body
    };

    CUSTOMERS = [...CUSTOMERS, newModel]
    let unhappyPath = new HttpErrorBody();

    switch (req.body.title) {
        case '1':
            unhappyPath.code = INVALID_PHONE_NUMBER;
            res.status(409).json(httpResponse.error(unhappyPath));
            break;
        case '2':
            unhappyPath.code = INVALID_EMAIL;
            res.status(409).json(httpResponse.error(unhappyPath));
            break;
        default:
            res.status(200).json(httpResponse.success(newModel));
    }
});

router.delete('/movie/:id', (req, res) => {
  const model = CUSTOMERS.find(m => m.id == req.params.id);

  if (model) {
    CUSTOMERS = CUSTOMERS.filter(m => m.id != req.params.id);
    res.json(httpResponse.success());
  } else {
    res.status(404).json(httpResponse.error());
  }
});

module.exports = router;

