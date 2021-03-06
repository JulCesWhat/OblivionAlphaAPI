require('source-map-support/register')
module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 34);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_pino__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_pino___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_pino__);

const l = __WEBPACK_IMPORTED_MODULE_0_pino___default()({
  name: process.env.APP_ID,
  level: process.env.LOG_LEVEL
});

/* harmony default export */ exports["a"] = l;

/***/ },
/* 1 */
/***/ function(module, exports) {

module.exports = require("express");

/***/ },
/* 2 */
/***/ function(module, exports) {

module.exports = require("bluebird");

/***/ },
/* 3 */
/***/ function(module, exports) {

module.exports = require("mongoose");

/***/ },
/* 4 */
/***/ function(module, exports) {

module.exports = require("path");

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__common_env__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__common_server__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__routes__ = __webpack_require__(22);




/* harmony default export */ exports["default"] = new __WEBPACK_IMPORTED_MODULE_1__common_server__["a" /* default */]().router(__WEBPACK_IMPORTED_MODULE_2__routes__["a" /* default */]).listen(process.env.PORT);

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_contact_service__ = __webpack_require__(8);



class Controller {

    sendEmail(req, res, next) {
        let contactMsg = req.body;

        if (!contactMsg.name || !contactMsg.message || !contactMsg.email) {
            const err = new Error('User can\'t be added because the body is empty.');
            err.status = 400;
            return next(err);
        }

        __WEBPACK_IMPORTED_MODULE_0__services_contact_service__["a" /* default */].sendEmail(contactMsg).then(email => res.json(email)).catch(next);
    }

}
/* unused harmony export Controller */

/* harmony default export */ exports["a"] = new Controller();

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_express__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_express___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_express__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__controllers_controller__ = __webpack_require__(6);




/* harmony default export */ exports["a"] = __WEBPACK_IMPORTED_MODULE_0_express__["Router"]().post('/', __WEBPACK_IMPORTED_MODULE_1__controllers_controller__["a" /* default */].sendEmail);

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_nodemailer__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_nodemailer___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_nodemailer__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__common_logger__ = __webpack_require__(0);




class ContactService {

    sendEmail(contactMsg) {
        // Use Smtp Protocol to send Email
        const smtpTransport = __WEBPACK_IMPORTED_MODULE_0_nodemailer__["createTransport"]({
            service: 'Gmail',
            port: 465,
            secure: true, // use TLS
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS
            }
        });

        const mail = {
            from: 'Oblivion Alpha FrontEnd <wispersofoblivion@gmail.com>',
            to: 'wispersofoblivion@gmail.com',
            subject: contactMsg.name + ' <' + contactMsg.email + '>',
            text: contactMsg.message
        };

        __WEBPACK_IMPORTED_MODULE_1__common_logger__["a" /* default */].info(`${this.constructor.name}.sendEmail(${contactMsg})`);
        return new Promise((resolve, reject) => {
            smtpTransport.sendMail(mail, function (error, response) {

                smtpTransport.close();
                if (error) {
                    //console.log(error)
                    reject(error);
                } else {
                    //console.log("Message sent: " + response.message);
                    resolve(response);
                }
            });
        });
    }

    /*                              THIS HAS PROBLEMS
        verifyEmail(contactMsg) {
            return new Promise((resolve, reject) => {
                let emailGroup = contactMsg.emailGroup;
    
                //Here we will store in the dB and send it to me :)
                emailCheck(emailGroup.email)
                    .then((res) => {
                        if (res) {
                            resolve(contactMsg);
                        } else {
                        
                            //The email does not exist or could not be verified
                            const err = new Error('The entered email could not be verified.');
                            err.status = 500;
                            reject(err);
                        }
                    })
                    .catch((err) =>  {
                        if (err.message === 'refuse') {
                            // The MX server is refusing requests from your IP address.
                            //console.log((err.message))
                            reject(err);
                        } else {
                            //console.log(err.message);
                            // Decide what to do with other errors.
                            reject(err);
                        }
                    });
            });
        }
    */
}
/* unused harmony export ContactService */


/* harmony default export */ exports["a"] = new ContactService();

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_examples_service__ = __webpack_require__(11);



class Controller {
  all(req, res) {
    __WEBPACK_IMPORTED_MODULE_0__services_examples_service__["a" /* default */].all().then(r => res.json(r));
  }

  byId(req, res) {
    __WEBPACK_IMPORTED_MODULE_0__services_examples_service__["a" /* default */].byId(req.params.id).then(r => {
      if (r) res.json(r);else res.status(404).end();
    });
  }

  create(req, res) {
    __WEBPACK_IMPORTED_MODULE_0__services_examples_service__["a" /* default */].create(req.body.name).then(r => res.status(201).location(`/api/v1/examples/${r.id}`).json(r));
  }
}
/* unused harmony export Controller */

/* harmony default export */ exports["a"] = new Controller();

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_express__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_express___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_express__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__controllers_controller__ = __webpack_require__(9);




/* harmony default export */ exports["a"] = __WEBPACK_IMPORTED_MODULE_0_express__["Router"]().post('/', __WEBPACK_IMPORTED_MODULE_1__controllers_controller__["a" /* default */].create).get('/', __WEBPACK_IMPORTED_MODULE_1__controllers_controller__["a" /* default */].all).get('/:id', __WEBPACK_IMPORTED_MODULE_1__controllers_controller__["a" /* default */].byId);

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__common_logger__ = __webpack_require__(0);



let id = 0;
const examples = [{ id: id++, name: 'example 0' }, { id: id++, name: 'example 1' }];

class ExamplesService {
  all() {
    __WEBPACK_IMPORTED_MODULE_0__common_logger__["a" /* default */].info(`${this.constructor.name}.all()`);
    return Promise.resolve(examples);
  }

  byId(id) {
    __WEBPACK_IMPORTED_MODULE_0__common_logger__["a" /* default */].info(`${this.constructor.name}.byId(${id})`);
    return this.all().then(r => r[id]);
  }

  create(name) {
    const example = {
      id: id++,
      name
    };

    examples.push(example);
    __WEBPACK_IMPORTED_MODULE_0__common_logger__["a" /* default */].info(example, `${this.constructor.name}.create(${name})`);

    return Promise.resolve(example);
  }
}
/* unused harmony export ExamplesService */


/* harmony default export */ exports["a"] = new ExamplesService();

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_newsGalore_service__ = __webpack_require__(14);



class Controller {

    findArticle(req, res, next) {
        const categoryID = req.params.categoryID;
        const articleID = req.params.articleID;

        __WEBPACK_IMPORTED_MODULE_0__services_newsGalore_service__["a" /* default */].findArticle(categoryID, articleID).then(article => res.json(article)).catch(next);
    }

    findCategory(req, res, next) {
        const categoryID = req.params.categoryID;

        __WEBPACK_IMPORTED_MODULE_0__services_newsGalore_service__["a" /* default */].findCategory(categoryID).then(category => res.json(category)).catch(next);
    }

    findCategories(req, res, next) {
        __WEBPACK_IMPORTED_MODULE_0__services_newsGalore_service__["a" /* default */].findCategories().then(data => res.json({
            Categories: data.category,
            CategoryObjects: data.structuredNewsCategory
        })).catch(next);
    }

    saveArticle(req, res, next) {}

    saveCategory(req, res, next) {}

}
/* unused harmony export Controller */


/* harmony default export */ exports["a"] = new Controller();

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_express__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_express___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_express__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__controllers_controller__ = __webpack_require__(12);




/* harmony default export */ exports["a"] = __WEBPACK_IMPORTED_MODULE_0_express__["Router"]().get('/:categoryID/:articleID', __WEBPACK_IMPORTED_MODULE_1__controllers_controller__["a" /* default */].findArticle).get('/:categoryID', __WEBPACK_IMPORTED_MODULE_1__controllers_controller__["a" /* default */].findCategory).get('/', __WEBPACK_IMPORTED_MODULE_1__controllers_controller__["a" /* default */].findCategories);

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__common_logger__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__common_lib_models_INewsCategory__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__common_lib_models_INewsCategory___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__common_lib_models_INewsCategory__);




class NewsGaloreService {

    findArticle(categoryID, articleID) {
        __WEBPACK_IMPORTED_MODULE_0__common_logger__["a" /* default */].info(`${this.constructor.name}.findArticle(${categoryID}, ${articleID})`);
        return new Promise((resolve, reject) => {
            __WEBPACK_IMPORTED_MODULE_1__common_lib_models_INewsCategory___default.a.findById(categoryID, (err, category) => {
                if (err) {
                    reject(err);
                } else {
                    var article = category.NewsItems.id(articleID);

                    if (!article) {
                        return reject(new Error('Value could not be found. Most likely the articleID is invalid. :)'));
                    }

                    resolve(article);
                }
            });
        });
    }

    findCategory(categoryID) {
        __WEBPACK_IMPORTED_MODULE_0__common_logger__["a" /* default */].info(`${this.constructor.name}.findCategory(${categoryID})`);
        return new Promise((resolve, reject) => {

            if (categoryID === 'CategoryTitles') {

                __WEBPACK_IMPORTED_MODULE_1__common_lib_models_INewsCategory___default.a.find({}, (err, NewsCategory) => {
                    if (err) {
                        reject(err);
                    } else {

                        //Getting the categories of each major category in the db
                        let Categories = [];
                        for (let category of NewsCategory) {
                            let categoryItem = {
                                Name: category.Category,
                                _id: category._id
                            };

                            Categories.push(categoryItem);
                        }

                        resolve({
                            categoryTitles: Categories
                        });
                    }
                });
            } else if (categoryID === 'PopularData') {

                __WEBPACK_IMPORTED_MODULE_1__common_lib_models_INewsCategory___default.a.findOne({ 'Category': 'Politics' }, function (err, category) {
                    if (err) {
                        reject(err);
                    } else {
                        resolve(category);
                    }
                });
            } else {

                __WEBPACK_IMPORTED_MODULE_1__common_lib_models_INewsCategory___default.a.findById(categoryID, (err, category) => {
                    if (err) {
                        reject(err);
                    } else {
                        resolve(category);
                    }
                });
            }
        });
    }

    findCategories() {
        __WEBPACK_IMPORTED_MODULE_0__common_logger__["a" /* default */].info(`${this.constructor.name}.findCategories()`);
        return new Promise((resolve, reject) => {
            __WEBPACK_IMPORTED_MODULE_1__common_lib_models_INewsCategory___default.a.find({}, (err, NewsCategory) => {
                if (err) {
                    reject(err);
                } else {

                    //Getting the categories of each major category in the db
                    var Categories = [];
                    for (var category of NewsCategory) {
                        Categories.push(category.Category);
                        //console.log(JSON.stringify(category))
                    }
                    //console.log(JSON.stringify(NewsCategory.length))

                    //I think that we need to create a method that will do this in a
                    //randomly fashion so that it can look cool.
                    var structuredCategory = [];
                    var innerDoublePart = [];
                    console.log(NewsCategory.length + '  length');
                    for (let i = 0; i < NewsCategory.length; i++) {
                        if (i === 1) {
                            innerDoublePart.push(NewsCategory[i]);
                        } else if (i === 2) {
                            innerDoublePart.push(NewsCategory[i]);
                        } else if (i === 3) {
                            structuredCategory.push(innerDoublePart);
                            structuredCategory.push(NewsCategory[i]);
                        } else {
                            structuredCategory.push(NewsCategory[i]);
                        }
                    }

                    resolve({
                        newsCategory: NewsCategory,
                        structuredNewsCategory: structuredCategory,
                        category: Categories
                    });
                }
            });
        });
    }

    saveArticle(categoryID, iNewsArticle) {
        new Promise((resolve, reject) => {
            __WEBPACK_IMPORTED_MODULE_1__common_lib_models_INewsCategory___default.a.findById(categoryID, (err, category) => {
                if (err) {
                    reject(err);
                } else {

                    console.log(iNewsArticle.category); // Did this so that the error can go away
                    var entry = new INewsArticle({});

                    category.INewsArticles.add(entry);

                    category.save(function (err, product, article) {
                        if (err) {
                            reject(err);
                        } else {
                            resolve(article);
                        }
                    });
                }
            });
        });
    }

    saveCategory(iNewsCategory) {
        new Promise((resolve, reject) => {
            var entry = new __WEBPACK_IMPORTED_MODULE_1__common_lib_models_INewsCategory___default.a({
                Type: iNewsCategory.Type,
                INewsArticles: iNewsCategory.INewsArticles
            });

            entry.save(function (err, product) {
                if (err) {
                    reject(err);
                } else {
                    resolve(product);
                }
            });
        });
    }
}
/* unused harmony export NewsGaloreService */


/* harmony default export */ exports["a"] = new NewsGaloreService();

/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_dotenv__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_dotenv___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_dotenv__);

__WEBPACK_IMPORTED_MODULE_0_dotenv___default.a.config();

/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
// Module dependencies

const mongoose = __webpack_require__(3);
mongoose.Promise = __webpack_require__(2);

let connection = null;

class Database {

    open(connectionString, callback) {
        mongoose.connect(connectionString);
        connection = mongoose.connection;

        mongoose.connection.on('error', err => {
            console.log('Error connecting to MongoDB: ' + err);
            callback(err, false);
        });

        mongoose.connection.once('open', () => {
            console.log('We have connected to mongodb');
            callback(null, true);
        });
    }

    // disconnect from database
    close() {
        connection.close(() => {
            console.log('Mongoose default connection disconnected through app termination');
            process.exit(0);
        });
    }

}
/* unused harmony export Database */


/* harmony default export */ exports["a"] = new Database();

/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_feedparser__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_feedparser___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_feedparser__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_bluebird__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_bluebird___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_bluebird__);



//import requet from 'request';

var request = __webpack_require__(32);
//var FeedParser = require('feedparser');
//  , FeedParser = require(__dirname+'/..')
//  , Iconv = require('iconv').Iconv
//  , zlib = require('zlib');


class Feedparser {

    constructor() {}

    fetch(url) {
        return new __WEBPACK_IMPORTED_MODULE_1_bluebird___default.a((resolve, reject) => {
            if (!url) {
                return reject(new Error(`Bad URL (url: ${url}`));
            }

            const feedparser = new __WEBPACK_IMPORTED_MODULE_0_feedparser___default.a(),
                  items = [];

            feedparser.on('error', e => {
                return reject(e);
            }).on('readable', () => {
                // This is where the action is!
                var item;

                while (item = feedparser.read()) {
                    items.push(item);
                }
            }).on('end', () => {
                resolve({
                    meta: feedparser.meta,
                    records: items,
                    url: url
                });
            });

            request({
                method: 'GET',
                url: url
            }, (e, res, body) => {
                if (e) {
                    return reject(e);
                }

                if (res.statusCode != 200) {
                    return reject(new Error(`Bad status code (status: ${res.statusCode}, url: ${url})`));
                }

                feedparser.end(body);
            });
        });
    }
}
/* unused harmony export Feedparser */


/* harmony default export */ exports["a"] = new Feedparser();

// var request = require('request')
//   , FeedParser = require(__dirname+'/..')
//   , Iconv = require('iconv').Iconv
//   , zlib = require('zlib');

// function fetch(feed) {
//   // Define our streams
//   var req = request(feed, {timeout: 10000, pool: false});
//   req.setMaxListeners(50);
//   // Some feeds do not respond without user-agent and accept headers.
//   req.setHeader('user-agent', 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_8_5) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/31.0.1650.63 Safari/537.36');
//   req.setHeader('accept', 'text/html,application/xhtml+xml');

//   var feedparser = new FeedParser();


//   // Define our handlers
//   req.on('error', done);
//   req.on('response', function(res) {
//     if (res.statusCode != 200) return this.emit('error', new Error('Bad status code'));
//     var encoding = res.headers['content-encoding'] || 'identity'
//       , charset = getParams(res.headers['content-type'] || '').charset;
//     res = maybeDecompress(res, encoding);
//     res = maybeTranslate(res, charset);
//     res.pipe(feedparser);
//   });

//   feedparser.on('error', done);
//   feedparser.on('end', done);
//   feedparser.on('readable', function() {
//     var post;
//     while (post = this.read()) {
//       console.log(post);
//     }
//   });
// }

// function maybeDecompress (res, encoding) {
//   var decompress;
//   if (encoding.match(/\bdeflate\b/)) {
//     decompress = zlib.createInflate();
//   } else if (encoding.match(/\bgzip\b/)) {
//     decompress = zlib.createGunzip();
//   }
//   return decompress ? res.pipe(decompress) : res;
// }

// function maybeTranslate (res, charset) {
//   var iconv;
//   // Use iconv if its not utf8 already.
//   if (!iconv && charset && !/utf-*8/i.test(charset)) {
//     try {
//       iconv = new Iconv(charset, 'utf-8');
//       console.log('Converting from charset %s to utf-8', charset);
//       iconv.on('error', done);
//       // If we're using iconv, stream will be the output of iconv
//       // otherwise it will remain the output of request
//       res = res.pipe(iconv);
//     } catch(err) {
//       res.emit('error', err);
//     }
//   }
//   return res;
// }

// function getParams(str) {
//   var params = str.split(';').reduce(function (params, param) {
//     var parts = param.split('=').map(function (part) { return part.trim(); });
//     if (parts.length === 2) {
//       params[parts[0]] = parts[1];
//     }
//     return params;
//   }, {});
//   return params;
// }

// function done(err) {
//   if (err) {
//     console.log(err, err.stack);
//     return process.exit(1);
//   }
//   server.close();
//   process.exit();
// }

// // Don't worry about this. It's just a localhost file server so you can be
// // certain the "remote" feed is available when you run this example.
// var server = require('http').createServer(function (req, res) {
//   var stream = require('fs').createReadStream(require('path').resolve(__dirname, '../test/feeds' + req.url));
//   res.setHeader('Content-Type', 'text/xml; charset=Windows-1251');
//   res.setHeader('Content-Encoding', 'gzip');
//   stream.pipe(res);
// });
// server.listen(0, function () {
//   fetch('http://localhost:' + this.address().port + '/compressed.xml');
// });

/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

const mongoose = __webpack_require__(3),
      Schema = mongoose.Schema;

const INewsArticleSchema = new Schema();
INewsArticleSchema.add({
  //id                   : { type : Number, required: true },
  Category: { type: String, required: true, trim: true },
  Title: { type: String, required: true, trim: true },
  Image: { type: String, required: true, trim: true },
  Content: { type: String, required: true, trim: true },
  Time: { type: String, required: true, trim: true },
  Link: { type: String, required: true, trim: true },
  Company: { type: String, required: true, trim: true },
  RelatedArticles: [INewsArticleSchema]
});

module.exports = mongoose.model('INewsArticle', INewsArticleSchema);

/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

const mongoose = __webpack_require__(3),
      Schema = mongoose.Schema,
      INewsArticle = __webpack_require__(18);

const INewsCategorySchema = new Schema({
  Category: { type: String, required: true, trim: true },
  NewsItems: [INewsArticle.schema],
  ArticlesCount: Number
});

module.exports = mongoose.model('INewsCategory', INewsCategorySchema, 'INewsCategories');

/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__dirname) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_express__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_express___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_express__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_path__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_path___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_path__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_body_parser__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_body_parser___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_body_parser__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_http__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_http___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_http__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_os__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_os___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_os__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_cookie_parser__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_cookie_parser___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_cookie_parser__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__swagger__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__logger__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__lib_database_mongoDB__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__lib_feedparser_feedParser__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_bluebird__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_bluebird___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_bluebird__);












const app = new __WEBPACK_IMPORTED_MODULE_0_express___default.a();

class ExpressServer {
  constructor() {
    const root = __WEBPACK_IMPORTED_MODULE_1_path__["normalize"](__dirname + '/../..');
    app.disable('x-powered-by');
    app.set('appPath', root + 'client');
    app.use(__WEBPACK_IMPORTED_MODULE_2_body_parser__["json"]());
    app.use(__WEBPACK_IMPORTED_MODULE_2_body_parser__["urlencoded"]({ extended: true }));
    app.use(__WEBPACK_IMPORTED_MODULE_5_cookie_parser___default()(process.env.SESSION_SECRET));
    app.use(__WEBPACK_IMPORTED_MODULE_0_express___default.a.static(`${root}/public`));

    this.initCustomMiddleware();
    this.initDataBase();
    this.initFeedParser();
  }

  initCustomMiddleware() {
    if (process.platform === 'win32') {
      __webpack_require__(31).createInterface({
        input: process.stdin,
        output: process.stdout
      }).on('SIGINT', () => {
        console.log('SIGINT: Closing MongoDB connection');
        __WEBPACK_IMPORTED_MODULE_8__lib_database_mongoDB__["a" /* default */].close();
      });
    }

    process.on('SIGINT', () => {
      console.log('SIGINT: Closing MongoDB connection');
      __WEBPACK_IMPORTED_MODULE_8__lib_database_mongoDB__["a" /* default */].close();
    });
  }

  initDataBase() {
    if (false) {
      let connectionString = "mongodb://localhost/NewsGaloreManager";
      Database.open(connectionString, err => {
        if (err) {
          process.exit(1);
        }
      });
    } else {
      //Here we will connect to DinomoDB or S3 from Amazon Web Services
      let connectionString = "mongodb://Cesar:CesarWhatley@cluster0-shard-00-00-mk80y.mongodb.net:27017,cluster0-shard-00-01-mk80y.mongodb.net:27017,cluster0-shard-00-02-mk80y.mongodb.net:27017/NewsGaloreManager?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin";
      __WEBPACK_IMPORTED_MODULE_8__lib_database_mongoDB__["a" /* default */].open(connectionString, err => {
        if (err) {
          process.exit(1);
        }
      });
    }
  }

  initFeedParser() {
    var capi = ["http://feeds.feedburner.com/WiiUDaily", "http://feeds.feedburner.com/Co-optimus", "http://feeds.feedburner.com/makeuseof", "http://feeds.feedblitz.com/Gizmag", "http://feeds.feedburner.com/ubergizmo", //News
    "http://feeds.mashable.com/Mashable", //News
    "http://feeds.feedburner.com/WallStCheatSheetCore", "http://feeds.feedburner.com/coolsmartphone/uJxV", //Tech
    "http://feeds.feedburner.com/coolsmartphone/uJxV", //Tech
    "http://feeds.feedburner.com/TheBoyGeniusReport" //Tech
    ];

    __WEBPACK_IMPORTED_MODULE_10_bluebird___default.a.map(capi, url => __WEBPACK_IMPORTED_MODULE_9__lib_feedparser_feedParser__["a" /* default */].fetch(url), { concurrency: 10 }) // note that concurrency limit
    .then(feeds => {
      // do something with your feeds...
      for (let i = 0; i < feeds.length; i++) {
        console.log('***********************');
        console.log(feeds[i].url);
        //console.log(feeds[i].records[0]);
      }
    });
  }

  router(routes) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6__swagger__["a" /* default */])(app, routes);
    return this;
  }

  listen(port = process.env.PORT) {
    const welcome = port => () => __WEBPACK_IMPORTED_MODULE_7__logger__["a" /* default */].info(`up and running in ${"production" || 'development'} @: ${__WEBPACK_IMPORTED_MODULE_4_os__["hostname"]()} on port: ${port}}`);
    __WEBPACK_IMPORTED_MODULE_3_http__["createServer"](app).listen(port, welcome(port));
    return app;
  }
}
/* harmony export (immutable) */ exports["a"] = ExpressServer;

/* WEBPACK VAR INJECTION */}.call(exports, "server\\common"))

/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__dirname) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_swagger_express_middleware__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_swagger_express_middleware___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_swagger_express_middleware__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_path__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_path___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_path__);


/* harmony default export */ exports["a"] = function (app, routes) {
  __WEBPACK_IMPORTED_MODULE_0_swagger_express_middleware___default()(__WEBPACK_IMPORTED_MODULE_1_path__["join"](__dirname, 'Api.yaml'), app, function (err, middleware) {

    // Enable Express' case-sensitive and strict options
    // (so "/entities", "/Entities", and "/Entities/" are all different)
    app.enable('case sensitive routing');
    app.enable('strict routing');

    app.use(middleware.metadata());
    app.use(middleware.files({
      // Override the Express App's case-sensitive and strict-routing settings for the Files middleware.
      caseSensitive: false,
      strict: false
    }, {
      useBasePath: true,
      apiPath: process.env.SWAGGER_API_SPEC
      // Disable serving the "Api.yaml" file
      // rawFilesPath: false
    }));

    app.use(middleware.parseRequest({
      // Configure the cookie parser to use secure cookies
      cookie: {
        secret: process.env.SESSION_SECRET
      },
      // Don't allow JSON content over 100kb (default is 1mb)
      json: {
        limit: process.env.REQUEST_LIMIT
      }
    }));

    // These two middleware don't have any options (yet)
    app.use(middleware.CORS(), middleware.validateRequest());

    // Error handler to display the validation error as HTML
    app.use(function (err, req, res, next) {
      res.status(err.status);
      res.send('<h1>' + err.status + ' Error</h1>' + '<pre>' + err.message + '</pre>');
    });

    routes(app);
  });
};
/* WEBPACK VAR INJECTION */}.call(exports, "server\\common\\swagger"))

/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__api_contact_router__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__api_examples_router__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__api_newsGalore_router__ = __webpack_require__(13);
/* harmony export (immutable) */ exports["a"] = routes;


;

function routes(app) {
  app.use('/api/v1/contact', __WEBPACK_IMPORTED_MODULE_0__api_contact_router__["a" /* default */]);
  app.use('/api/v1/examples', __WEBPACK_IMPORTED_MODULE_1__api_examples_router__["a" /* default */]);
  app.use('/api/v1/newsGalore', __WEBPACK_IMPORTED_MODULE_2__api_newsGalore_router__["a" /* default */]);

  // Will need to check this.
  app.use((req, res, next) => {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
  });

  app.use((err, req, res) => {
    res.status(err.status || 500);

    res.json({
      dataContent: null,
      errorContent: {
        anyErrors: true,
        errors: [{
          errorMessage: err.message,
          errorStatus: err.status
        }]
      }
    });
  });
};

/***/ },
/* 23 */
/***/ function(module, exports) {

module.exports = require("body-parser");

/***/ },
/* 24 */
/***/ function(module, exports) {

module.exports = require("cookie-parser");

/***/ },
/* 25 */
/***/ function(module, exports) {

module.exports = require("dotenv");

/***/ },
/* 26 */
/***/ function(module, exports) {

module.exports = require("feedparser");

/***/ },
/* 27 */
/***/ function(module, exports) {

module.exports = require("http");

/***/ },
/* 28 */
/***/ function(module, exports) {

module.exports = require("nodemailer");

/***/ },
/* 29 */
/***/ function(module, exports) {

module.exports = require("os");

/***/ },
/* 30 */
/***/ function(module, exports) {

module.exports = require("pino");

/***/ },
/* 31 */
/***/ function(module, exports) {

module.exports = require("readline");

/***/ },
/* 32 */
/***/ function(module, exports) {

module.exports = require("request");

/***/ },
/* 33 */
/***/ function(module, exports) {

module.exports = require("swagger-express-middleware");

/***/ },
/* 34 */
/***/ function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(5);


/***/ }
/******/ ]);
//# sourceMappingURL=main.map